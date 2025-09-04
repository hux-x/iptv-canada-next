"use client"
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

const CartIcon = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const itemCount = getTotalItems();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;