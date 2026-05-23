# Slide 12 — Meet the Team

Leadership team introduction slide. Left panel has a 3×2 person card grid. Right panel has cloud decorations and a Manager Longarms character.

---

## Layout

Standard two-column split: **left panel (56%)** holds text and team grid. **Right panel (44%)** has decorative layers and a character.

---

## Left Panel — Content Blocks

### 1. Eyebrow
- `div.slide-eyebrow` with `span.grad` text (e.g. "Our People")

### 2. Heading (h2)
- 2 lines. Last 2–3 words in `span.grad`.
- Example: "The team **behind the platform.**"

### 3. Lead Paragraph (p.lead)
- 1–2 sentences about the team's background or expertise.

### 4. Team Grid (`.team-grid`)
- 3×2 grid (3 columns, 2 rows) of `.person-card` elements
- Each card: `.person-photo` (40×40px circular) + name div + role div

#### Person Card Markup
```html
<div class="person-card">
  <img class="person-photo" src="../assets/Team/[name].avif" alt="[Full Name]">
  <div>
    <div class="person-name">[Full Name]</div>
    <div class="person-role">[Title]</div>
  </div>
</div>
```

#### Special: Last Card (Marketing/AI-Driven)
The 6th card (presenter/AI) has a gradient avatar instead of a photo:
```html
<div class="person-card" style="background:var(--grad-soft);border-color:rgba(124,93,255,.2);">
  <div style="width:40px;height:40px;border-radius:50%;background:var(--grad);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;color:#fff;flex-shrink:0;letter-spacing:.04em;">[Initials]</div>
  <div>
    <div class="person-name">[Name]</div>
    <div class="person-role"><span class="grad">[Role]</span></div>
  </div>
</div>
```

---

## Team Photos — Available Assets

| File | Person | Role |
|------|--------|------|
| `assets/Team/nathan.avif` | Nathan Gyaneshwar | Founder |
| `assets/Team/malcolm.avif` | Malcolm Jull | Chief Executive Officer |
| `assets/Team/karny.avif` | Karny Dhah | Chief Financial Officer |
| `assets/Team/mitch.avif` | Mitch Hulst | Chief Operating Officer |
| `assets/Team/peter.png` | Peter Hubbard | Chief Product Officer |
| Gradient avatar | Akila Lohan | Head of Marketing |

All photos from `../assets/Team/` relative to `/template/`. Files are `.avif` (except Peter: `.png`).

---

## Right Panel — Visual Layers

| Layer | Position |
|-------|---------|
| Radial purple glow | `top:0; height:60%; background:radial-gradient(ellipse 80% 60% at 50% -10%,…)` |
| Cloud — top left | `top:-6%; left:-14%; width:64%; opacity:.45; transform:rotate(-8deg)` |
| Cloud — bottom right | `bottom:-8%; right:-10%; width:50%; opacity:.35; transform:rotate(12deg) scaleX(-1)` |
| Manager character | `.sr-char` `height:72%; right:0%; z-index:3` |

---

## Design Rules

1. The team grid always has 6 cards — 3 columns × 2 rows.
2. Team photos are always circular via `.person-photo` class.
3. The 6th card uses the gradient avatar pattern, not a photo.
4. The 6th card's role text uses `span.grad` to distinguish the presenter.
5. `text-wrap:balance` on headings and lead paragraph.
6. No em-dashes. No emojis.

---

## AI Instructions — When Generating This Slide

- Use the team members and roles from the briefing.
- Match photo filenames to the team members available in `assets/Team/`.
- If a person has no photo in assets, use the gradient avatar pattern instead.
- Update the 6th card with the presenter's name and initials from the briefing.
- Do not change cloud positions, opacity, or character size.
