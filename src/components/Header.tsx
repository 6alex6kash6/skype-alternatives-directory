
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-purple-600 text-2xl font-bold">SkypeAlternatives</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">Home</Link>
          <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">Compare</Link>
          <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">Categories</Link>
          <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-flex px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200">
            Write a Review
          </button>
          <button className="md:hidden text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
