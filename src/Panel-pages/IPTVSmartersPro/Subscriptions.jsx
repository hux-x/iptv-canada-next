"use client";
import { useCart } from '../../components/CartContext';
import TrialButton from '../../components/TrialButton';
export const subscriptions = [
  {
    id: "free-trial",
    title: "Free 24 Hour IPTV Smarters Pro Trial",
    description: "Best way to test IPTV Smarters Pro service with live channels and movies",
    price: "$0.00",
    duration: "24 Hours",
    features: [
      "27,000+ Live IPTV Channels",
      "165K+ Movies & TV Shows (VOD)",
      "4K / 8K Ultra HD IPTV Streaming",
      "Priority IPTV Smarters Support",
      "Free IPTV Smarters Pro Setup"
    ]
  },
  {
    id: "essential",
    title: "Essential IPTV Smarters Pro Plan",
    description: "Affordable IPTV Smarters subscription for casual viewers",
    price: "$29.99",
    duration: "3 months",
    features: [
      "27,000+ Live IPTV Channels",
      "All Premium Sports & Movies",
      "14-Day IPTV Catch-Up TV",
      "4K Ultra HD IPTV Service",
      "EPG & Advanced Smarters Pro Features",
      "Priority IPTV Support",
      "Free IPTV Setup Assistance"
    ]
  },
  {
    id: "premium",
    title: "Premium IPTV Smarters Pro Plan",
    description: "Most popular IPTV Smarters Pro subscription for families",
    price: "$49.99",
    duration: "6 months",
    features: [
      "27,000+ Live IPTV Channels",
      "165K+ Movies & Series",
      "14-Day Catch-Up IPTV Service",
      "4K Ultra HD + HDR IPTV Streaming",
      "Multi-Screen & EPG Integration",
      "24/7 IPTV Support",
      "Free IPTV Setup"
    ]
  },
  {
    id: "ultimate",
    title: "Ultimate IPTV Smarters Pro Plan",
    description: "Complete IPTV Smarters Pro subscription for unlimited entertainment",
    price: "$89.00",
    duration: "12 months",
    features: [
      "27,000+ Live IPTV Channels",
      "165K+ Movies & TV Shows (VOD)",
      "14-Day Catch-Up TV",
      "4K / 8K Ultra HD IPTV Streaming",
      "Advanced IPTV Features + EPG",
      "Priority IPTV Smarters Support",
      "Free IPTV Setup Assistance"
    ],
    popular: true
  }
];

const Subscriptions = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-gray-800" id="subscriptions" aria-labelledby="subscriptions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 id="subscriptions-heading" className="text-3xl lg:text-4xl font-bold text-white mb-4">
            IPTV Smarters Pro Subscription Plans 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Choose the best <strong>IPTV Smarters Pro subscription</strong> plan for your needs.  
            All packages are fully compatible with the <strong className="text-blue-400">IPTV Smarters Pro App</strong>,  
            <strong className="text-blue-400"> IPTV Smarters Pro Player</strong>, Smart TVs, Android, iOS, Firestick, and IPTV Boxes.
          </p>

          {/* SEO-rich features banner */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 mb-8 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              Why Choose IPTV Smarters Pro Subscription?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Free IPTV Smarters Pro Trial</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> Multi-Screen & Catch-Up TV</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> IPTV Smarters Pro Player Support</div>
              <div className="flex items-center"><span className="text-green-400 mr-2">✓</span> 4K / 8K Ultra HD IPTV Streaming</div>
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
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 font-semibold">
                  🏆 Most Popular Plan
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-gray-300 mb-6">{plan.description}. Works seamlessly with <strong>IPTV Smarters Pro</strong> App & Player.</p>

                {/* Pricing */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.duration}</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Plan Includes:</h4>
                  <ul className="space-y-3 mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <button
                    onClick={() => addToCart(plan)}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    aria-label={`Add ${plan.title} IPTV Smarters Pro subscription to cart`}
                  >
                    🛒 Add to Cart
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>✓ 24/7 IPTV Support</span>
                    <span>✓ Smarters Pro Compatible</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Official IPTV Smarters Pro Subscription
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Over 100,000 users worldwide trust <strong>IPTV Smarters Pro</strong> for reliable, buffer-free IPTV streaming.  
              Every subscription comes with a <strong className="text-blue-400">Free IPTV Trial</strong>, full support for  
              <strong> IPTV Smarters Pro App</strong> & <strong>IPTV Smarters Pro Player</strong>, and works on all devices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center"><div className="text-2xl font-bold text-blue-400">99.9%</div><div className="text-sm text-gray-400">Server Uptime</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-green-400">100K+</div><div className="text-sm text-gray-400">Active Users</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-purple-400">24/7</div><div className="text-sm text-gray-400">Support</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-orange-400">4.9★</div><div className="text-sm text-gray-400">User Rating</div></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#subscriptions" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                🚀 Start Free IPTV Smarters Pro Trial
              </a>
              <TrialButton
                text="📞 Contact Support"
                className={'border-2 border-blue-500 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900/50 transition-colors'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
