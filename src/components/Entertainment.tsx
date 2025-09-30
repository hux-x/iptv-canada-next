import React from 'react';
import Image from 'next/image';

const EntertainmentPage = () => {
  return (
    <section
      className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
      id="iptv-entertainment"
      aria-labelledby="entertainment-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="entertainment-heading"
            className="text-4xl font-bold text-blue-400 mb-4"
          >
            Premium IPTV Entertainment Canada 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Enjoy unlimited <strong className="text-blue-400">IPTV Canada</strong> entertainment with
            movies, TV shows, and exclusive series. Our IPTV service is compatible with
            <strong className="text-blue-400"> IPTV Smarters Pro</strong>, Smart IPTV, and any IPTV
            box for seamless streaming.
          </p>

          {/* SEO-rich highlights */}
          <div className="bg-gray-800/50 rounded-lg p-4 max-w-4xl mx-auto border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">
              <strong className="text-blue-400">Why Choose Our IPTV Entertainment Service:</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <span>✓ Best IPTV Canada Quality</span>
              <span>✓ Smart IPTV Compatible</span>
              <span>✓ IPTV Free Trial Available</span>
              <span>✓ Canadian & Quebec IPTV Content</span>
            </div>
          </div>
        </div>

        {/* Featured section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <article className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Featured IPTV Content This Week
            </h3>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <Image
                src="/collection.webp"
                alt="Premium IPTV Entertainment Content - Best IPTV Canada Service"
                className="rounded-lg w-full h-64 object-cover"
                width={800}
                height={450}
                priority
              />
            </div>
            <p className="text-gray-300 mb-6">
              Watch the latest blockbuster movies, trending TV shows, and exclusive originals.
              Experience the <strong>best IPTV service in Canada</strong> with 4K quality on IPTV
              Smarters Pro, Smart IPTV, and IPTV boxes.
            </p>

            <div className="bg-gray-700/50 rounded-lg p-4 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                IPTV Service Benefits:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li>✓ Works with any IPTV box</li>
                <li>✓ Full Smart IPTV support</li>
                <li>✓ Reliable IPTV provider in Canada</li>
                <li>✓ Quebec IPTV & local content</li>
              </ul>
            </div>
          </article>

          {/* Movie and Series Sections */}
          <div className="space-y-8">
            <article className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">
                IPTV Movie Collections – Canada&apos;s Best
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>🎬 Hollywood releases in 4K IPTV</li>
                <li>🏆 Award-winning international cinema</li>
                <li>📽️ Classic archives with top IPTV providers</li>
                <li>👨‍👩‍👧‍👦 Family-friendly IPTV animations</li>
                <li>🇨🇦 Canadian & Quebec IPTV exclusives</li>
              </ul>
            </article>

            <article className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">
                IPTV TV Series – Premium Canadian Streaming
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>📺 Complete series & box sets</li>
                <li>⭐ Exclusive IPTV originals</li>
                <li>🍁 Canadian IPTV drama & shows</li>
                <li>🎭 Critically acclaimed global dramas</li>
                <li>📱 IPTV Smarters Pro compatibility</li>
              </ul>
            </article>
          </div>
        </div>

        {/* Why Choose */}
        <article className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">
            Why Canadians Choose Our IPTV Entertainment Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-700/30 rounded-lg border border-blue-500/10">
              <h4 className="text-lg font-semibold text-white mb-2">4K Ultra HD IPTV</h4>
              <p className="text-gray-300">
                Enjoy crystal-clear 4K streaming with top IPTV Canada providers. Works with IPTV
                boxes, Smart TVs, and IPTV Smarters Pro.
              </p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg border border-blue-500/10">
              <h4 className="text-lg font-semibold text-white mb-2">Ad-Free IPTV</h4>
              <p className="text-gray-300">
                Watch uninterrupted with our ad-free IPTV service. No distractions – just premium
                entertainment.
              </p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg border border-blue-500/10">
              <h4 className="text-lg font-semibold text-white mb-2">Multi-Device Support</h4>
              <p className="text-gray-300">
                Stream IPTV on Smart TVs, Android boxes, Firestick, and mobiles across Canada.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
              Complete IPTV Package for Canada
            </h4>
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
                <div className="text-sm text-gray-400">IPTV Support Canada</div>
              </div>
              <div className="p-3 bg-gray-700/20 rounded-lg">
                <div className="text-2xl font-bold text-orange-400">FREE</div>
                <div className="text-sm text-gray-400">IPTV Trial</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready for Canada’s #1 IPTV Entertainment?
            </h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Access <strong className="text-blue-400">25,000+ movies, shows & live channels</strong>{' '}
              in 4K. Start your{' '}
              <a
                href="#subscriptions"
                className="text-green-400 font-semibold"
              >
                FREE IPTV trial
              </a>{' '}
              today – no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#subscriptions"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                🚀 Start Free IPTV Trial
              </a>
              <a
                href="#subscriptions"
                className="border-2 border-blue-500 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900/50 transition-colors"
              >
                📋 View IPTV Plans
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <span>✓ Trusted by 50,000+ Canadians</span>
              <span>✓ 24/7 IPTV Support</span>
              <span>✓ 4.9★ Customer Rating</span>
              <span>✓ Quebec IPTV Included</span>
            </div>
          </div>
        </article>

        {/* Local SEO */}
        <div className="mt-12 text-center bg-gray-800/30 rounded-lg p-6 border border-blue-500/10">
          <p className="text-sm text-gray-400">
            <strong className="text-blue-400">Available Across Canada:</strong>
            <br />
            Toronto • Montreal • Vancouver • Calgary • Ottawa • Edmonton • Quebec City • Winnipeg •
            Hamilton • London • Halifax
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentPage;
