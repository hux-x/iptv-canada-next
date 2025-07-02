
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-iptv",
    question: "What is IPTV?",
    answer: "IPTV (Internet Protocol Television) is a digital television service that delivers TV content over internet networks instead of traditional terrestrial, satellite, or cable formats. It allows you to stream live TV channels and on-demand content directly to your devices.",
    category: "General"
  },
  {
    id: "legal-in-canada",
    question: "Is IPTV legal in Canada?",
    answer: "IPTV technology itself is completely legal in Canada. However, the legality depends on the content being provided. We ensure all our services comply with Canadian broadcasting regulations and copyright laws.",
    category: "Legal"
  },
  {
    id: "internet-speed",
    question: "What internet speed do I need for IPTV?",
    answer: "For optimal viewing experience, we recommend: SD quality - 3-4 Mbps, HD quality - 5-8 Mbps, 4K quality - 15-25 Mbps. A stable connection is more important than peak speed.",
    category: "Technical"
  },
  {
    id: "supported-devices",
    question: "What devices support IPTV?",
    answer: "Our IPTV service works on Smart TVs, Android/iOS devices, computers, tablets, Amazon Fire Stick, Android TV boxes, MAG boxes, and most streaming devices that support M3U playlists or Xtream Codes API.",
    category: "Compatibility"
  },
  {
    id: "multiple-devices",
    question: "Can I use IPTV on multiple devices?",
    answer: "Yes! Depending on your subscription plan, you can use IPTV on 2-6 devices simultaneously. Each plan clearly states the number of concurrent streams allowed.",
    category: "Usage"
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, e-transfers, and cryptocurrency payments. All transactions are processed securely through encrypted payment gateways.",
    category: "Billing"
  },
  {
    id: "free-trial",
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 24-hour free trial for new customers to test our service quality and channel selection before committing to a subscription.",
    category: "Trial"
  },
  {
    id: "customer-support",
    question: "How can I contact customer support?",
    answer: "Our customer support team is available 24/7 through live chat, email, and WhatsApp. Premium subscribers receive priority support with faster response times.",
    category: "Support"
  },
  {
    id: "refund-policy",
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with our service. Refunds are processed within 3-5 business days after approval.",
    category: "Billing"
  },
  {
    id: "become-reseller",
    question: "How can I become a reseller?",
    answer: "You can become a reseller by choosing one of our reseller plans. You'll get access to a reseller panel, credits to create subscriptions, marketing materials, and ongoing support to build your IPTV business.",
    category: "Reseller"
  }
];
