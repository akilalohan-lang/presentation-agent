# Slide 10 — Customer Quote

Social proof slide with a pull quote, attribution, and client logo strip on the left. Right panel has a scene illustration and a floating KPI metric card.

---

## Layout

Standard two-column split: **left panel (56%)** holds the quote and social proof elements. **Right panel (44%)** has a scene illustration and floating metric card.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "Client Voice")

### 2. Quote Mark (`.quote-mark`)
- Large decorative opening quotation mark (typographic `"`)
- Font: ~120px, gradient or muted color, positioned above the quote body

### 3. Quote Body (`p.quote-body`)
- The full customer quote — 1–3 sentences
- Font: Inter 300, ~17px, ink color
- Do NOT abbreviate the quote with ellipsis

### 4. Attribution (`.quote-attr`)
- `.quote-avatar` — a single letter (first initial) in a small gradient circle
- `.quote-name` — role or name (font-size 15px, font-weight 600)
- `.quote-company` — company description (font-size 13px, body color)

### 5. Client Logo Strip (`.client-logo-strip`)
- `.client-logo-strip-label` — "Trusted by" (uppercase, muted, 10px)
- 3–5 `img` elements — client logos from the PurchasePlus website CDN
- Logos: Accor, IHG, Sofitel, Marriott (use the Webflow CDN URLs already in the template)
- AI replaces with real client logos from the briefing if provided

---

## Right Panel — Visual Layers

| Layer | Element | Position |
|-------|---------|---------|
| z-index 2 | `.sr-scene` | Scene fills the right panel. Padding: `10% 4px 0`. Opacity `.88`. |
| z-index 3 | Floating KPI card | A white card with a single metric (e.g. "Invoice Cycle Time", "1.8 days", "Down 87%"). Positioned `top:10%` centered. |

### Floating KPI Card Markup
```html
<div style="position:absolute;top:10%;left:0;right:0;display:flex;justify-content:center;z-index:3;">
  <div style="background:rgba(255,255,255,.94);border:1px solid var(--border);border-radius:12px;padding:14px 18px;max-width:195px;box-shadow:var(--shadow-lg);">
    <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:6px;">[Metric Label]</div>
    <div style="font-size:24px;font-weight:200;letter-spacing:-1px;color:var(--ink);line-height:1;">[Number] <span style="font-size:13px;color:var(--green);font-weight:500;">[unit]</span></div>
    <div style="font-size:11px;color:var(--muted);margin-top:2px;">[Comparison line &darr; %]</div>
  </div>
</div>
```

### Asset References (master template defaults)
- Scene: `../assets/Longarms Scenes/98-084 PurchasePlus Scene Illustration Buyer and Seller Interaction Transparent 300dpi.png`

---

## Design Rules

1. The quote must be verbatim — never paraphrase or shorten with ellipsis.
2. The `.quote-avatar` letter is always the first initial of the speaker's role or name.
3. Client logos use the Webflow CDN URLs — do not hotlink external sources.
4. The floating KPI card is always white — it must contrast against the gradient panel.
5. `text-wrap:balance` on the quote body and all headings.
6. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Extract the customer quote from the briefing. If none is provided, use the template default.
- If a real client name is provided, use their initial and update the attribution.
- Update the floating KPI card metric to match the most compelling number from the quote.
- Replace client logos with logos from the briefing if provided; otherwise use the four default logos.
