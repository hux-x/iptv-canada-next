import FloatingWhatsAppButton from '@/src/components/FloatingWhatsAppButton';
import Blogs from '../../src/pages/Blogs'
import React from 'react'
import { blogPosts } from '@/src/data/blogs';
export const metadata = {
  title: 'IPTV Blog & Resources | Canadian IPTV Services',
  description:
    'Explore IPTV trends, tutorials, and expert insights on the StreamPro blog. Stay updated with the latest in streaming services.',
  keywords: [
    'IPTV blog',
    'IPTV tutorials',
    'IPTV Canada',
    'streaming tips',
    'IPTV news',
  ],
  openGraph: {
    title: 'IPTV Blog & Resources | Canadian IPTV Services',
    description:
      'Explore IPTV trends, tutorials, and expert insights on the StreamPro blog.',
    url: 'https://canadianiptvservices.ca/blogs',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'IPTV Blog Cover Image',
      },
    ],
  },
};
export default function BlogPage() {
   const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'StreamPro IPTV Blog',
    description: 'Expert insights, technical guides, and industry trends for IPTV streaming technology.',
    url: 'https://iptvresellerservices.com/blogs',
    publisher: {
      '@type': 'Organization',
      name: 'StreamPro IPTV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iptvresellerservices.com/logo.png',
      },
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://iptvresellerservices.com/blogs/${post.id}`,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      image: post.image,
    })),
  };
  return (
   <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    <Blogs />
    <FloatingWhatsAppButton/>
   </>
  )
}
