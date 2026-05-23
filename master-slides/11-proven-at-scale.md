# Slide 11 — Proven at Scale

Scale and credibility slide. Text left with a customer quote block and three headline metrics. Right panel has cloud decorations, a floating KPI card, and a Buyer + Seller scene illustration.

---

## Layout

Standard two-column split: **left panel (56%)** holds all text. **Right panel (44%)** has layered decorative and illustrative elements.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "05 / Proven at Scale")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.
- Example: "5,000 properties. **One platform.**"

### 3. Statement Block (`.statement-block`)
- A pull quote in a styled block — same quote as Slide 10 or a different customer voice
- No quote marks in the HTML — the block style implies a quotation

### 4. Kicker (p.kicker)
- Attribution line for the statement block quote

### 5. Metrics Row (`.metrics-row`)
- 3 `.metric` elements: `.metric-num` (large) + `.metric-label` (2–3 sentences describing context)
- Apply `span.grad` to the standout metric numbers
- Labels are slightly longer here than in KPI strips (can be 1–2 short sentences)

---

## Right Panel — Visual Layers

| Layer | Position | Asset |
|-------|---------|-------|
| Cloud — top left | `top:-4%; left:-8%; width:52%; opacity:.55; transform:rotate(-12deg)` | `CLOUDS.png` |
| Cloud — top right | `top:-2%; right:-12%; width:44%; opacity:.4; transform:rotate(18deg) scaleX(-1)` | `CLOUDS.png` |
| Floating KPI card | `top:6%; left:50%; transform:translateX(-50%); width:54%; z-index:3` | `Procurement Savings.png` (SR card) |
| Scene illustration | `.sr-scene` `padding:28% 4px 0; object-position:bottom center; opacity:.96` | Buyer and Seller Interaction scene |

### Asset References
- Clouds: `../assets/Colourful UI UX/Stand Alone/CLOUDS.png`
- Card: `../assets/Colourful UI UX/Stand Alone/Procurement Savings.png`
- Scene: `../assets/Longarms Scenes/98-084 PurchasePlus Scene Illustration Buyer and Seller Interaction Transparent 300dpi.png`

---

## Design Rules

1. The statement block always comes before the metrics row — quote first, proof second.
2. The metrics row has exactly 3 items.
3. At least one metric number uses `span.grad`.
4. The scene illustration is bottom-anchored — `padding-top:28%` pushes it below the KPI card.
5. Cloud decorations are always low opacity — they frame the composition, not compete with it.
6. `text-wrap:balance` on all headings and paragraphs.
7. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Extract 3 headline metrics from the briefing (properties, annual spend, accuracy/uptime).
- Use the customer quote from the briefing or the template default.
- Apply `span.grad` to the largest number and the percentage metric.
- Do not change the cloud positions or opacity values.
- Keep metric labels to 1–2 sentences — they provide context, not marketing copy.
