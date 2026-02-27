// components/blog/Newsletter.jsx
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#50a7c3]/10 to-transparent rounded-3xl p-8 md:p-12 border border-gray-200 text-center"
        >
          <div className="max-w-2xl mx-auto">
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            
            <p className="text-gray-600 mb-8">
              Get the latest insights on fintech, accounting trends, and business strategies delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 outline-none"
              />
              <button
                type="submit"
                className="bg-[#50a7c3] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3d8aa3] transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Decorative bottom accent */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#50a7c3] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}