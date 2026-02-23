'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import bgPic from "@/assets/Backgrounds/accounting_services.jpg"

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
    <section className="relative h-[30vh] md:h-[35vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgPic}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

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