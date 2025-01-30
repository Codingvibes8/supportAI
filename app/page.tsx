import ChatInterface from "@/components/ChatInterface"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="px-8 text-4xl md:text-6xl text-yellow-300 mx-auto max-w-2xl font-bold text-center  p-2">Welcome to SupportAI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-16 text-3xl">
            Get instant support with our AI-powered chatbot. Start a conversation below!
          </p>
          <ChatInterface />
        </CardContent>
      </Card>
    </div>
  )
}

