import React from 'react';
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

  const planLevels = [
    {
      id: 1,
      title: 'Starter Reseller',
      description: 'Perfect for individuals looking to start their IPTV business',
      features: [
        'Up to 50 active subscribers',
        'Basic marketing materials',
        'Email support',
        'Monthly billing',
        'Access to reseller dashboard',
      ],
      cta: 'Begin your journey'
    },
    {
      id: 2,
      title: 'Professional Reseller',
      description: 'Ideal for growing businesses with established customer base',
      features: [
        'Up to 500 active subscribers',
        'Advanced marketing toolkit',
        'Priority email & chat support',
        'Weekly billing options',
        'Custom branding available',
        'Performance analytics',
      ],
      cta: 'Scale your business',
      popular: true
    },
    {
      id: 3,
      title: 'Enterprise Reseller',
      description: 'For large-scale operations with high volume needs',
      features: [
        'Unlimited subscribers',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom billing solutions',
        'API access',
        'Advanced reporting',
        'Bulk activation tools',
      ],
      cta: 'Build your empire'
    }
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
          <TrialButton 
            text='Start Your Business Today' 
            className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors'
          />
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

      {/* Reseller Tiers Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Reseller Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer customized solutions for resellers at every stage of growth. Contact us for pricing tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planLevels.map((plan) => (
              <div
                key={plan.id}
                className={`bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 overflow-hidden ${
                  plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">Recommended</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
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
                  <TrialButton 
                    text={plan.cta} 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
              We work with high-volume resellers to create tailored packages with special pricing and features.
            </p>
            <TrialButton 
              text="Request Custom Plan" 
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How Our Reseller Program Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start and grow your IPTV reselling business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Get in touch to discuss your needs and choose the right reseller tier"
              },
              {
                step: "2",
                title: "Get Approved",
                description: "Complete our quick verification process"
              },
              {
                step: "3",
                title: "Receive Credentials",
                description: "Get access to your reseller dashboard and resources"
              },
              {
                step: "4",
                title: "Start Selling",
                description: "Begin offering services to your customers"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <TrialButton 
              text="Ready to Get Started?" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reseller;