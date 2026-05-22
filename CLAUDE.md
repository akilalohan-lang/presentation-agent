# Presentation Agent — PurchasePlus

Working folder for the AI-powered Presentation Agent. When a Claude session starts from this directory, this file loads automatically.

---

## What this agent does

Converts any document (PPTX, PDF, DOCX, Google Slides, plain text) into a PurchasePlus-branded HTML presentation hosted on GitHub Pages. Inherits the exact design system used across all internal decks (HITEC 2026, GTM Machine, Promotion Pitch).

Output: single-file `.html`, sidebar nav, keyboard navigation, responsive (desktop sidebar + mobile scroll-snap), deployed via staticrypt to GitHub Pages.

---

## User-facing flow (3-step architecture)

`intake.html` is the entry point. It guides the user through 3 pages within the same file:

**Step 1 — Upload**
User drops files (PPTX, PDF, DOCX, TXT), pastes a URL (Google Slides, web page), or types/pastes text directly. No settings yet. Single CTA: "Analyse content."

**Step 2 — Editor**
After the agent digests the content:
- Left panel: content analysis summary, editable slide outline, "add more files" drop zone
- Right panel (settings): title (required), presenter, audience (required), slide count (4-16 slider), password (optional), and four visual toggles (Longarms characters, colourful UI cards, app screenshots, generate AI images)
- Missing required fields shown in amber warning banner
- CTA: "Generate presentation" (blocked until title + audience filled)

**Step 3 — Output**
- Success state with check animation
- URL card with copy button
- "Open presentation" and "Copy link" actions
- Password badge if protected
- "Create another" restart link

The agent does NOT ask for all settings upfront. It digests first, then the editor surfaces what's needed.

---

## Folder layout

```
Presentation Agent/
├── CLAUDE.md                          ← this file (load first, always)
├── intake.html                        ← upload/briefing page for users
├── assets/                            ← ALL brand assets live here
│   ├── AI_ASSET_GUIDE.md              ← full asset map (read before picking visuals)
│   ├── PurchasePlus Logos/            ← logos — NEVER alter
│   ├── PurchasePlus Colours/          ← brand colors reference
│   ├── PurchasePlus UI & UX/          ← device mockups (phone, laptop, responsive)
│   ├── PurchasePlus Web Application Screens/  ← real product artboards (10 files)
│   ├── Colourful UI UX/               ← illustrated UI components + hero illustrations
│   │   ├── Stand Alone/               ← 9 drop-in KPI cards, charts, tables
│   │   └── Illustrations/             ← 5 hero illustrations + Hero Videos/
│   ├── Longarms Characters/           ← brand characters (transparent PNG)
│   │   ├── Named Characters/          ← Bargain Brian, Bouncy Brooke, Focussed Finn,
│   │   │                                 Helpful Hannah, Speedy Simon, Zesty Zara, Nurse
│   │   ├── Stand Alone/               ← role-based: Bellhop 1+2, Chef 1+2, Customer 1+2,
│   │   │                                 Delivery Man, Manager, Supplier 1+2, Waiter, Age Care Nurse
│   │   ├── Windows/                   ← round-frame spotlight: Brian, Brooke, Zara
│   │   ├── Lonagarm Cloche/           ← full cast group reveal
│   │   └── New Poses/                 ← AI-generated new poses (sitting, waving, pointing, open arms)
│   ├── Longarms Scenes/               ← composite scenes (transparent + opaque)
│   │   ├── Buyer and Seller Interaction (transparent + opaque)
│   │   ├── End-to-end Solution (transparent + opaque)
│   │   ├── Global Marketplace (transparent + opaque)
│   │   └── Vartical Canva 001.png
│   ├── Longarms Illustrations/        ← (empty, do not use)
│   ├── Hospitality Agents/            ← AI agent personas mapped to Longarms characters
│   │   ├── Agents Profiles & Images/  ← 7 .md profiles + matching .png per agent
│   │   └── Image Screenshot/          ← character reference PNGs for agent context
│   ├── PurchasePlus Icons/            ← benefit illustrations (6 icons)
│   ├── Font Purchase/UniversalSans/   ← ONLY font for on-image typography
│   ├── Web Content/                   ← mirrored from live website
│   │   ├── Images/                    ← 81 files: features by product area + suppliers
│   │   ├── Videos/                    ← 15 MP4s: product demos + TTB campaign
│   │   └── GIFs/                      ← (empty, GIFs live in Animations/)
│   ├── Animations/                    ← website GIFs, invoice animation WEBMs, step-by-step MP4s
│   │   └── Hero Homepage/             ← HTML widgets, integration logos, step animations
│   └── Brandkit/                      ← OLD Marketboomer branding — use with caution
│                                         (PurchasePlus 2026 brand supersedes everything here)
└── template/
    └── presentation_template.html     ← canonical template (always start here)
```

---

## Brand rules (non-negotiable)

### Colors
```css
--purple:       #7c5dff
--light-purple: #a956ff
--blue:         #3766fe
--ink:          #111827
--body:         #4B5563
--muted:        #9ca3af
--border:       #e5e7eb
--border-soft:  #f3f4f6
--bg:           #ffffff
--green:        #10b981
```

Brand gradient (text accents and pill buttons only, never dark background floods):
```css
linear-gradient(90deg, #a956ff 0%, #7c5dff 50%, #3766fe 100%)
```

Soft gradient (card backgrounds, slide-right panels):
```css
linear-gradient(135deg, #f5edff 0%, #eaf1ff 100%)
```

The `PurchasePlus Colours/` folder has:
- `gradient.png` — the canonical brand gradient swatch
- `all colours.png` — full palette reference

**Brandkit/ is old Marketboomer branding.** Do NOT use Marketboomer logos, color swatches, or templates from that folder. The 2026 PurchasePlus brand is defined by the CSS variables above and the assets in `PurchasePlus Logos/`.

### Typography
- **Web presentations:** Inter (200, 300, 400, 500, 600, 700) + JetBrains Mono for numbers/tags
- **On-image AI-generated visuals:** UniversalSans ONLY (`Font Purchase/UniversalSans/Universal-Sans-Display-344.ttf` and `500.ttf`). Never Arial, Helvetica, Inter, or any other font in images.
- `text-wrap: balance` on ALL headings and paragraphs. No orphaned words, ever.
- `white-space: nowrap` on every CTA/pill button.
- No em-dashes (`—`). Use comma, period, parentheses, colon instead.
- No emojis anywhere.

---

## Asset selection guide

### Logos — `assets/PurchasePlus Logos/`

All logos now have clear short names (the originals still exist alongside them):

| Clear name | What it is | Use when |
|---|---|---|
| `logo-horizontal-color.png` | Emblem + "PurchasePlus" text, side by side. Dark text. | Sidebar nav, email header, any light background. **Default.** |
| `logo-horizontal-slogan-color.png` | Horizontal + "Better Procurement Better Hospitality" slogan below. Dark text. | Title slides, formal docs on light background |
| `logo-horizontal-slogan-white.png` | Same but all white (invisible on white bg). | Dark/gradient backgrounds |
| `logo-vertical-color.png` | Emblem on top, "PurchasePlus" text below. Dark text. No slogan. | Square crops, app icons, tight vertical space |
| `logo-vertical-slogan-color.png` | Vertical + full slogan. Dark text. | End slides on white/light background. Hero lockup. |
| `logo-vertical-slogan-white.png` | Vertical + slogan, all white (emblem still colored). | **Get Started / closing slide dark panel.** |
| `logo-vertical-white.png` | Vertical, white text, no slogan. | Dark backgrounds, tight vertical space |
| `logo-emblem-color.png` | Just the cross emblem. Colored. | Cover meta strip, favicon, tight corner |
| `logo-emblem-white.png` | Just the cross emblem. White. | Dark panel emblem accent |
| `logo-emblem-hires.png` | Emblem only, very large (1000px+). Colored. | Print, high-res exports |
| `logo-emblem-mobile.png` | Emblem, optimized for mobile/favicon. Colored. | `<link rel="icon">` |
| `logo-set-white.png` | Small horizontal, white text. | Dark backgrounds, footnotes |

**Quick decision:** white background = use `logo-horizontal-color.png`. Dark background = use `logo-vertical-slogan-white.png` (closing slide) or `logo-horizontal-slogan-white.png`.

Never alter, recreate, or distort any logo. Always use the file as-is.

---

### Device mockups — `assets/PurchasePlus UI & UX/`

3 files, all show the real PurchasePlus interface in device frames:

| File | Shows | Best for |
|---|---|---|
| `001_mobile-marketplace-screen.png` | Phone with marketplace, $48 cart | Mobile-first slide, any mobile story |
| `002_responsive-marketplace-desktop-mobile.png` | Laptop + phone side by side | Cover slides, "works everywhere" story |
| `003_dashboard-procurement-list.png` | Laptop with procurement dashboard | Procurement, operations slides |

**Cover slide rule:** The first slide of every presentation must show one of these device mockups in the right panel. Use `width:96%; max-height:92%; bottom:-2%` on the `sr-device` class so it fills the panel boldly. Do NOT layer a Longarms scene or any other image on top of the device on the cover slide -- the device is the hero, alone.

---

### Product artboards — `assets/PurchasePlus Web Application Screens/`

10 real product screenshots. Use as `sr-screen` (floating card) or `sr-bg-screen` (dimmed background). Never use as full-bleed cover photos.

| File | Shows | Best for |
|---|---|---|
| `Artboard 1` | Marketplace browse with product cards | Marketplace slides |
| `Artboard 2` | Dashboard home + KPIs + "Start Ordering Now" | Platform overview, capabilities |
| `Artboard 3` | Requisitions "Awaiting My Approval" | Approval workflow, compliance slides |
| `Artboard 4` | Vendors/Suppliers table | Supplier management slides |
| `Artboard 5` | Purchase orders list with green approval marks | Procurement process, results |
| `Artboard 6` | Marketplace browse modal overlay | Marketplace deep-dive |
| `Artboard 7` | Invoice/payment detail with line items | Invoicing, AP automation slides |
| `Artboard 8` | Order list with red/green status | Status tracking, operations |
| `Artboard 9` | Catalog with category filters | Catalogue, item management |
| `Artboard 10` | Invoice summary + tax breakdown | Finance, compliance |

---

### Illustrated UI components — `assets/Colourful UI UX/Stand Alone/`

9 drop-in components. These are the "floating card" overlays that sit on top of device mockups and Longarms scenes. Use `sr-card` CSS class. Combine 2-3 per slide for a dashboard collage effect.

| File | Metric | Use when |
|---|---|---|
| `Total Spend.png` | $1.46M +5% | Spend story, cost control |
| `Closed Invoices.png` | 402 +115% | AP automation, invoice processing |
| `Food Cost.png` | 28% +15% | F&B, recipe management, cost |
| `Procurement Savings.png` | 12-month bar chart | Savings over time, ROI |
| `Amount Spent Per Category.png` | Donut chart, 7 categories | Spend mix, analytics |
| `All Purchase Orders.png` | Table with status badges | PO workflow, operations |
| `Marketplace.png` | 12 product tiles grid | Marketplace, catalogue |
| `Menu.png` | Mobile navigation menu | Mobile product story |
| `CLOUDS.png` | Decorative cloud shape | Background container, accent |

---

### Hero illustrations — `assets/Colourful UI UX/Illustrations/`

5 large composite illustrations for right-panel hero slots.

| File | What it shows | Best for |
|---|---|---|
| `001_invoice-processing-hero.png` | Person + multi-device invoice scene | Invoicing slides |
| `002_invoice-sustainability-metrics.png` | Invoice + CO2 reduction + savings | Sustainability angle |
| `005_multi-device-dashboard-hero.png` | Multiple users on multiple devices | Multi-property, enterprise |

Hero Videos subfolder (tall/vertical format, good for right panels):
| File | Best for |
|---|---|
| `001_purchase-orders-journey-flow.png` | PO process flow slide |
| `002_spend-analytics-dashboard-hero.png` | Analytics, spend visibility (USE THIS as the canonical collage reference) |
| `003_invoice-management-scene.png` | Invoice/AP slide |
| `004_marketplace-catalog-grid.png` | Catalogue, marketplace |
| `005_financial-analytics-collaboration.png` | Finance, collaboration |

---

### Longarms characters — composition rules

**Never alter Longarms geometry, palette, or proportions.** They have long curved arms, abstract faces with no nose, and specific brand colors. Always use the source PNG as-is.

**Layering on UI:** The signature composition is a Longarms character standing at the bottom of the right panel, with a product screen or UI cards behind/around them. Use `sr-char` CSS class (positioned absolute, bottom 0, right side, height 65-75%). The character overlaps the UI to create depth.

**Composition CSS pattern:**
```html
<div class="slide-right">
  <!-- Layer 1: dimmed background screen (context) -->
  <img class="sr-bg-screen" src="../assets/PurchasePlus Web Application Screens/Artboard 2_PurchasePlu.png">
  <!-- Layer 2: floating UI cards (z-index 3) -->
  <img class="sr-card" src="../assets/Colourful UI UX/Stand Alone/Total Spend.png"
       style="top:10%; left:50%; transform:translateX(-50%); width:55%; max-width:220px;">
  <!-- Layer 3: Longarms character standing on top (z-index 4) -->
  <img class="sr-char" src="../assets/Longarms Characters/Stand Alone/98-084 PurchasePlus Longarm Illustration Manager Retina.png"
       style="height:68%; right:2%;">
</div>
```

**Character selection by slide topic:**

| Slide topic | Character(s) |
|---|---|
| Procurement, cost control, savings | Bargain Brian (Named), Manager (Stand Alone) |
| F&B, recipe, kitchen | Bouncy Brooke (Named), Chef 1, Chef 2 (Stand Alone) |
| Speed, efficiency, AP automation | Speedy Simon (Named) |
| Quality, detail, inspection | Focussed Finn (Named) |
| Supplier connectivity | Supplier 1, Supplier 2, Delivery Man (Stand Alone) |
| Hotels, hospitality | Bellhop 1, Bellhop 2, Waiter, Manager, Customer 1+2 |
| Scale, team, company | Global Marketplace or Buyer+Seller scene |
| Healthcare ONLY | Helpful Hannah, Nurse, Age Care Nurse |
| Cover / hero / all-rounder | End-to-end Solution scene (transparent) |
| Marketplace, two-sided platform | Buyer and Seller Interaction (transparent) |

**New Poses folder** (`assets/Longarms Characters/New Poses/`): AI-generated variations of existing characters in different poses (sitting at desk, waving, pointing, arms open). Use these for slides where the standard standing pose doesn't fit.

---

### Hospitality Agents — `assets/Hospitality Agents/`

7 AI agent personas mapped to Longarms characters and PurchasePlus product features. Use these on slides that talk about AI agents, automation, or the GTM Machine.

**Do NOT rename the agents.** Their names are fixed: Bargain Brian, Bouncy Brooke, Focussed Finn, Helpful Hannah, Speedy Simon, Zesty Zara.

| Agent | Role | Product | Character image |
|---|---|---|---|
| Bouncy Brooke | Executive Chef | Recipe and Menu Management | `001_Bouncy Brooke...png` |
| Focussed Finn | Inventory Controller | Inventory Management | `002_Focussed Finn...png` |
| Helpful Hannah | Supplier Relations | Supplier Engagement | `003_Helpful Hannah...png` |
| Bargain Brian | Procurement Manager | Purchasing | `004_Bargain Brian...png` |
| Speedy Simon | AP Operations | Invoicing and AP Automation | `005_Speedy Simon...png` |
| Zesty Zara | Financial Controller | Budgeting and Financials | `006_Zesty Zara...png` |
| Focussed Finn | Analytics Director | Reporting and Analytics | `007_Focussed Finn...png` |

Each has a full `.md` profile with voice, pain points, proof points, and content angles. Read the relevant profile when building a slide about that agent or product area.

`Image Screenshot/` subfolder has alternative renders of the same characters in different visual contexts. Bargain Brian - Supplier.png, Bouncy Brooke - Front house Manager.png, etc.

---

### Web content — `assets/Web Content/`

**Images (`Images/` subfolder, 81 files):**
Feature screenshots organized by product area. Use when a slide needs a real-world product context image:
- `budgeting-features/1-4.png` — Budgeting and Financials page features
- `invoicing-features/1-6.png` — AI Invoicing / AP Automation features
- `purchasing-features/1-6.png` — Purchasing features
- `recipe-features/2-5.png` + `recipe-feature-05-pos-sync.png` — Recipe and Menu
- `suppliers/001-010.jpg` — 10 supplier/hospitality photos (food, kitchen, hotel)
- `images/customer-service/ahyeh.jpg`, `darin.jpg` — support team photos
- `cert-soc2.png`, `cert-iso27001.png`, `cert-gdpr.png`, `cert-app.png` — trust badges
- `ttb-hero-16x9-poster.jpg` — Tame The Beast campaign hero

**Videos (`Videos/` subfolder, 15 MP4s):**
Only use when a slide explicitly requests video. Embed with `<video autoplay muted loop playsinline>`.
- `ai-invoicing.mp4`, `ai-invoicing-flow.mp4` — AI invoicing demo
- `purchasing.mp4` — Purchasing workflow
- `budgeting-and-financials.mp4` — Budgeting demo
- `recipe-and-menu-management.mp4` — Recipe demo
- `invoicing-and-ap-automation.mp4` — AP automation
- `ttb-hero-16x9.mp4`, `ttb-hero-9x16.mp4` — TTB campaign hero
- `ttb-paid-ad-01.mp4` to `ttb-paid-ad-05.mp4` — TTB paid ad cuts

**Animations (`Animations/` folder — do not use for now):**
GIFs and WebM animations are available but NOT included in presentations until Akila approves adding motion.

---

## HTML template spec

### Image path reference (from `template/` subfolder)

```
Logo (full):    ../assets/PurchasePlus Logos/2024-98-082-PurchasePlus-Logo-Horizontal-Slogan-Lock-up-RGB.png
Logo (white):   ../assets/PurchasePlus Logos/WHITE PurchasePlus Logo Horizontal Slogan Lock-up RGB 72dpi.png
Logo (emblem):  ../assets/PurchasePlus Logos/98-082 PurchasePlus Logo Emblem RGB 72dpi.png
Device mockup:  ../assets/PurchasePlus UI & UX/002_responsive-marketplace-desktop-mobile.png
Screen:         ../assets/PurchasePlus Web Application Screens/Artboard 2_PurchasePlu.png
UI card:        ../assets/Colourful UI UX/Stand Alone/Total Spend.png
Hero illus:     ../assets/Colourful UI UX/Illustrations/Hero Videos/002_spend-analytics-dashboard-hero.png
Manager char:   ../assets/Longarms Characters/Stand Alone/98-084 PurchasePlus Longarm Illustration Manager Retina.png
Buyer+Seller:   ../assets/Longarms Scenes/98-084 PurchasePlus Scene Illustration Buyer and Seller Interaction Transparent 300dpi.png
Marketplace sc: ../assets/Longarms Scenes/98-084 PurchasePlus Scene Illustration Global Marketplace Transparent 300dpi.png
```

### Slide right-panel CSS classes

```css
.sr-bg-screen  /* dimmed full-cover background (opacity .15-.25), z-index 1 */
.sr-device     /* device mockup centered, bottom-anchored, z-index 2 */
.sr-screen     /* floating artboard card, center of panel, z-index 2 */
.sr-scene      /* full Longarms scene, fills panel, z-index 2 */
.sr-char       /* Longarms character, bottom right, z-index 4 */
.sr-card       /* floating UI card, positioned via inline style, z-index 3 */
```

### Standard 7-slide scaffold

```
Slide 1: Cover       — full title, tagline, device mockup + scene
Slide 2: Challenge   — 3-stat row, artboard screen + character
Slide 3: Solution    — 3-col pillars, dimmed screen + floating cards + character
Slide 4: How It Works— 4-step timeline, artboard screen + character
Slide 5: Outcomes    — 2×2 show-grid, hero illustration + UI card
Slide 6: Proof       — quote + 3 metrics, Longarms scene
Slide 7: Get Started — 3 concept cards + CTA button, dark right panel
```

---

## Higgsfield image generation rules

### Approved models only
- `nano_banana_2` (Nano Banana 2) — best for character and illustrated work
- `seedream_v4_5` (Seedream 4.5) — vector illustrations, face/scene consistency
- `image_auto` — auto-routes to best model
- `gpt_image_2` (GPT Image 2) — typography, logos, UI-heavy compositions

**Never use:** any model with "flash", "lite", "fast", "1.5" in the name, or `z_image`.

### Longarms pose generation

When generating new Longarms poses for `New Poses/` folder:
1. Use `nano_banana_2` with the existing character PNG as `--image` reference
2. Prompt: "Vector illustration character. Long curved cartoon arms, abstract face, no nose, no mouth detail, same navy business suit [or relevant outfit], same colors and proportions as reference. Pose: [specific pose]. Pure white background. Same illustration style as reference. Do not add facial features. Do not change the character's proportions or color palette."
3. Generate one pose at a time, save each with a descriptive name: `manager-sitting-desk.png`, `manager-waving.png`, etc.
4. Use `--aspect_ratio 1:1` for standing poses, `3:2` for sitting/wide poses.

### UI composite generation

When a slide needs a unique composite (character + UI + scene) that doesn't exist in the asset library:
1. Use `gpt_image_2` for UI-heavy compositions
2. Pass the artboard screenshot + character PNG as reference images
3. Always use UniversalSans for any on-image text
4. Never invent UI that doesn't exist in the asset library

---

## GitHub Pages deploy workflow

1. Write the HTML as `[slug].html` in this folder.
2. Copy to repo: `cp "[slug].html" /Users/lmh/pp-pitch-2026/[slug].html`
3. Copy any referenced images that aren't already in the repo to `/Users/lmh/pp-pitch-2026/assets/`
4. Encrypt: `cd /Users/lmh/pp-pitch-2026 && npx staticrypt [slug].html -p "PurchasePlusGTM5000" -d . --short`
5. Commit: `git add . && git commit -m "Add [slug] presentation" && git push`
6. Live URL: `https://akilalohan-lang.github.io/pp-pitch-2026/[slug].html`
7. Password: `PurchasePlusGTM5000` (unless a different password was requested)

**Image path note for deployment:** Local paths use `../assets/`. When deploying, images must be either:
- Copied to the repo and path updated to `assets/[filename]`
- Or embedded as base64 data URIs (for self-contained files)

---

## Document ingestion

### PPTX (`python-pptx`)
```python
from pptx import Presentation
prs = Presentation("file.pptx")
for slide in prs.slides:
    title = slide.shapes.title.text if slide.shapes.title else ""
    body = [s.text_frame.text for s in slide.shapes if s.has_text_frame and s != slide.shapes.title]
    notes = slide.notes_slide.notes_text_frame.text if slide.has_notes_slide else ""
    images = [s.image.blob for s in slide.shapes if s.shape_type == 13]
```
Map: 1 title + 1-2 body → split layout. 3+ bullets → concept-grid or pillars. Numbers → stats-row. Table → show-grid or timeline.

### PDF (`PyMuPDF` / `fitz`)
```python
import fitz
doc = fitz.open("file.pdf")
for page in doc:
    text = page.get_text()
    images = [doc.extract_image(img[0]) for img in page.get_images()]
```
Each page = one slide. Extract embedded images, save as `slide_N_img_M.png`.

### DOCX (`python-docx`)
```python
from docx import Document
doc = Document("file.docx")
for para in doc.paragraphs:
    if para.style.name.startswith("Heading"): # new slide
    else: # body content
```
Heading 1/2 → new slide title. Paragraphs below → body. Lists → concept-grid.

### Plain text / Markdown
Split on blank lines or `#` headings. Each `#` heading = new slide.

### Google Slides
Ask user to export as PPTX (File > Download > Microsoft PowerPoint), then process as PPTX.

---

## Voice rules

1. Sentence fragments over full sentences for headlines.
2. Max 5 lines of body copy per slide.
3. No em-dashes (`—`). No emojis. No "In conclusion", "leverage", "synergy", "unlock", "Moreover", "It's worth noting".
4. Specifics preferred: "5,000 hotels" not "thousands of properties".
5. Active voice, present tense.
6. One idea per slide.
7. Positive framing.
8. Audience-first.

---

## Slack conversational flow (Phase 5, future)

1. Greeting on mention/DM
2. File ask (PPTX, PDF, DOCX, link, or paste)
3. One clarifying question: "Who is this for, and what's the one thing you want them to walk away thinking?"
4. Confirm slide count
5. Build, deploy, return URL + password
6. Tone: warm, direct, competent. Sounds like a capable colleague, not a support bot.

---

## How to build a new presentation

From this folder in a new Claude session:

> Build a presentation from [file/text/link]. Save as [slug].html. Read CLAUDE.md first. Open in browser when done, then deploy to GitHub Pages.

Agent steps:
1. Read CLAUDE.md (this file).
2. Read and parse source document.
3. Read `template/presentation_template.html` for CSS, JS, component patterns.
4. Write new HTML file, all slides populated with real assets.
5. Open locally in browser for review.
6. After approval: deploy workflow, return live URL.
