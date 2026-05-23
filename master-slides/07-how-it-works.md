# Slide 07 — How It Works

Step-by-step process slide. Text left with numbered timeline. Right panel has a product screen, a floating KPI card, and a Longarms character.

---

## Layout

Standard two-column split: **left panel (56%)** holds all text. **Right panel (44%)** has layered visuals.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "03 / How It Works")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.
- Describes the process outcome.

### 3. Lead Paragraph (p.lead)
- 1–2 sentences. Sets up the 4-step journey.

### 4. Timeline (`.timeline`)
- 4 `.tl-item` elements
- First item has class `active` (purple accent on number)
- Each item: `.tl-num.mono.grad` (step number, `span.grad` only on active) + `.tl-title` + `.tl-body`
- Step title: short verb phrase (4–7 words)
- Step body: 1–2 sentences

---

## Right Panel — Visual Layers

| Layer | Element | Position |
|-------|---------|---------|
| z-index 2 | `.sr-screen` | `top:42%; transform:translate(-50%,-50%) rotate(-1.5deg); width:80%` |
| z-index 3 | `.sr-card` | `top:8%; right:8%; width:40%` — Closed Invoices KPI card |
| z-index 4 | `.sr-char` | `height:66%; right:1%` — Speedy Simon (efficiency character) |

### Asset References (master template defaults)
- Screen: `../assets/PurchasePlus Web Application Screens/Artboard 5_PurchasePlu.png`
- Card: `../assets/Colourful UI UX/Stand Alone/Closed Invoices.png`
- Character: `../assets/Longarms Characters/Named Characters/98-084 PurchasePlus Longarm Illustration Speedy Simon Retina.png`

---

## Design Rules

1. Timeline always has exactly 4 steps.
2. The first step is always `active` (highlighted).
3. `.tl-num` for active item uses `mono grad` classes; inactive items use `mono` only.
4. Step titles must be verb phrases — they describe what happens, not categories.
5. Keep `.tl-body` to 1–2 sentences max.
6. `text-wrap:balance` on all headings and paragraphs.
7. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Extract the process steps from the briefing document.
- Write step titles as active verbs: "Browse and order…", "Approve in…", "Receive and confirm…", "AI matches…"
- Use Speedy Simon as the default character for process/efficiency slides.
- Always start with step `01` active, regardless of which step is being discussed.
- Do not add a 5th step — compress or combine if needed.
