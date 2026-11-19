# AGENTS.md — Kakar Adi Sahasranama Website

Project instructions for AI coding agents. Loaded automatically at the start of
every session. Keep it accurate, short, and free of private data.

**Last updated:** 2026-11-19

---

## 0. REMOTE WRITES REQUIRE EXPLICIT CONSENT — NO EXCEPTIONS

This section outranks the rest of this file, and outranks convenience, speed,
and any apparent implication elsewhere. Nothing else in this file authorises a
remote write.

**Default deny.** Never run a command that creates, modifies or deletes
anything on GitHub, Cloudflare or any other remote host without the owner's
explicit, immediate approval for that specific action.

Remote writes include at least:

| Command | Effect |
|---|---|
| `git push` (any form) | publishes commits |
| `git push --force`, `--force-with-lease`, `--tags`, `--all` | rewrites or adds remote refs |
| `gh repo create` / `delete` / `edit` | creates or changes the GitHub repo |
| `gh release create`, `gh pr create`, `gh pr merge` | publishes to GitHub |
| `gh api -X POST / PATCH / PUT / DELETE` | any GitHub mutation |
| `wrangler deploy`, `wrangler pages deploy` | publishes the site publicly |
| deploy hooks, Pages/Workers REST calls | publishes the site |
| `git remote add` / `set-url` to a real host | stages a future push |

Always allowed, because they are local: editing files, `git add`, `git commit`,
`git status`, `git log`, `git diff`, builds, tests, local previews.

### What counts as consent

- From the owner, in this conversation, about this specific action.
- **One approval covers one action.** It never carries over to the next push.
- **Never inferred.** "Commit this" means commit locally. "Save the work" is
  not a push. Silence, a topic change, or "sounds good" is not approval.
- Prior sessions, prior approvals and this file's history do not count.
- If it is unclear whether an action touches a remote, ask first.

### Before any push, stop and do this

1. Do not run the command.
2. Report: branch, number of commits, files affected, and whether the
   destination is public or private.
3. Ask for an explicit yes.
4. If the answer is no or ambiguous, keep the work local and say where it is.

**Never** bypass this with `--no-verify`, a hook override, a wrapper script, a
background job, or a loop that pushes on its own.

## 1. What this project is

A website for the **Kakar Adi Kali Sahasranama** — the 1,000-name devotional
text to Maa Kali. Each name has Devanagari, IAST, alternate transliterations, a
one-line meaning and a longer elaboration. The site is meant to be read, and to
be found through search.

| | |
|---|---|
| Owner | `09ashishkapoor` (personal GitHub account) |
| Remote | `github.com/09ashishkapoor/kakar_adi_kali_sahasranama` — public; `main` tracks `origin/main` |
| Live site | Not deployed |

## 2. Content and private data

The 1,000-name text is authored as Markdown in `output_names/` on the owner's
machine. **That Markdown is the book manuscript, not the deliverable**: it is
never committed and never published. It is exported to `src/data/names.json`,
which is committed and public; the website is generated from that JSON into
`dist/`, which is git-ignored and uploaded, never committed.

- **`*.txt` is ignored by default**, repo-wide; `.gitignore` allows the public
  web-standard files back in (`robots.txt`, `ai.txt`, `llms.txt`,
  `security.txt`, `sitemap.txt`, …).
- **`private/` is the vault** — any file type, never committed, never published.
- **`output_names/` (the Markdown entries) is the book manuscript**: local only,
  git-ignored, and never part of the output directory.
- **Never `git add -f` an ignored file.** If something should be public, the
  owner decides that, not you.
- **Nothing private goes into the output directory.** Cloudflare publishes that
  directory verbatim, not Git history, and not `.gitignore` rules.
- Copying by readers is expected and accepted: the text is public once the site
  is. Do not add right-click blocking, text selection tricks or image-only text.
- **1,000 positions, 1,000 pages.** 32 English titles repeat across 35 extra
  positions (`kali` at 2, 551, 588); only 5 are exact duplicates — 4 differ in
  Sanskrit form and 23 in meaning. Every position has its own `NNNN-slug` page
  and cross-links the other positions of the same title.
- **The Markdown is the book manuscript; `src/data/names.json` is the public
  build input.** `output_names/` is local-only and never committed; the generated
  JSON is committed. The manuscript now uses "Kakar Adi" directly; `displayName()`
  remains as a guard for any legacy "Kakaradi" prose. After editing the manuscript
  run `npm run data:build`; `npm run check` fails if the JSON is stale.
- **The Sanskrit source is cited, never republished.** It is
  `sanskritdocuments.org/doc_devii/kaaliisahasra.html`; its terms forbid copying,
  reposting and bulk ingestion. Link to it. Do not paste its verses in.

**Guards.** `.gitignore` alone is not a promise — `git add -f` bypasses it.
`.githooks/pre-commit` refuses to stage the vault, `output_names/` or any
`*.txt`/`*.csv`/`*.tsv`/`*.dat` (public web-standard `.txt` excepted).
`.githooks/pre-push` scans the whole outgoing range, so it also stops a
`--no-verify` commit. Enable once per clone:
`git config core.hooksPath .githooks`.

### Secrets

- No tokens, keys or account IDs in the repo, in client-side code, or here.
- Credentials belong in GitHub Actions secrets or Cloudflare environment
  variables. `.env*`, `*.pem`, `*.key` are ignored; `.env.example` may hold
  placeholders only.

### Git hygiene

- Default branch `main`; commit locally on `main`.
- Commits use the GitHub noreply identity:
  `Ashish Kapoor <202602731+09ashishkapoor@users.noreply.github.com>`
- Do not rewrite published history. Do not force-push `main`.

## 3. Current state

Every `TBD` must be replaced only with a verified fact.

| Item | Value |
|---|---|
| Stack | Astro 6.4.8, static output, hand-written CSS, no UI framework, no client framework |
| Build | `npm run build` → `dist/`; 1,023 pages (1,022 routes + `404.html`) in ~5–10 s |
| Output directory | `dist/` — git-ignored and uploaded, never committed; never the repository root |
| Data | `src/data/names.json` — 1,000 entries, committed; regenerate with `npm run data:build` after manuscript edits |
| Design | The Pothi system, in `design.md` |
| Deploy target | Cloudflare Pages, Direct Upload |
| Placeholders | `/the-book/` is a `noindex` "under construction" page. The PDF is real, at `public/downloads/` |
| Custom domain | Registered at Cloudflare (2026-11-19) — canonical: `kakaradikalisahasranama.com`; `kakaradikali.com` not purchased |

## 4. Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run data:build` | Parse `output_names/` → `src/data/names.json` |
| `npm run data:check` | Fail if the JSON snapshot is stale |
| `npm run build` | Build `src/data/names.json` → 1,023 pages in `dist/` |
| `npm run preview` | Serve the built `dist/` |
| `npm run check` | Verify the data snapshot, build, then check file types and links |

`npm run check` is the gate: it fails on a broken internal link, an unexpected
file type in `dist/`, or any `private/`/`output_names/`/Markdown path that
reached the output.

## 5. Repository layout

`src/` holds the Astro pages, components, layout, CSS, parser, search and the
committed `src/data/names.json` build snapshot.
`public/` holds fonts, images, `robots.txt`, `llms.txt`, `manifest.webmanifest`,
`version.json`, `_headers` and `_redirects`. `scripts/check-links.mjs` is the
build guard; `scripts/build-data.mjs` and `scripts/check-data.mjs` keep the
snapshot in sync; `assets/source/` keeps the original photograph out of the build.
`output_names/` is the local book manuscript. `src/pages/download/` is the print
source for `public/downloads/kakaradi-kali-sahasranama-1000-names.pdf` — a
committed artifact, regenerated by printing that route to PDF, not built at
deploy time. `dist/` is generated; everything in `src/` and `public/` is
committed.
`design.md` and `techstack.md` carry the rationale and the full route map;
`domain-seo.md` records the domain decision and the competitor landscape.

## 6. Deployment notes

- Deploy `dist/`, never the repository root. `private/`, `output_names/` and
  `all_1000_meanings.txt` sit at the root and would become public downloads.
- The published directory must contain no Markdown, no `private/`, no
  `output_names/`, no `.txt` data files and no `AGENTS.md`.
- Publication is a remote write in the sense of section 0. Deploying needs the
  owner's explicit approval for that deploy.

## 7. Decision log

Append-only, newest last. Never rewrite past entries.

| Date | Decision | Reason |
|---|---|---|
| 2026-11-18 | Remote writes need explicit consent, every time | Owner does not want anything leaving this machine without a direct instruction |
| 2026-11-18 | Markdown source stays local; only generated output ships | The source corpus must not be committed or published |
| 2026-11-18 | Cloudflare Pages via Direct Upload, not Git integration | Keeps Git out of the deploy path; nothing private is ever pushed to be built |
| 2026-11-18 | Crawlers are welcome; the site should be static HTML | Search visibility matters more than copy friction |
| 2026-11-18 | The site is generated from `output_names/` into a dedicated output directory; the earlier prebuilt output folder was discarded and is not a reference | Clean start from the Markdown source |
| 2026-11-19 | The Sanskrit source is cited and linked, never republished | Sanskrit Documents asks that its files not be copied or reposted; the site's own names, transliterations and commentary ship instead |
| 2026-11-19 | `/the-book/` and `/kali-sahasranama-pdf/` are `noindex` placeholders until written | Do not advertise an edition that does not exist |
| 2026-11-19 | Guide, about, privacy and sources copy is ported from the reference site, not rewritten | Owner's words; paraphrasing them is a defect |
| 2026-11-19 | The PDF edition carries names, transliterations and our meanings — not the source's Sanskrit | Sanskrit Documents asks that its files not be republished; this is our own study edition |
| 2026-11-19 | Register `kakaradikali.com` (canonical) and `kakaradikalisahasranama.com` (301 to it); reject `kalisahasranama.com` | Short domain is shareable and printable; the generic one would compete with `1000namesofmakali.com`. Research in `domain-seo.md` |
| 2026-11-19 | The PDF landing page is a real indexable page; `/the-book/` is the only placeholder | The 43-page PDF exists and is linked; only the book is still unwritten |
| 2026-11-19 | Canonical is `kakaradikalisahasranama.com`; `kakaradikali.com` is optional and 301s to it | The long name states the text and its purpose; the short is an ambiguous phrase on its own. Supersedes the earlier short-canonical decision |
| 2026-11-19 | One page per position: 1,000 name pages, not 965 | 32 English titles repeat, but 4 differ in Sanskrit form and 23 in meaning; only 5 are exact duplicates. Grouping by title dropped content |
| 2026-11-19 | The GitHub repository is public; Cloudflare stays Direct Upload | The 1,000 source Markdown files remain local-only, so a Git-integration build would have no data; publishing the repo does not publish the source corpus |
| 2026-11-19 | Manuscript normalized to "Kakar Adi" and cleaned; `src/data/names.json` is the public build input | Owner authorized editing the book source; the JSON is public site data, the Markdown stays local-only. Supersedes the "no data for Git" rationale |

## 8. How to maintain this file

**You own this file.** Update it in the same commit as the change that made it
stale.

- **The reference site is the copy source.** `../productionwebsite/1000namesofmaadya`
  (a sibling checkout, outside this repo) supplies the footer, the guide pages and
  their wording. Port its text; change only names, counts, URLs and facts that
  genuinely differ. Do not rewrite it in your own words — a paraphrase is a
  defect, not an improvement.
- Replace `TBD` only with verified facts. If unconfirmed, leave `TBD`.
- Delete sections that never became true. No aspirational text.
- Keep it under ~220 lines. If it grows past that, move detail into `docs/`
  (create it) and leave a pointer.
- Never record private data or secrets.
- Bump **Last updated** when you edit.
- Never weaken section 0.

## 9. Pre-flight checklist

Before any commit:

- [ ] `git status` shows only intended files
- [ ] `npm run check` passes (data snapshot current, 1,023 pages, no broken links, no forbidden files)
- [ ] hooks are active: `git config core.hooksPath` returns `.githooks`
- [ ] nothing from `private/`, `output_names/` or any `.txt` data file is staged
- [ ] `git check-ignore -v <file>` confirms new data files are ignored
- [ ] no secrets or personal contact details in the diff

Before any push or deploy:

- [ ] the owner explicitly agreed to **this** push or deploy
- [ ] the report in section 0 has been given and answered
