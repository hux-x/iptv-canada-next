import BlogPost from "@/src/sections/BlogPost";
import { blogPosts } from "../../../src/data/blogs";
import React from "react";
import FloatingWhatsAppButton from "@/src/components/FloatingWhatsAppButton";
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

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
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        <h1>Post Not Found</h1>
        <p>The blog post you are looking for was not found.</p>
      </div>
    );
  }

  const jsonLd = {
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
      name: 'Canadian IPTV Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://canadianiptvservices.ca/favicon.ico'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://canadianiptvservices.ca/blogs/${post?.id}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost id={id} />
      <FloatingWhatsAppButton />
    </>
  );
}