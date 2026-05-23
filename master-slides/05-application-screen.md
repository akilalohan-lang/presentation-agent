# Slide 05 — Application Screen

Text left, full-bleed interactive screenshot right. The screenshot is zoomable via lightbox. Use to show the actual product UI in detail.

---

## Layout

Standard two-column split: **left panel (56%)** holds text and hints. **Right panel (44%)** is a full-bleed screen with no white container or padding.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "Platform Deep Dive")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.

### 3. Lead Paragraph (p.lead)
- 1–2 sentences describing what the screen shows.

### 4. Concept Cards (`.concept-grid`)
- 2 `.concept-card` elements, each with `.concept-tag` (short label like "LIVE", "SMART") and a title + body.
- Use 1–2 word tags. Keep body copy to 1 sentence.

### 5. Zoom Hint (`.screen-hint`)
- Small muted row with magnifier icon SVG + "Click the screen to zoom in and explore the interface"
- `margin-top:16px`

---

## Right Panel — Interactive Screen

The right panel renders the application screenshot full-bleed against the standard gradient background (`var(--grad-img)`). No white container. No padding on the sides.

```html
<div class="slide-right" style="display:flex;flex-direction:column;align-items:stretch;justify-content:center;padding:12px 0 0;">
  <div class="screen-clickable" onclick="openLightbox(this.querySelector('img').src)" style="width:100%;border-radius:0;flex:1;">
    <img src="[screen path]" alt="[description]">
  </div>
  <div class="screen-hint" style="justify-content:center;padding:8px 16px;">
    <!-- expand icon SVG -->
    Scroll to zoom · Drag to pan · Click outside to close
  </div>
</div>
```

### Lightbox Behaviour
- Clicking `.screen-clickable` calls `openLightbox(src)` which opens a full-screen dark overlay.
- **Scroll up** → zoom in (factor 1.12). **Scroll down** → zoom out (factor 0.89). Zoom is toward the cursor position.
- **Drag** → pan the image.
- **+ / −** buttons → zoom in/out by 1.25/0.8.
- **Fit button** → resets to the initial fit-to-viewport scale and position. Keyboard shortcut: `0`.
- **× button** → closes lightbox. Keyboard shortcut: `Escape`.
- **Percentage display** → shows current zoom level between + and − buttons.

---

## Assets Referenced

- Primary screen: `../assets/PurchasePlus Web Application Screens/Artboard 2_PurchasePlu.png`
- AI may substitute any other Artboard screen depending on the slide topic.

---

## Design Rules

1. Never wrap the screenshot in a white container (`background:#f8fafc` or similar). The gradient background of `.slide-right` shows around the screen.
2. The `.screen-clickable` always has `width:100%; border-radius:0` when full-bleed.
3. The zoom hint appears twice: once in the left panel above the fold, once below the screen in the right panel.
4. Do not change lightbox JS behaviour or control order.
5. `text-wrap:balance` on all headings and paragraphs.

---

## AI Instructions — When Generating This Slide

- Select the application screen most relevant to the slide topic from the `PurchasePlus Web Application Screens/` folder.
- Write the concept cards to match what is visible in the selected screen.
- Do not change the right panel structure. Only change the `src` of the screen image and the `alt` text.
- The Fit button in the lightbox resets zoom — do not remove it.
