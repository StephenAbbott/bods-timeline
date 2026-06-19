#!/usr/bin/env python3
"""Build the BODS ownership-timeline site data from curated Companies House bundles.

For each company in ``gallery.json`` this:

1. reads the curated CH bundle from ``data/raw/<number>.json`` (CHBundle shape),
2. **walks up the ownership chain** — for every corporate PSC that is a UK
   company we hold a bundle for, it recurses into that company's own PSC history,
   until each branch terminates at a natural person, a foreign entity, a "no PSC"
   statement, or an unresolved UK company,
3. **borrows OpenCheck's** ``map_companies_house()`` (feeding the whole chain via
   ``related_companies``) to produce BODS v0.4 statements for every entity in the
   chain, with ceased PSCs closed and ``replacesStatements`` auto-chained,
4. enriches each relationship interest with a ``startDate`` from ``notified_on``,
5. emits a multi-level **timeline model** (one panel per entity, each with its
   owners over time) that the front-end renders, plus the resolved "ultimate
   owners today",
6. writes ``site/data/<number>.json``, ``site/data/gallery.json`` and an inlined
   ``site/data.js``.

Run:  ``python3 build.py``   (no network needed; borrows OpenCheck's mapper)
"""
from __future__ import annotations

import json
import os
import sys
from collections import deque
from datetime import date
from pathlib import Path
from typing import Any

HERE = Path(__file__).resolve().parent

# Borrow OpenCheck's CH->BODS mapper. This works whether bods-timeline is a
# standalone repo sitting next to a checkout of opencheck (../opencheck/backend)
# or nested inside the opencheck repo (../backend). Override with the
# OPENCHECK_BACKEND env var if your checkout lives elsewhere.
_BACKEND_CANDIDATES = [
    os.environ.get("OPENCHECK_BACKEND"),
    HERE.parent / "opencheck" / "backend",   # standalone: sibling opencheck repo
    HERE.parent / "backend",                  # nested inside the opencheck repo
]
BACKEND = next(
    (Path(p) for p in _BACKEND_CANDIDATES if p and (Path(p) / "opencheck").is_dir()),
    None,
)
if BACKEND is None:
    raise SystemExit(
        "Could not find OpenCheck's backend (for map_companies_house). Clone "
        "https://github.com/StephenAbbott/opencheck as a sibling of this repo, "
        "or set OPENCHECK_BACKEND to its backend/ directory."
    )
sys.path.insert(0, str(BACKEND))

from opencheck.bods import map_companies_house  # noqa: E402

RAW_DIR = HERE / "data" / "raw"
OUT_DIR = HERE / "site" / "data"
CH = "https://find-and-update.company-information.service.gov.uk/company"
MAX_DEPTH = 8

UK_COUNTRIES = {
    "", "united kingdom", "uk", "gb", "england", "wales", "scotland",
    "northern ireland", "england and wales", "england & wales",
    "great britain",
}

# Load every curated bundle once, keyed by (zero-padded) company number.
ALL: dict[str, dict[str, Any]] = {}


def load_all() -> None:
    for f in RAW_DIR.glob("*.json"):
        b = json.loads(f.read_text())
        ALL[str(b["company_number"]).zfill(8)] = b


def padded(reg: str | None) -> str | None:
    reg = (reg or "").strip()
    if not reg:
        return None
    return reg.zfill(8) if reg.isdigit() and len(reg) < 8 else reg


# --------------------------------------------------------------------------- #
# Labels
# --------------------------------------------------------------------------- #
def humanise_nature(code: str) -> str:
    table = {
        "ownership-of-shares-75-to-100-percent": "Shares: 75%+",
        "ownership-of-shares-50-to-75-percent": "Shares: 50–75%",
        "ownership-of-shares-25-to-50-percent": "Shares: 25–50%",
        "voting-rights-75-to-100-percent": "Voting: 75%+",
        "voting-rights-50-to-75-percent": "Voting: 50–75%",
        "voting-rights-25-to-50-percent": "Voting: 25–50%",
        "right-to-appoint-and-remove-directors": "Appoints directors",
        "significant-influence-or-control": "Significant influence/control",
    }
    base = code.replace("-as-firm", "").replace("-as-trust", "")
    return table.get(base, base.replace("-", " ").replace("percent", "%").capitalize())


_STATEMENT_LABEL = {
    "no-individual-or-entity-with-signficant-control": "No registrable person",
    "no-individual-or-entity-with-signficant-control-partnership": "No registrable person",
    "psc-exists-but-not-identified": "PSC exists but not identified",
    "psc-details-not-confirmed": "PSC details not confirmed",
    "steps-to-find-psc-not-yet-completed": "Steps to find PSC not completed",
    "psc-contacted-but-no-response": "PSC contacted, no response",
}


# --------------------------------------------------------------------------- #
# Owner classification
# --------------------------------------------------------------------------- #
def classify_owner(psc: dict[str, Any]) -> dict[str, Any]:
    """Classify a PSC as the owner it represents (terminal or recurse target)."""
    kind = (psc.get("kind") or "").lower()
    name = psc.get("name") or "Unknown"
    if "individual" in kind or "super-secure" in kind:
        dob = psc.get("date_of_birth") or {}
        return {
            "kind": "person",
            "name": name,
            "id": "person:" + name.lower(),
            "person": {
                "dob": (f"{dob['year']}" + (f"-{dob['month']:02d}" if dob.get("month") else "")) if dob.get("year") else None,
                "nationality": psc.get("nationality"),
                "residence": psc.get("country_of_residence"),
            },
            "terminal": True,
        }
    ident = psc.get("identification") or {}
    reg = padded(ident.get("registration_number"))
    country = (ident.get("country_registered") or "").strip().lower()
    if reg and country in UK_COUNTRIES:
        resolved = reg in ALL
        return {
            "kind": "entity" if resolved else "unresolved",
            "name": name, "number": reg, "id": reg,
            "terminal": not resolved,
        }
    # foreign / no UK registration number → chain leaves the UK register here
    juris = ident.get("country_registered") or ident.get("legal_authority") or "outside the UK"
    return {
        "kind": "foreign", "name": name, "number": None, "id": "foreign:" + name.lower(),
        "jurisdiction": juris, "terminal": True,
    }


def build_entity_panel(bundle: dict[str, Any], level: int, annotations: dict[str, str]) -> dict[str, Any]:
    number = str(bundle["company_number"]).zfill(8)
    profile = bundle.get("profile") or {}
    lanes: list[dict[str, Any]] = []
    for psc in (bundle.get("pscs") or {}).get("items") or []:
        owner = classify_owner(psc)
        notified, ceased = psc.get("notified_on"), psc.get("ceased_on")
        events = []
        if notified:
            events.append({"date": notified, "type": "notified", "label": "Notified as PSC"})
        if ceased:
            events.append({"date": ceased, "type": "ceased", "label": "Ceased to be a PSC"})
        sub = ""
        if owner.get("number"):
            sub = annotations.get(owner["number"], "") or annotations.get(owner["number"].lstrip("0"), "")
        lanes.append({
            "owner_name": owner["name"],
            "owner_kind": owner["kind"],
            "owner_number": owner.get("number"),
            "owner_id": owner["id"],
            "owner_jurisdiction": owner.get("jurisdiction"),
            "person": owner.get("person"),
            "subtitle": sub,
            "start": notified, "end": ceased, "active": ceased is None,
            "natures": [humanise_nature(n) for n in (psc.get("natures_of_control") or [])],
            "events": events,
        })
    gaps = []
    for st in (bundle.get("psc_statements") or {}).get("items") or []:
        code = st.get("statement") or ""
        n, c = st.get("notified_on"), st.get("ceased_on")
        gaps.append({
            "label": _STATEMENT_LABEL.get(code, code.replace("-", " ").capitalize()),
            "code": code, "start": n, "end": c,
            "withdrawn": bool(c) and c == n, "active": c is None,
        })
    return {
        "number": number,
        "name": profile.get("company_name", number),
        "level": level,
        "kind": "root" if level == 0 else "entity",
        "ch_url": f"{CH}/{number}/persons-with-significant-control",
        "lanes": lanes,
        "gaps": gaps,
    }


# --------------------------------------------------------------------------- #
# Chain walk
# --------------------------------------------------------------------------- #
def walk_chain(root_number: str, annotations: dict[str, str]):
    """BFS up the ownership chain. Returns (panels in order, related bundles)."""
    panels: dict[str, dict[str, Any]] = {}
    order: list[str] = []
    related: dict[str, dict[str, Any]] = {}
    queue: deque[tuple[str, int]] = deque([(root_number, 0)])
    seen: set[str] = set()
    while queue:
        num, level = queue.popleft()
        if num in seen or level > MAX_DEPTH:
            continue
        seen.add(num)
        bundle = ALL.get(num)
        if not bundle:
            continue
        if num != root_number:
            related[num] = bundle
        panel = build_entity_panel(bundle, level, annotations)
        panels[num] = panel
        order.append(num)
        for lane in panel["lanes"]:
            if lane["owner_kind"] == "entity" and lane["owner_number"] in ALL:
                queue.append((lane["owner_number"], level + 1))
    return [panels[n] for n in order], related


# --------------------------------------------------------------------------- #
# Ultimate owners (resolve the path at a given date)
# --------------------------------------------------------------------------- #
def resolve_terminals(panels: list[dict[str, Any]], root: str, on: str) -> list[dict[str, Any]]:
    by_num = {p["number"]: p for p in panels}
    out: list[dict[str, Any]] = []
    seen: set[str] = set()

    def visit(num: str, depth: int) -> None:
        if depth > MAX_DEPTH or num in seen:
            return
        seen.add(num)
        panel = by_num.get(num)
        if not panel:
            return
        active = [l for l in panel["lanes"] if l["start"] and l["start"] <= on and (l["end"] is None or on <= l["end"])]
        for lane in active:
            if lane["owner_kind"] == "entity" and lane["owner_number"] in by_num:
                visit(lane["owner_number"], depth + 1)
            else:
                out.append({"name": lane["owner_name"], "kind": lane["owner_kind"],
                            "jurisdiction": lane.get("owner_jurisdiction")})
        # an active "no PSC" statement is itself a terminal (a gap)
        for g in panel["gaps"]:
            if g["active"] or (g["withdrawn"] and g["start"] == on):
                out.append({"name": g["label"], "kind": "gap", "jurisdiction": None})

    visit(root, 0)
    # de-dupe by name+kind
    uniq = {(o["name"], o["kind"]): o for o in out}
    return list(uniq.values())


# --------------------------------------------------------------------------- #
# BODS start-date enrichment
# --------------------------------------------------------------------------- #
def _name_of(stmt: dict[str, Any]) -> str:
    rd = stmt.get("recordDetails", {})
    if stmt.get("recordType") == "entity":
        return (rd.get("name") or "").strip().lower()
    if stmt.get("recordType") == "person":
        names = rd.get("names") or []
        if names:
            return (names[0].get("fullName") or "").strip().lower()
    return ""


# Fields removed from the BODS schema in v0.4 (see the 0.4.0 changelog "Removed"
# section). OpenCheck's mapper has been patched at source to no longer emit
# `replacesStatements` (the 0.4 lifecycle uses the shared, stable `recordId`
# instead), so this strip is now a **defensive guard** — it keeps the tool's
# output conformant even if pointed at an older mapper build or one that emits
# another removed field.
_REMOVED_IN_0_4 = ("replacesStatements", "placeOfResidence", "agent")


def strip_removed_fields(statements: list[dict[str, Any]]) -> int:
    removed = 0
    for s in statements:
        for field in _REMOVED_IN_0_4:
            if field in s:
                del s[field]
                removed += 1
    return removed


def enrich_start_dates(statements: list[dict[str, Any]], all_pscs: list[dict[str, Any]]) -> None:
    notified_by_name = {(p.get("name") or "").strip().lower(): p.get("notified_on") for p in all_pscs}
    id_to_name = {s["statementId"]: _name_of(s) for s in statements if s.get("recordType") in ("entity", "person")}
    for s in statements:
        if s.get("recordType") != "relationship":
            continue
        ip = s.get("recordDetails", {}).get("interestedParty")
        if not isinstance(ip, str):
            continue
        notified = notified_by_name.get(id_to_name.get(ip, ""))
        if notified:
            for interest in s["recordDetails"].get("interests", []):
                interest.setdefault("startDate", notified)


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def main() -> None:
    today = date.today().isoformat()
    load_all()
    gallery = json.loads((HERE / "gallery.json").read_text())
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    index = {"title": gallery["title"], "subtitle": gallery["subtitle"], "companies": []}
    inlined: dict[str, Any] = {}

    for meta in gallery["companies"]:
        number = str(meta["number"]).zfill(8)
        annotations = meta.get("annotations") or {}
        root_bundle = ALL[number]

        panels, related = walk_chain(number, annotations)

        # BODS for the whole chain: feed parents via related_companies.
        bods_bundle = dict(root_bundle)
        bods_bundle["related_companies"] = related
        bods = map_companies_house(bods_bundle)
        statements = bods.statements if hasattr(bods, "statements") else bods["statements"]
        all_pscs = [p for b in [root_bundle, *related.values()] for p in (b.get("pscs") or {}).get("items") or []]
        enrich_start_dates(statements, all_pscs)
        strip_removed_fields(statements)  # drop replacesStatements et al. (removed in BODS 0.4)

        # window: earliest dated thing across the whole chain → today
        dates: list[str] = []
        for p in panels:
            for l in p["lanes"]:
                dates += [d for d in (l["start"], l["end"]) if d]
            for g in p["gaps"]:
                dates += [d for d in (g["start"], g["end"]) if d]
        window = {"start": min(dates) if dates else today, "end": today}

        ultimate = resolve_terminals(panels, number, today)
        max_depth = max(p["level"] for p in panels)
        n_entities = len(panels)
        n_people = sum(1 for u in ultimate if u["kind"] == "person")
        n_foreign = sum(1 for u in ultimate if u["kind"] == "foreign")
        n_gap = sum(1 for u in ultimate if u["kind"] == "gap")
        comparison = (
            f"Reaching the ultimate owner means walking {max_depth} layer(s) up the chain "
            f"through {n_entities} compan{'y' if n_entities == 1 else 'ies'} — "
            f"each its own PSC page and filing history on Companies House. Here it is one timeline."
        )

        timeline = {
            "company": {
                "number": number,
                "name": root_bundle.get("profile", {}).get("company_name", meta["name"]),
                "display_name": meta["name"],
                "hook": meta["hook"],
                "blurb": meta["blurb"],
                "ch_url": f"{CH}/{number}/persons-with-significant-control",
            },
            "window": window,
            "root": number,
            "entities": panels,
            "filings": [
                {"date": f.get("date"), "type": f.get("type"),
                 "description": f.get("description"), "doc_url": f.get("document_url")}
                for f in root_bundle.get("filings") or []
            ],
            "ultimate_today": ultimate,
            "stats": {
                "chain_depth": max_depth,
                "entities": n_entities,
                "people": n_people,
                "foreign": n_foreign,
                "gaps": n_gap,
                "bods_statements": len(statements),
                "comparison": comparison,
            },
            "bods": {"statements": statements, "statement_count": len(statements)},
        }

        (OUT_DIR / f"{number}.json").write_text(json.dumps(timeline, indent=2))
        inlined[number] = timeline
        index["companies"].append({
            "number": number, "name": meta["name"], "hook": meta["hook"],
            "stats": timeline["stats"], "window": window,
            "ultimate_today": ultimate,
        })
        ult = ", ".join(u["name"] for u in ultimate) or "—"
        print(f"  {number} {meta['name']}: depth {max_depth}, {n_entities} entities, "
              f"{len(statements)} BODS stmts → ultimate: {ult}")

    (OUT_DIR / "gallery.json").write_text(json.dumps(index, indent=2))
    payload = {"gallery": index, "companies": inlined, "built": today}
    (HERE / "site" / "data.js").write_text("window.TIMELINE_DATA = " + json.dumps(payload, indent=2) + ";\n")
    print(f"\nWrote {len(index['companies'])} companies + inlined site/data.js")


if __name__ == "__main__":
    main()
