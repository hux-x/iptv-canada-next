import React from 'react';
import { resellerPlans } from '../data/subscriptions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrialButton from '../components/TrialButton';
import Image from 'next/image';


const Reseller = () => {


  const benefits = [
    {
      title: 'High Profit Margins',
      description: 'Earn up to 50% profit on every subscription you sell',
      icon: '💰',
    },
    {
      title: 'Complete Support System',
      description: '24/7 technical support and dedicated account management',
      icon: '🛠️',
    },
    {
      title: 'Marketing Materials',
      description: 'Professional marketing assets and promotional content',
      icon: '📈',
    },
    {
      title: 'White-Label Solutions',
      description: 'Brand the service with your own company name and logo',
      icon: '🏷️',
    },
    {
      title: 'Flexible Credit System',
      description: 'Buy credits in bulk and manage your inventory efficiently',
      icon: '⚡',
    },
    {
      title: 'Training & Resources',
      description: 'Complete training program and ongoing educational resources',
      icon: '🎓',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative">
   

      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Become an IPTV <span className="text-blue-400">Reseller</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our reseller program and start your own profitable IPTV business. We provide everything you need to succeed in the growing streaming market.
          </p>
        
          <TrialButton text='Start Your Business Today' className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors'/>
        </div>
      </div>

      {/* What is Reselling Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">What is IPTV Reselling?</h2>
              <p className="text-lg text-gray-300 mb-6">
                IPTV reselling is a business model where you purchase IPTV subscriptions in bulk at wholesale prices and resell them to end customers at retail prices, keeping the profit margin.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                As an IPTV reseller, you become a middleman between the IPTV service provider and the customers. You handle customer acquisition, sales, and basic support, while we provide the technical infrastructure and premium content.
              </p>
              <div className="space-y-4">
                {[
                  'Low startup costs with high profit potential',
                  'No technical expertise required',
                  'Scalable business model',
                ].map((item, idx) => (
                  <div className="flex items-center" key={idx}>
                    <div className="bg-green-800 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="IPTV Reseller Business"
                className="rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Our Reseller Program?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive support and tools to help you build a successful IPTV reselling business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-700">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller Plans Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Reseller Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect reseller plan to match your business goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resellerPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 overflow-hidden ${
                  plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">Most Popular</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0L4.293 10.707a1 1 0 011.414-1.414L8 11.586l7.293-7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
              
                  <TrialButton text="Get Started"  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reseller;
