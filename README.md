# Kakar Adi Sahasranama Website

The **Kakaradi Kali Sahasranama** — the 1,000-name devotional text to Maa Kali —
presented as a browsable, searchable website. Each entry carries Devanagari,
IAST, alternate transliterations, a one-line meaning, and a three-part
elaboration.

## Contents

| Path | What it is |
|---|---|
| `design.md` | The design system — The Pothi, adapted for this text |
| `techstack.md` | Stack, routes, search, SEO and publishing decisions |
| `public/img/` | Deity plate, Open Graph card and icons |
| `assets/source/` | Original deity photograph. Not shipped |
| `output_names/` | 1,000 Markdown source entries, `NNNN-slug.md`. Local only — git-ignored, not in history. |
| `all_1000_meanings.txt` | One-line meaning per name. Local only — see below. |
| `AGENTS.md` | Project rules, current state and decision log for AI agents. |

## Status

Design and technical direction are settled (`design.md`, `techstack.md`). The
site itself is **not built** — there is no `src/`, no `package.json`, no `dist/`
yet. It will be an Astro static build uploaded to Cloudflare Pages by Direct
Upload; the deployed directory is `dist/`, never the repository root.

## Private data

This repository is private, but **not everything local belongs in Git**. See
[`.gitignore`](.gitignore). In short:

- Anything in `private/` is never committed, whatever the file type.
- All `.txt` files are ignored by default, except the public web standards
  (`robots.txt`, `ai.txt`, `llms.txt`, `security.txt`, ...).
- Data exports (`.csv`, `.tsv`, `.dat`), secrets (`.env`, keys) and build
  output are ignored.
- `all_1000_meanings.txt` falls under the `.txt` rule and is therefore local
  only.
- `output_names/` is ignored outright: the 1,000 long-form entries are local
  only and have been removed from Git history.

Reminder: Git is not the only way files become public. A static site deploy
publishes the *build output directory*, so keep private material out of that
folder too — not merely out of Git.
