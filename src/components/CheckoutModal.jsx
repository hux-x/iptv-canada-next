"use client"
import React from 'react';
import { X, MessageCircle } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, onConfirm, cartItems, totalPrice }) => {
  if (!isOpen) return null;

  // Format WhatsApp message with correct subtotal/total
  const formatCartMessage = () => {
    let message = "Hi! I'd like to purchase the following IPTV subscriptions:\n\n";
    
    cartItems.forEach((item, index) => {
      const numericPrice = parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0;
      const currencySymbol = item.price.replace(/[0-9.,\s]/g, '') || '€';

      message += `${index + 1}. ${item.name}\n`;
      message += `   - Price: ${item.price}/${item.period}\n`;
      message += `   - Quantity: ${item.quantity}\n`;
      message += `   - Subtotal: ${currencySymbol}${(numericPrice * item.quantity).toFixed(2)}\n\n`;
    });
    
    // For total, just take the symbol of the first item (fallback €)
    const totalCurrency = cartItems[0]?.price.replace(/[0-9.,\s]/g, '') || '€';
    message += `Total Amount: ${totalCurrency}${totalPrice.toFixed(2)}\n\n`;
    message += "Please let me know the next steps to complete my order. Thank you!";
    
    return message;
  };

  const handleWhatsAppRedirect = () => {
    const message = formatCartMessage();
    // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/+11234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onConfirm();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }}
    >
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Checkout Confirmation</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-900">WhatsApp Checkout</h4>
                <p className="text-sm text-gray-600">
                  You'll be redirected to WhatsApp to complete your order
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h5 className="font-medium text-gray-900 mb-2">Order Summary:</h5>
              {cartItems.map((item) => {
                const numericPrice = parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0;
                const currencySymbol = item.price.replace(/[0-9.,\s]/g, '') || '€';
                
                return (
                  <div key={item.id} className="flex justify-between text-sm mb-1 text-black">
                    <span>{item.name} x{item.quantity}</span>
                    <span>
                      {currencySymbol}{(numericPrice * item.quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}
              <div className="border-t pt-2 mt-2 text-black">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>
                    {cartItems[0]?.price.replace(/[0-9.,\s]/g, '') || '€'}
                    {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              When you proceed, a WhatsApp message will be pre-filled with your order details. 
              Our team will respond with payment instructions and delivery information.
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Continue to WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
