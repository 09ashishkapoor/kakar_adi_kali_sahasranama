# Kakar Adi Sahasranama Website

The **Kakar Adi Kali Sahasranama** — the 1,000-name devotional text to Maa Kali —
presented as a browsable, searchable website. Each entry carries Devanagari,
IAST, alternate transliterations, a one-line meaning, and a three-part
elaboration.

## Contents

| Path | What it is |
|---|---|
| `src/` | Astro pages, components, styles, the parser and the committed JSON build input |
| `scripts/check-links.mjs` | Post-build guard: broken links and forbidden file types |
| `scripts/build-data.mjs` | Exports `output_names/` to `src/data/names.json` |
| `scripts/check-data.mjs` | Fails if the JSON snapshot drifts from the Markdown |
| `src/data/names.json` | 1,000 parsed entries; committed, public, and read by the build |
| `design.md` | The design system — The Pothi, adapted for this text |
| `techstack.md` | Stack, routes, search, SEO and publishing decisions |
| `domain-seo.md` | Domain research: competitors, keywords, which domain to buy and why |
| `public/img/` | Deity plate, Open Graph card and icons |
| `assets/source/` | Original deity photograph. Not shipped |
| `output_names/` | 1,000 Markdown book-manuscript entries, `NNNN-slug.md`. Exported to `src/data/names.json`; local only — git-ignored, not in history. |
| `all_1000_meanings.txt` | One-line meaning per name. Local only — see below. |
| `AGENTS.md` | Project rules, current state and decision log for AI agents. |

## Status

Built. `npm run dev` serves it locally; `npm run build` produces 1,023 static
pages in `dist/`; `npm run check` verifies the JSON snapshot, links and file
types. Cloudflare Pages is **not yet connected** — deploying is `dist/`, never
the repository root, and needs the owner's approval each time.

## Private data

This repository is public, but **not everything local belongs in Git**. See
[`.gitignore`](.gitignore). In short:

- Anything in `private/` is never committed, whatever the file type.
- All `.txt` files are ignored by default, except the public web standards
  (`robots.txt`, `ai.txt`, `llms.txt`, `security.txt`, ...).
- Data exports (`.csv`, `.tsv`, `.dat`), secrets (`.env`, keys) and build
  output are ignored.
- `all_1000_meanings.txt` falls under the `.txt` rule and is therefore local
  only.
- `output_names/` is ignored outright: the 1,000 long-form entries are the book
  manuscript and have never been committed. Their public build snapshot is
  `src/data/names.json`.

Reminder: Git is not the only way files become public. A static site deploy
publishes the *build output directory*, so keep private material out of that
folder too — not merely out of Git.
