'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Rocket, 
  MessageCircle, 
  Target, 
  FileCheck, 
  Zap, 
  Star 
} from 'lucide-react';

export default function WhatMakesUsDifferent() {
  const headerRef = useRef(null);
  const cardsRef = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const card1InView = useInView(cardsRef.current[0], { once: true, amount: 0.3 });
  const card2InView = useInView(cardsRef.current[1], { once: true, amount: 0.3 });
  const card3InView = useInView(cardsRef.current[2], { once: true, amount: 0.3 });
  const card4InView = useInView(cardsRef.current[3], { once: true, amount: 0.3 });
  const card5InView = useInView(cardsRef.current[4], { once: true, amount: 0.3 });
  const card6InView = useInView(cardsRef.current[5], { once: true, amount: 0.3 });

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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const differentiators = [
    {
      icon: Rocket,
      title: "Seamless Onboarding & Integration",
      description: "We make sure that the transition goes smoothly by providing customized financial and IT solutions that fit right into your business.",
      ref: cardsRef.current[0],
      inView: card1InView
    },
    {
      icon: MessageCircle,
      title: "Real-Time Collaboration",
      description: "We keep in touch with our clients through a number of swift communication channels, which ensures that progress is constant and open.",
      ref: cardsRef.current[1],
      inView: card2InView
    },
    {
      icon: Target,
      title: "Data Accuracy & Accountability",
      description: "We employ advanced analytics to make sure that everything is done correctly, on time, and with demonstrable results.",
      ref: cardsRef.current[2],
      inView: card3InView
    },
    {
      icon: FileCheck,
      title: "Process Optimization & Documentation",
      description: "We document and improve every process to ensure consistency, effectiveness, and continuous improvement.",
      ref: cardsRef.current[3],
      inView: card4InView
    },
    {
      icon: Zap,
      title: "Smart Tools, Smarter Results",
      description: "We use the newest cloud and automation tools to make things more accurate and efficient.",
      ref: cardsRef.current[4],
      inView: card5InView
    },
    {
      icon: Star,
      title: "Commitment to Service Excellence",
      description: "Our main goal is to make our clients happy. We aim to do more than what they expect and win their trust.",
      ref: cardsRef.current[5],
      inView: card6InView
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Single blue line at top only */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
        </div>

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
              What Makes Us <span className="text-[#50a7c3]">Different</span>
            </motion.h2>
          
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              At Fintech Dynamics, we provide not just services but also confidence, clarity, and measurable results. 
              Our unique approach blends financial expertise with technological innovation to help businesses operate 
              smarter, faster, and more sustainably.
            </motion.p>
          </motion.div>
        </div>

        {/* Differentiators Grid - No CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {differentiators.map((item) => (
            <div key={item.title} ref={item.ref}>
              <motion.div
                initial="hidden"
                animate={item.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#50a7c3]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Description - No CTA */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom line removed - no border, no blue line */}
      </div>
    </section>
  );
}