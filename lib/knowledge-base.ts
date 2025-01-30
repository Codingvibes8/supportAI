const knowledgeBase = {
  "return policy": "Our return policy allows returns within 30 days of purchase with a valid receipt.",
  shipping: "We offer free shipping on orders over $50. Standard shipping typically takes 3-5 business days.",
  "product warranty": "All our products come with a 1-year limited warranty covering manufacturing defects.",
  "account issues":
    "For account-related issues, please ensure you're logged in. If problems persist, try clearing your browser cache or resetting your password.",
  "payment methods": "We accept all major credit cards, PayPal, and Apple Pay.",
}

export async function getKnowledgeBase(query: string): Promise<string> {
  // In a real application, this would be a more sophisticated search/retrieval system
  const relevantInfo = Object.entries(knowledgeBase)
    .filter(([key]) => query.toLowerCase().includes(key))
    .join(" ")

  return relevantInfo || "I don't have specific information about that in my knowledge base. How else can I assist you?"
}

