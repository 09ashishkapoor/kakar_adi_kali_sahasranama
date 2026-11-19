# Domain and SEO research

Research date: **2026-11-19**. Every registration status below comes from
Verisign RDAP (`rdap.verisign.com/com/v1/domain/<name>`), which is authoritative
for `.com` — not DNS guessing, which only proves a domain resolves.

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
| **jaikhyapaparampara.com** | **our six article chunks** | names 1-111, 112-222, 334-444, 556-666, 778-888, 889-1000 |

**Conclusion:** "world first" holds only for *a complete structured English
reference with a page per name, search and a PDF*. Nobody has 965 indexable name
pages. The text itself, in several scripts, is already out there.

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
| **Long tail ×965** | `krim meaning`, `karali meaning`, `kamalakshi meaning` | **nobody** |

The long tail is the strategy. 965 name pages with no competitor beats the head
term, which we cannot win against aggregators and audio listings in the short run.

**Spelling matters.** Every SERP result spells it `kakaradi` — one token. The site
displays "Kakar Adi" by the owner's instruction, so titles carry both:
`Kakar Adi Kali Sahasranama (Kakaradi) — 1,000 Names of Maa Kali`.

---

## 3. Domains

Correct exact match is `kakaradikalisahasranama` — *kali* + *sahasranama*.
(An earlier recommendation in this project misspelled it `…kalisehasranama`.)

| Domain | RDAP status | Notes |
|---|---|---|
| `kakaradikali.com` | **available** | 16 chars |
| `kakaradikalisahasranama.com` | **available** | 27 chars, exact match |
| `kakaradikalisehasranama.com` | available | misspelling; optional typo insurance |
| `kakaradikali.org` | available | not needed |
| `1000namesofkali.com` | available | belongs to neither site; do not use |
| `kalisahasranama.com` | available | **rejected** — see below |
| `kakaradi.com` | available | too short/ambiguous |
| `sahasranama.com` | registered, parked | not for sale realistically |

**Rejected: `kalisahasranama.com`.** It is generic and would compete head-on with
`1000namesofmakali.com`, which is the *Adya Mahakali* sahasranama on the same
queries. Buying it means voluntarily building a cannibal.

**Decision:** register both `kakaradikali.com` and
`kakaradikalisahasranama.com`. One serves, the other redirects.

### Which one serves

Recommended canonical: **`kakaradikali.com`**

- 16 characters — sayable, typeable, printable on a card, forwardable on WhatsApp.
  Devotional material spreads by sharing, not by URL recall.
- It appears on the PDF cover, which today reads
  `kakar-adi-kali-sahasranama.pages.dev`.
- Exact-match domains have not been a ranking factor since Google's 2012 EMD
  update. Keyword work is done by titles, H1s and 965 name pages.

Tradeoff, stated plainly: `kakaradikalisahasranama.com` in a SERP looks precisely
relevant and can lift click-through a few percent. If the owner prefers that,
swap the two roles — the implementation is one constant either way.

---

## 4. How two domains coexist without losing SEO

Two domains are two sites to Google. The only safe arrangement is **one serves,
the other 301s at the edge, path for path**.

```
# Cloudflare Pages _redirects — on the alias project
https://kakaradikali.com/*        https://kakaradikalisahasranama.com/:splat   301
https://www.kakaradikali.com/*    https://kakaradikalisahasranama.com/:splat   301
```

If `kakaradikali.com` is canonical, invert the target.

What this achieves:

- Backlinks to the alias still count — a 301 passes essentially all link equity.
- Google replaces alias URLs in the index with the canonical ones within weeks.
- No duplication, so nothing gets filtered.

What breaks it: serving the same pages on both, splitting content between them,
or mirroring. Then both versions compete, links split, and Google decides the
winner instead of you.

Also required on the primary host: `www` → apex, `http` → `https`, HSTS. Search
Console: verify both properties, submit the sitemap only for the canonical host.

---

## 5. Three properties, one owner

| Property | Text | Target queries | Rule |
|---|---|---|---|
| `1000namesofmakali.com` | Adya Mahakali, 1,072 names | `adya mahakali sahasranama`, `1000 names of maa kali` | keep separate; one cross-link each way |
| `kakaradikali.com` (new) | Kakaradi Kali, 1,000 names | `kakaradi kali sahasranama` + 965 name queries | canonical for this text |
| `jaikhyapaparampara.com` | parampara site, six article chunks | `kakaradi kali sahasranama names 1-111` etc. | long-form; keep, link to the site |

Two internal fixes that cost nothing:

1. **`jaikhepaparampara.com` and `jaikhyapaparampara.com` both return 200 with the
   identical title.** Pick one canonical — `jaikhyapaparampara` matches the app —
   and 301 the other. Right now the owner competes with himself.
2. **The six article chunks duplicate the name pages' meanings.** Acceptable if
   deliberate: articles target chunk queries, name pages target single-name
   queries. Keep article titles distinct, add a link block from each article to
   `/names/<range>/` and to the PDF, and never publish the same chunk twice.

Risk to watch: `1000namesofmakali.com` and this site share a "1,000 names of Kali"
frame and design language. Keeping the text name in every H1 and title
("Adya Mahakali" vs "Kakar Adi") separates them; nothing else will.

---

## 6. Implementation checklist

When the domains are live:

- [ ] `src/lib/site.js` → `SITE_URL` set to the canonical host. It feeds canonical
      tags, OG URLs, the sitemap, `robots.txt` and `llms.txt` — nothing else
      hardcodes the origin.
- [ ] `_redirects` on the alias project: path-preserving 301 to the canonical host.
- [ ] `_redirects` on the canonical project: `www` → apex.
- [ ] Cloudflare: Always Use HTTPS on, HSTS enabled.
- [ ] Search Console: verify both, submit `sitemap.xml` for the canonical only.
- [ ] Rebuild and confirm every `<link rel="canonical">` and `og:url` uses the new host.
- [ ] Update the PDF cover line (`src/pages/download/`) and regenerate it.
- [ ] Update `AGENTS.md` §1 (`Live site`) and §3 (`Custom domain`).

Verification after the switch: `npm run check` (986 pages, no broken links) plus a
grep of `dist/` for the old host — it must return nothing.

---

## 7. Sources

- Verisign RDAP: `https://rdap.verisign.com/com/v1/domain/<name>`
- SERP evidence gathered 2026-11-19 via web search for `kakaradi kali sahasranama`,
  `kakar adi kali sahasranama`, `kali sahasranama 1000 names`,
  `kakaradi kali sahasranama pdf`, `kakaradi kali sahasranama meaning english`.
- Source text provenance: the `/sources/` page and `AGENTS.md` §7.
