// components/blog/FeaturedPost.jsx
'use client'

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedPost() {
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
            <div>
              <span className="text-sm uppercase tracking-wider text-[#50a7c3] font-semibold mb-4 block">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Future of Fintech: Trends to Watch in 2024
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore the latest innovations reshaping financial technology, from AI-powered 
                accounting to blockchain in banking. Discover how these trends can benefit your business.
              </p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Feb 28, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  <span>Sarah Ahmed</span>
                </div>
              </div>
              
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-[#50a7c3] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3d8aa3] transition-all group"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-[#50a7c3] to-[#2c6f8a] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex gap-2">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Fintech</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Trends</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}