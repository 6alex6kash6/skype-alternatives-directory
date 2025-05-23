import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  coverImage: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <Link href={`/blog/${post.slug}`} className="block">
                <AspectRatio ratio={16 / 9} className="bg-gray-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="object-cover h-full w-full"
                  />
                </AspectRatio>
              </Link>
              <CardHeader className="p-6">
                <div className="text-sm text-purple-600 mb-2">
                  {formatDate(post.publishedAt)}
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <CardTitle className="text-xl mb-2 hover:text-purple-700 transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-6 pt-0">
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800">
                    Read more
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
