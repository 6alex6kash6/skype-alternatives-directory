import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface Alternative {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  coverImage: string;
}

interface AlternativeListProps {
  alternatives: Alternative[];
  className?: string;
}

export default function AlternativeList({ alternatives, className = "" }: AlternativeListProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {alternatives.map((alternative) => (
          <Card key={alternative.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <Link href={`/alternatives/${alternative.slug}`} className="block">
              <AspectRatio ratio={16 / 9} className="bg-gray-100">
                <img
                  src={alternative.coverImage}
                  alt={alternative.title}
                  className="object-cover h-full w-full"
                />
              </AspectRatio>
            </Link>
            <CardHeader className="p-6">
              <div className="text-sm text-purple-600 mb-2">
                {formatDate(alternative.publishedAt)}
              </div>
              <Link href={`/alternatives/${alternative.slug}`} className="block">
                <CardTitle className="text-xl mb-2 hover:text-purple-700 transition-colors">
                  {alternative.title}
                </CardTitle>
              </Link>
              <CardDescription className="text-gray-600 line-clamp-3">
                {alternative.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="p-6 pt-0">
              <Link href={`/alternatives/${alternative.slug}`}>
                <Button variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800">
                  Read review
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 