
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

const BlogList = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, tips, and comparisons for communication tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
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
                  {post.category} • {formatDate(post.publishedAt)}
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <CardTitle className="text-xl mb-2 hover:text-purple-700 transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">{post.author.name}</span>
                </div>
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
};

export default BlogList;
