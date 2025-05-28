"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { softwareData } from "@/data/software";
import SoftwareCard from "@/components/SoftwareCard";
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
        {itemsToDisplay.map((software) => (
          <SoftwareCard key={software.slug} software={software} />
        ))}
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
