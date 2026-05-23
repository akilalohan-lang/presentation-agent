# Slide 06 — Feature Highlight

Single feature focus slide. Text left with pills and metrics. Right panel has a product screen, a floating UI card, and a Longarms character.

---

## Layout

Standard two-column split: **left panel (56%)** holds all text. **Right panel (44%)** has layered visuals.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "Feature Focus")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.
- Describes the feature being highlighted.

### 3. Lead Paragraph (p.lead)
- 1–2 sentences. Benefit-first. Max 3 lines.

### 4. Feature Pills (`.feature-pills`)
- Row of `.feature-pill` tags — short labels (2–4 words each)
- Typically 5–8 pills representing feature capabilities
- Pills wrap naturally

### 5. Feature Metrics Row (`.feature-metric-row`)
- 3 metrics side by side: `.feature-metric-num` + `.feature-metric-label`
- Apply `span.grad` to standout numbers
- Labels: short (2–4 words)

---

## Right Panel — Visual Layers

| Layer | Element | Position |
|-------|---------|---------|
| z-index 2 | `.sr-screen` | Centered, slight rotation via `transform`. `width:82%`. |
| z-index 3 | `.sr-card` | One floating UI card, top-right, slight rotation. `width:38%`. |
| z-index 4 | `.sr-char` | Longarms character bottom-right. `height:56%`. |

### Asset References (master template defaults)
- Screen: `../assets/PurchasePlus Web Application Screens/Artboard 5_PurchasePlu.png`
- Card: `../assets/Colourful UI UX/Stand Alone/Total Spend.png`
- Character: Bargain Brian (for marketplace/cost) or Manager (for authority)

---

## Design Rules

1. Feature pills should not exceed 8 items — trim if needed.
2. Metrics row always has exactly 3 items.
3. Apply `span.grad` to at least one metric number.
4. The character `height` stays at `56%` unless the character is cut off at top — adjust to `52%` max.
5. `text-wrap:balance` on all headings and paragraphs.
6. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Choose the feature based on the briefing. One feature per slide — do not combine features.
- Select pills that are real capabilities of the feature, not marketing clichés.
- Match the screen artboard to the feature being highlighted.
- Keep metric labels to 3–4 words each.
- Apply `span.grad` to the standout metric (usually the largest or most impressive number).
