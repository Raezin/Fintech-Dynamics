'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  Leaf, 
  Users 
} from 'lucide-react';

export default function Values() {
  const headerRef = useRef(null);
  const cardsRef = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const card1InView = useInView(cardsRef.current[0], { once: true, amount: 0.2 });
  const card2InView = useInView(cardsRef.current[1], { once: true, amount: 0.2 });
  const card3InView = useInView(cardsRef.current[2], { once: true, amount: 0.2 });
  const card4InView = useInView(cardsRef.current[3], { once: true, amount: 0.2 });
  const card5InView = useInView(cardsRef.current[4], { once: true, amount: 0.2 });

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
    hidden: { y: 40, opacity: 0 },
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
      boxShadow: "0 20px 40px -12px rgba(80, 167, 195, 0.15)",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      icon: HeartHandshake,
      title: "Client-Centered Service",
      description: "We believe that your achievement is the first step toward our success. Being responsive, reliable, and delivering results are the most important things in any client relationship.",
      ref: cardsRef.current[0],
      inView: card1InView
    },
    {
      icon: Award,
      title: "Operational Excellence",
      description: "Our work is all about accuracy, consistency, and making things better. We always make sure that our work is of the highest quality and correctness.",
      ref: cardsRef.current[1],
      inView: card2InView
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      description: "Trust is the foundation of every beneficial partnership. We are honest with each other, talk to each other honestly, and are truthful in whatever we do.",
      ref: cardsRef.current[2],
      inView: card3InView
    },
    {
      icon: Leaf,
      title: "Innovation & Sustainability",
      description: "We use technology in a responsible way to go forward and have less of an effect on the environment.",
      ref: cardsRef.current[3],
      inView: card4InView
    },
    {
      icon: Users,
      title: "People & Responsibility",
      description: "We invest in professional development and social responsibility, creating opportunities that uplift our people and communities.",
      ref: cardsRef.current[4],
      inView: card5InView
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(80,167,195,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(80,167,195,0.2),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Single blue line at top only */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-[#50a7c3] rounded-full"></div>
        </div>

        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span 
              variants={itemVariants}
              className="text-sm uppercase tracking-[0.3em] text-[#50a7c3] font-semibold mb-4 block"
            >
              Our Values
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Built on <span className="text-[#50a7c3]">principles</span>
              <br />that drive progress
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              At Fintech Dynamics, our foundation is built on values that guide every decision, project, and partnership. 
              These principles reflect who we are—shaping how we serve our clients, empower our people, and contribute 
              to a more sustainable, technology-driven future.
            </motion.p>
          </motion.div>
        </div>

        {/* Values Cards Grid - Elevated Cards with Dark Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              ref={value.ref}
              className={index === values.length - 1 ? "lg:col-start-2" : ""}
            >
              <motion.div
                initial="hidden"
                animate={value.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#50a7c3]/30 transition-all duration-300 flex flex-col group">
                  {/* Icon with glass effect */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgba(80,167,195,0.1)] to-[rgba(80,167,195,0.05)] border border-[rgba(80,167,195,0.2)] flex items-center justify-center mb-6 group-hover:border-[rgba(80,167,195,0.5)] group-hover:from-[rgba(80,167,195,0.15)] group-hover:to-[rgba(80,167,195,0.1)] transition-all duration-300">
                    <value.icon className="w-8 h-8 text-[#50a7c3]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#50a7c3] transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>

                  {/* Subtle decorative element */}
                  <div className="w-12 h-0.5 bg-[#50a7c3]/20 rounded-full mt-6 group-hover:w-16 group-hover:bg-[#50a7c3]/40 transition-all duration-300"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* No bottom line - just subtle spacing */}
        <div className="mt-20"></div>
      </div>
    </section>
  );
}