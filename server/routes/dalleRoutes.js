import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const HF_TOKEN = process.env.HUGGING_FACE_API || process.env.HF_TOKEN;

// simple health-check
router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Developer!" });
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Missing 'prompt' in body" });
    if (!HF_TOKEN) return res.status(500).json({ error: "Missing Hugging Face token (HUGGING_FACE_API or HF_TOKEN)" });

    const payload = {
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      prompt: prompt,
      response_format: "b64_json",
      // optionally: size: "1024x1024", n: 1
    };

    const response = await fetch(
      "https://router.huggingface.co/nscale/v1/images/generations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // Non-2xx --> try to surface the error body
    if (!response.ok) {
      let errBody;
      try {
        errBody = await response.json();
      } catch (e) {
        errBody = await response.text();
      }
      console.error("HF API error:", response.status, errBody);
      return res.status(response.status).json({ error: errBody });
    }

    // The success JSON shape (per docs) looks like:
    // { created: 1234, data: [ { b64_json: "..." } ] }
    const result = await response.json();
    const b64 = result?.data?.[0]?.b64_json;

    if (!b64) {
      console.error("Unexpected HF response shape:", result);
      return res.status(500).json({ error: "No image returned from Hugging Face", raw: result });
    }

    // return as data URL (png is a safe default for b64_json)
    const dataUrl = `data:image/png;base64,${b64}`;
    return res.status(200).json({ photo: dataUrl, meta: { created: result.created } });
  } catch (err) {
    console.error("Error generating image:", err);
    return res.status(500).json({ error: "Something went wrong", details: err?.message || err });
  }
});

export default router;
