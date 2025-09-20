import React from 'react';
import Image from 'next/image';

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
              <span className="text-blue-400">Trusted & Affordable Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
              Unlock the best IPTV experience in Canada with support for 
              <strong className="text-blue-400"> IPTV Smarters Pro</strong>, 
              <strong className="text-blue-400"> TiviMate</strong>, 
              <strong className="text-blue-400"> XCIPTV</strong>, and 
              <strong className="text-blue-400"> Smart IPTV (SIPTV)</strong>.  
              Get instant access to 12,000+ live TV channels, thousands of on-demand movies, and true 4K streaming quality — optimized for Firestick, Android TV boxes, Smart TVs, and more.
            </p>

            <p className="text-gray-400 mb-6">
              Choose from <strong>affordable IPTV Canada plans</strong>, enjoy 
              <strong> reliable IPTV services</strong>, and stream with confidence from one of the 
              <strong> best IPTV providers in Canada</strong>.
            </p>
            
            {/* Key Features */}
            <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-blue-500/20">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  IPTV Smarters Pro supported
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Works with any IPTV box Canada
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Free IPTV trial available
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Best IPTV provider Canada
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Affordable monthly & yearly plans
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Trusted IPTV services Canada
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#subscriptions" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
              >
                Start IPTV Free Trial
              </a>
              <a 
                href="#subscriptions" 
                className="border-2 border-blue-500 text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900/50 transition text-center"
                aria-label="View IPTV subscription plans for Canada"
              >
                View IPTV Plans
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
                Stream anywhere in Canada with one of the <strong className="text-white">most reliable IPTV services</strong>.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <Image
              src="/IPTV.webp"
              alt="Best IPTV Canada 2025 - IPTV Service Compatible with IPTV Smarters Pro and Android TV"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-auto"
              priority
            />
            <div className="absolute -bottom-6 left-4 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-xl animate-fade-in-up">
              <div className="text-sm text-gray-400">IPTV Streaming Quality</div>
              <div className="text-2xl font-bold text-green-400 animate-pulse">4K Ultra HD</div>
              <div className="text-xs text-gray-500">Compatible with any IPTV Box in Canada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Best IPTV Canada 2025",
            "description": "Trusted IPTV service in Canada with IPTV Smarters Pro compatibility, 12,000+ channels, 4K streaming, and affordable monthly & yearly IPTV plans.",
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
