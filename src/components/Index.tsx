
import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareList from "@/components/SoftwareList";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Index = () => {
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* We'll show just 3 blog posts here */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Blog post" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-purple-600 mb-2">Comparison • March 15, 2025</div>
                  <h3 className="text-xl font-semibold mb-2">10 Skype Alternatives for Remote Teams in 2025</h3>
                  <p className="text-gray-600 mb-4">Discover the best Skype alternatives for effective remote team collaboration, featuring detailed comparisons...</p>
                  <Link href="/blog/skype-alternatives-remote-teams-2025">
                    <Button variant="ghost" className="text-purple-700 p-0 hover:text-purple-900">
                      Read More →
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Blog post" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-purple-600 mb-2">Security • February 20, 2025</div>
                  <h3 className="text-xl font-semibold mb-2">Security Comparison: How Safe Are Your Video Calls?</h3>
                  <p className="text-gray-600 mb-4">We analyze the security features of popular video calling apps to help you make informed decisions...</p>
                  <Link href="/blog/security-comparison-video-calls">
                    <Button variant="ghost" className="text-purple-700 p-0 hover:text-purple-900">
                      Read More →
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Blog post" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-purple-600 mb-2">Best Practices • January 5, 2025</div>
                  <h3 className="text-xl font-semibold mb-2">How to Host Effective Virtual Meetings with Any Platform</h3>
                  <p className="text-gray-600 mb-4">Learn tried-and-tested strategies for running engaging and productive virtual meetings...</p>
                  <Link href="/blog/host-effective-virtual-meetings">
                    <Button variant="ghost" className="text-purple-700 p-0 hover:text-purple-900">
                      Read More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/blog">
                <Button variant="outline" className="mx-auto">
                  View All Blog Posts
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
