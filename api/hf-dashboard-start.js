// Starts a PurchasePlus-branded analytics dashboard image generation job.
// References the PP emblem logo (ef87048f) for brand accuracy.
const HF_API  = 'https://fnf.higgsfield.ai';
const PP_LOGO = 'ef87048f-c65e-4283-be15-a9a859ecb162'; // PP High Res Logo upload

const BASE_PROMPT = 'Hyper-realistic enterprise SaaS dashboard UI screenshot for PurchasePlus, a procurement platform. Portrait orientation. PURE WHITE background (#ffffff) throughout. TOP NAVIGATION BAR: White background. Left side shows the PurchasePlus logo emblem (purple and blue cross/plus shape) followed by the text "PurchasePlus" in dark navy. Right side shows a date filter reading "May 1 - May 31, 2026" and a Filters button. LEFT SIDEBAR: White background with subtle border-right. Top shows PurchasePlus emblem. Menu items in this exact order, each with a small line icon and label: Home (house icon, highlighted in purple gradient pill), Requisitions (shopping cart), Purchase Orders (clipboard), Invoices (document with dollar sign), Buy Lists (checklist), Catalogues (folder), Products (grid), Supplier (delivery truck), Inventory (box), Reports (bar chart icon). MAIN CONTENT AREA (white background): Page title "Analytics" in large bold dark navy, subheader "May 2026". Four KPI cards: Total Spend $2.4B with green +12.6% trend; Invoices Processed 40M with 99.9% accuracy; Cost Savings 18% with $432M saved; Invoice Cycle 1.8 days down 87.1% from 14 days. Bar chart "Monthly Spend by Category": Food 735M purple, Beverages 520M blue, Equipment 410M teal, Linen 280M light blue, Cleaning 160M pink, Other 95M light teal. Donut chart "Spend Distribution" with brand colors and percentage labels and legend. Line chart "Invoice Processing Time" showing declining curve from 14 days to 1.8 days in purple-to-teal gradient. FONT: Clean modern geometric sans-serif. All labels dark navy. NO watermarks, NO SpendSmart, only PurchasePlus branding. High fidelity enterprise SaaS screenshot.';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = process.env.HIGGSFIELD_TOKEN;
  if (!token) return res.status(500).json({ error: 'HIGGSFIELD_TOKEN not configured' });

  const { extraPrompt } = req.body || {};
  const prompt = BASE_PROMPT + (extraPrompt ? ' ' + extraPrompt : '');

  const body = {
    job_set_type: 'imagegen_2_0',
    params: {
      prompt,
      aspect_ratio: '9:16',
      resolution: '2k',
      medias: [{ data: { id: PP_LOGO, type: 'media_input' }, role: 'image' }]
    }
  };

  const r = await fetch(`${HF_API}/agents/jobs`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!r.ok) return res.status(r.status).json({ error: await r.text() });

  const ids = await r.json();
  const jobId = Array.isArray(ids) ? ids[0] : ids;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ jobId });
}
