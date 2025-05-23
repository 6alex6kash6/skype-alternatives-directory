import React, { Suspense } from "react";
import SoftwareList from "@/components/SoftwareList";
import SearchBar from "@/components/SearchBar";
import BlogList from "@/components/BlogList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogPosts } from "@/app/blog/utils";

const Index = () => {
  const blogPosts = getBlogPosts().slice(0, 3).map(post => ({
    id: post.slug,
    slug: post.slug,
    title: post.metadata.title,
    description: post.metadata.description,
    publishedAt: post.metadata.publishedAt,
    coverImage: post.metadata.coverImage,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
            <Suspense
              fallback={
                <div className="h-12 w-full max-w-md mx-auto bg-white/10 rounded-lg animate-pulse" />
              }
            >
              <SearchBar />
            </Suspense>
          </div>
        </section>
        <Suspense
          fallback={
            <div className="h-12 w-full max-w-md mx-auto bg-white/10 rounded-lg animate-pulse" />
          }
        >
          <SoftwareList />
        </Suspense>
        
        {/* Blog section preview */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover insights, tips, and the latest trends in communication tools
              </p>
            </div>
            
            <BlogList posts={blogPosts} />
            
            <div className="text-center mt-8">
              <Link href="/blog">
                <Button variant="outline" className="mx-auto">
                  View All Blog Posts
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
