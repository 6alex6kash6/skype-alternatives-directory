
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Expert insights, tips, and comparisons to help you choose the perfect communication tools
            </p>
          </div>
        </div>
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}
