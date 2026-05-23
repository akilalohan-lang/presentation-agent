# Slide 09 — What You Get

Outcomes slide with a 2x2 card grid on the left and a hero illustration on the right. Use to summarise measurable results and benefits.

---

## Layout

Standard two-column split: **left panel (56%)** holds text and outcome cards. **Right panel (44%)** holds a hero scene illustration and a floating KPI card.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "04 / What You Get")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.
- Outcome-framed: "Real outcomes. Not promises."

### 3. Lead Paragraph (p.lead)
- 1–2 sentences. Time-bound promise (e.g. "within the first 90 days").

### 4. Show Grid (`.show-grid`)
- 4 `.show-card` elements in a 2×2 grid
- Each card: `.show-tag` (short tag like "SAVINGS", "COMPLIANCE", "EFFICIENCY", "VISIBILITY") + `.show-title` (5–8 words) + `.show-body` (1–2 sentences)

---

## Right Panel — Visual Layers

| Layer | Element | Position |
|-------|---------|---------|
| z-index 2 | `.sr-scene` | Hero illustration fills the panel. `object-fit:contain; padding:24px 16px; opacity:.92` |
| z-index 3 | `.sr-card` | One floating UI card at `bottom:12%; left:6%; width:38%; transform:rotate(-2deg)` |

### Asset References (master template defaults)
- Scene: `../assets/Colourful UI UX/Illustrations/Hero Videos/002_spend-analytics-dashboard-hero.png`
- Card: `../assets/Colourful UI UX/Stand Alone/Food Cost.png`

---

## Design Rules

1. The show grid always has exactly 4 cards.
2. Show tags are always uppercase, short (1–2 words), and distinct (no duplicates).
3. The hero scene fills the right panel — do not crop or constrain with a white container.
4. The floating card has a slight rotation for a natural, non-mechanical feel.
5. `text-wrap:balance` on all headings, card titles, and card bodies.
6. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Extract the 4 main outcomes from the briefing. Map each to a tag: Savings, Compliance, Efficiency, Visibility (or suitable alternatives).
- Keep `.show-body` to 1–2 sentences. Focus on the mechanism, not just the result.
- Choose a hero illustration that relates to the outcomes (spend analytics, dashboards, connected supply chain).
- Choose a UI card that reinforces a specific outcome (e.g. Food Cost for savings, Closed Invoices for compliance).
