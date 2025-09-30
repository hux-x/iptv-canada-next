import React from 'react';
import Image from 'next/image';
import TrialButton from './TrialButton';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">IPTV News Network</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with 24/7 IPTV news streaming in Canada —
            live and on-demand news channels from trusted global and Canadian sources.
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-20">
          <div className="bg-gray-800 rounded-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-2/3">
                <Image
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=800&fit=crop&q=80"
                  alt="24/7 Live News IPTV Streaming Canada"
                  className="w-full h-full min-h-64 object-cover"
                  width={1200}
                  height={800}
                  priority
                />
              </div>
              <div className="p-8 md:w-1/3">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Comprehensive IPTV News Coverage</h2>
                <p className="text-gray-300 mb-6">
                  Access Canadian IPTV news channels and international broadcasts —
                  including breaking news, politics, business, financial updates, and live global events.
                </p>
                <TrialButton
                  text="View News Channels"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
                />
              </div>
            </div>
          </div>

          {/* News Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">News Channel Packages</h2>
              <div className="space-y-6">
                {[
                  { title: "Basic News", desc: "Major Canadian IPTV networks and daily headlines" },
                  { title: "Premium News", desc: "Includes financial, business, and specialty IPTV channels" },
                  { title: "World News", desc: "Global IPTV coverage across every continent" },
                  { title: "News + Analysis", desc: "Includes commentary, investigations & expert insights" }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Networks */}
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Featured IPTV News Networks</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "CBC News (Canada)", short: "CBC" },
                  { name: "CTV News", short: "CTV" },
                  { name: "Global News Canada", short: "GLO" },
                  { name: "CNN International", short: "CNN" }
                ].map((net, idx) => (
                  <div key={idx} className="bg-blue-900/20 p-4 rounded-lg flex items-center">
                    <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="text-blue-400">{net.short}</span>
                    </div>
                    <span className="text-sm">{net.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* News Features */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">IPTV News Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "📺", title: "Live Coverage", desc: "24/7 IPTV news streaming, breaking updates" },
                { icon: "⏪", title: "Catch-Up", desc: "Replay programs and watch missed broadcasts" },
                { icon: "📱", title: "Multi-Device", desc: "Watch IPTV news on TV, mobile, or laptop" }
              ].map((feature, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-blue-900/50 rounded-lg p-3 mr-4">
                    <span className="text-blue-400 text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Stay Informed 24/7 with IPTV Canada</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get unlimited access to Canadian IPTV news channels and global news streaming with our flexible packages.
            Perfect for staying updated on politics, business, finance, and world events.
          </p>
          <TrialButton
            text="View News Channels"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
