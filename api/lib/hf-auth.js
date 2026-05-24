// Shared Higgsfield auth: reads tokens from Vercel Edge Config, auto-refreshes on 401,
// and writes the new rotating token pair back to Edge Config so the next function
// invocation always has a valid refresh token regardless of Lambda cold-starts.

const HF_AUTH  = 'https://fnf-device-auth.higgsfield.ai';
const EC_WRITE = 'https://api.vercel.com/v1/edge-config';

async function ecItems() {
  const url = process.env.EDGE_CONFIG;
  if (!url) return null;
  const itemsUrl = url.replace(/(\?|$)/, '/items$1');
  const r = await fetch(itemsUrl);
  if (!r.ok) return null;
  return r.json();
}

async function ecUpdate(accessToken, refreshToken) {
  const id    = process.env.EDGE_CONFIG_ID;
  const token = process.env.VERCEL_API_TOKEN;
  const team  = process.env.VERCEL_TEAM_ID;
  if (!id || !token) return;
  const qs  = team ? `?teamId=${team}` : '';
  await fetch(`${EC_WRITE}/${id}/items${qs}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: [
      { operation: 'upsert', key: 'access_token',  value: accessToken  },
      { operation: 'upsert', key: 'refresh_token', value: refreshToken }
    ]})
  });
}

// Returns { accessToken, refreshToken } from Edge Config, falling back to env vars.
export async function getTokens() {
  const items = await ecItems().catch(() => null);
  return {
    accessToken:  (items && items.access_token)  || process.env.HIGGSFIELD_TOKEN        || '',
    refreshToken: (items && items.refresh_token) || process.env.HIGGSFIELD_REFRESH_TOKEN || ''
  };
}

// Calls the Higgsfield refresh endpoint and persists the new token pair to Edge Config.
// Returns the new access token, or throws if refresh fails.
export async function doRefresh(refreshToken) {
  if (!refreshToken) throw new Error('No refresh token stored. Re-authenticate via higgsfield auth login and call /api/hf-token-reset.');

  const r = await fetch(`${HF_AUTH}/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: refreshToken })
  });

  if (!r.ok) {
    const err = await r.text();
    throw new Error(`Refresh failed (${r.status}): ${err}`);
  }

  const { access_token, refresh_token: newRefresh } = await r.json();

  // Persist immediately so the next Lambda invocation gets the new pair
  ecUpdate(access_token, newRefresh).catch(() => {});

  return access_token;
}

// Wraps a Higgsfield API fetch call with automatic token refresh on 401.
// fetchFn(token) should return a Response.
export async function hfFetch(fetchFn) {
  const { accessToken, refreshToken } = await getTokens();

  let r = await fetchFn(accessToken);

  if (r.status !== 401) return r;

  // Token expired — refresh and retry once
  const newToken = await doRefresh(refreshToken);
  return fetchFn(newToken);
}
