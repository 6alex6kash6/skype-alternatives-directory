import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareList from "@/components/SoftwareList";
import SearchBar from "@/components/SearchBar";

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
