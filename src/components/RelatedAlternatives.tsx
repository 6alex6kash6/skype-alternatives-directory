import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Alternative {
  slug: string;
  metadata: {
    title: string;
    description: string;
    coverImage: string;
  };
}

interface RelatedAlternativesProps {
  currentSlug: string;
  alternatives: Alternative[];
  className?: string;
}

export default function RelatedAlternatives({ currentSlug, alternatives, className = "" }: RelatedAlternativesProps) {
  // Get 3 random alternatives excluding the current one
  const relatedAlternatives = alternatives
    .filter(alt => alt.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (relatedAlternatives.length === 0) {
    return null;
  }

  return (
    <div className={`mt-16 ${className}`}>
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        Read other alternatives to popular VoIP software
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedAlternatives.map((alternative) => (
          <Card key={alternative.slug} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <Link href={`/alternatives/${alternative.slug}`} className="block">
              <AspectRatio ratio={16 / 9} className="bg-gray-100">
                <img
                  src={alternative.metadata.coverImage}
                  alt={alternative.metadata.title}
                  className="object-cover h-full w-full"
                />
              </AspectRatio>
            </Link>
            <CardHeader className="p-6">
              <Link href={`/alternatives/${alternative.slug}`} className="block">
                <CardTitle className="text-xl mb-2 hover:text-purple-700 transition-colors">
                  {alternative.metadata.title}
                </CardTitle>
              </Link>
              <CardDescription className="text-gray-600 line-clamp-3">
                {alternative.metadata.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <Link href={`/alternatives/${alternative.slug}`}>
                <Button variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800">
                  Read review
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 