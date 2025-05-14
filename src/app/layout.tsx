import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Best Skype Alternatives 2025 | Video Call Apps Comparison",
  description:
    "Compare top Skype alternatives for video calling, messaging, and screen sharing. Find the perfect communication tool with our detailed reviews and feature comparisons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <GoogleAnalytics />
          <MicrosoftClarity />
          <Analytics />
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
