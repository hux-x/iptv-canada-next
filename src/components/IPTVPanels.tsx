import React from 'react';
import { iptvPanels } from '../data/panels';
import Image from 'next/image';

const IPTVPanels = () => {
  return (
    <section className="py-16 bg-gray-900" id="iptv-services" aria-labelledby="iptv-services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="iptv-services-heading" className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Premium IPTV Services Canada 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Complete IPTV service package for Canadian viewers. Our IPTV provider offers the best 
            streaming experience with <strong className="text-blue-400">IPTV Smarters Pro compatibility</strong> 
            and support for all IPTV box devices.
          </p>
          
          {/* SEO-rich subtitle */}
          <div className="bg-gray-800/50 rounded-lg p-4 max-w-4xl mx-auto border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">
              <strong className="text-blue-400">Why Choose Our IPTV Service:</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <span>✓ Best IPTV Canada</span>
              <span>✓ IPTV Free Trial</span>
              <span>✓ Smart IPTV Compatible</span>
              <span>✓ Quebec IPTV Available</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iptvPanels.map((panel, index) => (
            <article 
              key={panel.id} 
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 overflow-hidden"
              itemScope 
              itemType="https://schema.org/Service"
            >
              <Image
                src={panel.image} 
                alt={`${panel.title} - Premium IPTV Service for Canadian viewers`}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
                loading={index > 2 ? "lazy" : "eager"}
              />
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold text-white mb-3"
                  itemProp="name"
                >
                  {panel.title} - IPTV Canada
                </h3>
                <p 
                  className="text-gray-300 mb-4"
                  itemProp="description"
                >
                  {panel.description} Compatible with IPTV Smarters Pro and all IPTV box devices for the best streaming experience in Canada.
                </p>
                
                {/* Enhanced features list with SEO keywords */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">IPTV Service Features:</h4>
                  <ul className="space-y-2">
                    {panel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span itemProp="serviceOutput">{feature}</span>
                      </li>
                    ))}
                    {/* Additional SEO features */}
                    <li className="flex items-center text-sm text-blue-300">
                      <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      IPTV Box & Smart TV compatible
                    </li>
                  </ul>
                </div>

                {/* Service availability */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500">
                    Available across Canada: Ontario, Quebec, BC, Alberta
                  </p>
                </div>
              </div>
              
              {/* Schema markup for each service */}
              <meta itemProp="provider" content="Canadian IPTV Services" />
              <meta itemProp="areaServed" content="Canada" />
              <meta itemProp="serviceType" content="IPTV Streaming Service" />
            </article>
          ))}
        </div>

        {/* Bottom CTA section with keywords */}
        <div className="mt-16 text-center bg-gray-800/50 rounded-xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Experience the Best IPTV Service in Canada?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Canada who trust our IPTV provider for their entertainment needs. 
            Start your <strong className="text-blue-400">IPTV free trial</strong> today and discover why we&apos;re the 
            top-rated IPTV service from Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start IPTV Free Trial
            </button>
            <a 
              href="#subscriptions" 
              className="border-2 border-blue-500 text-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900/50 transition-colors"
            >
              View IPTV Subscription Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPTVPanels;