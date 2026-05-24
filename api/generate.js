import Anthropic from "@anthropic-ai/sdk";

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { outline, presenter, audience, theme } = req.body;
    if (!outline) return res.status(400).json({ error: "No outline provided" });

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 8192,
      messages: [
        {
          role: "user",
          content: `You are MasterChef, a PurchasePlus presentation agent. Generate polished slide content for each slide in this outline.

Presenter: ${presenter || "PurchasePlus Team"}
Audience: ${audience || outline.audience || "Business stakeholders"}
Theme: ${theme || "light"}

Outline:
${JSON.stringify(outline, null, 2)}

For each slide, enhance the content to be compelling, concise, and on-brand for PurchasePlus (hospitality procurement software). 

Return a JSON object:
{
  "slides": [
    {
      "id": 1,
      "type": "cover|section|content|comparison|quote|cta",
      "heading": "polished heading",
      "subheading": "optional subheading",
      "body": "polished body text",
      "bullets": ["crisp bullet 1", "crisp bullet 2"],
      "stat": { "value": "optional big stat", "label": "context" },
      "notes": "speaker notes"
    }
  ]
}

Return ONLY the JSON.`
        }
      ]
    });

    const raw = message.content[0].text.trim();
    const result = JSON.parse(raw);
    return res.status(200).json({ success: true, slides: result.slides });

  } catch (err) {
    console.error("Generate error:", err);
    return res.status(500).json({ error: err.message || "Generation failed" });
  }
}
