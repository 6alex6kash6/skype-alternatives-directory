
import Link from "next/link";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RatingStars from '@/components/RatingStars';
import { softwareData } from '@/data/software';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find the Best Skype Alternatives</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Compare features, read honest reviews, and find the perfect communication tool for your needs
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <input 
                type="text" 
                placeholder="Search for alternatives..." 
                className="px-6 py-3 rounded-lg text-gray-800 w-full md:w-auto flex-grow max-w-md"
              />
              <button className="px-8 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition duration-200">
                Search
              </button>
            </div>
          </div>
        </section>
        
        {/* Software list section */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Skype Alternatives</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareData.map((software) => (
              <Link 
                href={`/software/${software.id}`} 
                key={software.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={software.logo} 
                      alt={`${software.name} logo`}
                      className="w-12 h-12 object-contain mr-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">{software.name}</h3>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <RatingStars rating={software.overallRating} className="mr-2" />
                    <span className="text-sm text-gray-600">{software.reviewCount} reviews</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{software.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {software.platform.slice(0, 3).map((platform, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                    {software.platform.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        +{software.platform.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="text-purple-600 font-medium text-sm hover:text-purple-700">
                    View Details
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition duration-200">
              Load More
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
