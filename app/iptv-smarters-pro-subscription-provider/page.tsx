// app/iptv-smarters-pro-subscription-provider/page.js
import FloatingWhatsAppButton from '@/src/components/FloatingWhatsAppButton';
import React from 'react'
import IPTVSmartersPro from '@/src/Panel-pages/IPTVSmartersPro/IPTVSmartersPro';

export const metadata = {
  title: 'IPTV Smarters Pro Subscription Provider 2025 - Best IPTV Service Worldwide',
  description: 'Get the best IPTV Smarters Pro Subscription with 27,000+ live channels & 137,000+ movies/series in 4K/8K. Free trial, instant activation, VPN included. Compatible with Smart TVs, Firestick, iOS, Android & more.',
  keywords: [
    'iptv smarters pro',
    'iptv smarters pro subscription',
    'iptv smarters pro app',
    'iptv smarters pro provider',
    'iptv smarters pro player',
    'iptv smarters subscription',
    'iptv smarters pro free trial',
    'iptv smarters pro canada',
    'iptv smarters pro usa',
    'best iptv 2025',
    'premium iptv service',
    'iptv streaming provider',
    'iptv subscription worldwide',
    'iptv smarters pro android',
    'iptv smarters pro ios',
    'iptv smarters pro firestick',
    'iptv smarters pro windows',
    'iptv smarters pro mac',
    'iptv smarters pro roku',
    'reliable iptv provider'
  ],
  authors: [{ name: 'Canadian IPTV Services' }],
  metadataBase: new URL('https://canadianiptvservices.ca'),
  alternates: {
    canonical: '/iptv-smarters-pro-subscription-provider',
  },
  openGraph: {
    type: 'website',
    url: 'https://canadianiptvservices.ca/iptv-smarters-pro-subscription-provider',
    title: 'IPTV Smarters Pro Subscription Provider 2025 - Premium IPTV Service',
    description: 'Official IPTV Smarters Pro Subscription with 27,000+ channels & 137,000+ movies/series. 4K/8K, sports, PPV, Netflix-like experience. Free trial included.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'IPTV Smarters Pro Subscription Provider 2025',
      },
    ],
    locale: 'en_CA',
    siteName: 'Canadian IPTV Services'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Smarters Pro Subscription Provider 2025 - Premium IPTV Worldwide',
    description: 'Get IPTV Smarters Pro Subscription with 4K/8K, 27,000+ channels, 137,000+ movies & daily updates. Free trial available.',
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
    google: 'your-google-site-verification-code',
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
        "alternateName": "IPTV Smarters Pro Provider",
        "url": "https://canadianiptvservices.ca/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://canadianiptvservices.ca/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "Official IPTV Smarters Pro Subscription Provider with premium IPTV plans, 27,000+ channels, 4K/8K streaming and free trial.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+92-347-123-4567",
          "contactType": "customer service",
          "availableLanguage": ["English", "French"],
          "areaServed": ["CA", "US", "Worldwide"]
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
        "description": "Official IPTV Smarters Pro subscription provider with premium IPTV worldwide.",
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
        "name": "IPTV Smarters Pro Subscription",
        "description": "Premium IPTV service with IPTV Smarters Pro app support, 27,000+ live channels, 137,000+ VOD, 4K/8K, VPN & instant activation.",
        "provider": {
          "@id": "https://canadianiptvservices.ca/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IPTV Smarters Pro Subscription Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IPTV Smarters Pro Free Trial",
                "description": "Free IPTV trial with IPTV Smarters Pro compatibility"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Premium IPTV Smarters Pro Plan",
                "description": "12-month IPTV subscription with 27,000+ channels, sports, PPV & movies"
              }
            }
          ]
        },
        "audience": {
          "@type": "Audience",
          "geographicArea": {
            "@type": "Country",
            "name": "Worldwide"
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
            "name": "IPTV Smarters Pro Subscription Provider",
            "item": "https://canadianiptvservices.ca/iptv-smarters-pro-subscription-provider"
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
      
      <noscript>
        <p>For the best IPTV Smarters Pro experience, please enable JavaScript.</p>
      </noscript>
      
      <IPTVSmartersPro/>
      <FloatingWhatsAppButton/>
    </>
  )
}
