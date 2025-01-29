import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useFeedback } from "@/lib/useFeedback"

interface FeedbackComponentProps {
  messageId: string
  onFeedbackSubmit: () => void
}


/**
 * A form to submit feedback for a given message id.
 *
 * When the form is submitted, the `onFeedbackSubmit` function is called.
 *
 * @param {string} messageId - the id of the message to provide feedback for
 * @param {Function} onFeedbackSubmit - a function to call when the feedback has been submitted
 *
 * @example
 * import FeedbackComponent from "@/components/FeedbackComponent"
 *
 * <FeedbackComponent
 *   messageId="123"
 *   onFeedbackSubmit={() => console.log("Feedback submitted!")}
 * />
 */
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

