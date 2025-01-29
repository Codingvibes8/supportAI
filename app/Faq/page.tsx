import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

/**
 * The FAQ page component, which displays a list of frequently asked questions and
 * their respective answers.
 *
 * The questions and answers are stored in an array of objects, where each object
 * contains a "question" and an "answer" key. The component renders a list of
 * accordion items, with each item displaying a question and its corresponding
 * answer.
 *
 * The page also includes a heading element with the text "Frequently Asked
 * Questions".
 *
 * @returns A JSX element representing the FAQ page.
 */
export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI chatbot work?",
      answer:
        "Our AI chatbot uses advanced natural language processing to understand your queries and provide accurate responses based on our knowledge base.",
    },
    {
      question: "Is my conversation with the chatbot private?",
      answer:
        "Yes, your conversations are private and not stored permanently. We only use the information to improve our service.",
    },
    {
      question: "Can I speak to a human agent?",
      answer:
        "If the AI chatbot can't resolve your issue, you can request to be connected to a human agent through our contact page.",
    },
    {
      question: "What kind of issues can the chatbot help with?",
      answer:
        "Our chatbot can assist with a wide range of topics including account issues, product information, and general inquiries about our services.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

