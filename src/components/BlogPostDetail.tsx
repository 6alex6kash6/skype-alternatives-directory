
import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto py-12 px-4">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
            <p className="text-gray-600">The blog post you are looking for does not exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero section with featured image */}
        <div className="w-full h-64 md:h-96 bg-gray-200 relative">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        
        <article className="container mx-auto max-w-4xl px-4 py-12">
          {/* Post header */}
          <div className="mb-8 text-center">
            <div className="text-purple-600 mb-2">
              {post.category} • {formatDate(post.publishedAt)}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-center mb-8">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="text-left">
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-gray-500">{post.author.title}</div>
              </div>
            </div>
          </div>
          
          {/* Post content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
