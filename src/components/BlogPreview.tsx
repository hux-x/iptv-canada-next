
import React from 'react';
import  Link  from 'next/link';
import { blogPosts } from '../data/blogs';
import Image from 'next/image';

const BlogPreview = () => {
  const recentPosts = blogPosts.slice(-3);
  
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest IPTV news, guides, and industry insights 
            from our expert team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 overflow-hidden">
              <Image
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
                width={600}
                height={192}
                priority
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blogs/${post.id}`}
                    className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blogs"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
