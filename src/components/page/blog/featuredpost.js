'use client'

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BlogService } from '@/lib/blogService';

export default function FeaturedPost() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      try {
        const post = await BlogService.getFeaturedBlog();
        setFeaturedPost(post);
      } catch (error) {
        console.error('Error fetching featured post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (loading) {
    return (
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#50a7c3]"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!featuredPost) return null;

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#50a7c3]/5 to-transparent rounded-3xl p-8 md:p-12 border border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left — Text content */}
            <div>
              <span className="text-sm uppercase tracking-wider text-[#50a7c3] font-semibold mb-4 block">
                Latest Article
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 bg-[#50a7c3] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3d8aa3] transition-all group"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — Image or fallback gradient */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              {featuredPost.image ? (
                <>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized // remove this if you add Django domain to next.config.js
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#50a7c3] to-[#2c6f8a]" />
              )}

              {/* Tags overlay */}
              {featuredPost.tags?.length > 0 && (
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2 flex-wrap">
                    {featuredPost.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}