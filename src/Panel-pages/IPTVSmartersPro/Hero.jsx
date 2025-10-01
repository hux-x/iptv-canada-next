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
              Official <span className="text-blue-400">IPTV Smarters Pro Subscription</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
              Unlock the full power of <strong>IPTV Smarters Pro</strong> — the #1 choice for 
              <strong className="text-blue-400"> IPTV streaming worldwide</strong>.  
              With the <strong>IPTV Smarters Pro App</strong> and 
              <strong> IPTV Smarters Pro Player</strong>, enjoy seamless access to 
              <strong> 27,000+ live channels</strong> and over 
              <strong> 165K Movies & TV Shows (VOD)</strong> in <strong>4K / 8K Ultra HD</strong>.
            </p>

            <p className="text-gray-400 mb-6">
              Our <strong>IPTV Smarters Subscription</strong> includes 
              <strong> Multi-Screen support</strong>, 
              <strong> Electronic Program Guide (EPG)</strong>, 
              <strong> parental controls</strong>, 
              <strong> catch-up TV</strong>, 
              <strong> free VPN</strong>, and 
              <strong> AntiFreeze Technology™ 9.0</strong> for 
              <span className="text-blue-400"> stable, buffer-free IPTV streaming</span>.
            </p>
            
            {/* Key Features */}
            <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-blue-500/20">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  IPTV Smarters Pro App & Player Supported
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  27,000+ Live TV Channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  165K+ Movies & Series (VOD)
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Multi-Screen & EPG Integration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Sports IPTV – NBA, NFL, NHL, MLB, ESPN+, PPV
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Free IPTV Trial
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#subscriptions" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
              >
                Start Free IPTV Trial
              </a>
              <a 
                href="#subscriptions" 
                className="border-2 border-blue-500 text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900/50 transition text-center"
                aria-label="View IPTV Smarters Pro subscription plans"
              >
                View IPTV Plans
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              {[
                { label: 'Live Channels', value: '27,000+', description: 'Worldwide IPTV Access' },
                { label: 'Movies & Series', value: '165K+', description: 'On-Demand VOD Library' },
                { label: 'Streaming Quality', value: '4K / 8K', description: 'Ultra HD IPTV Experience' },
              ].map(({ label, value, description }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                  <div className="text-xs text-gray-500">{description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <Image
              src="/IPTV.webp"
              alt="IPTV Smarters Pro Subscription – Premium IPTV App & Player"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-auto"
              priority
            />
            <div className="absolute -bottom-6 left-4 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-xl animate-fade-in-up">
              <div className="text-sm text-gray-400">Streaming Quality</div>
              <div className="text-2xl font-bold text-green-400 animate-pulse">4K / 8K Ultra HD IPTV</div>
              <div className="text-xs text-gray-500">Powered by IPTV Smarters Pro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
