"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSoftwareBySlug } from "@/data/software";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import ReviewsList from "@/components/ReviewsList";
import {
  getReviewsBySlug,
  getAverageRating,
  getReviewCount,
} from "@/data/reviews";
import RatingStars from "@/components/RatingStars";
import SortOptions from "@/components/SortOptions";

interface SoftwareDetailProps {
  initialIsMobile: boolean;
}

const SoftwareDetail: React.FC<SoftwareDetailProps> = ({ initialIsMobile }) => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const software = getSoftwareBySlug(id || "");
  const isClientMobile = useIsMobile();
  const [mounted, setMounted] = React.useState(false);
  const [sortOption, setSortOption] = useState("most-recent");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!software) {
      router.push("/not-found");
    }
  }, [software, router]);

  if (!software) {
    return null; // Will redirect via useEffect
  }

  const isMobile = mounted ? isClientMobile : initialIsMobile;
  const reviews = getReviewsBySlug(software.slug);
  const averageRating = getAverageRating(software.slug);
  const reviewCount = getReviewCount(software.slug);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Software header */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
          <div
            className={cn(
              "flex items-center",
              isMobile ? "flex-col" : "flex-row"
            )}
          >
            <img
              src={
                software.images ||
                software.thumbnail ||
                software.screenshotUrl ||
                ""
              }
              alt={`${software.title} logo`}
              className={cn("w-20 h-20 object-contain", !isMobile && "mr-6")}
            />

            <div className="flex-grow min-w-0">
              <h1 className="text-3xl font-bold text-gray-900 truncate">
                {software.title}
              </h1>
              <div className="flex items-center gap-2 mt-2">
                {reviewCount > 0 ? (
                  <>
                    <RatingStars rating={averageRating} size={20} />
                    <span className="text-lg font-medium text-gray-900">
                      {averageRating.toFixed(1)}
                    </span>
                    <span className="text-sm text-gray-600">
                      ({reviewCount} reviews)
                    </span>
                  </>
                ) : (
                  <span className="text-sm text-gray-500">No reviews yet</span>
                )}
                {software.verified && (
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
                {software.isFree && (
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Free
                  </span>
                )}
              </div>
            </div>

            <a
              href={software.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap",
                !isMobile && "ml-6"
              )}
            >
              Visit {software.title}
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Software info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                About {software.title}
              </h2>
              <p className="text-gray-700 mb-4">{software.fullDescription}</p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {software.Category.split(";").map((category, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                  >
                    {category.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Pros & Cons
              </h2>

              {software.pros && (
                <div className="mb-4">
                  <h3 className="font-medium text-green-700 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Pros
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {software.pros.split("|").map((pro, index) => (
                      <li key={index}>{pro}</li>
                    ))}
                  </ul>
                </div>
              )}

              {software.cons && (
                <div>
                  <h3 className="font-medium text-red-700 mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Cons
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {software.cons.split("|").map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right column - Screenshot and Reviews */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {software.screenshotUrl && (
                <img
                  src={software.screenshotUrl}
                  alt={`${software.title} screenshot`}
                  className="w-full rounded-lg"
                />
              )}
            </div>

            {/* Reviews section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  User Reviews
                </h2>
                {reviewCount > 0 && (
                  <SortOptions
                    sortOption={sortOption}
                    onSortChange={setSortOption}
                  />
                )}
              </div>
              {reviewCount > 0 ? (
                <ReviewsList reviews={reviews} sortOption={sortOption} />
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No reviews yet</p>
                </div>
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
