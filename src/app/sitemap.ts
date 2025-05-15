import type { MetadataRoute } from "next";
import { softwareData } from "@/data/software";

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
  ];

  // Generate routes for each software item
  const itemRoutes = softwareData.map((software) => ({
    url: `${baseUrl}/items/${software.slug}/`,
    lastModified: currentDate,
  }));

  return [...mainRoutes, ...itemRoutes];
}
