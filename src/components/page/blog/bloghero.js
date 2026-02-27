// components/blog/BlogHero.jsx
'use client'

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import banner from "@/assets/Backgrounds/blog-bg.jpg"

export default function BlogHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[300px] md:min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={banner} // Replace with your image path
          alt="Blog Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto">
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Insights & Updates from{' '}
            <span className="text-[#50a7c3]">Fintech Dynamics</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Expert perspectives on financial technology, accounting best practices, 
            and business growth strategies.
          </motion.p>
        </div>
      </div>
    </section>
  );
}