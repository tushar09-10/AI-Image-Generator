import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Shivansh!' });
});

router.route('/').post(async (req, res) => {
  const { prompt } = req.body;
  const auth = process.env.HUGGING_FACE_API
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        headers: {
          Authorization: `Bearer ${auth}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: prompt,
        }),
      }
    );

    // Check if the response is JSON (indicating an error)
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      console.error("Error from API:", errorData);  // Log the error message
      return res.status(500).json({ error: errorData });
    }

    // If the response is not JSON, assume it's the image data
    const image = await response.blob();
    const imageBuffer = await image.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString("base64");

    // Send the base64 image as a response
    res.status(200).json({ photo: `data:image/jpeg;base64,${base64Image}` });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


export default router;
