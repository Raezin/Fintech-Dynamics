'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Users, Target } from 'lucide-react'

export default function WhyChooseUs() {
  const headerRef = useRef(null)
  const cardRefs = useRef([useRef(null), useRef(null), useRef(null)])
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const card1InView = useInView(cardRefs.current[0], { once: true, amount: 0.3 })
  const card2InView = useInView(cardRefs.current[1], { once: true, amount: 0.3 })
  const card3InView = useInView(cardRefs.current[2], { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

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
  }

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
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const features = [
    {
      icon: Shield,
      title: "Official QuickBooks Partner",
      description: "Seamlessly integrate QuickBooks into your workflow for easier financial management.",
      ref: cardRefs.current[0],
      inView: card1InView
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "A dedicated team with years of experience in accounting, technology, and business consulting.",
      ref: cardRefs.current[1],
      inView: card2InView
    },
    {
      icon: Target,
      title: "Client-Centric Approach",
      description: "We design solutions specific to your business needs, ensuring your long-term success.",
      ref: cardRefs.current[2],
      inView: card3InView
    }
  ]

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Top line with animation */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={headerInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6 origin-center"
        >
          <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
        </motion.div>

        {/* Header Section */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Why Choose Us
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[#50a7c3] mb-4">
                Your Trusted Partner for Business Success
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
                Fintech Dynamics is a leading provider of accounting, finance, IT, and digital marketing services. 
                We deliver tailored solutions that make your financial management seamless, secure, and efficient. 
                Our expertise in automation, technology, and data analytics helps businesses of all sizes grow with confidence.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid - Clean, minimal card design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={feature.title} ref={feature.ref} className="h-full flex">
              <motion.div
                initial="hidden"
                animate={feature.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full w-full"
              >
                <div
                  className="h-full bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-200 flex flex-col"
                  style={{ 
                    boxShadow: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(80, 167, 195, 0.12)';
                    e.currentTarget.style.borderColor = '#50a7c3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Icon - Clean and simple */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(80, 167, 195, 0.08)' }}
                    >
                      <feature.icon className="w-8 h-8 text-[#50a7c3]" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}