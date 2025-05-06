export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  notHelpful: number;
}

export interface Software {
  id: string;
  name: string;
  logo: string;
  description: string;
  overallRating: number;
  reviewCount: number;
  pricing: string;
  platform: string[];
  features: string[];
  pros: string[];
  cons: string[];
  reviews: Review[];
}

export const softwareData: Software[] = [
  {
    id: "zoom",
    name: "Zoom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/1200px-Zoom_Communications_Logo.svg.png",
    description:
      "Zoom is a cloud-based video conferencing platform that can be used for video conferencing meetings, audio conferencing, webinars, meeting recordings, and live chat.",
    overallRating: 4.7,
    reviewCount: 145,
    pricing: "Free plan available, paid plans start at $14.99/month per host",
    platform: ["Web", "Windows", "Mac", "iOS", "Android"],
    features: [
      "HD Video & Audio",
      "Screen Sharing",
      "Recording",
      "Virtual Backgrounds",
      "Breakout Rooms",
      "End-to-end Encryption",
    ],
    pros: [
      "Easy to use interface",
      "Reliable connection quality",
      "Good free plan with 40-minute limit",
      "Excellent screen sharing options",
    ],
    cons: [
      "Privacy concerns in the past",
      "Can be resource intensive on older computers",
      "Meeting duration limits on free plan",
    ],
    reviews: [
      {
        id: 1,
        author: "Alex Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        date: "2025-04-15",
        title: "Perfect for remote work",
        content:
          "I've been using Zoom daily for our team meetings since we went remote. The quality is consistently good, even with my somewhat unreliable internet connection. The breakout rooms feature is fantastic for workshops.",
        helpful: 24,
        notHelpful: 2,
      },
      {
        id: 2,
        author: "Samantha Lee",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 4,
        date: "2025-03-28",
        title: "Great but could improve privacy",
        content:
          "Zoom works great for our company's needs, but I'm still a bit concerned about some of the privacy issues that were raised last year. They seem to be addressing them, but I remain cautious. Otherwise, the features and reliability are top-notch.",
        helpful: 18,
        notHelpful: 3,
      },
      {
        id: 3,
        author: "Michael Rodriguez",
        avatar: "https://i.pravatar.cc/150?img=8",
        rating: 5,
        date: "2025-04-22",
        title: "Best video conferencing app I've used",
        content:
          "After trying several alternatives, I keep coming back to Zoom. The interface is intuitive, and it handles poor connections better than competitors. The virtual backgrounds are also fun for team building!",
        helpful: 31,
        notHelpful: 1,
      },
    ],
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png",
    description:
      "Microsoft Teams is a unified communication and collaboration platform that combines workplace chat, video meetings, file storage, and application integration.",
    overallRating: 4.2,
    reviewCount: 128,
    pricing: "Free basic plan, Business plans start at $5.00/user/month",
    platform: ["Web", "Windows", "Mac", "iOS", "Android"],
    features: [
      "Video Conferencing",
      "File Sharing",
      "Chat",
      "Screen Sharing",
      "Office 365 Integration",
      "Meeting Recording",
    ],
    pros: [
      "Excellent integration with Microsoft Office",
      "Good file sharing and collaboration",
      "Built-in chat with threads",
      "Meeting scheduling with Outlook",
    ],
    cons: [
      "Interface can be cluttered",
      "Sometimes slow to load",
      "Video quality can be inconsistent",
    ],
    reviews: [
      {
        id: 1,
        author: "Daniel Smith",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 4,
        date: "2025-04-10",
        title: "Great for Microsoft-based organizations",
        content:
          "As a company that heavily uses Office 365, Teams is a natural fit for us. The integration with other Microsoft products is seamless, and having everything in one place is convenient. The video quality could be better though.",
        helpful: 15,
        notHelpful: 2,
      },
      {
        id: 2,
        author: "Emily Chen",
        avatar: "https://i.pravatar.cc/150?img=9",
        rating: 3,
        date: "2025-03-15",
        title: "Good but often laggy",
        content:
          "Teams has all the features we need, but it can be quite resource-intensive. Our older computers struggle to run it smoothly, and it sometimes crashes during important meetings. When it works, it's great!",
        helpful: 22,
        notHelpful: 4,
      },
    ],
  },
  {
    id: "discord",
    name: "Discord",
    logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg",
    description:
      "Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called 'servers'.",
    overallRating: 4.5,
    reviewCount: 98,
    pricing: "Free, with Nitro subscription at $9.99/month",
    platform: ["Web", "Windows", "Mac", "iOS", "Android", "Linux"],
    features: [
      "Voice Channels",
      "Video Calls",
      "Text Chat",
      "Screen Sharing",
      "Server Organization",
      "Roles & Permissions",
    ],
    pros: [
      "Excellent audio quality",
      "Great for community building",
      "Highly customizable",
      "Good free tier",
    ],
    cons: [
      "Can be overwhelming for new users",
      "Business features are limited",
      "Not designed primarily for professional use",
    ],
    reviews: [
      {
        id: 1,
        author: "Chris Wilson",
        avatar: "https://i.pravatar.cc/150?img=15",
        rating: 5,
        date: "2025-04-05",
        title: "Perfect for gaming communities",
        content:
          "I've been using Discord for years with my gaming friends, and recently started using it for work with a small team. The voice quality is consistently excellent, and the ability to set up different channels for different topics keeps everything organized.",
        helpful: 28,
        notHelpful: 1,
      },
      {
        id: 2,
        author: "Jessica Taylor",
        avatar: "https://i.pravatar.cc/150?img=10",
        rating: 4,
        date: "2025-03-22",
        title: "Great for community, less ideal for business",
        content:
          "Discord is amazing for building communities and keeping in touch, but it lacks some of the business features that more professional-oriented platforms have. Still, for small teams that want a casual environment, it's perfect.",
        helpful: 16,
        notHelpful: 3,
      },
    ],
  },
];

export const getSoftwareById = (id: string): Software | undefined => {
  return softwareData.find((software) => software.id === id);
};
