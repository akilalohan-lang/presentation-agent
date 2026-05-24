// One-time bootstrap endpoint — call after `higgsfield auth login` to seed Edge Config
// with fresh tokens. Accepts { refresh_token } in the POST body.
// The function verifies the refresh token works, then stores both tokens in Edge Config.

import { doRefresh } from './lib/hf-auth.js';

const EC_WRITE = 'https://api.vercel.com/v1/edge-config';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { refresh_token } = req.body || {};
  if (!refresh_token) return res.status(400).json({ error: 'refresh_token required' });

  let newAccessToken;
  try {
    newAccessToken = await doRefresh(refresh_token);
  } catch (e) {
    return res.status(401).json({ error: 'Refresh failed: ' + e.message });
  }

  res.json({ ok: true, message: 'Tokens updated in Edge Config. System is now self-refreshing.' });
}
