'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function EndSection() {
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
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 bg-gray-50 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Divider */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6 leading-tight px-4"
            >
              Get in Touch
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-lg leading-relaxed px-4">
              Are you ready to streamline your operations and grow your business with expert accounting, IT, and digital marketing solutions?
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12"
          >
            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#50a7c3]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Call Us</p>
                  <a 
                    href="tel:+923700500852" 
                    className="text-lg md:text-xl font-semibold text-gray-900 hover:text-[#50a7c3] transition-colors"
                  >
                    +92 370 0500852
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#50a7c3]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Us</p>
                  <a 
                    href="mailto:info@fintechdynamics.co" 
                    className="text-lg md:text-xl font-semibold text-gray-900 hover:text-[#50a7c3] transition-colors break-all"
                  >
                    info@fintechdynamics.co
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>


          {/* Tagline */}
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <p className="text-gray-500 text-center text-lg font-medium">
              Let's collaborate for a better future!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}