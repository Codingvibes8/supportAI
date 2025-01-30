"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import FeedbackComponent from "@/components/FeedbackComponent"
import { Send } from "lucide-react"

/**
 * A full-featured chat interface component, which includes:
 * - A chat window that displays all messages
 * - A form to input and submit messages
 * - A "Provide Feedback" button to open the feedback form
 * - A feedback form to rate the last message
 *
 * This component will connect to the server and fetch messages when mounted.
 * It will also send messages to the server when the user submits a message.
 *
 * @example
 * import ChatInterface from "@/components/ChatInterface"
 *
 * <ChatInterface />
 */
export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [showFeedback, setShowFeedback] = useState(false)
  const [lastMessageId, setLastMessageId] = useState<string | null>(null)

  /**
   * Handles the submission of the chat message form
   *
   * Prevents the default form submission behavior, and only calls the
   * `handleSubmit` callback if the input is not empty.
   *
   * @param e - The React form event
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      handleSubmit(e)
      setShowFeedback(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="border-b">
        <CardTitle className="text-2xl font-bold">Customer Support Chat</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[25vh] p-4">
          {messages.map((m) => (
            <div key={m.id} className={`mb-4 flex items-start ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role !== "user" && (
                <Avatar className="mr-2">
                  <AvatarImage src="/bot-avatar.png" alt="Chatbot" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-3 rounded-lg ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"} animate-in`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="mb-4 flex items-start animate-pulse">
              <Avatar className="mr-2">
                <AvatarImage src="/bot-avatar.png" alt="Chatbot" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="p-3 rounded-lg bg-muted">Thinking...</div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch border-t bg-muted/40 p-4">
        <form onSubmit={onSubmit} className="flex w-full space-x-2 mb-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="flex-grow"
          />
          <Button type="submit" disabled={isLoading} size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
        {showFeedback && lastMessageId && (
          <FeedbackComponent messageId={lastMessageId} onFeedbackSubmit={() => setShowFeedback(false)} />
        )}
        {messages.length > 0 && !showFeedback && (
          <Button
            variant="outline"
            onClick={() => {
              setShowFeedback(true)
              setLastMessageId(messages[messages.length - 1].id)
            }}
            className="mt-2"
          >
            Provide Feedback
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}