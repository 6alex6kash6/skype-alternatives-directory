import Index from "@/components/Index";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Best Skype Alternatives 2025 | Video Call Apps Comparison",
    description:
      "Compare top Skype alternatives for video calling, messaging, and screen sharing. Find the perfect communication tool with our detailed reviews and feature comparisons.",
    keywords:
      "skype alternatives, video calling apps, video conferencing software, zoom vs skype, teams vs skype, best video call apps, online meeting platforms",
    robots: "index, follow",
    openGraph: {
      title: "Best Skype Alternatives 2025 | Video Call Apps Comparison",
      description:
        "Compare top Skype alternatives for video calling, messaging, and screen sharing. Find the perfect communication tool with detailed feature comparisons.",
      type: "website",
      siteName: "Video Calling Apps Comparison",
    },
    twitter: {
      title: "Best Skype Alternatives 2025 | Video Call Apps Comparison",
      description:
        "Compare top Skype alternatives for video calling, messaging, and screen sharing. Find your ideal communication tool today.",
    },
    appleWebApp: {
      capable: true,
    },
    other: {
      "X-UA-Compatible": "IE=edge",
    },
  };
};

export default function Page() {
  return <Index />;
}
