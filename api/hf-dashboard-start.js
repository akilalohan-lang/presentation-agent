// Generates a PurchasePlus analytics dashboard image via Higgsfield.
// Accepts { model, topic } in the POST body.
// Auto-refreshes the Higgsfield token via Edge Config on 401.
const HF_API  = 'https://fnf.higgsfield.ai';

const BASE_PROMPT = `High-fidelity screenshot of a dark-mode B2B SaaS analytics dashboard. \
Full-bleed portrait image, no browser chrome, no device frame. \
Dark navy background (#0f1117) fills the entire image.

HEADER BAR (top 8% of image):
Left: small text "PURCHASEPLUS ANALYTICS" in muted grey. Below it: "Spend Intelligence Report" in white 22px bold.
Right: "FY 2025–26  Q4" in grey, then a green dot with "Live" text.

KPI ROW (next 16% of image, 4 equal dark cards side by side with 1px borders):
Each card has: large metric number (28px, colored), label text below (12px grey), trend text below that (12px).
Card 1: "$2.4B" in purple, "TOTAL SPEND", "+12% YoY" in green.
Card 2: "40M+" in teal, "INVOICES", "99.9% Accuracy" in green.
Card 3: "18%" in purple, "COST SAVINGS", "+4.2% vs prior" in green.
Card 4: "1.8d" in teal, "INVOICE CYCLE", "↓ from 14 days" in red.

CHARTS AREA (bottom 76% of image). Split into two columns: LEFT 60% wide, RIGHT 40% wide.

LEFT COLUMN — one full-height bar chart card titled "Monthly Spend by Category":
Dark card background. Y-axis on the left with labels: $800k, $600k, $400k, $200k, $0. Horizontal gridlines.
Six vertical bars, evenly spaced, each bar is narrow with clear gaps between bars. Bars must NOT fill the full chart height — they should reach their exact data value on the y-axis.
Bar data and colors:
Food → $750k, deep purple (#5b21b6)
Bev → $520k, royal blue (#3766fe)
Equip → $380k, teal (#00bdc5)
Linen → $240k, light purple (#a956ff)
Clean → $180k, pink-red (#ee2b62)
Other → $120k, light teal (#67e8f9)
Dollar value label rendered in white text directly above each bar.
Category name label in grey below each bar on the x-axis.

RIGHT COLUMN — split into two stacked chart cards, each taking exactly 50% of the right column height.

RIGHT TOP — "Spend Distribution" donut chart:
Dark card, title "Spend Distribution" in white 14px bold top-left.
A large donut ring centered in the card. The ring must fill at least 65% of the card width. Ring segments in the 6 brand colors proportional to: Food 42%, Bev 28%, Equip 19%, Linen 6%, Clean 3%, Other 2%.
A compact legend to the right of or below the donut: colored dot + category name + percentage on each row.
The donut must be LARGE AND PROMINENT. Not small. Not tiny. It fills the card center.

RIGHT BOTTOM — "Invoice Cycle Time" line chart:
Dark card, title "Invoice Cycle Time" in white 14px bold top-left. "1.8d" in teal 20px bold top-right.
Y-axis labeled "Days" with ticks at 0, 4, 8, 12, 16. Horizontal gridlines.
One smooth curve declining from 14.0 at the far left x-axis to 1.8 at the far right x-axis.
The line uses a gradient stroke: starts purple (#7c5dff) on the left, ends teal (#00bdc5) on the right.
Small circle data points on the line. The curve is bold and clearly visible — at least 3px stroke weight.

All text throughout is sharp, legible, correctly proportioned. No blurred text. No distorted letterforms. \
No watermarks. No logos. No brand names. White and light-grey text on dark backgrounds throughout.`;

import { hfFetch } from './lib/hf-auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { model = 'gpt_image_2' } = req.body || {};

  const body = {
    job_set_type: model,
    params: {
      prompt: BASE_PROMPT,
      aspect_ratio: '9:16',
      resolution: '2k'
    }
  };

  let r;
  try {
    r = await hfFetch(token =>
      fetch(`${HF_API}/agents/jobs`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
    );
  } catch (e) {
    return res.status(401).json({ error: e.message });
  }

  if (!r.ok) return res.status(r.status).json({ error: await r.text() });

  const ids = await r.json();
  const jobId = Array.isArray(ids) ? ids[0] : ids;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ jobId });
}
