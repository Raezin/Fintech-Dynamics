'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BlogService } from '@/lib/blogService';
import Newsletter from '@/components/page/blog/newsletter';

export default function BlogPostPage() {
  const params = useParams();

  // Show a mock post instantly while real data loads
  const [post, setPost] = useState(() => BlogService.getMockBlogBySlug(params.slug));
  const [isMockPost, setIsMockPost] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isSwapping, setIsSwapping] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsSwapping(true);
      try {
        const [realPost, allBlogs] = await Promise.all([
          BlogService.getBlogBySlug(params.slug),
          BlogService.getAllBlogs(),
        ]);

        if (realPost) {
          setPost(realPost);
          setIsMockPost(false);

          // Related: same category, different slug, max 2
          const source = allBlogs.length > 0 ? allBlogs : BlogService.getMockBlogs();
          const related = source
            .filter((b) => b.category === realPost.category && b.slug !== realPost.slug)
            .slice(0, 2);
          setRelatedPosts(related);
        } else {
          // API returned nothing — check if the mock even has this slug
          const mockMatch = BlogService.getMockBlogBySlug(params.slug);
          if (!mockMatch || mockMatch.slug !== params.slug) {
            setNotFound(true);
          }
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsSwapping(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-[#50a7c3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-[#50a7c3]">📄</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#50a7c3] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3d8aa3] transition-all group shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Subtle swap indicator */}
      {isSwapping && (
        <div className="fixed top-4 right-4 z-50 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 text-xs text-gray-500">
          <span className="animate-spin inline-block w-3 h-3 border border-[#50a7c3] border-t-transparent rounded-full" />
          Loading latest…
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#50a7c3] opacity-[0.02]" />
          <div className="absolute -left-20 top-20 w-40 h-40 border-2 border-[#50a7c3] opacity-10 rotate-12" />
          <div className="absolute -right-20 bottom-20 w-60 h-60 border-2 border-[#50a7c3] opacity-10 -rotate-12" />
        </div>

        {/* Hero image overlay if real post has one */}
        {post.image && !isMockPost && (
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-10"
              unoptimized
            />
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Placeholder badge — remove before production */}
          {isMockPost && (
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-400/20 text-yellow-300 text-xs px-3 py-1 rounded-full">
                Showing placeholder — loading real article…
              </span>
            </div>
          )}

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block bg-[#50a7c3] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {post.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#50a7c3]/20 flex items-center justify-center overflow-hidden">
                  {post.authorImage && !isMockPost ? (
                    <Image src={post.authorImage} alt={post.author} width={40} height={40} className="object-cover" unoptimized />
                  ) : (
                    <User className="w-5 h-5 text-[#50a7c3]" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Written by</p>
                  <p className="font-medium text-white">{post.author}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#50a7c3]" />
                <span>{post.date}</span>
              </div>

              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#50a7c3]" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">

          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-200"
            >
              <Tag className="w-5 h-5 text-[#50a7c3]" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="blog-content prose prose-lg max-w-none"
          >
            <style jsx global>{`
              .blog-content h2 {
                font-size: 1.875rem !important;
                font-weight: 700 !important;
                color: #111827 !important;
                margin-top: 2.5rem !important;
                margin-bottom: 1rem !important;
                line-height: 1.3 !important;
              }
              .blog-content h2:first-of-type { margin-top: 0 !important; }
              .blog-content p {
                font-size: 1.125rem !important;
                line-height: 1.8 !important;
                color: #4B5563 !important;
                margin-bottom: 1.5rem !important;
              }
              .blog-content p:last-of-type { margin-bottom: 0 !important; }
              .blog-content strong { color: #50a7c3 !important; font-weight: 600 !important; }
              .blog-content img {
                max-width: 100% !important;
                height: auto !important;
                border-radius: 12px !important;
                margin: 2rem auto !important;
                display: block !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between"
          >
            <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#50a7c3] text-gray-600 hover:text-white transition-all flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#50a7c3] text-gray-600 hover:text-white transition-all flex items-center justify-center">
                <span className="text-sm font-medium">in</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#50a7c3] text-gray-600 hover:text-white transition-all flex items-center justify-center">
                <span className="text-sm font-medium">f</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <div className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#50a7c3] hover:shadow-xl transition-all group"
                >
                  {relatedPost.image && !relatedPost.isMock && (
                    <div className="relative h-36 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  )}
                  <span className="inline-block bg-[#50a7c3]/10 text-[#50a7c3] px-3 py-1 rounded-full text-xs mb-4">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#50a7c3] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="inline-flex items-center gap-2 text-[#50a7c3] font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}