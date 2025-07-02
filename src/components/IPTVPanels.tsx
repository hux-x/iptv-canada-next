
import React from 'react';
import { iptvPanels } from '../data/panels';
import Image from 'next/image';
const IPTVPanels = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Professional IPTV Panels
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide industry-leading IPTV management panels with advanced features 
            and comprehensive tools for service providers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iptvPanels.map((panel) => (
            <div key={panel.id} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 overflow-hidden">
              <Image
                src={panel.image} 
                alt={panel.title}
                width={400}
                height={192}/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {panel.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {panel.description}
                </p>
                <ul className="space-y-2">
                  {panel.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IPTVPanels;
