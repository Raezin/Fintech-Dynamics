'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Service() {
  const headerRef = useRef(null);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
    <section className="relative h-[30vh] md:h-[35vh] bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Background Pattern - matching your dark theme */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(80, 167, 195, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Accounting & Finance
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}