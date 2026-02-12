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
                Our digital marketing services are designed to help businesses grow their online presence, engage their audience, and achieve measurable results. We focus on strategic planning, creative execution, and data-driven marketing to deliver sustainable growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}