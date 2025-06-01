import Index from "@/components/Index";
import { Metadata } from "next";

const title = "Best Skype Alternatives 2025 | Complete Directory & Reviews";
const description = "The most comprehensive directory of Skype alternatives. Compare 200+ communication tools with honest reviews, pricing, and features. Find your perfect match.";

export const generateMetadata = (): Metadata => {
  return {
    title,
    description,
    keywords:
      "skype alternatives, international calling apps, video calling apps, video conferencing software, zoom vs skype, teams vs skype, best video call apps, online meeting platforms",
    robots: "index, follow",
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Video Calling Apps Comparison",
    },
    twitter: {
      title,
      description,
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
