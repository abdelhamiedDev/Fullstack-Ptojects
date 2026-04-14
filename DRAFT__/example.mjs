import { GoogleGenAI, ThinkingLevel } from "@google/genai"

const genai = new GoogleGenAI({});


async function main() {
  const response = await genai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: "Help me understand how to use the Google GenAI API.",
    config: {
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.MEDIUM,
      },
      systemInstruction: "You are a helpful assistant that provides clear and concise explanations about using the Google GenAI API.",
    }
  });
  for await (const chunk of response) {
    console.log(chunk.text);
  }

}

await main();