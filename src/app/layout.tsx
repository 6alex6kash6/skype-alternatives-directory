import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skype Alternatives - Find the Best Communication Tools",
  description:
    "Discover the best alternatives to Skype for video calls, messaging, and team collaboration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <TooltipProvider>
              <GoogleAnalytics />
              <MicrosoftClarity />
              <Analytics />
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
