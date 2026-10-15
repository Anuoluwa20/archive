# ARCHIVE

A digital museum landing page documenting and celebrating Nigeria's creative
history across Photography, Music, Fashion and Design.

**Guiding principle:** do not merely display the past — make people feel its
influence on the present.

## The hub

```
node hub/server.mjs
```

Open <http://localhost:10002>. It reads `hub/hub.config.json`, renders every
artifact under `artifacts/`, and refreshes every 15 seconds so agent output
appears as it lands. Files that do not exist yet show as *waiting*.

## Where things are

- `artifacts/00-sku/SKU.md` — **the source of truth.** Every agent reads it first.
- `WORKFLOW.md` — agent roster, stage gates, directory contract.
- `PROJECT_STATE.md` — the Project Manager's live state.
- `pipeline.md` — the stage board, rendered with status badges.
- `artifacts/` — one folder per stage.
- `.opencode/agents/` — the ten workflow agents.
- `hub/` — the documentation hub (server + UI + config).

## Ground rules for this project

- The institution is fictional; the history is **real and credited**. No invented
  facts presented as history.
- No unlicensed archival imagery. Prefer self-made imagery, typographic
  treatments and permissively licensed material, credited on the page.
- No pan-African clichés, no green-white-green shorthand, no beige/serif museum
  template, no agency-portfolio aesthetic.

## Current state

Discovery complete. Four research agents are running in parallel
(competitors, references, interactions, brand). Production starts once a
creative direction is chosen.
