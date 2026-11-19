---
name: Kakar Adi Kali Sahasranama
status: proposed
inheritsFrom: 1000namesofmaadya (The Pothi)
description: A mobile-first devotional reading surface for the 1,000 names of Kakar Adi Kali, built as a printed book rather than a web app.
colors:
  desk: "#ddcfb2"
  paper: "#faf3e3"
  paper-2: "#eee3ca"
  paper-3: "#f2e7cf"
  ink: "#1b1510"
  ink-2: "#4a3f31"
  ash: "#5b5142"
  cinnabar: "#9c2b1c"
  gold: "#775a21"
  rule: "#cdbc9c"
typography:
  devanagari:
    fontFamily: "Tiro Devanagari Sanskrit, Noto Serif Devanagari, serif"
  latin:
    fontFamily: "Crimson Pro, Georgia, Times New Roman, serif"
  body:
    fontSize: "19px desktop / 17.5px phone"
    lineHeight: 1.68
    measure: "60–66ch"
---

# Design: The Pothi, adapted

The reference site (`1000namesofmaadya`) settles its whole surface into one idea:
**the names are a printed book, and the screen is paper.** Every page — home,
name, range, guide, text — is the same book opened at a different leaf. This
document is that system, restated for the Kakar Adi text and adjusted in two
places where this project's content differs.

Sources of truth, in order: this file → the reference prototypes
(`design-demos/dir-2.html`, `pothi-name-page.html`, `pothi-range-page.html`) →
`pothi.css` in the reference project.

---

## 1. Voice

Three voices, fixed order, never improvised:

| Voice | Role | Treatment |
|---|---|---|
| **Devanagari** | the hero | `h1` and section labels. Tiro Devanagari Sanskrit. Large, never decorative. |
| **IAST** | the pronunciation | italic Crimson Pro in cinnabar, directly under the Devanagari. |
| **English** | the commentary | Crimson Pro, `--ink-2`, measured column. |

Nothing else gets a voice. No all-caps ASCII headings, no emoji, no icon fonts.
Small capitals appear only for kickers and metadata labels.

**The Devanagari Hero Rule.** If a page's largest element is not the Devanagari
name (or the Devanagari title on the home page), the page is wrong.

---

## 2. Tokens

```css
:root {
  --desk: #ddcfb2;      /* the ground the book sits on */
  --paper: #faf3e3;     /* reading surfaces, panels */
  --paper-2: #eee3ca;   /* page ground */
  --paper-3: #f2e7cf;   /* strips, mobile index */
  --ink: #1b1510;       /* headings, names */
  --ink-2: #4a3f31;     /* prose */
  --ash: #5b5142;       /* captions, metadata — 5:1+ on paper */
  --cinnabar: #9c2b1c;  /* the single accent */
  --gold: #775a21;      /* numerals, warm rules */
  --rule: #cdbc9c;      /* hairlines */
  --rule-dark: #b7a37e;
  --rule-soft: rgba(120, 95, 55, .18);
  --hover: rgba(250, 243, 227, .7);
  --hover-accent: rgba(156, 43, 28, .05);
  --panel-shadow: 0 18px 40px -30px rgba(70, 50, 20, .55);
  --serif: "Crimson Pro", Georgia, "Times New Roman", serif;
  --dev: "Tiro Devanagari Sanskrit", "Noto Serif Devanagari", serif;
  --edge: clamp(20px, 5vw, 72px);
}
```

**One accent per screen.** Cinnabar marks IAST, the current range, links and
folios. It is never a gradient, never a background fill at scale, never small
text under 4.5:1.

**Rules, not borders.** Separation is hairlines at `--rule`, not boxes with
shadows. The only shadow is `--panel-shadow` on a raised panel.

---

## 3. Paper

The ground is `--paper-2` with a 1px vertical weave every 3px, at 3.5% opacity:

```css
body {
  background: var(--paper-2);
  color: var(--ink);
  font-family: var(--serif);
  font-size: 19px;
  line-height: 1.68;
  background-image: repeating-linear-gradient(
    90deg, rgba(120, 95, 55, .035) 0 1px, transparent 1px 3px
  );
}
```

No texture images. No paper-grain JPEG. The weave is a gradient, costs nothing,
and survives zoom.

---

## 4. The deity image

`1111.jpg` — 1202×1600, red-lit Kali statue on pure black.

**Split from the reference.** The reference frontispiece is a light-background
photograph, so its CSS duotone (`grayscale(1) sepia(.3)`) reads as an old plate
on cream. This image is on black; a filter cannot lighten a black field, and
multiplying it over paper gives a black rectangle. Do not try. Shipped: no
filter, a 1px gold rule on the top edge, and a paper-coloured fade over the
last 42% of the plate.

**Treatment: the shrine niche.** The image is shipped as a dark plate, not a
washed photograph:

- Full-bleed to the left edge of the spread on desktop, full-bleed above the
  fold on phone. It is the only element allowed to touch the viewport edge.
- Bottom edge dissolves into the page with
  `linear-gradient(180deg, transparent, var(--paper-2))` over the last 22%.
- A single 1px gold rule at its top edge. No frame, no glow, no vignette.
- The caption sits inside the dark area: `FRONTISPIECE · KĀLĪ`, 10px, letter
  spacing `.18em`, `--rule` tint, bottom-left.
- In night reading the plate needs no change — it already belongs.

Assets shipped in `public/img/`:

| File | Use |
|---|---|
| `deity-480/800/1200.avif` + `.webp` | `srcset` ladder for the frontispiece |
| `deity-og-1200x630.avif` + `.webp` | Open Graph / Twitter card |
| `favicon-32.png`, `favicon-192.png`, `favicon-512.png` | icons (head crop) |
| `apple-touch-icon.png` | iOS home screen |

The source is kept out of the build: `assets/source/1111.jpg`.

**Credit.** The plate carries a small "Tryst With Kaali — Praveen Rachakr…"
watermark at its bottom-right. It is visible in the 1200px portrait; the OG crop
(face and four arms) excludes it. Keep the watermark or add a visible credit
line in the colophon — do not crop it out silently.

**Alt text.** `"Four-armed bronze murti of Maa Kali, red-lit against black,
trident and severed head in her upper hands."`

---

## 5. Type scale

| Role | Size | Weight | Notes |
|---|---|---|---|
| Devanagari title | `clamp(2.4rem, 7vw, 4.2rem)` | 400 | Tiro, line-height 1.15 |
| Devanagari name (`h1`) | `clamp(2.6rem, 8vw, 4.6rem)` | 400 | page-defining element |
| IAST title | `clamp(1.1rem, 2.2vw, 1.5rem)` | 300 i | cinnabar |
| Section head | `1.35rem` | 600 | paired with a small Devanagari label |
| Body | `19px` / `17.5px` | 400 | 1.68, measure 60–66ch |
| Caption / metadata | `12–13px` | 400 | ss-caps, `--ash` |
| Label / kicker | `11px` | 400 | letter-spacing `.18em`, uppercase |

Reading measure: `max-width: 66ch` for prose, `62ch` for guide pages.

**Drop cap.** The first paragraph of elaboration opens with a 3-line drop cap in
cinnabar. One per page, never on a paragraph that starts with a numeral.

---

## 6. Components

Every page is assembled from these and nothing else.

**Running head** — Devanagari site name left (24px), Latin name beside it in
`--ash`, nav centre-right, night toggle far right. Sticky. Hairline below.
Collapses on phone to: Devanagari name + a `☰` that opens a sheet.

**Breadcrumb** — `HOME › NAMES HUB › 1–100 › KĀLĪ`, 11px, `.18em`, `--ash`,
cinnabar on the current crumb.

**Kicker** — one line of small caps above the title:
`SAHASRANAMA POSITION 2 OF THE 1,000 NAMES`.

**Title block** — Devanagari `h1` → IAST italic → "also written" line in caps.

**Panel** — `--paper`, 1px `--rule`, `--panel-shadow`, 40px padding, folio number
in the top-right corner in gold. Used for "What it means", sources, notices.

**Spelling table** — two-column `dl` inside a panel: DEVANAGARI / IAST / COMMON
SPELLING / SOURCE FORM. Labels in caps left, values right, 1px hairlines between.

**Prose** — 62–66ch, `--ink-2`, paragraph spacing `1.1em`, no indent.

**Section head** — Devanagari label in cinnabar, Latin head in `--ink`, hairline
under the pair (`विवरण · Elaboration`).

**Folio** — the position number, `--gold`, bottom-centre of the content column on
scroll; doubles as the page's index in the book.

**Name pager** — previous / next with Devanagari + Latin, 1px top rule, no
buttons. Disabled ends are omitted, not greyed.

**Range tabs** — 11 links (`१–१००` … ) in one wrapped row, `--paper-3` ground,
current range in cinnabar with a 2px underline. Never a dropdown.

**Dense index row** — `number · Devanagari · IAST · meaning`, 1px hairline,
hover `--hover-accent`. Two columns ≥900px, one below. This is the range page,
the hub, and the mobile index.

**Contents list** — leader-dot list (`……`) of ranges with first/last name.

**Colophon** — closing block: dedication, credit, iframe-free link list,
version + date, `--rule` top hairline.

**Night toggle** — text button, `○ Night` / `● Day`, `aria-pressed`, 44×44 tap
target. Required on every template.

---

## 7. Night reading

A second token set, never an inversion:

```css
:root[data-theme="night"] {
  --desk: #0c0907;
  --paper: #1a1410;
  --paper-2: #120e0b;
  --paper-3: #171210;
  --ink: #efe3cd;
  --ink-2: #d3c5ad;
  --ash: #a99a83;
  --cinnabar: #e0604a;
  --gold: #d3ab5a;
  --rule: rgba(211, 171, 90, .20);
  --panel-shadow: none;
  color-scheme: dark;
}
```

- Resolved before first paint by an inline script; `localStorage` key `kks-theme`;
  default follows `prefers-color-scheme`.
- Print always forces the day tokens.
- The deity plate is unchanged in night mode.

---

## 8. Page templates

Five templates carry the whole site.

| Template | Routes | Composition |
|---|---|---|
| **Reader** | `/` | Frontispiece plate left; right leaf = kicker, Devanagari title, IAST, three counts (1,000 names / 10 sets / 1,000 name pages), intro, `Open the book →`. The spread shows the opening eleven and one specimen name page, both server-rendered. Search jumps to any of the 1,000 |
| **Name** | `/names/0001-krim/` ×1000 | Breadcrumb → kicker → Devanagari `h1` → IAST → also-written → "What it means" panel + spelling table → elaboration prose with section heads → pager → see-also |
| **Range** | `/names/1-100/` | Breadcrumb → Devanagari numeral title → IAST → range tabs → 100 dense index rows → prev/next range |
| **Hub** | `/names/` | Range page minus the rows: title, tabs, 10-range contents list with first/last name, "about these pages" panel |
| **Guide** | `/the-book/`, `/kali-sahasranama-benefits/`, `/kali-sahasranama-lyrics/`, `/kali-sahasranama-pdf/` | Kicker, English `h1`, prose sections with Devanagari section labels, FAQ as `faq-list`, range list where relevant |
| **Text** | `/about/`, `/sources/`, `/privacy/` | Single 62ch column, section heads, no images |

This text has no 108-name or 1008-name recension, so those two reference pages
have no counterpart here. Do not invent them.

**The one-book rule.** Every page opens with the same running head and closes
with the same colophon. That is what makes 1,000 pages feel like one volume.

---

## 9. Mobile

Phone is the primary surface, not the degraded one.

- Fluid type with `clamp()`; no breakpoint that changes font size abruptly.
- Tap targets ≥44×44; the running head's toggle and `☰` meet it.
- No horizontal scroll at 320px. Tables become stacked `dl`s.
- The range index is one column below 640px; the mobile index is a 2-column grid.
- Sticky running head is 56px tall, with `padding-top: env(safe-area-inset-top)`.
- Frontispiece is `100vw` wide, `min(52vh, 460px)` tall on phone, so the title
  stays close to the fold.
- Below 400px the running head keeps three nav links (Names, The book, About);
  the rest live in the colophon, and the nav row scrolls rather than clipping.
- Search input is `type="search"`, `enterkeyhint="search"`, 16px minimum font
  size to stop iOS zoom.
- `prefers-reduced-motion: reduce` disables the only transitions (border, color).

---

## 10. Accessibility floor

- Contrast: body `--ink-2` on `--paper` = 9.8:1; `--ash` on `--paper` = 5.6:1;
  cinnabar on paper = 6.4:1. Never place cinnabar text on `--paper-3` below 16px.
- Every page has one `h1`; sections descend without skipping.
- `:focus-visible` = 2px cinnabar outline, 2px offset. Never removed.
- Skip link first in DOM.
- The name list uses `<ol>` semantics; the index rows are links, not divs.
- Night toggle exposes `aria-pressed` and a live label.
- Devanagari carries `lang="sa"`; Latin carries `lang="en"`.

---

## 11. Do / Don't

**Do**
- Let the Devanagari be the largest thing on the page.
- Separate with hairlines; use cinnabar once per screen.
- Keep the reading measure under 66ch.
- Render text in HTML, always. The book must be readable with JS disabled.

**Don't**
- No cards with shadows, no pills, no rounded-button CTAs.
- No gradient accents, glows, or neon.
- No icon fonts, emoji, or decorative SVG flourishes.
- No autoplay, no parallax, no scroll-jacking.
- No filter tricks on the deity plate to fake a light background.
- Never hide name content behind a client-side render.
