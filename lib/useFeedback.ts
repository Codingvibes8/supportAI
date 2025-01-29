import { useState } from "react"

export function useFeedback() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Submit feedback for a given message id. This function will simulate the
   * API call with a delay and log the feedback to the console. In a real
   * application, you would send this feedback to your server and store it to
   * improve the chatbot.
   *
   * @param {string} messageId - the id of the message to provide feedback for
   * @param {string} feedback - the feedback text to submit
   * @returns {Promise<void>} a promise that resolves when the feedback has been
   * submitted or rejects if there was an error submitting the feedback
   */
  const submitFeedback = async (messageId: string, feedback: string) => {
    setIsSubmitting(true)
    try {
      // I you would send this feedback to your server
      // but we'll just simulate the API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(`Feedback submitted for message ${messageId}: ${feedback}`)
      // store the feedback and use it to improve the chatbot
    } catch (error) {
      console.error("Error submitting feedback:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submitFeedback, isSubmitting }
}

