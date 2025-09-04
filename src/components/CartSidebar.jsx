"use client"
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useCart } from './CartContext';
import CheckoutModal from './CheckoutModal';

const CartSidebar = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();
  
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Updated total calculation with safe parsing
  const totalPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0;
    return total + numericPrice * item.quantity;
  }, 0);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutModalOpen(true);
  };

  const handleCheckoutConfirm = () => {
    setIsCheckoutModalOpen(false);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={() => setIsCartOpen(false)}
        style={{ background: 'rgba(0,0,0,0.4)' }}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => {
                const numericPrice = parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0;
                const currencySymbol = item.price.replace(/[0-9.,\s]/g, '') || '€'; // fallback to €

                return (
                  <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded hover:bg-gray-200"
                        >
                          <Minus className="h-4 w-4 text-black" />
                        </button>
                        <span className="w-8 text-center text-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded hover:bg-gray-200"
                        >
                          <Plus className="h-4 w-4 text-black" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-black">
                          {item.price}/{item.period}
                        </p>
                        <p className="text-sm text-gray-600">
                          Subtotal: {currencySymbol}
                          {(numericPrice * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer with total and checkout */}
        {cartItems.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-black">Total:</span>
              <span className="text-xl font-bold text-blue-600">
                €{totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onConfirm={handleCheckoutConfirm}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />
    </>
  );
};

export default CartSidebar;
