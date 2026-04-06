import { GoogleGenAI } from "@google/genai"

  const genai = new GoogleGenAI({
    apiKey: "AIzaSyCF1v-m1GA69xpBTcZw08Bw5acIbnIgWRU"
  })

async function main() {
  const response = await genai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "yello",
  });
  console.log(response);
}

main();