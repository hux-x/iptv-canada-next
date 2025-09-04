import ContactForm from './ContactForm'; // client form

export default function Contact() {
  return (
    <section className="py-16 bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our IPTV services? Our expert support team is here 
            to help you 24/7. Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info (static) */}
          <div>
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    {/* Icon */}
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">support@streampro.ca</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    {/* Icon */}
                  </div>
                  <a
                    href="https://wa.me/+12363003045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:bg-blue-950/30 transition rounded-lg p-2 -m-2"
                  >
                    <div>
                      <div className="font-semibold text-white">WhatsApp</div>
                      <div className="text-gray-300">+92 321 8542050</div>
                    </div>
                  </a>
                </div>

                {/* Support Hours */}
                <div className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    {/* Icon */}
                  </div>
                  <div>
                    <div className="font-semibold text-white">Support Hours</div>
                    <div className="text-gray-300">24/7 Customer Support</div>
                    <div className="text-sm text-gray-400">Always available to help</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (dynamic, client-side only) */}
          <div>
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
