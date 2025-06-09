import React from "react";
import { Metadata } from "next";
import { softwareData } from "@/data/software";
import Link from "next/link";
import { notFound } from "next/navigation";
import RatingStars from "@/components/RatingStars";
import { getAverageRating, getReviewCount } from "@/data/reviews";
import { CATEGORY_DELIMITER } from "@/const";
import { getCategoryInfo } from "@/lib/categories";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  const info = getCategoryInfo(category);

  const title = info.seoTitle || `Skype Alternatives for ${info.displayName}`;
  const description = info.seoDescription || `Find the best Skype alternatives for ${info.displayName}. Compare features, read reviews, and choose the perfect communication tool for your needs.`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://skypealternativelist.com/categories/${info.slug}`,
    },
    alternates: {
      canonical: `https://skypealternativelist.com/categories/${info.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function generateStaticParams() {
  // Get all unique categories
  const categories = new Set<string>();
  softwareData.forEach((software) => {
    software.Category.split(CATEGORY_DELIMITER).forEach((category) => {
      categories.add(category);
    });
  });

  return Array.from(categories).map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category;

  // Find the original category name from the slug
  const categories = new Set<string>();
  softwareData.forEach((software) => {
    software.Category.split(CATEGORY_DELIMITER).forEach((category) => {
      categories.add(category);
    });
  });

  const categoryName = Array.from(categories).find(
    (cat) => getCategoryInfo(cat).slug === categorySlug
  );

  if (!categoryName) {
    notFound();
  }

  const categoryInfo = getCategoryInfo(categoryName);

  // Filter software items that belong to this category
  const categoryItems = softwareData.filter((software) =>
    software.Category.split(CATEGORY_DELIMITER).includes(categoryName)
  );

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">
        {categoryInfo.H1 || `Best Skype Alternatives for ${categoryInfo.emoji} ${categoryInfo.displayName}`}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryItems.map((software) => {
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
                      +{software.Category.split(CATEGORY_DELIMITER).length - 3}{" "}
                      more
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

      {categoryItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No software found in this category
          </p>
        </div>
      )}
    </section>
  );
}
