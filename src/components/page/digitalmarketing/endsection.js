'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, 
  Lightbulb, 
  LineChart, 
  TrendingUp 
} from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const cardsRef = useRef([useRef(null), useRef(null), useRef(null), useRef(null)]);
  const ctaRef = useRef(null);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const card1InView = useInView(cardsRef.current[0], { once: true, amount: 0.3 });
  const card2InView = useInView(cardsRef.current[1], { once: true, amount: 0.3 });
  const card3InView = useInView(cardsRef.current[2], { once: true, amount: 0.3 });
  const card4InView = useInView(cardsRef.current[3], { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const reasons = [
    {
      icon: Target,
      title: "Customized marketing strategies",
      ref: cardsRef.current[0],
      inView: card1InView
    },
    {
      icon: Lightbulb,
      title: "Creative and data-driven approach",
      ref: cardsRef.current[1],
      inView: card2InView
    },
    {
      icon: LineChart,
      title: "Transparent reporting",
      ref: cardsRef.current[2],
      inView: card3InView
    },
    {
      icon: TrendingUp,
      title: "Focus on growth and ROI",
      ref: cardsRef.current[3],
      inView: card4InView
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#50a7c3]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#50a7c3]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose Us
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-16 h-1 bg-[#50a7c3] rounded-full mx-auto"
            />
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {reasons.map((reason) => (
            <div 
              key={reason.title} 
              ref={reason.ref}
              className="h-full"
            >
              <motion.div
                initial="hidden"
                animate={reason.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="h-full bg-white rounded-xl p-8 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-16 h-16 rounded-full bg-[rgba(80,167,195,0.08)] flex items-center justify-center mx-auto mb-5 group-hover:bg-[rgba(80,167,195,0.12)] transition-colors duration-300">
                    <reason.icon className="w-7 h-7 text-[#50a7c3]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {reason.title}
                  </h3>
                  <div className="w-1 h-1 bg-[#50a7c3] rounded-full mx-auto mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div ref={ctaRef} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative line */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#50a7c3] to-transparent" />
            </div>
            
            {/* Closing statement */}
            <p className="text-xl md:text-2xl text-gray-700 font-light mb-8 leading-relaxed">
              Ready to transform your digital presence?
            </p>
            
            {/* CTA Button - Navigates to contact page */}
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 bg-[#50a7c3] text-white px-8 py-4 rounded-full font-medium hover:bg-[#3d8ba5] transition-all duration-300 hover:shadow-xl"
              >
                <span>Let's work together</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}