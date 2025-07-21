import Reseller from "@/src/pages/Reseller";
import React from 'react'
export const metadata = {
  title: 'Become an IPTV Reseller | Canadian IPTV Services',
  description:
    'Start your IPTV business with StreamPro’s reseller program. Get bulk pricing, full support, and your own white-label IPTV solution.',
  keywords: [
    'IPTV reseller',
    'IPTV business',
    'IPTV Canada',
    'white label IPTV',
    'IPTV subscription reseller',
    'Canadian IPTV reseller services',
  ],
  openGraph: {
    title: 'Become an IPTV Reseller | StreamPro',
    description:
      'Start your IPTV business with StreamPro’s reseller program. Get bulk pricing, full support, and your own white-label IPTV solution.',
    url: 'https://canadianiptvservices.ca/reseller',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'IPTV Reseller StreamPro',
      },
    ],
  },
};

export default function Page() {
  return (
    <Reseller/>
  )
}
