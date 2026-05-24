// Starts a Higgsfield image generation job for the Text+Longarms+UI slide.
// Accepts { prompt, count } in the POST body.
// count controls how many Longarms character reference images are passed to the model.
const HF_API = 'https://fnf.higgsfield.ai';

// All 11 Stand Alone characters uploaded to Higgsfield.
// Ordered for maximum visual variety when selecting a subset (1..N).
const CHAR_IDS = [
  'fbc71621-e9c9-43fc-8879-b30b8ab49ea7', // Manager (navy suit)
  'd05e638b-d8e4-4fe9-920c-65a20e9972b2', // Chef 1 (white uniform)
  '68bde47e-611c-4d2e-96c4-5a1042d75c4d', // Waiter
  '6e51138d-0e4e-4c7a-babd-05cbc6e8773c', // Bellhop 1
  '1f8a7bc0-ecfb-4445-8fab-6bfae84297f8', // Delivery Man
  'e3a4cb3f-be08-48ce-8bfe-80c7e2f33fdb', // Supplier 1
  '957a5bd0-90b5-446e-b746-f8a02870a764', // Customer 1
  '5936f5d3-137e-41f7-85df-d7acdf720774', // Chef 2
  '893991e5-98df-4475-bb3e-9bf1bcdfb947', // Bellhop 2
  '6c3030d7-69f1-4e16-866f-84c4ca7d8c67', // Supplier 2
  'e951dc9b-9324-43a1-9833-288ce930c423', // Customer 2
];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = process.env.HIGGSFIELD_TOKEN;
  if (!token) return res.status(500).json({ error: 'HIGGSFIELD_TOKEN not configured' });

  const { prompt, count = 1, model = 'nano_banana_2' } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });

  const charCount = Math.max(1, Math.min(CHAR_IDS.length, parseInt(count) || 1));
  const selectedIds = CHAR_IDS.slice(0, charCount);
  const medias = selectedIds.map(id => ({ data: { id, type: 'media_input' }, role: 'image' }));

  const body = {
    job_set_type: model,
    params: {
      prompt,
      aspect_ratio: '9:16',
      medias
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
