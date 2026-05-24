import Anthropic from "@anthropic-ai/sdk";

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { content, filename, userEmail } = req.body;
    if (!content) return res.status(400).json({ error: "No content provided" });

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `You are MasterChef, a PurchasePlus presentation agent. Analyse this document and extract a structured outline for a branded HTML presentation.

Document: "${filename || "uploaded file"}"
Content:
${content}

Return a JSON object with this structure:
{
  "title": "presentation title",
  "audience": "inferred audience",
  "slides": [
    {
      "id": 1,
      "type": "cover|section|content|comparison|quote|cta",
      "heading": "slide heading",
      "body": "main body text",
      "bullets": ["bullet 1", "bullet 2"],
      "notes": "speaker notes"
    }
  ],
  "theme": "suggested theme: light|dark|brand",
  "summary": "one sentence summary of the document"
}

Return ONLY the JSON, no markdown, no explanation.`
        }
      ]
    });

    const raw = message.content[0].text.trim();
    const outline = JSON.parse(raw);
    return res.status(200).json({ success: true, outline });

  } catch (err) {
    console.error("Analyse error:", err);
    return res.status(500).json({ error: err.message || "Analysis failed" });
  }
}
