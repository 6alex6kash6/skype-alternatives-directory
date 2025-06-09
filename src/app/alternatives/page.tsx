import React from "react";
import { getAlternatives } from "./utils";
import { Metadata } from "next";
import AlternativeList from "@/components/AlternativeList";

const title = "List of VoIP Software Alternatives | Complete Directory & Reviews";
const description = "Find perfect replacement for your tool";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://skypealternativelist.com/alternatives",
  },
  alternates: {
    canonical: "https://skypealternativelist.com/alternatives",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function AlternativesPage() {
  const alternatives = getAlternatives().map((alt) => ({
    ...alt.metadata,
    id: alt.slug,
    slug: alt.slug,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              List of Alternatives
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Find alternatives to your tools
            </p>
          </div>
        </div>
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AlternativeList alternatives={alternatives} />
          </div>
        </section>
      </main>
    </div>
  );
} 
