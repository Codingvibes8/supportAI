import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useFeedback } from "@/lib/useFeedback"

interface FeedbackComponentProps {
  messageId: string
  onFeedbackSubmit: () => void
}

export default function FeedbackComponent({ messageId, onFeedbackSubmit }: FeedbackComponentProps) {
  const [feedback, setFeedback] = useState("")
  const { submitFeedback, isSubmitting } = useFeedback()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitFeedback(messageId, feedback)
    setFeedback("")
    onFeedbackSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <Textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Please provide your feedback here..."
        rows={3}
      />
      <Button type="submit" disabled={isSubmitting || !feedback.trim()}>
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  )
}

