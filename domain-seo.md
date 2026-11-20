# Domain and SEO research

Research date: **2026-11-19**. `.com` statuses come from Verisign RDAP
(`rdap.verisign.com/com/v1/domain/<name>`), authoritative for `.com`; the `.org`
status comes from PIR RDAP. Both are authoritative for their TLD; this is not DNS
guessing, which only proves a domain resolves. **Purchase status:**
`kakaradikalisahasranama.com` is registered at Cloudflare (2026-11-19);
`kakaradikali.com` is not purchased.

No keyword-volume tool was available. Volumes are therefore **unknown**; demand
is inferred from what the SERPs contain. Treat every "why" below as reasoning
from evidence, not measured search volume.

---

## 1. The competitive landscape

The text is not unpublished. Searching `kakaradi kali sahasranama` returns:

| Site | What it publishes | URL |
|---|---|---|
| Stotra Nidhi | transliteration in English, Kannada, Tamil | `stotranidhi.com/en/kakaradi-kali-sahasranama-stotram-in-english/` |
| Great Indian | Sinhala namavali | `greatindian.net/si/kakaradi-kali-sahasra-namavali-in-sinhala/` |
| Slokam | Malayalam, "1000 Names of Kakaradi Kali" | `slokam.in/1000-names-of-kakaradi-kali-sahasranama-in-malayalam/` |
| Tantra Sadhana | English full stotram | `tantrasadhana.app/blog/kakaradi-kali-sahasranama-stotram-in-english` |
| Sanskrit Documents | source edition `.itx` + multi-script PDFs | `sanskritdocuments.org/doc_devii/kaaliisahasra.html` |
| Scribd | Kannada PDF (55 pages) | `scribd.com/doc/295584562/…` |
| Google Drive | circulating PDF | `drive.google.com/file/d/1YRD80wqLzizoyGxpsScww5lsFkXElIQ-/view` |
| TemplePurohit | forum thread about the text | `templepurohit.com/forums/topic/kakaradi-kali-sahasranama-stotram-related/` |
| Inner Splendor / Vallari Ambekar | **audio EP, 23 July 2025** | `shazam.com/song/1828524933/…` |
| **jaikhyapaparampara.com** | **our nine article chunks** | names 1-111, 112-222, 223-333, 334-444, 445-555, 556-666, 667-777, 778-888, 889-1000 |

**Conclusion:** "world first" holds only for *a complete structured English
reference with a page per name, search and a PDF*. Nobody has 1,000 position
pages (965 distinct names). The text itself, in several scripts, is already out
there.

`1000namesofkali.com` was **unregistered** when checked (RDAP 404, no DNS), as
were `1000namesofmakali.com`'s neighbours. `1000namesofmakali.com` is registered
(since 2025-05-27) and is ours. `sahasranama.com` is registered but parked on AWS
addresses — no content to beat.

---

## 2. Keyword map

| Tier | Terms | Currently held by |
|---|---|---|
| Head, ambiguous | `kali sahasranama`, `kali 1000 names` | museums, audio listings, `1000namesofmakali.com` |
| **Exact niche** | `kakaradi kali sahasranama` · `kakaaradi…` · `kakar adi…` | Stotra Nidhi, our articles, Scribd |
| Modifier | `… in english`, `… pdf`, `… meaning`, `… lyrics`, `… names 1-111` | Tantra Sadhana, Scribd, our articles |
| Language | `… in kannada` / `malayalam` / `tamil` / `sinhala` | Stotra Nidhi, Slokam, Great Indian |
| **Long tail ×965 names** | `krim meaning`, `karali meaning`, `kamalakshi meaning` | **nobody** |

The long tail is the strategy. 1,000 position pages (965 names) with no competitor
beats the head term, which we cannot win against aggregators and audio listings in
the short run.

**Spelling matters.** Every SERP result spells it `kakaradi` — one token. The site
displays "Kakar Adi" by the owner's instruction, so titles carry both:
`Kakar Adi Kali Sahasranama (Kakaradi) — 1,000 Names of Maa Kali`.

---

## 3. Domains

Correct exact match is `kakaradikalisahasranama` — *kali* + *sahasranama*.
(An earlier recommendation in this project misspelled it `…kalisehasranama`.)

| Domain | RDAP status | Notes |
|---|---|---|
| `kakaradikalisahasranama.com` | **registered** (Cloudflare, 2026-11-19) | 27 chars, exact match; **canonical** |
| `kakaradikali.com` | available | 16 chars; not purchased, optional alias |
| `kakaradikalisehasranama.com` | available | misspelling; optional typo insurance |
| `kakaradikali.org` | available | not needed (PIR RDAP) |
| `1000namesofkali.com` | available | belongs to neither site; do not use |
| `kalisahasranama.com` | available | **rejected** — see below |
| `kakaradi.com` | available | too short/ambiguous |
| `sahasranama.com` | registered, parked | not for sale realistically |

**Rejected: `kalisahasranama.com`.** As a served site it is generic and would
compete head-on with `1000namesofmakali.com`, which is the *Adya Mahakali*
sahasranama on the same queries. A 301 alias would pass link equity, but it
still blurs two separately named brands; the point is to keep them distinct,
not to buy every generic phrase.

**Decision (owner, 2026-11-19):** `kakaradikalisahasranama.com` is the canonical
domain. `kakaradikali.com` is optional; if bought, it 301s to the long name.

**Status:** `kakaradikalisahasranama.com` is registered at Cloudflare
(registration 2026-11-19, Cloudflare nameservers). `kakaradikali.com` is not
purchased; it remains optional.

### Which one serves

**Canonical: `kakaradikalisahasranama.com`.**

- It names the text itself — the Kakaradi Kali Sahasranama, the 1,000 names of
  Maa Adi Kali / Adya Mahakali. The URL states the purpose.
- `kakaradikali.com` is a truncated phrase that could belong to anything on its
  own; it does not say what the site is.
- It matches the exact query, so the domain looks relevant in a SERP.
- The cost is length: 27 characters, harder to say and print than the short form.
  The PDF cover, search results and shares carry it; the display name "Kakar Adi"
  carries the human-facing side.

Exact-match domains have carried little ranking weight since Google's 2012 EMD
update; the long domain's value is identity and URL relevance, not a ranking
shortcut. The page title, H1, 1,000 position pages and links still do the work.

---

## 4. How two domains coexist without losing SEO

Two domains are two sites to Google. The only safe arrangement is **one serves,
the other 301s at the edge, path for path**.

Cloudflare Pages' `_redirects` cannot match on hostname: its `source` is a file
path, and domain-level redirects are unsupported. Do the host redirects with a
zone-level **Redirect Rule** (or Bulk Redirect) instead:

| When the request host is | 301 to |
|---|---|
| `kakaradikali.com` | `https://kakaradikalisahasranama.com` + the original path and query |
| `www.kakaradikali.com` | `https://kakaradikalisahasranama.com` + the original path and query |
| `www.kakaradikalisahasranama.com` | `https://kakaradikalisahasranama.com` + the original path and query |

If you want the rule in the repository instead of the dashboard, give the alias
its own Pages project, attach **only** the alias domain to it, and use a
path-only `_redirects`:

```
/*  https://kakaradikalisahasranama.com/:splat  301
```

Do not put a hostname in the source of `_redirects`; that form is ignored.

The short domain is not bought, so only the `www` → apex rule is needed. The
canonical host is the long name; there is no second site to redirect.

What this achieves:

- Backlinks to the alias still count — a 301 passes essentially all link equity.
- Google replaces alias URLs in the index with the canonical ones within weeks.
- No duplication, so nothing gets filtered.

What breaks it: serving the same pages on both, splitting content between them,
or mirroring. Then both versions compete, links split, and Google decides the
winner instead of you.

Also required on the primary host: `http` → `https` (Always Use HTTPS), HSTS,
and one clean absolute URL in every canonical and `og:url`. Search Console:
verify the canonical property, submit the sitemap only for it.

---

## 5. Three properties, one owner

| Property | Text | Target queries | Rule |
|---|---|---|---|
| `1000namesofmakali.com` | Adya Mahakali, 1,072 names | `adya mahakali sahasranama`, `1000 names of maa kali` | keep separate; one cross-link each way |
| `kakaradikalisahasranama.com` (new) | Kakaradi Kali, 1,000 names | `kakaradi kali sahasranama` + 1,000 position queries | canonical for this text |
| `jaikhyapaparampara.com` | parampara site, nine article chunks | `kakaradi kali sahasranama names 1-111` etc. | long-form; keep, link to the site |

Two internal fixes that cost nothing:

1. **`jaikhepaparampara.com` and `jaikhyapaparampara.com` both return 200 with the
   identical title.** Pick one canonical — `jaikhyapaparampara` matches the app —
   and 301 the other. Right now the owner competes with himself.
2. **The nine article chunks duplicate the name pages' meanings.** Acceptable if
   deliberate: articles target chunk queries, name pages target single-name
   queries. Keep article titles distinct, add a link block from each article to
   `/names/<range>/` and to the PDF, and never publish the same chunk twice.

Risk to watch: `1000namesofmakali.com` and this site share a "1,000 names of Kali"
frame and design language. Keeping the text name in every H1 and title
("Adya Mahakali" vs "Kakar Adi") separates them; nothing else will.

---

## 6. Implementation checklist

When the canonical domain is live:

- [ ] `src/lib/site.js` → `SITE_URL` set to `https://kakaradikalisahasranama.com`
      (or build with `SITE_URL=...`). It feeds canonical tags, OG URLs and
      `sitemap.xml`.
- [ ] `public/robots.txt` → update the `Sitemap:` line by hand.
- [ ] `public/llms.txt` → update its seven absolute URLs by hand.
- [x] Zone-level Redirect Rule: `www` → apex on the canonical host, 301, path
      and query preserved (verified live 2026-11-19). If the short domain is
      bought, `kakaradikali.com` → the long name the same way.
- [x] Cloudflare: Always Use HTTPS on; HSTS `max-age=31536000; includeSubDomains`,
      no preload (verified live 2026-11-19).
- [ ] Search Console: verify the canonical property, submit `sitemap.xml` for it.
- [ ] Rebuild and confirm every canonical and `og:url` is one clean absolute URL
      on the new host — not merely that the host string appears.
- [ ] Update the PDF cover line (`src/pages/download/`) and regenerate it.
- [ ] Update `AGENTS.md` §1 (`Live site`) and §3 (`Custom domain`).

Verification after the switch: `npm run check` (1,023 pages, no broken links) plus a
grep of `dist/` for the old host — it must return nothing.

---

## 7. Sources

- Verisign RDAP: `https://rdap.verisign.com/com/v1/domain/<name>`
- PIR RDAP (`.org`): `https://rdap.publicinterestregistry.org/rdap/domain/<name>`
- SERP evidence gathered 2026-11-19 via web search for `kakaradi kali sahasranama`,
  `kakar adi kali sahasranama`, `kali sahasranama 1000 names`,
  `kakaradi kali sahasranama pdf`, `kakaradi kali sahasranama meaning english`.
- Source text provenance: the `/sources/` page and `AGENTS.md` §7.
