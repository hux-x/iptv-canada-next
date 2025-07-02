import React from 'react';
import { subscriptions } from '../data/subscriptions';

import TrialButton from './TrialButton';

const Subscriptions = () => {
  

  return (
    <section className="py-16 bg-gray-800" id="subscriptions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to meet your entertainment needs. 
            All plans include our premium features and 24/7 customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((plan) => (
            <div
              key={plan.id}
              className={`bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 overflow-hidden ${
                plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              
                <TrialButton text='Get Started' className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
