// Starts a Higgsfield image generation job and returns the job ID immediately.
// Called from the browser; proxies to Higgsfield to avoid CORS issues.
const HF_API   = 'https://fnf.higgsfield.ai';
const REF_ID   = 'fbc71621-e9c9-43fc-8879-b30b8ab49ea7'; // Manager Longarms upload

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = process.env.HIGGSFIELD_TOKEN;
  if (!token) return res.status(500).json({ error: 'HIGGSFIELD_TOKEN not configured' });

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });

  const body = {
    job_set_type: 'imagegen_2_0',
    params: {
      prompt,
      aspect_ratio: '9:16',
      resolution: '2k',
      medias: [{ data: { id: REF_ID, type: 'media_input' }, role: 'image' }]
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

  if (!r.ok) {
    const err = await r.text();
    return res.status(r.status).json({ error: err });
  }

  const ids = await r.json();
  const jobId = Array.isArray(ids) ? ids[0] : ids;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ jobId });
}
