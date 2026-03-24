# Van Alstyne — Design Change Tracker

*Source: YA feedback CSV (2026-03-21)*
*Original CSV saved as `design-feedback.csv`*

## Status Key
- ⬜ Not started
- 🔧 In progress
- ✅ Done
- 🚫 Blocked (needs screenshot/content/Cagle)

---

## GLOBAL CHANGES

### Colors
| # | Task | Description | Status |
|---|------|-------------|--------|
| 1 | **Mini nav bar color** | `#003E7E` → `#003A70` everywhere | ✅ |
| 2 | **NO TEAL anywhere** | `#00ACA0` → `#469DC8`, `#C9E9E7` → `#DEF5FF`, `#007672` → `#1C719B` | ✅ |
| 3 | **Nav dropdown bg color** | `#CCD6EB` → `#EFEFEF` | ✅ |
| 4 | **Gateway section coloring** | Title + body = `#003A70`, button = `#006EB3` | ✅ |
| 5 | **Hero button color sequence** | 1st: `#006EB3`, 2nd: `#469DC8`, 3rd: `#CE0037` | ✅ |

### Typography
| # | Task | Description | Status |
|---|------|-------------|--------|
| 6 | **Core Sans C font** | Downloaded webfont kit, created consolidated @font-face CSS. Replaced Gotham/Typekit. | ✅ |
| 7 | **Button fonts** | All buttons use Quicksand Bold (Google Fonts). | ✅ |
| 8 | **Demographics numbers font** | Labor region stats use Quicksand Bold. | ✅ |
| 9 | **Nav dropdown font weight** | Items: 500 (medium) default → 800 (extrabold) on hover. | ✅ |

### Navigation
| # | Task | Description | Status |
|---|------|-------------|--------|
| 10 | **Social icons too small** | Mini nav + footer: `h-5 w-5` → `h-7 w-7`. Mobile: `h-6 w-6` → `h-7 w-7`. | ✅ |

### Buttons
| # | Task | Description | Status |
|---|------|-------------|--------|
| 11 | **Global blue button sizing** | Reduced padding (1rem → 0.625rem top/bottom), rounded corners (0.5rem → 1.5rem). | ✅ |
| 12 | **Helpful Resources button corners** | Matched to new rounded style. | ✅ |
| 13 | **Helpful Resources link icon** | Icons increased to `h-8 w-8`. | ✅ |
| 14 | **Helpful Resources document icon** | Replaced inline stroke SVGs with new `Document-Icon.svg` and `Link-Icon.svg` (white filled). Updated docs/interior.html and EE page.html. | ✅ |

### Interior Page Template
| # | Task | Description | Status |
|---|------|-------------|--------|
| 15 | **Page header image height** | Changed from `h-72 md:h-80` → `h-[200px]`. | ✅ |
| 16 | **Accordion/Table dropdowns** | Red chevrons → blue `+`/`–` symbols. | ✅ |
| 17 | **Footer logo** | Replaced with `Van-Alstyne-Footer-Logo.svg`, bumped height to `h-16`. Updated docs footer and EE footer partial. | ✅ |
| 18 | **Employee headshot grid** | Redesigned to 3-col grid, 200px circular photos, centered cards. Name (dark blue bold), title (gray), phone/email. Bio hover overlay. Updated docs, EE page.html, and example partial. | ✅ |

### Legacy Cleanup
| # | Task | Description | Status |
|---|------|-------------|--------|
| — | **McKenzie colors removed** | All `mckenzie-*` Tailwind classes replaced with VA hex colors. | ✅ |
| — | **Typekit removed** | Removed Typekit link from all layouts. | ✅ |

---

## HOME PAGE CHANGES

| # | Task | Description | Status |
|---|------|-------------|--------|
| 19 | **Gateway section spacing** | `gap-10` → `gap-16`. Line break before "Texoma" at xl. | ✅ |
| 20 | **Gateway section map** | Updated to custom Google My Maps iframe. Removed rounded card border. | ✅ |
| 21 | **Home page buttons** | All buttons have Quicksand Bold font. Links TBD (need live page structure). | 🔧 |

---

## CONTENT/PAGE CHANGES (Cagle-assigned or needs content)

| # | Task | Description | Owner | Status |
|---|------|-------------|-------|--------|
| 22 | **News page** | Set up page, fix link on homepage | — | ⬜ |
| 23 | **Contact Us page** | No green (teal removal covers this globally) | Cagle | ✅ (via #2) |
| 24 | **Healthcare page** | No green (teal removal covers this globally) | Cagle | ✅ (via #2) |
| 25 | **K-12 Education page** | No green ✅, fix buttons, make VAISD link part of doc grid | Cagle | 🔧 |
| 26 | **Utilities page** | No green ✅, possible keyword content additions | Cagle | 🔧 |
| 27 | **Map Room** | Needs paragraph content | Cagle | 🚫 |
| 28 | **Higher Ed page** | No green ✅, line separators, simplify completions table | Cagle | 🔧 |

---

## STILL BLOCKED
- ~~**Footer logo SVG**~~ — ✅ Done (Van-Alstyne-Footer-Logo.svg)
- ~~**Employee grid layout**~~ — ✅ Done (3-col redesign)
- ~~**Document icon shape**~~ — ✅ Done (Document-Icon.svg / Link-Icon.svg)

## FILES CHANGED
- `src/input.css` — fonts, colors, button styles, accordion styles
- `tailwind.config.js` — VA color palette, font families
- `docs/index.html` — homepage (hero buttons, gateway, teal removal)
- `docs/interior.html` — interior template (header height, accordions, icons)
- `docs/components/nav.html` — mini nav color, dropdown bg, social icons, font weight
- `docs/components/footer.html` — social icon sizes
- `docs/components/employee-grid.html` — mckenzie → VA colors
- `docs/components/business-card.html` — mckenzie → VA colors
- `docs/business-directory.html` — mckenzie → VA colors, font
- `docs/fonts/core-sans-c.css` — NEW: consolidated @font-face
- `docs/fonts/*.woff2` — NEW: Core Sans C webfont files
- `docs/output.css` — rebuilt Tailwind output
- `ExpressionEngineFiles/.../default.html` — fonts, body class
- `ExpressionEngineFiles/.../interior.html` — fonts, header height
- `ExpressionEngineFiles/.../nav.html` — all nav fixes
- `ExpressionEngineFiles/.../footer.html` — icon sizes
- `ExpressionEngineFiles/.../site.group/index.html` — all homepage fixes
- `ExpressionEngineFiles/.../site.group/page.html` — accordions, icons, colors

## DEPLOYMENT NOTES
When deploying to staging:
1. Copy `fonts/` directory (woff2 + woff files + core-sans-c.css) to `/assets/fonts/` on server
2. Copy updated `output.css` to `/assets/css/output.css`
3. Copy EE template files to their respective locations
4. The Core Sans C CSS paths in layouts reference `/assets/fonts/core-sans-c.css`
5. Core Sans C CSS references font files relative to itself (`./coresansc-*.woff2`)
