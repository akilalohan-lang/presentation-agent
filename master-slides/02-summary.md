# Slide 02 — Summary

The agenda slide. Full-width, no split panels. Shows all content slides grouped by chapter with animated gradient cards.

---

## Layout

Full-width single column (`flex:1`). No slide-left/slide-right split. White background. Scrollable if content overflows (`overflow-y:auto`). Padding: `32px 52px 40px`.

---

## Structure (top to bottom)

### 1. Header
- Eyebrow: `Summary` in `span.grad`, centered, `font-size:11px; font-weight:700; letter-spacing:.18em; text-transform:uppercase`
- Heading: `h2` centered — "Here's what we'll **cover today.**" (last two words in `span.grad`)

### 2. Chapter Dividers
Each chapter uses a flex row: label (10px, uppercase, muted, `white-space:nowrap`) + horizontal rule (`flex:1; height:1px; background:var(--border-soft)`). Margin bottom 10px. Flex-shrink 0.

### 3. Card Grids
Cards use class `.sum-card`. Each card contains:
- `.sum-slide` — small label e.g. "Slide 03" (10px, muted)
- `.sum-num` — large slide number (28px, font-weight 200, gradient background clip)
- `.sum-title` — slide name (14px, font-weight 600)
- `.sum-desc` — one-sentence summary (12px, muted, font-weight 300)

Each card has `animation-delay` staggered by -0.6s per card for the animated gradient background.

---

## Chapter Structure (13-slide deck)

| Chapter | Title | Grid | Slides |
|---------|-------|------|--------|
| 01 | The Problem | `repeat(3,1fr)` | 03 Section Intro, 04 Text + Longarms, 05 App Screen |
| 02 | The Solution | `repeat(4,1fr)` | 06 Feature Highlight, 07 How It Works, 08 Analytics, 09 What You Get |
| 03 | The Proof | `repeat(3,1fr)` | 10 Customer Quote, 11 Proven at Scale, 12 Meet the Team |

Note: Slide 01 (Cover), Slide 02 (Summary), and Slide 13 (Call to Action) are not listed in the agenda.

---

## Animation

`.sum-card` uses `animation: sumGrad 8s ease infinite`. Background: `background-size: 300% 300%`. Each card's `animation-delay` offsets the gradient phase so cards animate independently.

---

## AI Instructions — When Generating This Slide

- Rebuild this slide from scratch based on the actual slides in the presentation.
- Count the slides and group them into 2–3 logical chapters.
- Use `repeat(N,1fr)` grid — N = number of cards in that chapter.
- Write a one-sentence `.sum-desc` per slide derived from the slide content.
- Stagger `animation-delay` from 0s, -0.6s, -1.2s … across all cards in sequence.
- Do not include Cover, Summary, or Call to Action cards in the grid.
- Do not change the chapter divider markup or `.sum-card` class structure.

---

## Design Rules

1. No split panels. The entire slide is one scrollable column.
2. Chapter labels are always uppercase, muted, and `white-space:nowrap`.
3. `.sum-card` always uses the animated gradient — never a flat background.
4. The last chapter row always uses `flex-shrink:0` with no `margin-bottom`.
5. `text-wrap:balance` applies globally — no orphaned words in descriptions.
