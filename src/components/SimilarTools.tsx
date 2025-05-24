import Link from "next/link";
import { softwareData } from "@/data/software";
import RatingStars from "@/components/RatingStars";
import { getAverageRating, getReviewCount } from "@/data/reviews";
import { CATEGORY_DELIMITER } from "@/const";

interface SimilarToolsProps {
  currentSlug: string;
  categories: string[];
  isMobile: boolean;
}

const SimilarTools: React.FC<SimilarToolsProps> = ({ currentSlug, categories, isMobile }) => {
  // Find similar tools based on shared categories
  const similarTools = softwareData
    .filter(tool => 
      tool.slug !== currentSlug && // Exclude current tool
      tool.Category.split(CATEGORY_DELIMITER).some(category => 
        categories.includes(category.trim())
      )
    )
    .map(tool => {
      // Calculate similarity score based on shared categories
      const sharedCategories = tool.Category
        .split(CATEGORY_DELIMITER)
        .filter(category => categories.includes(category.trim()))
        .length;
      
      return {
        ...tool,
        similarityScore: sharedCategories
      };
    })
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, 4); // Show top 4 similar tools

  if (similarTools.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Similar Tools
      </h2>
      <div className={isMobile ? "space-y-4" : "grid grid-cols-2 gap-4"}>
        {similarTools.map((tool) => {
          const averageRating = getAverageRating(tool.slug);
          const reviewCount = getReviewCount(tool.slug);
          const toolCategories = tool.Category.split(CATEGORY_DELIMITER).map(cat => cat.trim());

          return (
            <Link
              href={`/items/${tool.slug}`}
              key={tool.slug}
              className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors duration-200 border border-gray-100"
            >
              <div className="flex items-start">
                <img
                  src={tool.images || tool.thumbnail || tool.screenshotUrl || ""}
                  alt={`${tool.title} logo`}
                  className="w-12 h-12 object-contain mr-3 flex-shrink-0"
                />
                <div className="flex-grow min-w-0">
                  <h3 className="text-base font-medium text-gray-900 truncate">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {tool.text}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {reviewCount > 0 ? (
                      <>
                        <RatingStars rating={averageRating} size={14} />
                        <span className="text-xs text-gray-600">
                          {averageRating.toFixed(1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-xs text-gray-500">No reviews yet</span>
                    )}
                    {tool.isFree && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Free
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {toolCategories.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                    {toolCategories.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                        +{toolCategories.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarTools; 