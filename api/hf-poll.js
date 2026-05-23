// Polls a Higgsfield job by ID and returns its status and result URL.
const HF_API = 'https://fnf.higgsfield.ai';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const token = process.env.HIGGSFIELD_TOKEN;
  if (!token) return res.status(500).json({ error: 'HIGGSFIELD_TOKEN not configured' });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'id required' });

  const r = await fetch(`${HF_API}/agents/jobs/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!r.ok) return res.status(r.status).json({ error: await r.text() });

  const job = await r.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    status: job.status,
    url: job.result_url || null,
    minUrl: job.min_result_url || null
  });
}
