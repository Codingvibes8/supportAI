import ChatInterface from "@/components/ChatInterface"

/**
 * The Home component renders the main landing page for the SupportAI application.
 *
 * This component displays a welcome message and a brief description of the service
 * provided by SupportAI. It also incorporates the ChatInterface component to allow
 * users to start a conversation with the AI-powered chatbot.
 *
 * @returns A JSX element representing the home page of the SupportAI application.
 */

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to SupportAI</h1>
        <p className="text-xl text-muted-foreground">
          Get instant support with our AI-powered chatbot. Start a conversation below!
        </p>
      </div>
      <ChatInterface />
    </div>
  )
}

