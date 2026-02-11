'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
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
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Top line */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
        </div>

        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Message from <span className="text-[#50a7c3]">Fintech</span>
              </h2>
            </motion.div>

            {/* Message Card - Centered, elegant */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16"
            >
              {/* Large quote icon */}
              <div className="absolute top-8 left-8 text-[#50a7c3]/10">
                <Quote className="w-20 h-20" />
              </div>
              
              {/* Message content */}
              <div className="relative z-10">
                <div className="space-y-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl">
                    Fintech Dynamics' simple but strong objective is to provide organizations with new, long-lasting, and useful financial solutions. We started our journey with the thought that we could use technology in sensible ways to revolutionize how traditional financial services work.
                  </p>
                  
                  <p className="text-lg md:text-xl">
                    We believe that the environment should never have to pay for progress. That's why every solution we offer not only makes things operate more easily, but it also encourages ethical business practices. Our mission is still the same as we grow: to help businesses flourish in a digital environment that is continually changing by being honest, creative, and having a sense of purpose.
                  </p>
                  
                  <p className="text-lg md:text-xl italic text-gray-600">
                    Thanks for helping us get to a wiser and more sustainable financial future.
                  </p>
                </div>

                {/* Founder signature */}
                <div className="mt-12 text-center">
                  <div className="w-16 h-1 bg-[#50a7c3] rounded-full mx-auto mb-6"></div>
                  <p className="text-2xl font-bold text-gray-900">
                    Hassan Akhtar
                  </p>
                  <p className="text-[#50a7c3] font-medium mt-1">
                    Founder & CEO, Fintech Dynamics
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}