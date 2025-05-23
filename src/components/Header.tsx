"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { softwareData } from "@/data/software";

const Header: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Get unique categories
  const categories = new Set<string>();
  softwareData.forEach((software) => {
    software.Category.split(", ").forEach((category) => {
      categories.add(category);
    });
  });

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen || isCategoriesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isCategoriesOpen]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-purple-600 text-2xl font-bold">
            SkypeAlternatives
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-purple-600 font-medium"
          >
            Home
          </Link>
          <div className="relative group">
            <button
              className="text-gray-600 hover:text-purple-600 font-medium flex items-center"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              Categories
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  isCategoriesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                isCategoriesOpen ? "block" : "hidden"
              }`}
            >
              {Array.from(categories).map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  onClick={() => setIsCategoriesOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/about"
            className="text-gray-600 hover:text-purple-600 font-medium"
          >
            About
          </Link>
          <Link
            href="/"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-medium animate-shake flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Submit Tool
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
          isMenuOpen || isCategoriesOpen
            ? "opacity-100 z-40"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsCategoriesOpen(false);
        }}
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
          <button
            className="text-2xl text-gray-600 hover:text-purple-600 font-medium flex items-center"
            onClick={() => {
              setIsMenuOpen(false);
              setIsCategoriesOpen(true);
            }}
          >
            Categories
            <svg
              className="ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <Link
            href="/about"
            className="text-2xl text-gray-600 hover:text-purple-600 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/submit-tool"
            className="text-2xl bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 font-medium animate-shake flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Submit Tool
          </Link>
        </nav>
      </div>

      {/* Mobile Categories Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isCategoriesOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <button
              className="flex items-center text-gray-600 hover:text-purple-600"
              onClick={() => setIsCategoriesOpen(false)}
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 p-4 text-center">
                Categories
              </h2>
              <div className="flex-1 overflow-y-auto px-4 pb-4">
                <nav className="flex flex-col space-y-4">
                  {Array.from(categories).map((category) => (
                    <Link
                      key={category}
                      href={`/categories/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-xl text-gray-600 hover:text-purple-600 py-2"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
