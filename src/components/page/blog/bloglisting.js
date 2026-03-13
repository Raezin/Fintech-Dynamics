'use client'

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BlogService } from '@/lib/blogService';

export default function BlogListing() {
  // Show mock data instantly — no loading spinner needed
  const [blogs, setBlogs] = useState(() => BlogService.getMockBlogs());
  const [categories, setCategories] = useState(() =>
    BlogService.getCategoriesFromBlogs(BlogService.getMockBlogs())
  );
  const [activeCategory, setActiveCategory] = useState('All');
  const [isSwapping, setIsSwapping] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsSwapping(true);
      try {
        const realBlogs = await BlogService.getAllBlogs();
        if (realBlogs.length > 0) {
          // Swap mock data out with real API data
          setBlogs(realBlogs);
          setCategories(BlogService.getCategoriesFromBlogs(realBlogs));
          setActiveCategory('All'); // reset filter when new data arrives
        }
        // If API fails (empty array returned), mock data stays untouched
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setIsSwapping(false);
      }
    };

    fetchData();
  }, []);

  const filteredBlogs =
    activeCategory === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Subtle "updating" indicator — doesn't block the UI */}
        {isSwapping && (
          <div className="flex justify-center mb-4">
            <span className="text-xs text-gray-400 flex items-center gap-2">
              <span className="animate-spin inline-block w-3 h-3 border border-[#50a7c3] border-t-transparent rounded-full" />
              Loading latest posts…
            </span>
          </div>
        )}

        {/* Category Filter */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#50a7c3] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((post, index) => (
              <motion.article
                key={post.id ?? post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-[#50a7c3]/20 to-[#2c6f8a]/20">
                  {post.image && !post.isMock ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#50a7c3]/30 to-[#2c6f8a]/30" />
                  )}

                  {/* Mock badge — helpful during dev */}
                  {post.isMock && (
                    <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
                      placeholder
                    </span>
                  )}

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#50a7c3] z-10">
                    {post.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#50a7c3] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#50a7c3] font-medium hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}