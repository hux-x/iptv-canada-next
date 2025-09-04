'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import TrialPopup from './TrialPopup'; // Adjust path as needed
import CartIcon from './CartIcon';     // Import the cart icon

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 shadow-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">Canadian IPTV Services</span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/blogs', label: 'Blog' },
                { path: '/reseller', label: 'Reseller' },
                { path: '/faqs', label: 'FAQ' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(path)
                      ? 'text-blue-400 bg-blue-900/50'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Cart Icon (Desktop) */}
              <CartIcon />

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                onClick={() => setShowPopup(true)}
              >
                Get Started
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Cart Icon (Mobile, beside hamburger) */}
              <CartIcon />

              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={open ? 'true' : 'false'}
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${open ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/blogs', label: 'Blog' },
              { path: '/reseller', label: 'Reseller' },
              { path: '/faqs', label: 'FAQ' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(path)
                    ? 'text-blue-400 bg-blue-900/50'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Mobile Get Started Button */}
            <button
              onClick={() => {
                setOpen(false);
                setShowPopup(true);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* TrialPopup */}
      <TrialPopup visible={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Navbar;
