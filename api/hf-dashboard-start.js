// Generates a PurchasePlus analytics dashboard image via Higgsfield.
// Accepts { model, topic } in the POST body.
// Auto-refreshes the Higgsfield token via Edge Config on 401.
const HF_API  = 'https://fnf.higgsfield.ai';
const PP_LOGO = 'ef87048f-c65e-4283-be15-a9a859ecb162';

const TOPIC_CONTEXT = {
  'Spend Intelligence': 'The dashboard is focused on spend analytics: category breakdown, bar chart, and donut distribution are the featured visuals.',
  'Budget Control':     'The dashboard is focused on budget tracking: department budget limits, rolling forecast, and alert indicators are featured.',
  'Invoice Automation': 'The dashboard is focused on invoice automation: the invoice cycle time line chart (14 days down to 1.8 days) is the hero visual.'
};

const BASE_PROMPT = `Photorealistic high-fidelity screenshot of a modern B2B SaaS procurement platform. \
Pure white background (#ffffff) throughout. Crisp, pixel-perfect UI. All text sharp and correctly proportioned — absolutely no stretching, no distortion, no blurring of letterforms.

LAYOUT (portrait, full-bleed screenshot):

TOP NAVIGATION BAR — white background, 1px bottom border. \
Left: small purple-and-blue cross/plus emblem only (no text beside it, emblem is ~32px). \
Right: date range pill "May 1 – May 31, 2026" with dropdown chevron, then a "Filters" button with funnel icon. Both in dark navy text.

LEFT SIDEBAR — white, 1px right border, approximately 180px wide. \
Vertical menu items in this exact order, each with a small monoline icon then label text: \
Home (active — purple filled pill background, white text), Requisitions, Purchase Orders, Invoices (red notification dot), Buy Lists, Catalogues, Products, Supplier, Inventory, Reports. \
Icons are thin line style, dark navy, matching each menu label.

MAIN CONTENT AREA — white background, starts right of sidebar. \
Heading: "Analytics" in bold 28px dark navy. Subheading: "May 2026" in 14px grey.

KPI CARDS ROW — four equal white cards with subtle rounded border and light shadow: \
Card 1: dollar-coin icon, "$2.4B", "Total Spend", green "+12.6% vs Apr 2026". \
Card 2: document icon, "40M", "Total Invoices", teal "99.9% Accuracy Rate". \
Card 3: trending-up arrow icon, "18%", "M Saved", green "+4.2% vs Apr 2026". \
Card 4: clock icon, "1.8", "Days", red "↓ 87.1% Down from 14.0 days".

BAR CHART — titled "Monthly Spend by Category" with "This Month" dropdown. \
Y-axis 0–800M. Bars: Food 735M (deep purple #5b21b6), Beverages 520M (royal blue #3766fe), Equipment 410M (teal #00bdc5), Linen 280M (light purple #a956ff), Cleaning 160M (red-pink #ee2b62), Other 95M (light teal #67e8f9). \
Clean gridlines, x-axis category labels, y-axis labels.

TWO BOTTOM CHARTS side by side: \
Left — "Spend Distribution" donut chart with the same 6 brand colors, percentage labels inside/outside, legend below. \
Right — "Invoice Processing Time" line chart, y-axis "Days" 0–16, smooth curve declining from 14.0 (left) to 1.8 (right), purple-to-teal gradient stroke, data points as dots.

TYPOGRAPHY: Clean geometric sans-serif (Inter, SF Pro, or equivalent). ALL text is properly proportioned, horizontal, and fully legible. Dark navy (#111827) on white. No AI-generated text artifacts.

NO watermarks. NO other brand names. NO additional logos. Only the cross/plus emblem in the top-left nav bar.`;

import { hfFetch } from './lib/hf-auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { model = 'gpt_image_2', topic } = req.body || {};

  const topicCtx = topic && TOPIC_CONTEXT[topic] ? ' ' + TOPIC_CONTEXT[topic] : '';
  const prompt = BASE_PROMPT + topicCtx;

  const body = {
    job_set_type: model,
    params: {
      prompt,
      aspect_ratio: '9:16',
      resolution: '2k',
      medias: [{ data: { id: PP_LOGO, type: 'media_input' }, role: 'image' }]
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
