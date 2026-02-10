'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Users, Target } from 'lucide-react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Shield,
      title: "Official QuickBooks Partner",
      description: "Seamlessly integrate QuickBooks into your workflow for easier financial management.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "A dedicated team with years of experience in accounting, technology, and business consulting.",
    },
    {
      icon: Target,
      title: "Client-Centric Approach",
      description: "We design solutions specific to your business needs, ensuring your long-term success.",
    }
  ]

  return (
    <section ref={ref} className="py-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-[#50a7c3] to-[#2f697f] rounded-full"></div>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Why Choose Us
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold text-[#50a7c3] mb-5"
          >
            Your Trusted Partner for Business Success
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            Fintech Dynamics is a leading provider of accounting, finance, IT, and digital marketing services. 
            We deliver tailored solutions that make your financial management seamless, secure, and efficient. 
            Our expertise in automation, technology, and data analytics helps businesses of all sizes grow with confidence.
          </motion.p>
        </div>

        {/* Features - Ultra fast hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ 
                y: -8, 
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                } 
              }}
              className="relative"
            >
              {/* Card with strong separation from background */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-150 h-full overflow-hidden group">
                
                {/* Gradient accent at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#50a7c3] via-[#2f697f] to-[#50a7c3]"></div>
                
                {/* Icon with elevated design */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center mb-6 border border-gray-100 group-hover:shadow-xl transition-shadow duration-150">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#50a7c3]/20 to-[#2f697f]/20 flex items-center justify-center group-hover:from-[#50a7c3]/30 group-hover:to-[#2f697f]/30 transition-all duration-150">
                      <feature.icon className="w-6 h-6 text-[#50a7c3] group-hover:scale-110 transition-transform duration-150" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#50a7c3] transition-colors duration-150">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}