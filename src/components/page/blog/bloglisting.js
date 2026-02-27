// components/blog/BlogListing.jsx
'use client'

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    slug: 'future-of-fintech',
    title: 'The Future of Fintech: Trends to Watch in 2024',
    excerpt: 'Explore the latest innovations reshaping financial technology, from AI-powered accounting to blockchain in banking.',
    date: 'Feb 28, 2024',
    author: 'Sarah Ahmed',
    category: 'Fintech'
  },
  {
    slug: 'accounting-automation',
    title: 'How Automation is Transforming Accounting',
    excerpt: 'Discover how AI and machine learning are revolutionizing traditional accounting processes and improving accuracy.',
    date: 'Feb 25, 2024',
    author: 'Ali Raza',
    category: 'Accounting'
  },
  {
    slug: 'tax-planning-strategies',
    title: 'Essential Tax Planning Strategies for SMEs',
    excerpt: 'Learn key tax planning strategies that can help small and medium enterprises optimize their tax position.',
    date: 'Feb 22, 2024',
    author: 'Fatima Khan',
    category: 'Tax'
  },
  {
    slug: 'financial-reporting-best-practices',
    title: 'Best Practices in Financial Reporting',
    excerpt: 'A comprehensive guide to maintaining accurate financial records and creating meaningful reports.',
    date: 'Feb 20, 2024',
    author: 'Omar Hassan',
    category: 'Reporting'
  },
  {
    slug: 'startup-financial-planning',
    title: 'Financial Planning Guide for Startups',
    excerpt: 'Essential financial planning tips every startup founder needs to know for sustainable growth.',
    date: 'Feb 18, 2024',
    author: 'Zara Malik',
    category: 'Startups'
  },
  {
    slug: 'payroll-compliance',
    title: 'Navigating Payroll Compliance in 2024',
    excerpt: 'Stay compliant with the latest payroll regulations and avoid common pitfalls.',
    date: 'Feb 15, 2024',
    author: 'Usman Chaudhry',
    category: 'Compliance'
  }
];

const categories = ['All', 'Fintech', 'Accounting', 'Tax', 'Startups', 'Reporting', 'Compliance'];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-[#50a7c3]/20 to-[#2c6f8a]/20 relative">
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#50a7c3]">
                  {post.category}
                </span>
              </div>
              
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
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#50a7c3] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog`}
                  className="inline-flex items-center gap-2 text-[#50a7c3] font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}