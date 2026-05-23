# Slide 08 — Analytics Dashboard

KPI-heavy slide with a dark right panel containing animated HTML/CSS charts. No images on the right — pure gradient dark panel with bar chart, donut, and sparkline.

---

## Layout

Standard two-column split: **left panel (56%)** holds text and KPI strip. **Right panel (44%)** uses class `.chart-panel` — a dark gradient panel (`background:linear-gradient(160deg,#1c0832 0%,#0d1628 100%)`) rendered with inline `style="padding:0;border-left:none;"`.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "Spend Intelligence")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.

### 3. Lead Paragraph (p.lead)
- 1–2 sentences.

### 4. KPI Strip (`.kpi-strip`)
- 3 `.kpi-cell` elements horizontally
- Each: `.kpi-num` (large metric) + `.kpi-label` + `.kpi-delta` (small change indicator)
- Apply `span.grad` to standout KPI numbers

### 5. Pillars (`.pillars`)
- 3 `.pillar` elements (same markup as other slides)
- `.pillar-num.mono` uses a symbol (↗ ⊙ ☑) instead of a number
- `.pillar-title` + `.pillar-body` (1 sentence each)

---

## Right Panel — Chart Panel

The `.chart-panel` div contains three chart sections separated by `.chart-sep` dividers.

### Bar Chart
- `.chart-label` (uppercase, muted, small): "Monthly Spend by Category"
- `.bar-chart` with 6 `.bar-group` elements
- Each group: `.bar-fill` (gradient, height % set inline) + `.bar-lbl` (3–5 char abbreviation)
- Bar fill colors alternate between 3 gradient pairs: `#a956ff→#7c5dff`, `#7c5dff→#3766fe`, `#3766fe→#5b8aff`

### Donut Chart
- `.chart-label`: "Spend Distribution"
- `.donut-row` with `.donut-wrap` and `.donut-legend`
- Donut: 80×80px div with `border-radius:50%; background:conic-gradient(...)` and a centered `.donut-hole`
- Legend: 4 `.legend-item` rows with `.legend-dot` (colored circle) + label + `.legend-pct`

### Sparkline (SVG)
- `.chart-label`: "Invoice Processing Time (days avg)"
- SVG with gradient line path + fill area
- Two text annotations: start value at left, end value at right
- Gradient IDs: `#lg` (line gradient) and `#ag` (area fill gradient)

---

## Ambient Glow Orbs
- Two `.chart-glow` divs — purely decorative radial glows. Position top-right and bottom-left.

---

## Design Rules

1. The right panel is always dark. Never use a light background on this slide type.
2. Charts are HTML/CSS only — no external chart libraries.
3. The bar chart always has 6 bars.
4. The donut always has 4 segments (3 colored + 1 other).
5. The sparkline always shows improvement over time (line trends downward = time saved, or upward = growth).
6. `text-wrap:balance` on left panel headings and paragraphs.
7. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Replace KPI numbers with real data from the briefing.
- Adjust bar chart heights and labels to match actual spend categories.
- Adjust donut percentages to match actual spend distribution.
- Update sparkline annotations (start and end values) to match actual processing improvement.
- Keep the chart panel structure intact — only change data values and labels.
- The `.chart-glow` divs are decorative — do not remove them.
