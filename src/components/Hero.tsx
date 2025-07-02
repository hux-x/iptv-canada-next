import React  from 'react';

import Image from 'next/image';
import TrialButton from './TrialButton';
const Hero = () => {
  
  

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-32 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-0 animate-pulse-slow"></div>

      {/* Trial Popup */}
    

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Premium IPTV Services for{' '}
              <span className="text-blue-400">Canada</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Discover the next generation of entertainment. With 4K streaming, 
              24/7 access to global channels, and an ever-growing library of on-demand content, 
              we redefine how you watch TV.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <TrialButton text={'Start Free Trial'} className={'bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition'}/>
              <button className="border-2 border-blue-500 text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900/50 transition">
                View Plans
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center space-x-8">
              {[
                { label: 'Live Channels', value: '12,000+' },
                { label: 'Movies & Shows', value: '25,000+' },
                { label: 'Uptime', value: '99.9%' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
            <div className="relative group">
            <Image
              src="https://www.dacast.com/wp-content/uploads/2021/03/IPTV.jpg"
              alt="Modern IPTV Streaming"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-auto"
              priority
            />
            <div className="absolute -bottom-6 left-4 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-xl animate-fade-in-up">
              <div className="text-sm text-gray-400">Streaming Quality</div>
              <div className="text-2xl font-bold text-green-400 animate-pulse">4K Ultra HD</div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
