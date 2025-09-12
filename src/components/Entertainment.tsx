import React from 'react';
import Image from 'next/image';

const EntertainmentPage = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8" id="iptv-entertainment" aria-labelledby="entertainment-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="entertainment-heading" className="text-4xl font-bold text-blue-400 mb-4">
            Premium IPTV Entertainment Canada 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Unlimited access to Canada&apos;s best IPTV entertainment content. Stream movies, TV shows, and exclusive content 
            through our premium IPTV service compatible with <strong className="text-blue-400">IPTV Smarters Pro</strong> and any IPTV box.
          </p>
          
          {/* SEO-rich subtitle */}
          <div className="bg-gray-800/50 rounded-lg p-4 max-w-4xl mx-auto border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">
              <strong className="text-blue-400">Why Choose Our IPTV Entertainment Service:</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <span>✓ Best IPTV Canada Quality</span>
              <span>✓ Smart IPTV Compatible</span>
              <span>✓ IPTV Free Trial Available</span>
              <span>✓ Canadian & International Content</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <article className="bg-gray-800 rounded-xl p-8" itemScope itemType="https://schema.org/VideoObject">
            <h3 className="text-2xl font-bold text-blue-400 mb-6" itemProp="name">
              Featured IPTV Content This Week
            </h3>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <Image
                src="/collection.webp"
                alt="Premium IPTV Entertainment Content - Best IPTV Service Canada 2025"
                className="rounded-lg w-full h-64 object-cover"
                width={800}
                height={450}
                priority
                itemProp="thumbnailUrl"
              />
            </div>
            <p className="text-gray-300 mb-6" itemProp="description">
              Discover our hand-picked selection of blockbuster movies and binge-worthy series updated weekly. 
              Experience the best IPTV service in Canada with 4K streaming quality through IPTV Smarters Pro 
              or any compatible IPTV box device.
            </p>

            {/* Additional IPTV benefits */}
            <div className="bg-gray-700/50 rounded-lg p-4 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">IPTV Service Advantages:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li>✓ Works with IPTV box</li>
                <li>✓ Smart IPTV support</li>
                <li>✓ IPTV provider reliability</li>
                <li>✓ Quebec IPTV content</li>
              </ul>
            </div>
          </article>

          <div className="space-y-8">
            <article className="bg-gray-800 rounded-xl p-6" itemScope itemType="https://schema.org/CreativeWork">
              <h4 className="text-xl font-semibold text-blue-400 mb-4" itemProp="name">
                IPTV Movie Collections - Canada&apos;s Best Selection
              </h4>
              <ul className="space-y-3 text-gray-300" itemProp="description">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🎬</span> 
                  Latest Hollywood releases in 4K through IPTV service
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🏆</span> 
                  Award-winning international cinema via IPTV Canada
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">📽️</span> 
                  Classic film archives on best IPTV provider
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">👨‍👩‍👧‍👦</span> 
                  Family-friendly animations through IPTV Smarters Pro
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🇨🇦</span> 
                  Canadian content and Quebec IPTV programming
                </li>
              </ul>
            </article>

            <article className="bg-gray-800 rounded-xl p-6" itemScope itemType="https://schema.org/CreativeWork">
              <h4 className="text-xl font-semibold text-blue-400 mb-4" itemProp="name">
                IPTV TV Series - Premium Canadian Streaming
              </h4>
              <ul className="space-y-3 text-gray-300" itemProp="description">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">📺</span> 
                  Complete seasons through our IPTV service
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">⭐</span> 
                  Exclusive original productions via IPTV box
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🍁</span> 
                  Canadian-made content and Quebec IPTV shows
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🎭</span> 
                  Critically acclaimed dramas on Smart IPTV
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">📱</span> 
                  Compatible with IPTV Smarters Pro application
                </li>
              </ul>
            </article>
          </div>
        </div>

        <article className="bg-gray-800 rounded-xl p-8" itemScope itemType="https://schema.org/Service">
          <h3 className="text-2xl font-bold text-blue-400 mb-6" itemProp="name">
            Why Choose Our IPTV Entertainment Service in Canada?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-700/30 rounded-lg border border-blue-500/10">
              <h4 className="text-lg font-semibold text-white mb-2">4K Ultra HD IPTV Streaming</h4>
              <p className="text-gray-300">
                Crystal clear picture quality with immersive sound through our premium IPTV service. 
                Compatible with all IPTV box devices and IPTV Smarters Pro for the best viewing experience.
              </p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg border border-blue-500/10">
              <h4 className="text-lg font-semibold text-white mb-2">Ad-Free IPTV Experience</h4>
              <p className="text-gray-300">
                Uninterrupted viewing experience with our premium IPTV provider service. 
                No ads, no interruptions - just pure entertainment through Smart IPTV compatibility.
              </p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg border border-blue-500/10">
              <h4 className="text-lg font-semibold text-white mb-2">Multi-Device IPTV Support</h4>
              <p className="text-gray-300">
                Watch anywhere on all your devices with our flexible IPTV service. 
                Perfect compatibility with IPTV box, Smart TV, tablets, and mobile devices across Canada.
              </p>
            </div>
          </div>

          {/* Additional value propositions */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Complete IPTV Package for Canadian Customers</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-gray-700/20 rounded-lg">
                <div className="text-2xl font-bold text-green-400">25,000+</div>
                <div className="text-sm text-gray-400">Movies & Shows</div>
              </div>
              <div className="p-3 bg-gray-700/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-gray-400">IPTV Uptime</div>
              </div>
              <div className="p-3 bg-gray-700/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Canadian Support</div>
              </div>
              <div className="p-3 bg-gray-700/20 rounded-lg">
                <div className="text-2xl font-bold text-orange-400">FREE</div>
                <div className="text-sm text-gray-400">IPTV Trial</div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-8 text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              Ready to Experience Canada&apos;s Best IPTV Entertainment?
            </h4>
            <p className="text-gray-300 mb-6">
              Start your <strong className="text-blue-400">IPTV free trial</strong> today and discover why thousands 
              of Canadians choose our IPTV provider for their entertainment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                🚀 Start IPTV Free Trial
              </button>
              <a 
                href="#subscriptions" 
                className="border-2 border-blue-500 text-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900/50 transition-colors"
              >
                📋 View IPTV Plans
              </a>
            </div>
          </div>
        </article>

        {/* Local SEO section */}
        <div className="mt-12 text-center bg-gray-800/30 rounded-lg p-6 border border-blue-500/10">
          <p className="text-sm text-gray-400">
            <strong className="text-blue-400">IPTV Entertainment Service Available Across Canada:</strong><br />
            Toronto • Montreal • Vancouver • Calgary • Ottawa • Edmonton • Quebec City • Winnipeg • Hamilton • London • Halifax
          </p>
        </div>
      </div>

      {/* Schema markup for entertainment service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            "name": "Canadian IPTV Entertainment Service",
            "description": "Premium IPTV entertainment service for Canada with movies, TV shows, and exclusive content",
            "url": "https://canadianiptvservices.ca/#iptv-entertainment",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CA"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Canada"
            },
            "serviceType": "IPTV Entertainment Streaming",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IPTV Entertainment Content",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "VideoObject",
                    "name": "4K Movies and TV Shows",
                    "description": "Premium movie and TV show collection with 4K streaming"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "VideoObject",
                    "name": "Canadian Content",
                    "description": "Exclusive Canadian and Quebec IPTV programming"
                  }
                }
              ]
            }
          })
        }}
      />
    </section>
  );
};

export default EntertainmentPage;