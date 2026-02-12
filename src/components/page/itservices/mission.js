'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    <section className="py-7 md:py-10 bg-white">
      <div className="container mx-auto px-4">

        <div ref={contentRef}>
          <motion.div
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* First paragraph - Exact text */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
Our mission is to empower businesses through technology by building efficient, adaptable, and future-ready software solutions. We create reliable digital products that simplify business operations, enhance user experiences, and support long-term, sustainable growth across industries.              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}