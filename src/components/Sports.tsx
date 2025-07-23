import React from 'react';
import Image from 'next/image';
const SportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Sports Experience</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive sports coverage for every fan across Canada
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-gray-800 rounded-xl overflow-hidden mb-12">
            <div className="md:flex">
                <div className="md:w-2/3">
                <Image
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
                  alt="Live Sports"
                  className="w-full h-full min-h-64 object-cover"
                  width={800}
                  height={400}
                  priority
                />
                </div>
              <div className="p-8 md:w-1/3">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Your Sports Destination</h2>
                <p className="text-gray-300 mb-6">
                  Access all the sports action you love, from professional leagues to amateur competitions, 
                  with premium coverage and exclusive content.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
                  Explore Sports Packages
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">What You;ll Get</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Live coverage of major professional leagues and tournaments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Exclusive Canadian sports content and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>Multi-sport coverage including hockey, basketball, baseball, soccer and more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span>On-demand replays of key games and highlights</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Premium Features</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">4K</div>
                  <p className="text-sm text-gray-300">Ultra HD broadcast for select events</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">🎙️</div>
                  <p className="text-sm text-gray-300">Expert commentary and analysis</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">📊</div>
                  <p className="text-sm text-gray-300">Advanced stats and real-time data</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-blue-400 text-2xl mb-2">📱</div>
                  <p className="text-sm text-gray-300">Watch on any device, anywhere</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Popular Sports</h2>
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

        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Never Miss a Game</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get access to all your favorite sports with our comprehensive packages. 
            Perfect for casual fans and die-hard enthusiasts alike.
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