import BlogPost from "@/src/pages/BlogPost";
import { blogPosts } from "../../../src/data/blogs";
import React from "react";
import type { Metadata } from "next";
type PageProps = { params: { id: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return {
      title: "Post Not Found | StreamPro",
      description: "The blog post you are looking for was not found.",
    };
  }

  return {
    title: `${post.title} | StreamPro Blog`,
    description: post.excerpt || post.title,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.image],
      type: "article",
    },
  };
}

// Server Component – no "use client"
export default function Page({ params }: { params: { id: string } }) {
   
  return <BlogPost id={params.id} />;
}
