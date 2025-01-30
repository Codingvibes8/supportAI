import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import type { NextRequest } from "next/server"
import { getKnowledgeBase } from "@/lib/knowledge-base"

export const runtime = "edge"

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  const lastMessage = messages[messages.length - 1]

  // Retrieve relevant information from the knowledge base
  const knowledgeBaseInfo = await getKnowledgeBase(lastMessage.content)

  // Prepare the system message with the knowledge base information
  const systemMessage = {
    role: "system",
    content: `You are a helpful customer support assistant. Use the following information from our knowledge base to assist the customer: ${knowledgeBaseInfo}`,
  }

  const result = streamText({
    model: openai("gpt-4-turbo"),
    messages: [systemMessage, ...messages],
    temperature: 0.7,
    maxTokens: 500,
  })

  return result.toDataStreamResponse()
}

