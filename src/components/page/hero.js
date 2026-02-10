'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bghero from "../../assets/Backgrounds/bg-2.jpg"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

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
  }

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* For now using gradient background - replace with your actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        
        {/* If you have bg-2.jpg in public folder, use: */}
        <Image
          src={bghero}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 1.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#50a7c3]/30 to-transparent blur-3xl z-0"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 1.2 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-1/3 left-1/12 w-48 h-48 rounded-full bg-gradient-to-r from-[#2f697f]/30 to-transparent blur-2xl z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-8">
            <div className="md:col-span-6 lg:col-span-5">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-8 py-8 md:py-0"
              >
                {/* Headline */}
                <motion.div variants={itemVariants}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                    Empowering Your Business with Intelligent  
                    <span className="block text-[#50a7c3] mt-2">
                      Financial & Digital Solutions
                    </span>
                  </h1>
                </motion.div>
                
                {/* Subtitle */}
                <motion.div variants={itemVariants}>
                  <p className="text-lg md:text-md text-gray-200 leading-relaxed max-w-2xl">
                    At Fintech Dynamics, we provide expert solutions to help businesses streamline operations, stay compliant, and drive growth.
    Our full range of services, from QuickBooks implementation to tailored IT solutions and digital marketing strategies, is designed to optimize your business performance.

                  </p>
                </motion.div>
                
                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                  >
                    <Link
                      href="/aboutus"
                      className="inline-flex items-center justify-center gap-2 bg-[#50a7c3] hover:bg-[#2f697f] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg min-w-[220px] text-center"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                  >
                    <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border-2 border-white hover:border-[#50a7c3] text-white hover:text-[#50a7c3] font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg min-w-[200px] text-center hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}