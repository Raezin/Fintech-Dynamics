// components/page/home/Process.jsx
'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const processData = [
    {
      number: "01",
      title: "Financial Assessment",
      description: "We analyze your current financial position."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We design customized financial strategies."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute and integrate solutions."
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "We track performance and optimize continuously."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#50a7c3]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#50a7c3]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Financial Process
            </h2>
            <p className="text-lg text-gray-600">
              This builds trust because clients understand how you work.
            </p>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto mt-8"
            />
          </motion.div>

          {/* Process Steps Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {processData.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#50a7c3] hover:shadow-xl transition-all duration-300 group text-center"
              >
                {/* Number with circle background */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#50a7c3]/10 flex items-center justify-center group-hover:bg-[#50a7c3] transition-colors duration-300">
                    <span className="text-2xl font-bold text-[#50a7c3] group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#50a7c3] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Optional: Add a connecting line between steps for desktop */}
          <div className="hidden lg:block relative max-w-5xl mx-auto mt-8">
            <div className="absolute top-0 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-[#50a7c3]/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}