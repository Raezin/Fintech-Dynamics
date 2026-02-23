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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const headerRef = useRef(null);
  const autoPlayRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Get visible services based on cards per view
  const visibleServices = services.slice(currentIndex, currentIndex + cardsPerView);
  const totalSlides = services.length - cardsPerView + 1;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
          prevIndex + 1 >= services.length - cardsPerView + 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, services.length, cardsPerView]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

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
      prevIndex + 1 >= services.length - cardsPerView + 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? services.length - cardsPerView : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

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

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Hide on mobile, show on tablet/desktop */}
          {services.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 z-30"
                aria-label="Previous services"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200 z-30"
                aria-label="Next services"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Main Slide - Responsive cards */}
          <div 
            className="overflow-hidden rounded-2xl px-0 sm:px-12 md:px-14"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <div className="relative">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className={`grid gap-4 sm:gap-6 ${
                    cardsPerView === 1 
                      ? 'grid-cols-1' 
                      : cardsPerView === 2 
                        ? 'grid-cols-1 sm:grid-cols-2' 
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {visibleServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        whileHover={{ 
                          y: -8,
                          transition: { duration: 0.2 }
                        }}
                        className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#50a7c3] group h-full flex flex-col cursor-pointer w-full"
                      >
                        {/* Icon with hover effect */}
                        <div className="bg-[rgba(80,167,195,0.1)] rounded-xl p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#50a7c3] transition-all duration-300 group-hover:scale-110">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#50a7c3] group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#50a7c3] transition-colors">
                          {service.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-[#50a7c3] font-medium text-xs sm:text-sm mb-3 line-clamp-2">
                          {service.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Key Services Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {service.includes.slice(0, 2).map((item, idx) => (
                            <span 
                              key={idx}
                              className="text-[9px] sm:text-xs bg-gray-100 text-gray-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full group-hover:bg-[#50a7c3]/10 group-hover:text-[#50a7c3] transition-colors"
                            >
                              {item}
                            </span>
                          ))}
                          {service.includes.length > 2 && (
                            <span className="text-[9px] sm:text-xs bg-gray-100 text-gray-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full group-hover:bg-[#50a7c3]/10 group-hover:text-[#50a7c3] transition-colors">
                              +{service.includes.length - 2}
                            </span>
                          )}
                        </div>

                        {/* Learn More Button */}
                        <Link
                          href={service.href}
                          className="inline-flex items-center justify-center gap-1 sm:gap-1.5 bg-[#50a7c3] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-[#3d8ba5] hover:shadow-lg hover:scale-105 mt-auto w-full"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Navigation Buttons - Simple prev/next */}
          {services.length > cardsPerView && (
            <div className="flex sm:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-all duration-300 border border-gray-200"
                aria-label="Previous services"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-all duration-300 border border-gray-200"
                aria-label="Next services"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 bg-[#50a7c3]' 
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Service Counter */}
          <div className="text-center mt-2 text-xs text-gray-400">
            {currentIndex + 1}-{currentIndex + cardsPerView} of {services.length}
          </div>
        </div>
      </div>
    </section>
  );
}