'use client';

import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RatingStars from '@/components/RatingStars';
import ReviewCard from '@/components/ReviewCard';
import SortOptions from '@/components/SortOptions';
import { getSoftwareById, Review } from '@/data/software';

const SoftwareDetail = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const software = getSoftwareById(id || '');
  const [sortOption, setSortOption] = useState('most-recent');
  const [reviews, setReviews] = useState<Review[]>([]);

  // Redirect to 404 if software not found
  useEffect(() => {
    if (!software) {
      router.push('/not-found', { replace: true });
    }
  }, [software, router]);

  // Sort reviews based on selected option
  useEffect(() => {
    if (software) {
      let sortedReviews = [...software.reviews];
      
      switch (sortOption) {
        case 'most-recent':
          sortedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
        case 'highest-rating':
          sortedReviews.sort((a, b) => b.rating - a.rating);
          break;
        case 'lowest-rating':
          sortedReviews.sort((a, b) => a.rating - b.rating);
          break;
        case 'most-helpful':
          sortedReviews.sort((a, b) => b.helpful - a.helpful);
          break;
        default:
          break;
      }
      
      setReviews(sortedReviews);
    }
  }, [software, sortOption]);

  if (!software) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Software header */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <img 
              src={software.logo} 
              alt={`${software.name} logo`}
              className="w-20 h-20 object-contain mb-4 md:mb-0 md:mr-6"
            />
            
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-gray-900">{software.name}</h1>
              <div className="flex items-center mt-2">
                <RatingStars rating={software.overallRating} className="mr-2" />
                <span className="text-lg font-medium text-gray-900">{software.overallRating.toFixed(1)}</span>
                <span className="text-sm text-gray-600 ml-2">({software.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-600 mt-2">{software.pricing}</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-200">
                Write a Review
              </button>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Software info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">About {software.name}</h2>
              <p className="text-gray-700 mb-4">{software.description}</p>
              
              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Platforms</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {software.platform.map((platform, index) => (
                  <span 
                    key={index}
                    className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              
              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {software.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Pros & Cons</h2>
              
              <div className="mb-4">
                <h3 className="font-medium text-green-700 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pros
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {software.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-red-700 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cons
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {software.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right column - Reviews */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Reviews</h2>
                <SortOptions sortOption={sortOption} onSortChange={setSortOption} />
              </div>
              
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review!</p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SoftwareDetail;
