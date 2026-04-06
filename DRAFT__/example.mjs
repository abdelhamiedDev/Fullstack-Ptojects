import { GoogleGenAI } from "@google/genai"

  const genai = new GoogleGenAI({
    apiKey: process.env.GeminiGenAI_API_KEY
  })

async function main() {
  const response = await genai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "yello",
  });
  console.log(response);
}

main();