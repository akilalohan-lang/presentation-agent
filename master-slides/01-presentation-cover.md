# Slide 01 — Presentation Cover

The first slide every presentation opens with. Sets the tone, identifies the presenter, and establishes the audience context.

---

## Layout

Two-column split: **left panel (56%)** holds all text content. **Right panel (44%)** holds the brand gradient background and cloud decoration. The device mockup (`004_longarms_mockup.png`) is positioned absolutely relative to the full slide, overlapping both panels, anchored bottom-right.

Text in the left panel always renders above the mockup (z-index: 10 on slide-left). A graphic must never sit on top of text — ever.

---

## Left Panel — Content Blocks (top to bottom)

### 1. PurchasePlus Logo
- File: `assets/PurchasePlus Logos/2024-98-082-PurchasePlus-Logo-Horizontal-Slogan-Lock-up-RGB copy.png`
- Height: 144px, left-aligned
- Always the first element — above the title

### 2. Presentation Title (h1)
- Font: Inter 200 (light), large clamp size
- Last 2–3 words use the brand gradient span class `grad`
- The AI decides the title based on the document content
- Rule: title must be legible at all screen sizes without wrapping awkwardly
- If title is long, the AI adjusts font-weight or reduces font-size via inline style
- Limit label shown in master template only: `MAX 7 WORDS` in `#ee2b62`

### 3. Paragraph / Tagline (p.lead)
- Font: Inter 300, smaller than h1
- 1–2 sentences describing the core value or purpose of the presentation
- Must not wrap to more than 3 lines at standard viewport
- Limit label shown in master template only: `MAX 160 CHARACTERS` in `#ee2b62`

### 4. Presenter Block
- **Name** — font-size 15px, font-weight 600, ink color
- **Job title · Company** — font-size 13px, body color
- **Date** — font-size 12px, muted color (format: Month Year)
- AI fills these from the briefing. Fallback: "Presenter Name", "Job Title · Company", current month/year.
- Labels shown in master template only: `PRESENTER NAME`, `JOB TITLE · COMPANY`, `MONTH YEAR` in `#ee2b62`

### 5. Client Logo Slot (optional)
- **RULE: This entire section — including the "Prepared for" label, the border-top divider, and the logo placeholder — is only rendered when a client logo is provided in the briefing. If no client is specified, omit it completely. Do not show an empty placeholder.**
- Section: "Prepared for" label (uppercase, muted, 10px)
- Dashed placeholder box shown in master template only (for layout reference)
- When a client logo is provided in the briefing, the AI replaces the placeholder with the actual logo (height: 36px, object-fit: contain, left-aligned)
- When no client is specified, this entire section is omitted from the generated presentation

---

## Right Panel — Visual

- Background: `var(--grad-img)` soft gradient
- Two CLOUDS.png decorations at top (opacity 0.72 and 0.55, rotated)
- Radial purple glow overlay at top

---

## Device Mockup

- File: `assets/PurchasePlus UI & UX/004_longarms_mockup.png`
- Position: `position:absolute; right:-2%; bottom:3%; width:84%; height:auto; z-index:5`
- Anchored to the right edge, lifted off the bottom edge
- Must never cover the text — slide-left has z-index:10 to ensure text is always on top
- Responsive: width % scales with the slide container automatically

---

## Design Rules (non-negotiable)

1. Text is ALWAYS above graphics. Never the other way around.
2. The logo is always the first element — above the title, left-aligned.
3. The gradient accent (`span.grad`) always applies to the last meaningful phrase of the title.
4. The client logo slot is only rendered when a client is present in the briefing.
5. The mockup stays at `right:-2%; bottom:3%` — do not reposition unless Akila approves a change.
6. No em-dashes. No emojis. No "leverage", "synergy", "unlock".
7. `text-wrap: balance` on all headings and paragraphs — no orphaned words.

---

## AI Instructions — When Generating This Slide

- Extract the presentation title from the uploaded document or briefing. If none, infer from context.
- Extract presenter name and job title from the briefing. If not provided, leave as editable placeholder.
- Extract client name/logo from the briefing. If none, omit the client logo slot entirely.
- Set the date to the current month and year automatically.
- Apply `span.grad` to the last 2–3 words of the title.
- Do not change the layout, asset positions, or CSS classes. Only change text content and optionally the client logo.
