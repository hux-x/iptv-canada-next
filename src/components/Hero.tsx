import React from 'react';
import Image from 'next/image';
import TrialButton from './TrialButton';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-32 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-0 animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Best IPTV Canada 2025 -{' '}
              <span className="text-blue-400">Premium IPTV Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
              Experience Canada&apos;s #1 IPTV service with <strong className="text-blue-400">IPTV Smarters Pro compatibility</strong>, 
              12,000+ live channels, and 4K streaming quality. Perfect for any IPTV box or smart TV.
            </p>
            
            {/* Key Features for SEO */}
            <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-blue-500/20">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  IPTV Smarters Pro supported
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Works with any IPTV box
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  IPTV free trial available
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Best IPTV provider Canada
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <TrialButton 
                text={'Start IPTV Free Trial'} 
                className={'bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition'}
              />
              <a 
                href="#subscriptions" 
                className="border-2 border-blue-500 text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900/50 transition text-center"
                aria-label="View IPTV subscription plans for Canada"
              >
                IPTV Subscription Plans
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              {[
                { label: 'Live TV Channels', value: '12,000+', description: 'Canadian & International' },
                { label: 'Movies & Shows', value: '25,000+', description: 'On-Demand Content' },
                { label: 'Service Uptime', value: '99.9%', description: 'Reliable IPTV Service' },
              ].map(({ label, value, description }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                  <div className="text-xs text-gray-500">{description}</div>
                </div>
              ))}
            </div>

            {/* Geographic Targeting */}
            <div className="mt-8 text-sm text-gray-400">
              <p>
                Serving all Canadian provinces: 
                <span className="text-blue-400 ml-1">Ontario, Quebec, British Columbia, Alberta</span> and more.
                Compatible with <strong className="text-white">Smart IPTV</strong> and all major IPTV applications.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <Image
              src="/IPTV.webp"
              alt="Best IPTV Canada 2025 - IPTV Smarters Pro Compatible Streaming Service"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-auto"
              priority
            />
            <div className="absolute -bottom-6 left-4 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-xl animate-fade-in-up">
              <div className="text-sm text-gray-400">IPTV Streaming Quality</div>
              <div className="text-2xl font-bold text-green-400 animate-pulse">4K Ultra HD</div>
              <div className="text-xs text-gray-500">Compatible with IPTV Box</div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Best IPTV Canada 2025",
            "description": "Premium IPTV service for Canada with IPTV Smarters Pro compatibility, 12,000+ channels, and free trial",
            "brand": {
              "@type": "Brand",
              "name": "Canadian IPTV Services"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1250"
            },
            "category": "IPTV Service"
          })
        }}
      />
    </section>
  );
};

export default Hero;