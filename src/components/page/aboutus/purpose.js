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
  
  const card1InView = useInView(cardsRef.current[0], { once: true, amount: 0.3 });
  const card2InView = useInView(cardsRef.current[1], { once: true, amount: 0.3 });
  const card3InView = useInView(cardsRef.current[2], { once: true, amount: 0.3 });
  const card4InView = useInView(cardsRef.current[3], { once: true, amount: 0.3 });
  const card5InView = useInView(cardsRef.current[4], { once: true, amount: 0.3 });

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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
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
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Top line */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
        </div>

        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Guided by <span className="text-[#50a7c3]">Principles</span>, Driven by Purpose
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-16 h-1 bg-[#50a7c3]/50 rounded-full mx-auto mb-6"
            />
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              At Fintech Dynamics, our foundation is built on values that guide every decision, project, and partnership. 
              These principles reflect who we are—shaping how we serve our clients, empower our people, and contribute 
              to a more sustainable, technology-driven future.
            </motion.p>
          </motion.div>
        </div>

        {/* Values Cards Grid - No CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-[#50a7c3]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  {/* Description - No CTA */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="flex justify-center mt-16 pt-8 border-t border-gray-200">
          <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}