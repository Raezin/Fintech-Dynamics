'use client'

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  Map, 
  PenTool, 
  CheckCircle, 
  Play, 
  BarChart,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: Search,
      title: "Discovery and coordination",
      number: "01",
      color: "#50a7c3",
      bgColor: "bg-[#50a7c3]",
      lightBg: "bg-[#50a7c3]/10",
    },
    {
      icon: Map,
      title: "Strategy and planning",
      number: "02",
      color: "#3d8ba5",
      bgColor: "bg-[#3d8ba5]",
      lightBg: "bg-[#3d8ba5]/10",
    },
    {
      icon: PenTool,
      title: "Content creation",
      number: "03",
      color: "#2c6f8a",
      bgColor: "bg-[#2c6f8a]",
      lightBg: "bg-[#2c6f8a]/10",
    },
    {
      icon: CheckCircle,
      title: "Client review and approval",
      number: "04",
      color: "#1e5a73",
      bgColor: "bg-[#1e5a73]",
      lightBg: "bg-[#1e5a73]/10",
    },
    {
      icon: Play,
      title: "Campaign execution",
      number: "05",
      color: "#0f4559",
      bgColor: "bg-[#0f4559]",
      lightBg: "bg-[#0f4559]/10",
    },
    {
      icon: BarChart,
      title: "Reporting and optimization",
      number: "06",
      color: "#0a3342",
      bgColor: "bg-[#0a3342]",
      lightBg: "bg-[#0a3342]/10",
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
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Bold geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#50a7c3] opacity-[0.02]" />
        <div className="absolute -left-20 top-20 w-40 h-40 border-2 border-[#50a7c3] opacity-10 rotate-12" />
        <div className="absolute -right-20 bottom-20 w-60 h-60 border-2 border-[#50a7c3] opacity-10 -rotate-12" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#50a7c3] opacity-5 rounded-full" />
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
          
          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
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
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-[#50a7c3]/30 hover:bg-white/10 transition-all duration-300 h-full relative overflow-hidden">
                {/* Top accent bar - now inside the border */}
                <div className={`absolute top-0 left-0 h-1 ${step.bgColor} rounded-t-2xl transition-all duration-500 w-0 group-hover:w-full`} />
                
                <div className="flex gap-5">
                  {/* Left column - Icon and number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl ${step.lightBg} flex items-center justify-center relative`}>
                      <step.icon className="w-7 h-7 text-[#50a7c3]" />
                      <span className="absolute -top-2 -right-2 text-xs font-bold bg-[#50a7c3] text-white px-2 py-0.5 rounded-full shadow-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right column - Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#50a7c3] transition-colors">
                      {step.title}
                    </h3>
                    
                    {/* Decorative element */}
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-0.5 bg-[#50a7c3] rounded-full" />
                      <span className="text-xs text-[#50a7c3] font-medium">Step {step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}