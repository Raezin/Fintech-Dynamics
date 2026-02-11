"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  BuildingLibraryIcon, 
  ChartBarIcon, 
  CloudIcon,
  CalculatorIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function Services() {
  // Create refs for each service card and the footer CTA
  const serviceRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null)]);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  
  // Track visibility for each element with threshold
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const service1InView = useInView(serviceRefs.current[0], { 
    once: true,
    amount: 0.3
  });
  const service2InView = useInView(serviceRefs.current[1], { 
    once: true,
    amount: 0.3
  });
  const service3InView = useInView(serviceRefs.current[2], { 
    once: true,
    amount: 0.3
  });
  const service4InView = useInView(serviceRefs.current[3], { 
    once: true,
    amount: 0.3
  });
  
  const footerInView = useInView(footerRef, { 
    once: true,
    amount: 0.3
  });

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
    hidden: { y: 40, opacity: 0 },
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
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const services = [
    {
      icon: <BuildingLibraryIcon className="w-10 h-10 text-[#50a7c3]" />,
      title: "Accounting & Finance Solutions",
      description: "Our accounting services help businesses stay on top of their financial health. From bookkeeping and tax preparation to monthly reporting, we ensure your finances are accurately managed, enabling you to make better business decisions.",
      link: "/finance",
      ref: serviceRefs.current[0],
      inView: service1InView
    },
    {
      icon: <CloudIcon className="w-10 h-10 text-[#50a7c3]" />,
      title: "IT & Technology Solutions",
      description: "Our IT services provide businesses with robust, secure, and scalable systems. From software integration to custom automation, we streamline your operations, improving efficiency and reducing costs.",
      link: "/itservices",
      ref: serviceRefs.current[1],
      inView: service2InView
    },
    {
      icon: <ChartBarIcon className="w-10 h-10 text-[#50a7c3]" />,
      title: "Digital Marketing Services",
      description: "Maximize your online presence with our digital marketing solutions. We specialize in SEO, social media strategies, and targeted advertising that drive traffic and grow your business.",
      link: "/digitalmarketing",
      ref: serviceRefs.current[2],
      inView: service3InView
    },
    {
      icon: <CalculatorIcon className="w-10 h-10 text-[#50a7c3]" />,
      title: "QuickBooks Integration & Support",
      description: "As an official QuickBooks partner, we offer expert services in QuickBooks setup, training, and ongoing support. We help automate your accounting tasks and ensure your business is running efficiently with QuickBooks.",
      link: "/quickbooks",
      ref: serviceRefs.current[3],
      inView: service4InView
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <div className="flex justify-center items-center mb-8">
          <div className="bg-[#50a7c3] w-[10%] h-1"></div>
        </div>

        {/* Header Section */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
              >
                What We Specialize In
              </h2>
              <p 
                className="text-gray-600 text-center max-w-2xl mx-auto text-lg leading-relaxed"
              >
                Comprehensive solutions designed to drive growth and efficiency for your business
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid - 4 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} ref={service.ref} className="h-full flex">
              <motion.div
                initial="hidden"
                animate={service.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full w-full"
              >
                <div
                  className="h-full p-8 rounded-2xl bg-white border border-gray-300 transition-all duration-300 flex flex-col"
                  style={{ 
                    boxShadow: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(80, 167, 195, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(80, 167, 195, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-lg bg-[rgba(80,167,195,0.1)] flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight min-h-[56px]">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                      {service.description}
                    </p>
                    
                    {/* Button */}
                    <Link href={service.link} className="inline-block mt-auto pt-4">
                      <motion.button
                        className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-[#50a7c3] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#2f697f] hover:shadow-lg hover:-translate-y-0.5"
                        style={{ 
                          boxShadow: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{ 
                          boxShadow: '0 8px 20px rgba(80, 167, 195, 0.3)'
                        }}
                      >
                        Learn More
                        <ArrowRightIcon className="ml-2 w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div ref={footerRef} className="mt-16">
          <motion.div
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <div
              className="p-8 rounded-2xl bg-[rgba(80,167,195,0.05)] border border-gray-300 text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Need a custom solution or have specific requirements?
                </h4>
                <p className="text-gray-600 max-w-lg">
                  Contact us to discuss how we can tailor our services to meet your unique business needs.
                </p>
                <Link href="/contact" className="inline-block">
                  <motion.button
                    className="mt-2 py-3 px-8 rounded-lg border-2 border-[#50a7c3] text-[#50a7c3] font-semibold transition-all duration-300 hover:bg-[rgba(80,167,195,0.08)] hover:border-[#2f697f] hover:text-[#2f697f]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}