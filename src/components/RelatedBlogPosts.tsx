import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    description: string;
    coverImage: string;
    publishedAt: string;
  };
}

interface RelatedBlogPostsProps {
  currentSlug: string;
  posts: BlogPost[];
  className?: string;
}

export default function RelatedBlogPosts({ currentSlug, posts, className = "" }: RelatedBlogPostsProps) {
  // Get 3 latest posts excluding the current one
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className={`mt-16 ${className}`}>
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        Read more articles about VoIP software
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <Link href={`/blog/${post.slug}`} className="block">
              <AspectRatio ratio={16 / 9} className="bg-gray-100">
                <img
                  src={post.metadata.coverImage}
                  alt={post.metadata.title}
                  className="object-cover h-full w-full"
                />
              </AspectRatio>
            </Link>
            <CardHeader className="p-6">
              <div className="text-sm text-purple-600 mb-2">
                {formatDate(post.metadata.publishedAt)}
              </div>
              <Link href={`/blog/${post.slug}`} className="block">
                <CardTitle className="text-xl mb-2 hover:text-purple-700 transition-colors">
                  {post.metadata.title}
                </CardTitle>
              </Link>
              <CardDescription className="text-gray-600 line-clamp-3">
                {post.metadata.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <Link href={`/blog/${post.slug}`}>
                <Button variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800">
                  Read article
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 