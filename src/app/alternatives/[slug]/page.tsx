import { notFound } from 'next/navigation'
import { SimpleCustomMDX } from '@/components/SimpleCustomMdx';
import { getAlternatives } from '../utils'
import AlternativeDetail from '@/components/AlternativeDetail'
import RelatedAlternatives from '@/components/RelatedAlternatives'

const baseUrl = 'https://skypealternativelist.com';

export async function generateStaticParams() {
  const alternatives = getAlternatives();
  return alternatives.map((alternative) => ({
    slug: alternative.slug,
  }))
}

export function generateMetadata({ params }) {
  let alternative = getAlternatives().find((alt) => alt.slug === params.slug)
  if (!alternative) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    description,
    coverImage,
  } = alternative.metadata
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
      url: `${baseUrl}/alternatives/${alternative.slug}`,
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
    alternates: {
      canonical: `${baseUrl}/alternatives/${alternative.slug}`,
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const alternatives = getAlternatives();
  const alternative = alternatives.find((alt) => alt.slug === params.slug)

  if (!alternative) {
    notFound()
  }

  return (
    <>
      <AlternativeDetail
        alternative={{
          ...alternative.metadata,
          slug: alternative.slug,
          content: <SimpleCustomMDX source={alternative.content} />,
        }}
      />
      <div className="container mx-auto px-4 py-16">
        <RelatedAlternatives currentSlug={params.slug} alternatives={alternatives} />
      </div>
    </>
  )
} 