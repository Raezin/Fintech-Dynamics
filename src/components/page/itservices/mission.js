'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Overview() {
  const contentRef = useRef(null);
  
  const contentInView = useInView(contentRef, { 
    once: true,
    amount: 0.3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#50a7c3]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#50a7c3]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={contentRef}>
          <motion.div
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            {/* <motion.div 
              variants={itemVariants}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#50a7c3] via-[#50a7c3]/50 to-transparent rounded-full" />
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                Our mission is to empower businesses through technology by building efficient, adaptable, and future-ready software solutions. We create reliable digital products that simplify business operations, enhance user experiences, and support long-term, sustainable growth across industries.
              </p>
            </motion.div> */}

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#50a7c3]/20 rotate-180" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-8 md:px-12 text-center">
                Our mission is to empower businesses through technology by building efficient, adaptable, and future-ready software solutions. We create reliable digital products that simplify business operations, enhance user experiences, and support long-term, sustainable growth across industries.
              </p>
              <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-[#50a7c3]/20" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}