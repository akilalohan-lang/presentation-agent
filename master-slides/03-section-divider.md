# Slide 03 — Section Divider

Full-bleed dark chapter break. Used between agenda and content chapters, or between major sections. No split panels. Dark gradient fills the entire slide.

---

## Layout

No `.slide-left` / `.slide-right` split. The slide contains a single `.divider-inner` div that fills the entire slide area.

`.divider-inner` uses `background: var(--grad-deep)` (`linear-gradient(135deg, #594574 0%, #220646 100%)`).

---

## Content Blocks (inside `.divider-inner`)

### 1. Ambient Glow Orbs
- Two `.chart-glow` divs for radial purple/blue glow overlays — purely decorative, no text
- Positioned absolutely at different corners (top-left large purple, bottom-right smaller blue)

### 2. Chapter Label (`.divider-chapter`)
- "Chapter 01" — small, uppercase, muted white, letter-spaced
- AI fills the chapter number from context

### 3. Chapter Title (`.divider-title`)
- Large, bold, white — 2–3 words max per line
- Last meaningful word or phrase uses `span.grad`
- Example: `The <span class="grad">Challenge</span><br>We Solve.`

### 4. Divider Line (`.divider-line`)
- Thin horizontal rule in muted white, fixed width ~48px

### 5. Decorative Cloud (optional)
- `CLOUDS.png` positioned bottom-right, low opacity (0.07), rotated, pointer-events none

---

## Design Rules

1. No text content beyond the chapter number and title. No paragraphs, no bullets.
2. `.grad` always applies to the last meaningful word or phrase of the title.
3. The `.divider-line` always appears below the title.
4. The clouds decoration is optional — use it when the chapter feels sparse.
5. The dark background (`var(--grad-deep)`) is non-negotiable. Never use light background on this slide type.
6. `text-wrap:balance` applies to `.divider-title`.

---

## AI Instructions — When Generating This Slide

- Extract the chapter number and title from the briefing or the surrounding slides.
- Keep the title to 3–6 words across 1–2 lines.
- Apply `span.grad` to the last 1–2 words.
- Do not add paragraphs, stats, or any body copy to this slide type.
- Do not change `.divider-inner` or `.chart-glow` structure.
