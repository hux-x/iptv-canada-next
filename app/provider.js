"use client";
import { CartProvider } from "../src/components/CartContext";
import CartSidebar from "../src/components/CartSidebar";

export default function ClientProviders({ children }) {
  return (
    <CartProvider>
      {children}
      <CartSidebar />
    </CartProvider>
  );
}
