# Slide 04 — Text + Longarms

Standard content slide with rich text left, UI card collage and Longarms character right. Use for problem statements, context-setting, or any slide where data and visual energy are both needed.

---

## Layout

Standard two-column split: **left panel (56%)** holds all text. **Right panel (44%)** is a layered visual composition.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text
- AI fills from the slide topic (e.g. "The Challenge", "The Opportunity")

### 2. Heading (h2)
- Font: Inter 200, `clamp(36px, 4.8vw, 60px)`, `letter-spacing: -1.8px`
- 2 lines. Last 2–3 words in `span.grad`
- `max-width: 22ch`

### 3. Lead Paragraph (p.lead)
- Font: Inter 300
- 1–2 sentences. Max 3 lines.

### 4. Stats Row (`.stats-row`)
- 3 `.stat-card` elements side by side
- Each has: `.stat-num` (large metric, sometimes `span.grad`) + `.stat-label` (small body text)
- Use real data from the briefing. Fallback: placeholder metrics.

### 5. Kicker (p.kicker)
- Small, muted, uppercase. Source or supporting note.

---

## Right Panel — Visual Layers (z-index stacked, position absolute)

| Layer | Element | Description |
|-------|---------|-------------|
| z-index 1 | `.sr-bg-screen` | Application screen as dimmed background. Use `Artboard 3_PurchasePlu.png` or similar. |
| z-index 3 (×3) | `.sr-card` | 3 floating UI cards at different positions. Use Total Spend, Closed Invoices, Food Cost PNGs. Each has slight rotation. |
| z-index 4 | `.sr-char` | Longarms character anchored bottom-right. `height:70%`. Use Bargain Brian or Manager. |

### Card Positions (master template defaults)
- Card 1 (Total Spend): `top:8%; left:6%; width:38%;`
- Card 2 (Closed Invoices): `top:36%; right:4%; width:40%; transform:rotate(1.5deg)`
- Card 3 (Food Cost): `bottom:18%; left:5%; width:34%; transform:rotate(-2deg)`

---

## Assets Referenced

- Background screen: `../assets/PurchasePlus Web Application Screens/Artboard 3_PurchasePlu.png`
- UI cards: `../assets/Colourful UI UX/Stand Alone/Total Spend.png`, `Closed Invoices.png`, `Food Cost.png`
- Character: `../assets/Longarms Characters/Named Characters/98-084 PurchasePlus Longarm Illustration Bargain Brian Retina.png`

---

## Design Rules

1. Text is ALWAYS above graphics. `z-index:10` on `.slide-left`.
2. The character must never cover the left panel text.
3. The `.sr-bg-screen` is always dimmed — `opacity:0.22` or via `.sr-bg-screen` CSS class.
4. Cards must have drop-shadow from the PNG itself (transparent background). No white card backing.
5. `text-wrap:balance` on all headings and paragraphs.
6. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Extract stats and body copy from the briefing document.
- Choose a Longarms character that fits the slide mood (Bargain Brian for savings/cost, Manager for authority, Speedy Simon for efficiency).
- Choose app screen and UI cards that relate to the slide topic.
- Keep the stats row to exactly 3 items.
- Apply `span.grad` to the last 2–3 words of h2 and to standout metrics.
