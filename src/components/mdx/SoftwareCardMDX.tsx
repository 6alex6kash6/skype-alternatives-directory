import { softwareData } from "@/data/software";
import SoftwareCard from "@/components/SoftwareCard";

interface SoftwareCardMDXProps {
  slug: string;
  className?: string;
}

export default function SoftwareCardMDX({ slug, className = "" }: SoftwareCardMDXProps) {
  const software = softwareData.find(s => s.slug === slug);
  
  if (!software) {
    console.warn(`Software with slug "${slug}" not found`);
    return null;
  }

  return (
    <div className="software-card-mdx-wrapper block my-6 w-full bg-white rounded-xl shadow-sm border border-gray-100">
      <SoftwareCard software={software} className={className} />
    </div>
  );
} 
