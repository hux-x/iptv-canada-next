// app/faq/page.tsx
import { faqs } from '../data/faqs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const FAQPage = () => {
  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our IPTV services, setup process, 
              and support options.
            </p>
          </div>

          <FAQAccordion faqs={faqs} categories={categories} />

          <div className="mt-12 text-center bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
