import type { MetadataRoute } from "next";
import { softwareData } from "@/data/software";
import { getBlogPosts } from "@/app/blog/utils";
import { getAlternatives } from "@/app/alternatives/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.skypealternativelist.com";
  const currentDate = new Date();

  // Define the main routes
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/alternatives`,
      lastModified: currentDate,
    },
  ];

  // Generate routes for each software item
  const itemRoutes = softwareData.map((software) => ({
    url: `${baseUrl}/items/${software.slug}`,
    lastModified: currentDate,
  }));

  // Generate routes for each category
  const categories = new Set<string>();
  softwareData.forEach((software) => {
    software.Category.split(", ").forEach((category) => {
      categories.add(category);
    });
  });

  const categoryRoutes = Array.from(categories).map((category) => ({
    url: `${baseUrl}/categories/${category
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    lastModified: currentDate,
  }));

  // Generate routes for each blog post
  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  // Generate routes for each alternative
  const alternativeRoutes = getAlternatives().map((alternative) => ({
    url: `${baseUrl}/alternatives/${alternative.slug}`,
    lastModified: new Date(alternative.metadata.publishedAt),
  }));

  return [...mainRoutes, ...itemRoutes, ...categoryRoutes, ...blogRoutes, ...alternativeRoutes];
}
