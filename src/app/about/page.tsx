import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Skype Alternatives",
  description: "Why we created Skype alternatives. We provide unbiased reviews and comparisons of communication tools.",
  openGraph: {
    title: "About Us | Skype Alternatives",
    description: "Why we created Skype alternatives. We provide unbiased reviews and comparisons of communication tools.",
    type: "website",
    url: "https://skypealternativelist.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Skype Alternatives",
    description: "Why we created Skype alternatives. We provide unbiased reviews and comparisons of communication tools.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Why We Created This Directory
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                When we started hearing about changes to Skype and exploring
                alternatives, we realized something important: finding the right
                communication tool isn't one-size-fits-all. Some of us needed
                crystal-clear business calls, others prioritized messaging
                features, and some just wanted the most affordable international
                rates.
              </p>
              <p>
                The search for alternatives led us down a rabbit hole of
                research, trials, and comparisons. After countless hours testing
                different platforms and comparing features, we thought: "Why
                keep this knowledge to ourselves?"
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                That's when this directory was born. We created the resource we
                wished we had—a comprehensive, honest guide to help others
                navigate the increasingly complex world of VoIP and
                international calling options.
              </p>
              <p>
                Our mission is simple: help you find the perfect communication
                tool for your specific needs, whether you're:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A digital nomad needing reliable global connectivity</li>
                <li>
                  A small business maintaining international client
                  relationships
                </li>
                <li>Someone with family spread across multiple countries</li>
                <li>
                  A professional tired of paying excessive international call
                  charges
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We prioritize real-world experiences over marketing claims.
                Every service in our directory has been evaluated based on
                actual performance, pricing transparency, and user feedback.
                We're not affiliated with any specific provider, which allows us
                to offer unbiased information.
              </p>
              <p>
                As fellow users who understand the frustration of dropped calls,
                unexpected charges, and technical difficulties, we're committed
                to providing the kind of straightforward guidance we once
                desperately needed ourselves.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
