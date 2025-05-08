'use client';

import React, { useState, useEffect, useMemo } from 'react';
import ReviewCard from './ReviewCard';
import { Review } from '@/data/reviews';
import { Button } from './ui/button';

interface ReviewsListProps {
  reviews: Review[];
  itemsPerPage?: number;
  sortOption?: string;
}

const ReviewsList: React.FC<ReviewsListProps> = ({ 
  reviews,
  itemsPerPage = 10,
  sortOption = 'most-recent'
}) => {
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Sort reviews based on selected option
  const sortedReviews = useMemo(() => {
    const sorted = [...reviews];
    
    switch (sortOption) {
      case 'most-recent':
        sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'highest-rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest-rating':
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case 'most-helpful':
        sorted.sort((a, b) => b.helpful - a.helpful);
        break;
      default:
        break;
    }
    
    return sorted;
  }, [reviews, sortOption]);

  const loadMoreReviews = async () => {
    setIsLoading(true);
    
    // Simulate network delay
    const delay = Math.random() < 0.7 
      ? Math.random() * (200 - 30) + 30  // 70% chance of 30-200ms
      : Math.random() * (1000 - 200) + 200; // 30% chance of 200-1000ms
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    const nextPage = currentPage + 1;
    const newReviews = sortedReviews.slice(0, nextPage * itemsPerPage);
    setDisplayedReviews(newReviews);
    setCurrentPage(nextPage);
    setIsLoading(false);
  };

  useEffect(() => {
    // Reset pagination when sort option changes
    setCurrentPage(1);
    setDisplayedReviews(sortedReviews.slice(0, itemsPerPage));
  }, [sortedReviews, itemsPerPage, sortOption]);

  const hasMoreReviews = displayedReviews.length < sortedReviews.length;

  return (
    <div className="space-y-6">
      {displayedReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
      
      {hasMoreReviews && (
        <div className="flex justify-center">
          <Button
            onClick={loadMoreReviews}
            disabled={isLoading}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            {isLoading ? 'Loading...' : 'Load More Reviews'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewsList; 