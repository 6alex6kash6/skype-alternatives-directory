import Link from "next/link";
import React from "react";
import { POPULAR_CATEGORIES, getCategoryInfo } from "@/lib/categories";

const Footer: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              SkypeAlternatives
            </h3>
            <p className="text-gray-600 mb-4">
              Find and compare the best alternatives to Skype with honest user
              reviews and ratings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              🔥 Popular Categories
            </h3>
            <ul className="space-y-2 text-gray-600">
              {POPULAR_CATEGORIES.map((category) => {
                const info = getCategoryInfo(category);
                return (
                  <li key={category}>
                    <Link href={`/categories/${info.slug}`} className="hover:text-purple-600">
                      {info.emoji} {info.displayName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Alternatives
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/alternatives" className="hover:text-purple-600">
                  All Alternatives
                </Link>
              </li>
              <li>
                <Link href="/alternatives/magicjack" className="hover:text-purple-600">
                  MagicJack
                </Link>
              </li>
              <li>
                <Link href="/alternatives/8x8" className="hover:text-purple-600">
                  8x8
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Company
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/blog" className="hover:text-purple-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 SkypeAlternatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
