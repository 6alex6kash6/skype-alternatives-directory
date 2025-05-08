"use client";

import Link from "next/link";
import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { softwareData } from "@/data/software";
import RatingStars from "@/components/RatingStars";
import { getAverageRating, getReviewCount } from "@/data/reviews";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

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

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  const handleClear = () => {
    setSearchQuery("");
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Best Skype Alternatives
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Compare features, read honest reviews, and find the perfect
              communication tool for your needs
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <input
                type="text"
                placeholder={`Search across ${softwareData.length} alternatives...`}
                className="px-6 py-3 rounded-lg text-gray-800 w-full md:w-auto flex-grow max-w-md"
                value={inputValue}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setInputValue(newValue);
                  if (!newValue.trim()) {
                    setSearchQuery("");
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                className="px-8 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition duration-200"
                onClick={searchQuery ? handleClear : handleSearch}
              >
                {searchQuery ? "Clear" : "Search"}
              </button>
            </div>
          </div>
        </section>

        {/* Software list section */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : "Top Skype Alternatives"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSoftware.map((software) => {
              const averageRating = getAverageRating(software.slug);
              const reviewCount = getReviewCount(software.slug);

              return (
                <Link
                  href={`/software/${software.slug}`}
                  key={software.slug}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
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
                          <span className="text-sm text-gray-600">{reviewCount} reviews</span>
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

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {software.text}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {software.Category.split(";")
                        .slice(0, 3)
                        .map((category, index) => (
                          <span
                            key={index}
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                          >
                            {category.trim()}
                          </span>
                        ))}
                      {software.Category.split(";").length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          +{software.Category.split(";").length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="text-purple-600 font-medium text-sm hover:text-purple-700">
                      View Details
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredSoftware.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No results found for "{searchQuery}"
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
