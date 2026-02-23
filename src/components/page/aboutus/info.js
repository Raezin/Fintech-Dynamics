'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutContent() {
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
                Fintech Dynamics was started in 2023 and is registered with the SECP in Pakistan. 
                It links finance and technology. We have smart ways to help organizations go digital, 
                automate operations, and make handling money easier.
              </p>
            </motion.div>

            {/* Second paragraph - Exact text */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We know a lot about cloud integration, compliance, taxes, automation, and accounting. 
                This lets organizations use data to make smarter decisions. Innovation and sustainability 
                are guiding us as we shape a future where finance and technology work together to make 
                businesses smarter and greener.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}