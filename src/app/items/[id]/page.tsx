import SoftwareDetailWrapper from "@/components/SoftwareDetailWrapper";
import { getSoftwareBySlug } from "@/data/software";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const software = getSoftwareBySlug(params.id);

  if (!software) {
    return {
      title: "Not Found",
      description: "The requested software could not be found.",
    };
  }

  return {
    title: software.text,
    description: `Learn more about ${software.title}, a Skype alternative. Read reviews, compare features, and find out if it's the right choice for you.`,
  };
}

export default function SoftwarePage() {
  return <SoftwareDetailWrapper />;
}
