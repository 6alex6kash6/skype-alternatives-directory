
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: number;
  className?: string;
}

const RatingStars: React.FC<{
  children?: React.ReactNode;
}> = ({
  rating,
  size = 20,
  className = '',
  children
}) => {
  // Convert rating to stars (full, half, empty)
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star 
          key={`full-${i}`} 
          size={size} 
          className="text-yellow-400 fill-yellow-400"
        />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <StarHalf
          size={size}
          className="text-yellow-400 fill-yellow-400"
        />
      )}
      
      {/* Empty stars */}
      {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
        <Star 
          key={`empty-${i}`} 
          size={size} 
          className="text-gray-300"
        />
      ))}
    </div>
  );
};

export default RatingStars;
