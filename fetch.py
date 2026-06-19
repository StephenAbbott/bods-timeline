#!/usr/bin/env python3
"""Fetch a curated raw bundle from the live Companies House API.

Produces ``data/raw/<number>.json`` in the CHBundle shape that ``build.py``
(and OpenCheck's ``map_companies_house()``) consume: profile, PSCs
(active **and** ceased), PSC statements, and PSC-category filing-history events.

Usage:
    COMPANIES_HOUSE_API_KEY=xxxx python3 fetch.py 02536231 [02529667 ...]

The key is also read from ``../backend/.env`` (OpenCheck's env file) if the
environment variable is not set. Companies House issues free API keys at
https://developer.company-information.service.gov.uk/ .

Note: this needs outbound network access to api.company-information.service.gov.uk.
``build.py`` itself needs no network — it runs off the curated raw bundles.
"""
from __future__ import annotations

import base64
import json
import os
import sys
import urllib.request
from pathlib import Path
from typing import Any

HERE = Path(__file__).resolve().parent
RAW_DIR = HERE / "data" / "raw"
API = "https://api.company-information.service.gov.uk"
WEB = "https://find-and-update.company-information.service.gov.uk"


def _api_key() -> str:
    key = os.environ.get("COMPANIES_HOUSE_API_KEY")
    if key:
        return key
    env = HERE.parent / "backend" / ".env"
    if env.exists():
        for line in env.read_text().splitlines():
            if line.startswith("COMPANIES_HOUSE_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"')
    sys.exit("No COMPANIES_HOUSE_API_KEY in env or ../backend/.env")


def _get(path: str, key: str) -> dict[str, Any]:
    req = urllib.request.Request(API + path)
    token = base64.b64encode(f"{key}:".encode()).decode()
    req.add_header("Authorization", f"Basic {token}")
    with urllib.request.urlopen(req, timeout=30) as r:  # noqa: S310 (trusted host)
        return json.loads(r.read().decode())


def _paged(path: str, key: str) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    start = 0
    while True:
        sep = "&" if "?" in path else "?"
        page = _get(f"{path}{sep}items_per_page=100&start_index={start}", key)
        chunk = page.get("items") or []
        items.extend(chunk)
        total = page.get("total_results") or page.get("active_count") or len(items)
        start += len(chunk)
        if not chunk or start >= total:
            break
    return items


def fetch_company(number: str, key: str) -> dict[str, Any]:
    profile = _get(f"/company/{number}", key)
    pscs = _paged(f"/company/{number}/persons-with-significant-control", key)
    statements = _paged(
        f"/company/{number}/persons-with-significant-control-statements", key
    )
    filings_raw = _paged(
        f"/company/{number}/filing-history?category=persons-with-significant-control",
        key,
    )
    filings = []
    for f in filings_raw:
        ftype = f.get("type", "")
        if not ftype.upper().startswith("PSC"):
            continue
        txn = f.get("transaction_id", "")
        filings.append({
            "date": f.get("date") or f.get("action_date"),
            "type": ftype,
            "description": (f.get("description_values") or {}).get("description")
            or f.get("description", ""),
            "document_url": f"{WEB}/company/{number}/filing-history/{txn}/document?format=pdf&download=0",
        })

    return {
        "company_number": number,
        "profile": {
            "company_number": number,
            "company_name": profile.get("company_name"),
            "type": profile.get("type"),
            "date_of_creation": profile.get("date_of_creation"),
            "company_status": profile.get("company_status"),
        },
        "pscs": {"items": pscs},
        "psc_statements": {"items": statements},
        "officers": {},
        "related_companies": {},
        "filings": filings,
        "_provenance": f"Fetched from the Companies House API ({API}) for company {number}.",
    }


def main() -> None:
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    key = _api_key()
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    for number in sys.argv[1:]:
        bundle = fetch_company(number, key)
        (RAW_DIR / f"{number}.json").write_text(json.dumps(bundle, indent=2))
        n_psc = len(bundle["pscs"]["items"])
        n_stmt = len(bundle["psc_statements"]["items"])
        n_fil = len(bundle["filings"])
        print(f"  {number}: {n_psc} PSC(s), {n_stmt} statement(s), {n_fil} PSC filing(s)")
    print("Done. Now run: python3 build.py")


if __name__ == "__main__":
    main()
