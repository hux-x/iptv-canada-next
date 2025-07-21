import FAQPage from "@/src/pages/FAQ";
import React from 'react'
export const metadata = {
  title: 'FAQs | Canadian IPTV Services',
  description: 'Find answers to frequently asked questions about IPTV services, setup, pricing, and troubleshooting.',
  keywords: ['IPTV FAQ', 'IPTV help', 'IPTV setup', 'IPTV support', 'IPTV troubleshooting'],
  openGraph: {
    title: 'FAQs | StreamPro IPTV',
    description: 'Explore frequently asked questions and answers about StreamPro IPTV. Get the support you need for setup, pricing, and more.',
    url: 'https://canadianiptvservices.ca/faqs',
    siteName: 'StreamPro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | StreamPro IPTV',
    description: 'Find answers to common IPTV-related questions with StreamPro’s detailed FAQ section.',
  },
};

export default function page() {
  return (
    <FAQPage />
  )
}
