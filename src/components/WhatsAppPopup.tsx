'use client'
import React from 'react';

const WhatsappPopup = ({ onClose }: { onClose: () => void }) => {
  const whatsappLink =
    'https://wa.me/11234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20IPTV%20reseller%20program.';

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white text-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Talk to Us on WhatsApp</h2>
        <p className="mb-6">
          You’ll be redirected to WhatsApp to chat with our representative.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsappPopup;
