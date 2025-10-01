// app/faq/page.tsx
import FAQAccordion from '../../components/FAQAccordion';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What is IPTV Smarters Pro Subscription?',
      answer:
        'IPTV Smarters Pro Subscription gives you access to Live TV, Movies, Series, Catch-up TV, and VOD with multi-screen support, EPG integration, and more. It works seamlessly with IPTV Smarters Pro App on multiple devices.',
      category: 'General',
    },
    {
      question: 'Is IPTV Smarters Pro available in Canada?',
      answer:
        'Yes! Our IPTV Smarters Pro Subscription works across Canada and worldwide. No matter where you are, you can enjoy thousands of live channels, premium movies, and sports streams.',
      category: 'Location',
    },
    {
      question: 'What devices are supported?',
      answer:
        'IPTV Smarters Pro is compatible with Smart TVs, Firestick, Android, iOS, Windows, macOS, Roku, MAG, and more. You can also use tablets and streaming sticks.',
      category: 'Devices',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes! We offer a 6-hour free trial and a 24-hour trial for just $1.99 so you can test our service before committing.',
      category: 'Subscription',
    },
    {
      question: 'How fast is activation?',
      answer:
        'Activation is instant. Once you place your order, your IPTV Smarters Pro Subscription is delivered right away so you can start streaming immediately.',
      category: 'Subscription',
    },
    {
      question: 'Can I use IPTV Smarters Pro on multiple devices?',
      answer:
        'Yes, we offer multi-device and multi-screen support. Depending on the plan you choose, you can stream on 2 or more devices at the same time.',
      category: 'Features',
    },
    {
      question: 'Is IPTV Smarters Pro legal in Canada?',
      answer:
        'Yes, using IPTV Smarters Pro App itself is completely legal. However, legality of IPTV services may vary depending on the provider. We ensure stable, reliable, and secure IPTV service worldwide.',
      category: 'Legal',
    },
    {
      question: 'What if I am not satisfied with the service?',
      answer:
        'We provide a 30-day money-back guarantee. If you are not satisfied, you can request a full refund within 30 days of your purchase.',
      category: 'Support',
    },
    {
      question: 'How can I contact support?',
      answer:
        'Our support team is available 24/7 via WhatsApp, Telegram, and Email to help you with activation, setup, or troubleshooting.',
      category: 'Support',
    },
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  return (
    <div className="min-h-screen bg-gray-900">
     

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about IPTV Smarters Pro Subscription, setup, devices,
              and support.
            </p>
          </div>

          <FAQAccordion faqs={faqs} categories={categories} />

          <div className="mt-12 text-center bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQPage;
