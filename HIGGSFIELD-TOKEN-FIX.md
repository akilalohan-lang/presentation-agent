# Higgsfield Token Fix

## What breaks and why

The Higgsfield API uses short-lived access tokens (1 hour) and rotating refresh tokens (7 days).
The production API (Vercel) auto-refreshes the token on every 401 via Edge Config — no manual
action needed under normal use.

The only time manual intervention is needed is if the refresh token itself expires, which happens
if no image generation occurs for 7 consecutive days.

Symptom: pressing Generate on any slide returns "Generation failed. Check API config." and the
Vercel logs show `Refresh failed` or `invalid_refresh_token`.

---

## Fix (takes 60 seconds)

Run these three commands in Terminal, in order.

**Step 1 — Get fresh tokens from Higgsfield (opens a browser tab)**

```bash
higgsfield auth login
```

Log in via the browser. Wait for the terminal to confirm success.

**Step 2 — Bootstrap Edge Config with the new refresh token**

```bash
curl -X POST https://presentation-agent-repo.vercel.app/api/hf-token-reset \
  -H "Content-Type: application/json" \
  -d "{\"refresh_token\":\"$(python3 -c 'import json; print(json.load(open("/Users/lmh/.config/higgsfield/credentials.json"))["refresh_token"])')\"}"
```

Expected response: `{"ok":true,"message":"Tokens updated in Edge Config. System is now self-refreshing."}`

**Step 3 — Verify it works**

```bash
curl -X POST https://presentation-agent-repo.vercel.app/api/hf-dashboard-start \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt_image_2","topic":"Spend Intelligence"}'
```

Expected response: `{"jobId":"..."}` — any job ID means it is working.

---

## If `higgsfield auth login` is not available

Install the CLI first:

```bash
curl -fsSL https://raw.githubusercontent.com/higgsfield-ai/cli/main/install.sh | sh
higgsfield auth login
```

Then continue from Step 2 above.

---

## How the auto-refresh works (for agent context)

- Tokens are stored in Vercel Edge Config store `ecfg_3s7fns3tztag2bsedsamwpp6qdyd`
- Every call to `/api/hf-start` and `/api/hf-dashboard-start` reads the token from Edge Config
- On a 401 response, `api/lib/hf-auth.js` calls `https://fnf-device-auth.higgsfield.ai/refresh`
  with the stored refresh token, writes the new token pair back to Edge Config, and retries
- Edge Config updates are instant and global — no Vercel redeploy needed
- The `/api/hf-token-reset` endpoint accepts a fresh refresh token and seeds Edge Config

Relevant env vars in Vercel (do not delete):
- `EDGE_CONFIG` — connection string for reading Edge Config
- `EDGE_CONFIG_ID` — ID for writing to Edge Config via Vercel API
- `VERCEL_API_TOKEN` — Vercel API token used by the function to write to Edge Config
- `VERCEL_TEAM_ID` — Vercel team ID
- `HIGGSFIELD_TOKEN` — fallback access token (used if Edge Config is unavailable)
