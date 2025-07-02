'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*IPTV Inquiry from Contact Form*\n\n*Name:* ${fullName}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = '923218542050';

    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <form className="space-y-6" onSubmit={handleSendMessage}>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          placeholder="What's this about?"
          className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Tell us how we can help you..."
          className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Send Message via WhatsApp
      </button>
    </form>
  );
}
