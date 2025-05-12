import {viberReviews} from "./viber";
import {yollaReviews} from "./yolla";
import {aircallReviews} from "@/data/aircall.ts";

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  notHelpful: number;
}

export const allReviews: Record<string, Review[]> = {
  "viber": viberReviews,
  "yolla": yollaReviews,
  "aircall": aircallReviews,
};

export const getReviewsBySlug = (slug: string): Review[] => {
  return allReviews[slug] || [];
};

export const getAverageRating = (slug: string): number => {
  const reviews = getReviewsBySlug(slug);
  if (reviews.length === 0) return 0;
  
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return parseFloat((sum / reviews.length).toFixed(1));
};

export const getReviewCount = (slug: string): number => {
  return getReviewsBySlug(slug).length;
};
