import React from 'react';
import Image from 'next/image';

const SportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Sports Streaming Experience in Canada
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enjoy live sports streaming, exclusive Canadian IPTV coverage, and premium sports channels —
            from hockey and basketball to soccer, baseball, and more.
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-20">
          <div className="bg-gray-800 rounded-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-2/3">
                <Image
                  src="/stadium.webp"
                  alt="Live Sports Streaming Canada"
                  className="w-full h-full min-h-64 object-cover"
                  width={800}
                  height={400}
                  priority
                />
              </div>
              <div className="p-8 md:w-1/3">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">
                  Your Ultimate Sports Destination
                </h2>
                <p className="text-gray-300 mb-6">
                  Get unlimited access to IPTV sports packages in Canada — including live games,
                  replays, expert commentary, and exclusive sports channels designed for true fans.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
                  Explore Sports Packages
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">What You&apos;ll Get</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Live coverage of NHL, NBA, MLB, FIFA, and major tournaments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Exclusive Canadian IPTV sports content and expert analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Multi-sport IPTV streaming including hockey, basketball, baseball, soccer & more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>On-demand replays and highlights for every major sports event</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Premium Sports Features</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">4K</div>
                  <p className="text-sm text-gray-300">Ultra HD IPTV sports streaming</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">🎙️</div>
                  <p className="text-sm text-gray-300">Expert live commentary & in-depth sports analysis</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">📊</div>
                  <p className="text-sm text-gray-300">Real-time stats, scores & advanced sports data</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">📱</div>
                  <p className="text-sm text-gray-300">Watch on any device — TV, mobile, or laptop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Sports */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Popular Sports in IPTV Canada</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏒</span>
                </div>
                <h3 className="font-medium">Hockey</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏀</span>
                </div>
                <h3 className="font-medium">Basketball</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚽</span>
                </div>
                <h3 className="font-medium">Soccer</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚾</span>
                </div>
                <h3 className="font-medium">Baseball</h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Never Miss a Game</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            With our IPTV Canada sports packages, enjoy 24/7 sports streaming,
            live games, highlights, and replays — perfect for casual fans and die-hard sports lovers.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
            Start Your Sports Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
