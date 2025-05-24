import { formatDate } from "@/lib/utils";
import Footer from "@/components/Footer";

interface BlogPost {
  title: string;
  description: string;
  publishedAt: string;
  coverImage: string;
  slug: string;
  content: React.ReactNode;
}

interface BlogPostDetailProps {
  post: BlogPost;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
              {formatDate(post.publishedAt)}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {post.title}
            </h1>
          </div>

          {/* Post content */}
          <div className="prose prose-lg max-w-none">{post.content}</div>
        </article>
      </main>
    </div>
  );
}
