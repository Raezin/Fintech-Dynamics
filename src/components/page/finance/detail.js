// components/page/finance/details.js
'use client'

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronRight, ChevronLeft, Sparkles
} from 'lucide-react';
import { services } from '@/components/data/services';

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const headerRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];
  const Icon = currentService.icon;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >             
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Services
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600"
            >
              Comprehensive financial solutions tailored to your business needs
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto mt-8"
            />
          </motion.div>
        </div>

        {/* Carousel Container with Reduced Width */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 md:px-12">
          {/* Main Slide */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="w-full"
              >
                <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-gray-100 shadow-xl min-h-[450px] sm:min-h-[400px] md:min-h-[380px] flex items-center">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 w-full">
                    {/* Left Column - Icon and Basic Info */}
                    <div className="md:w-1/3 flex flex-col items-center md:items-start">
                      <div className="bg-[rgba(80,167,195,0.1)] rounded-2xl p-4 sm:p-5 md:p-6 flex items-center justify-center mb-3 sm:mb-4 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                        <Icon className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#50a7c3]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 text-center md:text-left">
                        {currentService.name}
                      </h3>
                      <p className="text-[#50a7c3] font-medium text-xs sm:text-sm text-center md:text-left line-clamp-2 px-2 md:px-0">
                        {currentService.tagline}
                      </p>
                    </div>

                    {/* Right Column - Summary and CTA */}
                    <div className="md:w-2/3 flex flex-col">
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {currentService.description}
                      </p>
                      
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Key Services:</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {currentService.includes.slice(0, 3).map((item, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] sm:text-xs bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                          {currentService.includes.length > 3 && (
                            <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                              +{currentService.includes.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Learn More Link */}
                      <Link
                        href={`/finance/${currentService.id}`}
                        className="self-start inline-flex items-center gap-1.5 sm:gap-2 bg-[#50a7c3] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold hover:bg-[#3d8ba5] transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm mt-auto"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Better positioned for all screens */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
            aria-label="Next service"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 sm:w-8 bg-[#50a7c3]' 
                    : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>

          {/* Service Counter */}
          <div className="text-center mt-2 text-xs sm:text-sm text-gray-500">
            {currentIndex + 1} / {services.length}
          </div>
        </div>

        {/* Service Name Pills - Responsive */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 max-w-4xl mx-auto px-2">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#50a7c3] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}