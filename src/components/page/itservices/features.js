'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code,
  Globe,
  Server,
  Smartphone,
  Repeat,
  Wrench
} from 'lucide-react';

export default function OurServices() {
  const headerRef = useRef(null);
  const cardsRef = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const card1InView = useInView(cardsRef.current[0], { once: true, amount: 0.2 });
  const card2InView = useInView(cardsRef.current[1], { once: true, amount: 0.2 });
  const card3InView = useInView(cardsRef.current[2], { once: true, amount: 0.2 });
  const card4InView = useInView(cardsRef.current[3], { once: true, amount: 0.2 });
  const card5InView = useInView(cardsRef.current[4], { once: true, amount: 0.2 });
  const card6InView = useInView(cardsRef.current[5], { once: true, amount: 0.2 });

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We deliver custom software development services tailored to your unique business requirements. Our solutions are designed for flexibility, scalability, and long-term performance, helping organizations adapt and grow with confidence.",
      ref: cardsRef.current[0],
      inView: card1InView
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "We build modern, responsive, and high-performance web applications using industry-leading technologies and best practices. Our web solutions focus on usability, security, and cross-platform compatibility.",
      ref: cardsRef.current[1],
      inView: card2InView
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description: "Our team develops secure and scalable backend systems, third-party integrations, and RESTful APIs that power reliable, data-driven digital products and services.",
      ref: cardsRef.current[2],
      inView: card3InView
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "We create robust applications focused on performance, usability, and seamless user experiences, ensuring smooth functionality across devices and platforms.",
      ref: cardsRef.current[3],
      inView: card4InView
    },
    {
      icon: Repeat,
      title: "Automation & Integration",
      description: "We help businesses streamline workflows through automation and system integration. Our solutions connect platforms, automate repetitive tasks, and ensure secure data flow—improving efficiency while scaling with your business.",
      ref: cardsRef.current[4],
      inView: card5InView
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "We provide ongoing software maintenance, performance optimization, and technical support to keep your systems secure, stable, and up to date.",
      ref: cardsRef.current[5],
      inView: card6InView
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 30px -10px rgba(80, 167, 195, 0.15)",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#50a7c3] rounded-full filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#50a7c3] rounded-full filter blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto"
            />
          </motion.div>
        </div>

        {/* Services Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.title} 
              ref={service.ref}
              className="h-full"
            >
              <motion.div
                initial="hidden"
                animate={service.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#50a7c3] transition-all duration-300 flex flex-col group">
                  {/* Icon with subtle background */}
                  <div className="w-14 h-14 rounded-xl bg-[rgba(80,167,195,0.08)] flex items-center justify-center mb-6 group-hover:bg-[rgba(80,167,195,0.12)] transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[#50a7c3]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#50a7c3] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Subtle accent line */}
                  <div className="w-12 h-0.5 bg-[#50a7c3]/20 rounded-full mt-6 group-hover:w-16 group-hover:bg-[#50a7c3]/40 transition-all duration-300" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}