import FloatingWhatsAppButton from '@/src/components/FloatingWhatsAppButton';
import React from 'react'
import Panel from '../../src/sections/Panel';

export const metadata = {
  title: 'Best IPTV Canada 2025 - Premium IPTV Service Provider | IPTV Smarters Pro Compatible',
  description: 'Canada\'s #1 IPTV service with 12,000+ channels, IPTV Smarters Pro support, free trial, and 4K streaming. Best IPTV subscription in Quebec, Ontario & all provinces. Compatible with any IPTV box.',
  keywords: [
    'iptv canada',
    'best iptv',
    'iptv smarters pro',
    'iptv box',
    'iptv from canada',
    'iptv quebec',
    'iptv free trial',
    'iptv subscription',
    'ca iptv',
    'iptv provider',
    'iptv service',
    'smart iptv',
    'best iptv canada 2025',
    'iptv service 2025',
    'premium iptv canada 2025',
    'reliable iptv service',
    'best iptv provider canada',
    'iptv free trial',
    'iptv vancouver',
    'iptv iptv 1 month subscription',
    'iptv one year subscription',
    'iptv providers montreal',
    'iptv ca',
    'iptv box canada',
    'iptv streaming',
    'iptv services'
  ],
  authors: [{ name: 'Canadian IPTV Services' }],
  metadataBase: new URL('https://canadianiptvservices.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://canadianiptvservices.ca/',
    title: 'Best IPTV Canada 2024 - Premium IPTV Service Provider',
    description: 'Canada\'s premier IPTV service with 12,000+ channels, IPTV Smarters Pro compatibility, free trial, and 4K streaming across all provinces.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Best IPTV Service Canada - IPTV Smarters Pro Compatible',
      },
    ],
    locale: 'en_CA',
    siteName: 'Canadian IPTV Services'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IPTV Canada 2024 - Premium IPTV Service Provider',
    description: 'Canada\'s premier IPTV service with 12,000+ channels, IPTV Smarters Pro compatibility, and free trial across all provinces.',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
    ],
    site: '@canadianiptvservices', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your actual verification code
  }
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://canadianiptvservices.ca/#organization",
        "name": "Canadian IPTV Services",
        "alternateName": "Best IPTV Canada",
        "url": "https://canadianiptvservices.ca/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://canadianiptvservices.ca/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "Canada's premier IPTV service provider offering 12,000+ channels with IPTV Smarters Pro compatibility",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+92-347-123-4567",
          "contactType": "customer service",
          "availableLanguage": ["English", "French"],
          "areaServed": ["CA"]
        },
        "areaServed": {
          "@type": "Country",
          "name": "Canada"
        },
        "serviceType": ["IPTV Service", "Streaming Service", "Digital Television"],
        "foundingLocation": {
          "@type": "Country",
          "name": "Canada"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://canadianiptvservices.ca/#website",
        "url": "https://canadianiptvservices.ca/",
        "name": "Canadian IPTV Services",
        "description": "Best IPTV service in Canada with free trial",
        "publisher": {
          "@id": "https://canadianiptvservices.ca/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://canadianiptvservices.ca/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "IPTV Canada Premium Service",
        "description": "Premium IPTV service for Canada with 12,000+ channels, 4K streaming, IPTV Smarters Pro compatibility, and free trial",
        "provider": {
          "@id": "https://canadianiptvservices.ca/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Canada"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IPTV Subscription Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IPTV Free Trial",
                "description": "Free IPTV trial for Canadian customers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "IPTV Smarters Pro Compatible Service",
                "description": "IPTV service compatible with IPTV Smarters Pro application"
              }
            }
          ]
        },
        "audience": {
          "@type": "Audience",
          "geographicArea": {
            "@type": "Country",
            "name": "Canada"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://canadianiptvservices.ca/"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Best IPTV Canada",
            "item": "https://canadianiptvservices.ca/#iptv-canada"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      
      {/* Additional meta tags for better SEO */}
      <noscript>
        <p>Best IPTV service in Canada requires JavaScript. Please enable JavaScript for the best IPTV streaming experience.</p>
      </noscript>
      
      <Panel/>
      <FloatingWhatsAppButton/>
    </>
  )
}