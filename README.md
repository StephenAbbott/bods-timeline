# BODS Beneficial Ownership Timeline

A standalone, single-purpose tool that reconstructs and visualises the **history
of beneficial-ownership change** for a UK company — from Companies House PSC data,
mapped to the [Beneficial Ownership Data Standard](https://standard.openownership.org/)
(BODS) v0.4, rendered as an interactive timeline.

It exists to make one argument concrete: static registers answer *"who owns this
today"*, but [FATF Recommendations 24 & 25](https://www.fatf-gafi.org/) require
jurisdictions to keep **five years** of beneficial-ownership history. This tool
shows what that history looks like — and, just as importantly, where it runs out.

It also showcases the **temporal half of BODS** that almost no demo shows:
`statementDate`, the stable `recordId` + `recordStatus` (new/updated/closed)
lifecycle, and interest `startDate`/`endDate`.

## What it shows

A curated gallery of UK companies with legible ownership histories:

| Company | What the timeline shows | Chain resolves to |
|---|---|---|
| **Chelsea FC Holdings** | Abramovich's Fordstam (2016–22), an interim vehicle that owned the club for **43 days**, then the Boehly/Clearlake structure. A sanctions-forced sale, walked up 4 layers. | Boehly + Clearlake's Eghbali & Feliciano (people) |
| **Newcastle United** | Mike Ashley's St James Holdings → the Saudi PIF consortium (2021), plus an early "no PSC" statement filed and withdrawn the same day. | **Public Investment Fund** (foreign state entity) |
| **Everton FC** | A named individual owner (Moshiri, resident Monaco) → the Friedkin Group (2024). | Thomas Dan Friedkin (person) |
| **Kemble Water Holdings** | The *anti-timeline*: Thames Water's ultimate UK parent reports **no registrable owner at all**. | A standing "no PSC" gap |

The tool **walks up the whole ownership chain**: each entity gets its own panel
(its owners over time) on a shared time axis, and a **draggable date cursor**
resolves the *full chain* to the ultimate owner on any chosen date — watch it
flip from Abramovich to the Clearlake principals as you cross May 2022. Each panel
has its PSC lanes (Gantt bars), a **statements/gaps lane**, and **filing-event
ticks** that deep-link to the source Companies House document. Branches terminate
at a person, a foreign entity (the chain leaves the UK register), an unresolved UK
company, or a declared gap — each marked distinctly.

## How it works

```
Companies House PSC data ──fetch.py──▶ data/raw/<number>.json  (CHBundle shape)
                                              │   (one file per entity in the chain)
                                              ▼
                       build.py ── walks up the chain (BFS over corporate PSCs)
                                              │
                                              ├─ borrows opencheck.bods.map_companies_house()
                                              │     fed the whole chain via related_companies
                                              │     → BODS v0.4 statements for every entity
                                              │     → interest startDate enrichment
                                              │
                                              └─ multi-level timeline model + resolved
                                                    ultimate owners (person/foreign/gap)
                                              │
                                              ▼
                              site/data.js  (everything inlined)
                                              │
                                              ▼
                              site/index.html  (open in a browser)
```

The **CH filing event ↔ BODS statement version ↔ timeline lane** correspondence
is the spine: a ceased PSC becomes a BODS statement with `recordStatus: "closed"`
and an interest `endDate`, sharing the **same stable `recordId`** as the original
statement — which is how BODS 0.4 links a record's versions over time. (The older
`replacesStatements` field was removed in 0.4; OpenCheck's `map_companies_house()`
was patched at source to stop emitting it, and `build.py` keeps a defensive strip
as belt-and-braces.) The chain-walk feeds every entity it reaches into OpenCheck's
mapper via `related_companies`, so the BODS output covers the entire ownership
graph (29 statements for the Chelsea chain).

**Conformance:** the BODS for all four companies validates clean against the 0.4
schema and Open Ownership's `libcovebods` checks (additional-fields, JSON-schema,
and all 26 modelling/regulatory checks — zero issues). Re-check with:

```bash
pip install libcovebods
python3 -c "import json;json.dump(json.load(open('site/data/02536231.json'))['bods']['statements'],open('/tmp/c.json','w'))"
libcovebods af /tmp/c.json && libcovebods jsv /tmp/c.json && libcovebods pv /tmp/c.json
```

## Run it

```bash
# 1. (optional) refresh raw data from the live CH API — needs a free API key
COMPANIES_HOUSE_API_KEY=xxxx python3 fetch.py 02536231 02529667 00036624 05819262

# 2. build the site data (no network needed; borrows OpenCheck's mapper)
python3 build.py

# 3. open site/index.html in a browser (opens straight from disk)
```

`build.py` borrows `map_companies_house()` from OpenCheck. Clone
[opencheck](https://github.com/StephenAbbott/opencheck) **next to this repo**
(so `../opencheck/backend` exists) — `build.py` finds it automatically, or set
`OPENCHECK_BACKEND` to its `backend/` directory. The only Python dependency is
`pycountry` (`pip install -r requirements.txt`).

```
~/code/
├── bods-timeline/   ← this repo
└── opencheck/       ← sibling checkout (provides the BODS mapper)
```

## Scope

- **Done — single-level timelines** at the named entity.
- **Done — recursive chain-walk.** `build.py` recurses up every corporate PSC for
  which a UK bundle is held, rebuilding the timeline at each layer to the ultimate
  human/state owner. Walking up reveals where the UK register stops: **foreign**
  entities (Newcastle → the Saudi Public Investment Fund), **unresolved** UK
  companies (a parent not yet fetched), and **declared gaps** ("no PSC"). That's
  the point — the timeline visualises exactly where transparency ends.
- **Next:** resolve the remaining "unresolved" UK parents one more hop (e.g.
  Newcastle's St James Holdings, the ceased Clearlake holdcos) by fetching their
  bundles; handle split (<75%) chains as branching paths; add more gallery
  entries via the news-hook workflow.

To extend a chain, just drop the parent's `data/raw/<number>.json` in (or fetch it
with `fetch.py`) and re-run `build.py` — the walk picks it up automatically.

## Data & licensing

PSC data is Crown copyright, published by Companies House under the
[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
(attribution required). The curated `data/raw/*.json` were transcribed from the
public register on 2026-06-19. Ownership is modelled in BODS v0.4 via OpenCheck's
mapper. This is a demonstration tool, not a register of record — Companies House
does not verify all filed information.
