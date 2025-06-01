import React from "react";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getBlogPosts } from "@/app/blog/utils";
import { Metadata } from "next";

const title = "Communication Software Reviews & Guides | Expert Insights";
const description = "Expert reviews and setup guides for VoIP software, international calling apps, and team communication tools. Unbiased insights to help you choose.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://skypealternativelist.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function BlogPage() {
  const posts = getBlogPosts().map((post) => ({
    ...post.metadata,
    id: post.slug,
    slug: post.slug,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Reviews & Guides
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Unbiased reviews, detailed comparisons, and setup guides for 200+ communication tools. Make informed decisions with expert insights.
            </p>
          </div>
        </div>
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <BlogList posts={posts} />
          </div>
        </section>
      </main>
    </div>
  );
}
