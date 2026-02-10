'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calculator, Cpu, TrendingUp, Settings, ArrowRight } from 'lucide-react'

export default function CoreServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Calculator,
      title: "Accounting & Finance Solutions",
      description: "Our accounting services help businesses stay on top of their financial health. From bookkeeping and tax preparation to monthly reporting, we ensure your finances are accurately managed, enabling you to make better business decisions.",
    },
    {
      icon: Cpu,
      title: "IT & Technology Solutions",
      description: "Our IT services provide businesses with robust, secure, and scalable systems. From software integration to custom automation, we streamline your operations, improving efficiency and reducing costs.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Services",
      description: "Maximize your online presence with our digital marketing solutions. We specialize in SEO, social media strategies, and targeted advertising that drive traffic and grow your business.",
    },
    {
      icon: Settings,
      title: "QuickBooks Integration & Support",
      description: "As an official QuickBooks partner, we offer expert services in QuickBooks setup, training, and ongoing support. We help automate your accounting tasks and ensure your business is running efficiently with QuickBooks.",
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header - Creative */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block">
              <div className="w-20 h-1 bg-gradient-to-r from-[#50a7c3] to-[#2f697f] rounded-full mb-4 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Core <span className="text-[#50a7c3]">Services</span>
              </h2>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions designed to drive growth and efficiency for your business
          </motion.p>
        </div>

        {/* Services - Creative 4-column layout with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              {/* Service Card */}
              <div className="h-full bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 border border-gray-200 group-hover:border-[#50a7c3]/50 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                
                {/* Animated background circle */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#50a7c3]/5 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center border border-gray-100 group-hover:border-[#50a7c3]/30 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#50a7c3]/10 to-[#2f697f]/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#50a7c3]" />
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 relative z-10">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <div className="relative z-10">
                  <button className="flex items-center text-[#50a7c3] font-semibold text-sm group/btn">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-[#50a7c3]/5 to-[#2f697f]/5 rounded-2xl p-8 border border-gray-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Need a custom solution?
              </h3>
              <p className="text-gray-600">
                Contact us to discuss how we can tailor our services to meet your unique business needs.
              </p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-[#50a7c3] to-[#2f697f] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </motion.div>

        {/* Decorative bottom */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-[#50a7c3]/20 via-[#50a7c3] to-[#50a7c3]/20 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}