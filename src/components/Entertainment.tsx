import React from 'react';
import Image from 'next/image';
const EntertainmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Entertainment Universe</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlimited access to the world's finest movies, shows, and exclusive content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Featured This Week</h2>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <Image
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1"
              alt="Featured Content"
              className="rounded-lg w-full h-64 object-cover"
              width={800}
              height={450}
              priority
              />
            </div>
            <p className="text-gray-300 mb-6">
              Discover our hand-picked selection of blockbuster movies and binge-worthy series updated weekly.
            </p>
        
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Movie Collections</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Latest Hollywood releases in 4K
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Award-winning international cinema
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Classic film archives
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Family-friendly animations
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">TV Series</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Complete seasons of popular shows
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Exclusive original productions
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Canadian-made content
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Critically acclaimed dramas
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Why Choose Our Entertainment?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">4K Ultra HD</h3>
              <p className="text-gray-300">Crystal clear picture quality with immersive sound</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">No Ads</h3>
              <p className="text-gray-300">Uninterrupted viewing experience</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Multi-Device</h3>
              <p className="text-gray-300">Watch anywhere on all your devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPage;