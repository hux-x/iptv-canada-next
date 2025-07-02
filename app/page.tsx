import Head from 'next/head'
import Home from '../src/pages/Index'
import React from 'react'
export const metadata = {
  title: 'StreamPro - Premium IPTV Services in Canada | Best IPTV Provider',
  description:
    'StreamPro offers premium IPTV services in Canada with 12,000+ live channels, 4K streaming, and 24/7 support. Start your free trial today!',
  keywords: [
    'IPTV Canada',
    'best IPTV service',
    'IPTV subscription',
    'streaming service Canada',
    'live TV channels',
    'IPTV reseller',
  ],
  authors: [{ name: 'StreamPro' }],
  metadataBase: new URL('https://streampro.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://streampro.ca/',
    title: 'StreamPro - Premium IPTV Services in Canada',
    description:
      'Experience premium IPTV with 12,000+ channels, 4K quality, and reliable streaming. Best IPTV service in Canada with 24/7 support.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'StreamPro IPTV Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StreamPro - Premium IPTV Services in Canada',
    description:
      'Experience premium IPTV with 12,000+ channels, 4K quality, and reliable streaming. Best IPTV service in Canada with 24/7 support.',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
    ],
    site: '@streampro', 
  },
};


export default function page() {

  return (
    <>
 
    
  
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "StreamPro",
          "description": "Premium IPTV services in Canada",
          "url": "https://streampro.ca",
          "logo": "https://streampro.ca/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-647-123-4567",
            "contactType": "customer service",
            "availableLanguage": ["English", "French"]
          },
          "areaServed": "Canada",
          "serviceType": "IPTV Service Provider"
        })
      }}
    />
   
    <Home/>
    </>
  )
}
