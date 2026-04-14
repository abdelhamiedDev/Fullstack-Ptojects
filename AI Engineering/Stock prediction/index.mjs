import { dates } from '/utils/dates'
import { GoogleGenAI } from "@google/genai"

// const tickers = []

// const generateReportBtn = document.querySelector('.generate-report-btn')

// generateReportBtn.addEventListener('click', fetchStockData)


const client = new GoogleGenAI({})

async function main() {
  const response = await client.generateContent({
    model: "gemini-3-flash-preview",
    input: "What is the stock price of Apple Inc. (AAPL) on January 1, 2024?"
  })
  console.log(response.text)
}

main().catch((err) => {
  console.error("Something went wrong:", err.message);
})