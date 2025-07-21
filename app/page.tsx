import FloatingWhatsAppButton from '@/src/components/FloatingWhatsAppButton';
import Home from '../src/pages/Index'
import React from 'react'
export const metadata = {
  title: 'Canadian IPTV Services - Premium IPTV Services in Canada | Best IPTV Provider',
  description:
    'StreamPro offers premium IPTV services in Canada with 12,000+ live channels, 4K streaming, and 24/7 support. Start your free trial today!',
  keywords: [
    'IPTV Canada',
    'best IPTV service',
    'IPTV subscription',
    'streaming service Canada',
    'live TV channels',
    'IPTV reseller',
    'Best IPTV Serivce Canada'
  ],
  authors: [{ name: 'StreamPro' }],
  metadataBase: new URL('https://canadianiptvservices.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://canadianiptvservices.ca/',
    title: 'Canadian IPTV Services - Premium IPTV Services in Canada | Best IPTV Provider',
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
    title: 'Canadian IPTV Services - Premium IPTV Services in Canada | Best IPTV Provider',
    description:
      'Experience premium IPTV with 12,000+ channels, 4K quality, and reliable streaming. Best IPTV service in Canada with 24/7 support.',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
    ],
    site: '@canadianiptvservices', 
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
          "name": "Canadian IPTV Services",
          "description": "Premium IPTV services in Canada",
          "url": "https://canadianiptvservices.ca/",
          "logo": "https://canadianiptvservices.ca/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-347-123-4567",
            "contactType": "customer service",
            "availableLanguage": ["English"]
          },
          "areaServed": "Canada",
          "serviceType": "IPTV Service Provider"
        })
      }}
    />
   
    <Home/>
    <FloatingWhatsAppButton/>
    </>
  )
}
