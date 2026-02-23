'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, TrendingUp } from 'lucide-react';

export default function HowWeHelp() {
  // Create refs for animation triggers
  const headerRef = useRef(null);
  const cardRefs = useRef([useRef(null), useRef(null)]);
  
  // Track visibility
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const card1InView = useInView(cardRefs.current[0], { 
    once: true,
    amount: 0.3
  });
  
  const card2InView = useInView(cardRefs.current[1], { 
    once: true,
    amount: 0.3
  });

  // Header: Only fade in, no movement
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Certification cards: Smooth slide up with fast start, slow end
  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(80, 167, 195, 0.25)',
      transition: {
        duration: 0.3
      }
    }
  };

  const businessTypes = [
    {
      icon: Rocket,
      title: "For Startups & Small Businesses",
      description: "We offer personalized accounting and financial services to help startups establish efficient, automated systems from day one. Our solutions grow with your business, ensuring you're always ready for the next step.",
      features: [
        "Personalized accounting setup",
        "Automated financial systems",
        "Scalable solutions",
        "Growth-ready infrastructure"
      ],
      ref: cardRefs.current[0],
      inView: card1InView
    },
    {
      icon: TrendingUp,
      title: "For Growing & Established Businesses",
      description: "For businesses with complex financial operations, we help streamline processes with tailored automation, in-depth financial reporting, and strategic planning to improve efficiency and profitability while ensuring long-term financial stability and growth.",
      features: [
        "Process optimization",
        "Advanced financial reporting",
        "Strategic planning",
        "Profitability enhancement"
      ],
      ref: cardRefs.current[1],
      inView: card2InView
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gray-900 overflow-hidden">
      {/* Enhanced Background Pattern - matching Reasoning component */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(80, 167, 195, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top line with animation */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={headerInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8 origin-center"
        >
          <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
        </motion.div>

        {/* Header Section - Only fade in, no movement */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <motion.div variants={headerItemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How We Help Your Business
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Tailored solutions for businesses at every stage of growth
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Business Types Grid - Premium card design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {businessTypes.map((business) => (
            <div key={business.title} ref={business.ref} className="h-full flex">
              <motion.div
                initial="hidden"
                animate={business.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full w-full"
              >
                <div
                  className="h-full rounded-2xl p-8 flex flex-col transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '2px solid rgba(80, 167, 195, 0.4)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(80, 167, 195, 0.6)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(80, 167, 195, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(80, 167, 195, 0.4)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Icon and Title */}
                  <motion.div 
                    className="flex items-start mb-6"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.5 }
                      }
                    }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mr-5 flex-shrink-0"
                      style={{ 
                        backgroundColor: 'rgba(80, 167, 195, 0.2)',
                        border: '1px solid rgba(80, 167, 195, 0.3)'
                      }}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <business.icon className="w-8 h-8 text-[#50a7c3]" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {business.title}
                      </h3>
                      <motion.div 
                        className="w-12 h-1 bg-[#50a7c3] rounded-full"
                        initial={{ width: 0 }}
                        animate={business.inView ? { width: 48 } : { width: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.2, duration: 0.5 }
                      }
                    }}
                  >
                    {business.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div 
                    className="space-y-3"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { 
                        opacity: 1,
                        transition: { 
                          staggerChildren: 0.1,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
                    {business.features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0.4 }
                          }
                        }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-[#50a7c3] rounded-full mt-2 mr-3 flex-shrink-0"
                          initial={{ scale: 0 }}
                          animate={business.inView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}