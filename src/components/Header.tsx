"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-purple-600 text-2xl font-bold">
            SkypeAlternatives
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-purple-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-purple-600 font-medium"
          >
            Categories
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-purple-600 font-medium"
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <nav className="h-full flex flex-col items-center justify-center space-y-8">
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-purple-600 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-purple-600 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-purple-600 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
