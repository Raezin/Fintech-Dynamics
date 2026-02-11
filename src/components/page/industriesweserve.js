'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Import your industry images
import retail from "../../assets/Backgrounds/property_service.jpg";
import healthcare from "../../assets/Backgrounds/property_service.jpg";
import realestate from "../../assets/Backgrounds/property_service.jpg";
import hospitality from "../../assets/Backgrounds/property_service.jpg";
import manufacturing from "../../assets/Backgrounds/property_service.jpg";
import professional from "../../assets/Backgrounds/property_service.jpg";

export default function IndustriesServed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoPlayRef = useRef(null);

  const industries = [
    {
      src: retail,
      title: "Retail & eCommerce",
      description: "Streamlined inventory management, POS integration, and financial solutions for modern retail businesses.",
      link: "/industries/retail-ecommerce"
    },
    {
      src: healthcare,
      title: "Healthcare & Clinics",
      description: "HIPAA-compliant billing systems, patient management, and specialized financial reporting.",
      link: "/industries/healthcare"
    },
    {
      src: realestate,
      title: "Real Estate & Construction",
      description: "Project costing, contractor payments, property management accounting, and ROI tracking.",
      link: "/industries/real-estate"
    },
    {
      src: hospitality,
      title: "Hospitality & Travel",
      description: "Revenue management systems, booking platform integrations, and operational efficiency tools.",
      link: "/industries/hospitality"
    },
    {
      src: manufacturing,
      title: "Manufacturing",
      description: "Supply chain optimization, cost accounting, production tracking, and inventory control.",
      link: "/industries/manufacturing"
    },
    {
      src: professional,
      title: "Professional Services",
      description: "Time tracking, project-based billing, resource management, and profitability analytics.",
      link: "/industries/professional-services"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [industries.length]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    resetAutoPlay();
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 5000);
  };

  // Slide transition variants - NO FADE, pure slide
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
      transition: {
        x: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.6 
        }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      transition: {
        x: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.6 
        }
      }
    })
  };

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#50a7c3] font-semibold tracking-wider text-sm uppercase block mb-4">
            INDUSTRIES WE SERVE
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2f697f] to-[#50a7c3] bg-clip-text text-transparent">
              Tailored Solutions for Diverse Industries
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our expertise spans across various sectors, delivering customized financial 
            technology solutions that address unique industry challenges and drive growth.
          </p>
        </div>

        {/* Professional Carousel - Pure Slide Transition */}
        <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute top-0 left-0 w-full h-full bg-black"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${industries[currentIndex].src.src})`,
                }}
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Text content */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%] max-w-3xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {industries[currentIndex].title}
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                  {industries[currentIndex].description}
                </p>
                
                {/* Learn More Button */}
                <Link 
                  href={industries[currentIndex].link}
                  className="inline-block mt-8 px-8 py-3 bg-[#50a7c3] hover:bg-[#2f697f] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-white' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}