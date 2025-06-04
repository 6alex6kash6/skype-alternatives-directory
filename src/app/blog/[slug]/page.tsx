import { notFound } from 'next/navigation'
import { SimpleCustomMDX } from '@/components/SimpleCustomMdx';
import { getBlogPosts } from '@/app/blog/utils'
import BlogPostDetail from '@/components/BlogPostDetail'
import RelatedBlogPosts from '@/components/RelatedBlogPosts'

const baseUrl = 'https://skypealternativelist.com';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }

    let {
        title,
        publishedAt: publishedTime,
        description: description,
        coverImage,
    } = post.metadata
    let ogImage = coverImage
        ? coverImage
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogPostDetail post={{
        ...post.metadata,
        slug: post.slug,
        content: <SimpleCustomMDX source={post.content} />,
      }} />
      <div className="container mx-auto px-4 py-16">
        <RelatedBlogPosts currentSlug={params.slug} posts={posts} />
      </div>
    </>
  )
}
