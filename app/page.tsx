import ChatInterface from "@/components/ChatInterface"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="px-8 text-3xl mx-auto bg-slate-100 max-w-2xl font-bold text-center dark:bg-gray-600 dark:rounded-lg p-2">Welcome to SupportAI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-16">
            Get instant support with our AI-powered chatbot. Start a conversation below!
          </p>
          <ChatInterface />
        </CardContent>
      </Card>
    </div>
  )
}

