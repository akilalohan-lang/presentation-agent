# Slide 13 — Call to Action

Closing slide. Text left with implementation timeline and a primary CTA button. Right panel is a dark gradient with a vertical logo and contact URL.

---

## Layout

Standard two-column split: **left panel (56%)** holds all text and the CTA button. **Right panel (44%)** is `.slide-right.dark` — the dark gradient panel with the brand logo.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "Call to Action" or "Next Steps")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.
- Action-oriented: starts with "Ready to…" or equivalent.

### 3. Lead Paragraph (p.lead)
- 1–2 sentences. Time-to-value promise (e.g. "live in under 30 days").

### 4. Concept Cards (`.concept-grid`)
- 3 `.concept-card` elements in a 3-column grid (or 1-column auto)
- Each: `.concept-tag` (time label: "WEEK 1", "WEEK 2–4", "DAY 90") + `.concept-title` + `.concept-body`
- Tags describe the implementation timeline phase
- AI adjusts phases to match the client's onboarding timeline from the briefing

### 5. CTA Button (`.cta-btn`)
- Primary pill button in brand gradient
- `white-space:nowrap` — label must never wrap
- Default label: "Book a demo"
- Opens a URL in a new tab via `onclick="window.open('URL','_blank')"`
- AI fills the URL from the briefing. Default: `https://purchaseplus.com`

---

## Right Panel — Dark Panel

The dark panel uses `.slide-right.dark` which applies `background:var(--grad-deep)` and reverses the border.

Inside `.dark-cta`:
1. `.dark-cta-eyebrow` — "Get in touch" (small, uppercase, muted white)
2. Vertical logo — `logo-vertical-slogan-white.png` at `width:180px`
3. `.dark-cta-divider` — thin horizontal rule
4. `.dark-cta-url` — `purchaseplus.com` or the relevant URL from the briefing

### Asset Reference
- Vertical logo: `../assets/PurchasePlus Logos/logo-vertical-slogan-white.png`

---

## Design Rules

1. The CTA button is always `white-space:nowrap`. Label must never wrap to two lines.
2. The dark right panel never has a light background — `.slide-right.dark` is non-negotiable.
3. The logo is always the vertical version (`logo-vertical-slogan-white.png`) on the dark panel.
4. The concept cards always represent time phases — not feature bullets.
5. `text-wrap:balance` on headings and paragraphs.
6. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Extract the CTA URL from the briefing. If none, use `https://purchaseplus.com`.
- Adjust the timeline phases to match the client's onboarding process from the briefing.
- Update `.dark-cta-url` to match the briefing's website or contact URL.
- Keep the CTA button label short: "Book a demo", "Get started", "Schedule a call".
- Do not add additional concept cards — exactly 3 phases.
