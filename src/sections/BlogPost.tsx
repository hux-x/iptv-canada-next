import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../data/blogs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Image from 'next/image';

interface BlogPostProps {
  id: string;
}

const BlogPost = ({ id }: BlogPostProps) => {
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-300 mb-8">
              The blog post you;re looking for doesn;t exist.
            </p>
            <Link href="/blogs" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blogs" className="text-blue-400 hover:text-blue-300 font-medium">
              ← Back to Blog
            </Link>
          </div>

            <header className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              width={1200}
              height={400}
              priority
            />

            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
              <span key={tag} className="bg-blue-900 text-blue-300 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
              ))}
            </div>
            </header>

          <div className="bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 border border-gray-700">
            <div 
              className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-blue-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blogs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
