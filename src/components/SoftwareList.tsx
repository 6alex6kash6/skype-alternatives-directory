"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { softwareData } from "@/data/software";
import RatingStars from "@/components/RatingStars";
import { getAverageRating, getReviewCount } from "@/data/reviews";
import { CATEGORY_DELIMITER } from "@/const";

const SoftwareList = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  // Add state to track how many items to display
  const [displayCount, setDisplayCount] = useState(20);

  // Function to load more items
  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 20);
  };

  const filteredSoftware = useMemo(() => {
    if (!searchQuery.trim()) return softwareData;

    const query = searchQuery.toLowerCase().trim();
    const queryWords = query.split(/\s+/);

    return softwareData
      .map((software) => {
        const title = software.title.toLowerCase();
        const text = software.text.toLowerCase();
        const category = software.Category.toLowerCase();
        const description = software.fullDescription.toLowerCase();

        // Calculate relevance score
        let score = 0;

        // Exact matches get highest priority
        if (title === query) score += 100;
        if (text === query) score += 80;
        if (category === query) score += 60;
        if (description === query) score += 40;

        // Partial matches
        if (title.includes(query)) score += 50;
        if (text.includes(query)) score += 30;
        if (category.includes(query)) score += 20;
        if (description.includes(query)) score += 10;

        // Word-by-word matching
        queryWords.forEach((word) => {
          if (title.includes(word)) score += 15;
          if (text.includes(word)) score += 10;
          if (category.includes(word)) score += 8;
          if (description.includes(word)) score += 5;
        });

        return { ...software, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [searchQuery]);

  // Only display the number of items specified by displayCount
  const itemsToDisplay = filteredSoftware.slice(0, displayCount);

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : "Top Skype Alternatives"}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToDisplay.map((software) => {
          const averageRating = getAverageRating(software.slug);
          const reviewCount = getReviewCount(software.slug);

          return (
            <Link
              href={`/items/${software.slug}`}
              key={software.slug}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
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
                      <RatingStars
                        rating={averageRating}
                        size={16}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        {reviewCount} reviews
                      </span>
                    </>
                  ) : (
                    <span className="text-sm text-gray-500">
                      No reviews yet
                    </span>
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

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {software.text}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
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

                <div className="text-purple-600 font-medium text-sm hover:text-purple-700 mt-auto">
                  View Details
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Show more button - only visible if there are more items to display */}
      {displayCount < filteredSoftware.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Show More
          </button>
        </div>
      )}

      {filteredSoftware.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No results found for "{searchQuery}"
          </p>
        </div>
      )}
    </section>
  );
};

export default SoftwareList;
