"use client"
import React from 'react';
import { subscriptions } from '../data/subscriptions';
import { useCart } from './CartContext';
import TrialButton from './TrialButton';

const Subscriptions = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-gray-800" id="subscriptions" aria-labelledby="subscriptions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 id="subscriptions-heading" className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Best IPTV Subscription Plans Canada 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Choose affordable IPTV subscription plans designed for Canadian viewers. All packages work with 
            <strong className="text-blue-400"> IPTV Smarters Pro</strong>, 
            any <strong className="text-blue-400">IPTV box</strong>, and deliver the best IPTV CA streaming quality.
          </p>

          {/* SEO-rich features banner */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 mb-8 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              Why Our IPTV Service is the Best Choice for Canada
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Free IPTV Trial Canada
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Best IPTV Provider CA
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Smart IPTV & IPTV Box Support
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Quebec & Bilingual IPTV
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((plan) => (
            <article
              key={plan.id}
              className={`bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 overflow-hidden ${
                plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-700'
              }`}
              itemScope
              itemType="https://schema.org/Offer"
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 font-semibold">
                  🏆 Most Popular IPTV Plan
                </div>
              )}
              <div className="p-8">
                <h3 
                  className="text-2xl font-bold text-white mb-2"
                  itemProp="name"
                >
                  {plan.title}
                </h3>
                <p 
                  className="text-gray-300 mb-6"
                  itemProp="description"
                >
                  {plan.description} Perfect for Canadian IPTV users with IPTV Smarters Pro and IPTV box compatibility.
                </p>
                
                {/* Pricing */}
                <div className="mb-6" itemProp="priceSpecification" itemScope itemType="https://schema.org/PriceSpecification">
                  <span className="text-4xl font-bold text-white" itemProp="price">{plan.price}</span>
                  <span className="text-gray-400">/{plan.duration}</span>
                  <meta itemProp="priceCurrency" content="CAD" />
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">IPTV Service Includes:</h4>
                  <ul className="space-y-3 mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                    
                    {/* Additional SEO-focused features */}
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span className="text-blue-300">1-Year IPTV Subscription option</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span className="text-blue-300">Best IPTV Canada 2025 streaming quality</span>
                    </li>
                  </ul>
                </div>

                {/* Service Areas */}
                <div className="mb-6 p-3 bg-gray-800/50 rounded-lg border border-blue-500/10">
                  <p className="text-sm text-gray-400 mb-1">
                    <strong className="text-blue-400">Available in:</strong>
                  </p>
                  <p className="text-xs text-gray-500">
                    Ontario • Quebec • BC • Alberta • All Canadian Provinces • International customers welcome
                  </p>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <button
                    onClick={() => addToCart(plan)}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    aria-label={`Add ${plan.title} IPTV subscription to cart - Best IPTV service Canada`}
                  >
                   🛒 Add to cart
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>✓ 24/7 IPTV Support</span>
                    <span>✓ Canadian Servers</span>
                  </div>
                </div>
              </div>
              
              {/* Schema markup for pricing */}
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <meta itemProp="validFrom" content="2025-01-01" />
              <meta itemProp="validThrough" content="2025-12-31" />
              <meta itemProp="seller" content="Canadian IPTV Services" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Canada&apos;s Most Trusted IPTV Service Provider
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Over 50,000 Canadians trust our IPTV service for affordable, reliable, and high-quality streaming. 
              Every IPTV subscription comes with a <strong className="text-blue-400">free trial</strong>, 
              full IPTV Smarters Pro support, and works with all IPTV box devices.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-gray-400">IPTV Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">50K+</div>
                <div className="text-sm text-gray-400">Happy IPTV Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">IPTV Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">4.9★</div>
                <div className="text-sm text-gray-400">Customer Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='#subscriptions' className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                🚀 Start IPTV Free Trial Now
              </a>
              <TrialButton text='📞 Contact IPTV Provider' className={"border-2 border-blue-500 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900/50 transition-colors"}/>
            </div>

            {/* Local SEO */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                <strong className="text-blue-400">IPTV Service Areas:</strong> Toronto IPTV • Montreal IPTV • Vancouver IPTV • 
                Calgary IPTV • Ottawa IPTV • Edmonton IPTV • Quebec City IPTV • Winnipeg IPTV • Hamilton IPTV
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "IPTV Subscription Plans Canada 2025",
            "description": "Best IPTV subscription plans for Canadian customers with free trial, Smarters Pro, and IPTV box compatibility",
            "itemListElement": subscriptions.map((plan, index) => ({
              "@type": "Offer",
              "position": index + 1,
              "name": `${plan.title} - IPTV Canada`,
              "description": `${plan.description} Compatible with IPTV Smarters Pro and IPTV box devices`,
              "price": plan.price.replace(/,/g, ''),
              "priceCurrency": "CAD",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Canadian IPTV Services"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Canada"
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default Subscriptions;
