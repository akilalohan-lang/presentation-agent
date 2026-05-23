# Slide 04 — Text + Longarms + UI

Standard content slide with rich text left, Longarms character scene right. The right panel image is **AI-generated via Higgsfield CLI** using the slide content as the creative brief. Use for problem statements, context-setting, or any slide where data and a custom scene are both needed.

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

## AI Instructions — When Generating This Slide (Text + Copy)

- Extract stats and body copy from the briefing document.
- Keep the stats row to exactly 3 items.
- Apply `span.grad` to the last 2–3 words of h2 and to standout metrics.
- After generating the slide text, proceed to the Higgsfield section below to generate the right panel image.

---

## Higgsfield — Right Panel Image Generation

The right panel image is generated via the `higgsfield` CLI. This replaces the default layered PNG assets.

### Image Specifications
- **Aspect ratio**: `9:16` (portrait — fills the right panel vertically)
- **Resolution**: `2k`
- **Model**: `text2image_soul_v2` (for character work) or `gpt_image_2` (for complex scenes with UI elements)
- **Output**: Save to `../assets/Generated/[slide-topic-slug]-scene.png` relative to `/template/`

### Longarms Character Rules (CRITICAL — never violate)

The Longarms characters are a fixed brand asset. Their appearance must be preserved exactly in every prompt:

1. **Clothes and colors are fixed**: Navy/dark blue business suit, white shirt, red/pink accent tie or collar detail. Do not change, remove, or recolor.
2. **Proportions are fixed**: Extremely long curved arms are the defining trait. Never shorten, straighten, or resize the arms.
3. **Face is fixed**: Abstract, minimal — no nose, very simple eyes and smile. Never add realistic facial features.
4. **Brand colors only**: The character palette is the PurchasePlus brand gradient (purple, blue). Do not introduce off-brand colors to the character.
5. **Poses and emotions CAN vary**: The character can be sitting, standing, gesturing, sad, happy, confused, celebrating — as long as clothes and proportions are unchanged.
6. **Accessories**: Hats or props are only added if the MasterChef user explicitly requests them. Do not add accessories by default.
7. **Reference image**: Always pass at least one Longarms reference image from `../assets/Longarms Characters/Stand Alone/` using the `--image` flag.

### Reference Images to Load

Pass the Manager character as the primary reference (most neutral pose):
```
--image "../assets/Longarms Characters/Stand Alone/98-084 PurchasePlus Longarm Illustration Manager Retina.png"
```

Optionally pass a second reference for pose variety (Bargain Brian or Speedy Simon from the Named Characters folder).

### Prompt Formula

Build the Higgsfield prompt from the slide content:
1. **Scene setting**: Describe the environment that matches the slide topic (e.g., "a chaotic restaurant kitchen with paper invoices everywhere" for a procurement pain slide).
2. **Character action**: What is the Longarms character doing? Match their emotion/pose to the slide mood.
3. **UI/data elements**: If the slide mentions dashboards or data, add these as background elements — broken screens, stacked paper, or glowing charts.
4. **Style lock**: Always end with: `vector illustration style, flat design, navy suit white shirt, extremely long curved arms, abstract minimal face, PurchasePlus brand colors purple and blue, white background`

### Example Prompt (master template default — "Procurement is still costing you")

```
A sad Longarms character with extremely long curved arms standing in a cluttered office, surrounded by stacked paper invoices, a broken dashboard screen showing red warning alerts, and a calendar showing overdue dates. The character wears a navy business suit with a white shirt. The scene feels chaotic and overwhelming. Vector illustration style, flat design, abstract minimal face with no nose, PurchasePlus brand colors purple and blue gradient accents, clean white background.
```

### CLI Command Template

```bash
higgsfield generate create text2image_soul_v2 \
  --prompt "[generated prompt from above formula]" \
  --image "../assets/Longarms Characters/Stand Alone/98-084 PurchasePlus Longarm Illustration Manager Retina.png" \
  --aspect_ratio 9:16 \
  --resolution 2k \
  --wait
```

Save the output URL. Download the image to `../assets/Generated/[slug]-scene.png` and use it as the `src` for the right panel `<img>` tag.

### HTML — Right Panel (Higgsfield image)

Replace the layered PNG composition with a single generated image:

```html
<div class="slide-right">
  <img src="../assets/Generated/[slug]-scene.png"
       alt="[scene description]"
       style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;">
</div>
```

If no generated image exists yet, fall back to the default layered composition (sr-bg-screen + sr-card × 3 + sr-char) as documented in the Right Panel section above.
