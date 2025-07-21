import BlogPost from "@/src/pages/BlogPost";
import { blogPosts } from "../../../src/data/blogs";
import React from "react";
import type { Metadata } from "next";
type PageProps = { params: { id: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id);

  return {
    title: `${post?.title} | Canadian IPTV Services Blog`,
    description: post?.excerpt || post?.title,
    keywords: post?.tags,
    openGraph: {
      title: post?.title,
      description: post?.excerpt || post?.title,
      images: [post?.image],
      type: "article",
    },
  };
}

// Server Component – no "use client"
export default function Page({ params }: { params: { id: string } }) {
    const post = blogPosts.find((p) => p.id === params.id);

    const jsonLd =  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post?.title,
    description: post?.excerpt,
    image: post?.image,
    datePublished: post?.date,
    dateModified: post?.date || post?.date,
    author: {
      '@type': 'Person',
      name: post?.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'StreamPro IPTV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://canadianiptvservices.ca/favicon.ico'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://canadianiptvservices.ca/blog/${post?.slug}`
    }
  };
  if (!post) {
    return {
      title: "Post Not Found | Canadian IPTV Services Blog",
      description: "The blog post you are looking for was not found.",
    };
  }
   
  return(
      <>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <BlogPost id={params.id} />;
  </>
  )

 
}
