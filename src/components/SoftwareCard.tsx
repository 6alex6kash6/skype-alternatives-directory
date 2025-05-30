import Link from "next/link";
import { Software } from "@/data/software";
import RatingStars from "@/components/RatingStars";
import { getAverageRating, getReviewCount } from "@/data/reviews";
import { CATEGORY_DELIMITER } from "@/const";

interface SoftwareCardProps {
  software: Software;
  className?: string;
}

export default function SoftwareCard({
  software,
  className = "",
}: SoftwareCardProps) {
  const averageRating = getAverageRating(software.slug);
  const reviewCount = getReviewCount(software.slug);

  return (
    <div className="relative">
      {software.promoted && (
        <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-2 py-1 rounded-full z-10">
          Sponsored
        </div>
      )}
      <Link
        href={`/items/${software.slug}`}
        className={`block h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100 ${
          software.promoted ? "bg-amber-50" : ""
        } ${className}`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <img
              src={
                software.images ||
                software.thumbnail ||
                software.screenshotUrl ||
                ""
              }
              alt={`${software.title} logo`}
              className="w-12 h-12 object-contain mr-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {software.title}
            </h3>
          </div>

          <div className="flex items-center mb-2">
            {reviewCount > 0 ? (
              <>
                <RatingStars rating={averageRating} size={16} className="mr-2" />
                <span className="text-sm text-gray-600">
                  {reviewCount} reviews
                </span>
              </>
            ) : (
              <span className="text-sm text-gray-500">No reviews yet</span>
            )}
            {software.verified && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full ml-2">
                Verified
              </span>
            )}
            {software.isFree && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">
                Free
              </span>
            )}
          </div>

          <p className="text-gray-700 mb-4 line-clamp-3">{software.text}</p>

          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {software.Category.split(CATEGORY_DELIMITER)
              .slice(0, 3)
              .map((category, index) => (
                <span
                  key={index}
                  className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                >
                  {category.trim()}
                </span>
              ))}
            {software.Category.split(CATEGORY_DELIMITER).length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                +{software.Category.split(CATEGORY_DELIMITER).length - 3} more
              </span>
            )}
          </div>

          <div className="text-purple-600 font-medium text-sm hover:text-purple-700">
            View Details
          </div>
        </div>
      </Link>
    </div>
  );
}
