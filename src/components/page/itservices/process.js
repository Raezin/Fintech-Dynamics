'use client'

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  Compass,
  PenTool,
  Code2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Timer,
  ChevronRight
} from 'lucide-react';

export default function OurProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: Compass,
      title: "Discovery & Planning",
      description: "We analyze your business goals, technical requirements, and challenges to define a clear development strategy.",
      number: "01",
      color: "#50a7c3",
      bgColor: "bg-[#50a7c3]",
      lightBg: "bg-[#50a7c3]/10",
    },
    {
      icon: PenTool,
      title: "Design & Architecture",
      description: "We design scalable system architectures and intuitive user experiences that align with your long-term objectives.",
      number: "02",
      color: "#3d8ba5",
      bgColor: "bg-[#3d8ba5]",
      lightBg: "bg-[#3d8ba5]/10",
    },
    {
      icon: Code2,
      title: "Development",
      description: "Using agile methodologies, we develop high-quality software with regular updates, testing, and quality assurance.",
      number: "03",
      color: "#2c6f8a",
      bgColor: "bg-[#2c6f8a]",
      lightBg: "bg-[#2c6f8a]/10",
    },
    {
      icon: CheckCircle2,
      title: "Testing & Deployment",
      description: "Every solution undergoes rigorous testing to ensure security, performance, and reliability before deployment.",
      number: "04",
      color: "#1e5a73",
      bgColor: "bg-[#1e5a73]",
      lightBg: "bg-[#1e5a73]/10",
    },
    {
      icon: ArrowUpRight,
      title: "Support & Growth",
      description: "We offer continuous improvements, monitoring, and support to help your software evolve as your business grows.",
      number: "05",
      color: "#0f4559",
      bgColor: "bg-[#0f4559]",
      lightBg: "bg-[#0f4559]/10",
    }
  ];

  // Animation variants
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Bold background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#50a7c3]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#50a7c3]/5 to-transparent" />
        
        {/* Diagonal lines */}
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#50a7c3" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#50a7c3]/10 text-[#50a7c3] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Process
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            How We Work
          </motion.h2>
        </motion.div>

        {/* Process Grid - 2 columns on desktop, 1 on mobile */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Top accent bar - now inside the border */}
                <div className={`absolute top-0 left-0 h-1 ${step.bgColor} rounded-t-2xl transition-all duration-500 w-0 group-hover:w-full`} />
                
                <div className="flex gap-5">
                  {/* Left column - Icon and number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl ${step.lightBg} flex items-center justify-center relative`}>
                      <step.icon className="w-7 h-7 text-[#50a7c3]" />
                      <span className="absolute -top-2 -right-2 text-xs font-bold bg-white border border-[#50a7c3] text-[#50a7c3] px-2 py-0.5 rounded-full shadow-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right column - Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#50a7c3] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-0.5 bg-[#50a7c3] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Links to contact page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/contact" passHref>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-[#50a7c3] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#3d8ba5] transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Start your project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}