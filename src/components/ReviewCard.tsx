"use client";

import React, { useState } from "react";
import RatingStars from "./RatingStars";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [helpful, setHelpful] = useState(review.helpful);
  const [notHelpful, setNotHelpful] = useState(review.notHelpful);
  const [userVote, setUserVote] = useState<"helpful" | "not-helpful" | null>(
    null
  );

  // Format the date
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleHelpfulClick = () => {
    if (userVote === "helpful") {
      // User is un-voting
      setHelpful(helpful - 1);
      setUserVote(null);
    } else {
      // User is voting helpful
      setHelpful(helpful + 1);
      if (userVote === "not-helpful") {
        setNotHelpful(notHelpful - 1);
      }
      setUserVote("helpful");
    }
  };

  const handleNotHelpfulClick = () => {
    if (userVote === "not-helpful") {
      // User is un-voting
      setNotHelpful(notHelpful - 1);
      setUserVote(null);
    } else {
      // User is voting not helpful
      setNotHelpful(notHelpful + 1);
      if (userVote === "helpful") {
        setHelpful(helpful - 1);
      }
      setUserVote("not-helpful");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
      <div className="flex items-start">
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-900">{review.author}</h4>
              <div className="flex items-center mt-1 space-x-2">
                <RatingStars rating={review.rating} size={16} />
                <span className="text-sm text-gray-500">{formattedDate}</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-3 mb-2 text-gray-800">
            {review.title}
          </h3>
          <p className="text-gray-700">{review.content}</p>

          {/* <div className="mt-4 flex items-center space-x-6">
            <button 
              onClick={handleHelpfulClick}
              className={`flex items-center space-x-1 text-sm ${userVote === 'helpful' ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <ThumbsUp size={16} />
              <span>Helpful ({helpful})</span>
            </button>
            
            <button 
              onClick={handleNotHelpfulClick}
              className={`flex items-center space-x-1 text-sm ${userVote === 'not-helpful' ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <ThumbsDown size={16} />
              <span>Not Helpful ({notHelpful})</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
