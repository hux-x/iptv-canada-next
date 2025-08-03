import FloatingWhatsAppButton from "@/src/components/FloatingWhatsAppButton";
import FAQPage from "@/src/sections/FAQPage";
import React from 'react'
export const metadata = {
  title: 'FAQs | Canadian IPTV Services',
  description: 'Find answers to frequently asked questions about IPTV services, setup, pricing, and troubleshooting.',
  keywords: ['IPTV FAQ', 'IPTV help', 'IPTV setup', 'IPTV support', 'IPTV troubleshooting'],
  openGraph: {
    title: 'FAQs | Canadian IPTV Services',
    description: 'Explore frequently asked questions and answers about StreamPro IPTV. Get the support you need for setup, pricing, and more.',
    url: 'https://canadianiptvservices.ca/faqs',
    siteName: 'Canadian IPTV Services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | Canadian IPTV Services',
    description: 'Find answers to common IPTV-related questions with StreamPro’s detailed FAQ section.',
  },
};

export default function page() {
  return (
    <>
    <FAQPage />
    <FloatingWhatsAppButton/>
    </>
  )
}
