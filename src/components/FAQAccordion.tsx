'use client';
import React, { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface Props {
  faqs: FAQ[];
  categories: string[];
}

const FAQAccordion: React.FC<Props> = ({ faqs, categories }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFAQs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <div key={faq.id} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
            >
              <span className="font-semibold text-white pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${
                  openItems.includes(faq.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openItems.includes(faq.id) && (
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQAccordion;
