'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Search, 
  Map, 
  PenTool, 
  CheckCircle, 
  Play, 
  BarChart 
} from 'lucide-react';

export default function Process() {
  const headerRef = useRef(null);
  const stepsRef = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const step1InView = useInView(stepsRef.current[0], { once: true, amount: 0.3 });
  const step2InView = useInView(stepsRef.current[1], { once: true, amount: 0.3 });
  const step3InView = useInView(stepsRef.current[2], { once: true, amount: 0.3 });
  const step4InView = useInView(stepsRef.current[3], { once: true, amount: 0.3 });
  const step5InView = useInView(stepsRef.current[4], { once: true, amount: 0.3 });
  const step6InView = useInView(stepsRef.current[5], { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Search,
      title: "Discovery and coordination",
      number: "01",
      ref: stepsRef.current[0],
      inView: step1InView
    },
    {
      icon: Map,
      title: "Strategy and planning",
      number: "02",
      ref: stepsRef.current[1],
      inView: step2InView
    },
    {
      icon: PenTool,
      title: "Content creation",
      number: "03",
      ref: stepsRef.current[2],
      inView: step3InView
    },
    {
      icon: CheckCircle,
      title: "Client review and approval",
      number: "04",
      ref: stepsRef.current[3],
      inView: step4InView
    },
    {
      icon: Play,
      title: "Campaign execution",
      number: "05",
      ref: stepsRef.current[4],
      inView: step5InView
    },
    {
      icon: BarChart,
      title: "Reporting and optimization",
      number: "06",
      ref: stepsRef.current[5],
      inView: step6InView
    }
  ];

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
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const stepVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Bold geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#50a7c3] opacity-[0.02]" />
        <div className="absolute -left-20 top-20 w-40 h-40 border-2 border-[#50a7c3] opacity-10 rotate-12" />
        <div className="absolute -right-20 bottom-20 w-60 h-60 border-2 border-[#50a7c3] opacity-10 -rotate-12" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#50a7c3] opacity-5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Left aligned */}
        <div ref={headerRef} className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.span 
              variants={itemVariants}
              className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block"
            >
              Our Process
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              How We Work
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mt-6"
            />
          </motion.div>
        </div>

        {/* Vertical timeline style process - 6 steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              ref={step.ref}
              className="relative"
            >
              {/* Connector line - vertical */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#50a7c3] to-transparent opacity-20" />
              )}
              
              <motion.div
                initial="hidden"
                animate={step.inView ? "visible" : "hidden"}
                variants={stepVariants}
                className="flex gap-8 mb-12 last:mb-0"
              >
                {/* Left column - Number and icon */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-900 border-2 border-[#50a7c3] flex items-center justify-center relative z-10 group hover:bg-[#50a7c3] transition-all duration-300 hover:shadow-xl hover:shadow-[#50a7c3]/20">
                    <span className="absolute -top-3 -right-3 text-xs font-bold bg-[#50a7c3] text-white px-2 py-1 rounded-full">
                      {step.number}
                    </span>
                    <step.icon className="w-7 h-7 text-[#50a7c3] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Right column - Content */}
                <div className="flex-1 pb-12">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#50a7c3]/30 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Decorative element */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-8 h-0.5 bg-[#50a7c3] rounded-full" />
                      <span className="text-xs text-[#50a7c3] font-medium uppercase tracking-wider">
                        Step {step.number}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Minimal bottom accent */}
        <div className="flex justify-start mt-16 max-w-5xl mx-auto">
          <div className="w-32 h-1 bg-gradient-to-r from-[#50a7c3] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}