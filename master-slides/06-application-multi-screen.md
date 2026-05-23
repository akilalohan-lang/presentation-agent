# Slide 06 — Application Multi-Screen

Shows five application screens stacked vertically in a scrollable right panel. Each screen is individually clickable for lightbox zoom. Use to give a complete platform walkthrough without switching slides.

---

## Layout

Standard two-column split: **left panel (56%)** holds text content. **Right panel (44%)** has a dark-styled scrollable column of screens with arrow connectors between them.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "Platform Overview")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.
- Example: "Five views, **one connected system.**"

### 3. Lead Paragraph (p.lead)
- 1–2 sentences describing the scroll-through experience.

### 4. Concept Cards (`.concept-grid`)
- 2 `.concept-card` elements covering the key screens shown.

### 5. Scroll Hint (`.screen-hint`)
- Down chevron SVG + "Scroll the right panel · Click any screen to zoom"

---

## Right Panel — Scrollable Screen Stack

The right panel has `position:relative; overflow:hidden`. Inside is a `.ms-scroll` div that is absolutely positioned and scrollable.

```html
<div class="slide-right" style="position:relative;overflow:hidden;">
  <div class="ms-scroll">
    <!-- Screen -->
    <div class="screen-clickable" onclick="openLightbox(this.querySelector('img').src)" style="flex-shrink:0;width:100%;">
      <img src="[screen path]" alt="[description]">
    </div>
    <!-- Arrow connector -->
    <div class="ms-arrow">
      <svg ...><!-- down arrow SVG --></svg>
    </div>
    <!-- Repeat for each screen -->
  </div>
</div>
```

### Default Screens (Artboard order = logical workflow)

| Position | File | Scene |
|----------|------|-------|
| 1 | `Artboard 2_PurchasePlu.png` | Dashboard / home overview |
| 2 | `Artboard 3_PurchasePlu.png` | Invoice approval queue |
| 3 | `Artboard 4_PurchasePlu.png` | Purchase order detail |
| 4 | `Artboard 5_PurchasePlu.png` | All purchase orders list |
| 5 | `Artboard 6_PurchasePlu.png` | Spend analytics |

All paths: `../assets/PurchasePlus Web Application Screens/[file]`

### Arrow Connector SVG

```html
<svg width="22" height="32" viewBox="0 0 22 32" fill="none">
  <line x1="11" y1="0" x2="11" y2="20" stroke="rgba(124,93,255,.45)" stroke-width="1.5"/>
  <polyline points="4,14 11,24 18,14" fill="none" stroke="rgba(124,93,255,.65)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### Lightbox Behavior

Each `screen-clickable` div calls `openLightbox(src)` independently. All lightbox controls (zoom in, zoom out, Fit, close) work the same as on the Application Screen slide. Scroll to zoom, drag to pan.

---

## CSS Classes

- `.ms-scroll` — `position:absolute; inset:0; overflow-y:auto; padding:20px; display:flex; flex-direction:column; scrollbar-width:thin; scrollbar-color:rgba(124,93,255,.4) transparent`
- `.ms-arrow` — `display:flex; justify-content:center; align-items:center; padding:10px 0; flex-shrink:0`

---

## Design Rules

1. Always exactly 5 screens — no more, no fewer. If the AI needs fewer, still show 5 (repeat or use different Artboards).
2. Arrow connectors always between every pair of screens — 4 arrows total for 5 screens.
3. Each screen uses `.screen-clickable` class for the hover/zoom-in cursor and shadow.
4. The right panel background stays as `var(--grad-img)` — do not add a dark overlay.
5. `text-wrap:balance` on all left panel headings and paragraphs.
6. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Choose the 5 screens in logical workflow order (dashboard → catalog → order → invoice → analytics).
- Write the left panel concept cards to describe the first and last screens in the stack.
- Do not change the `.ms-scroll` or `.ms-arrow` structure.
- The scroll hint in the left panel is mandatory — do not remove it.
- Artboard files that exist: `Artboard 2_PurchasePlu.png` through `Artboard 10_PurchasePlu.png`. Use any 5 that tell a logical workflow story.
