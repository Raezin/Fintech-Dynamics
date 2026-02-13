'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    category: "Financial Reporting",
    questions: [
      {
        q: "Q: What is the difference between management reports and annual financial statements?",
        a: "A: Management reports are internal reports tailored to help business owners and managers track financial performance and make decisions, while annual financial statements are formal reports (including balance sheets, income statements, and cash flow statements) that reflect the business's financial status and are often required by investors, creditors, or regulatory bodies."
      },
      {
        q: "Q: How often should financial reporting be done?",
        a: "A: Financial reporting should be done regularly, such as monthly or quarterly, to ensure you have up-to-date information. We offer monthly management reports and quarterly reviews to keep you on track."
      },
      {
        q: "Q: Are the financial statements prepared according to IFRS or local accounting standards?",
        a: "A: We prepare financial statements according to International Financial Reporting Standards (IFRS) or local accounting standards based on your requirements, ensuring compliance and transparency."
      }
    ]
  },
  {
    category: "Payroll Services",
    questions: [
      {
        q: "Q: How do you ensure payroll is processed accurately and on time?",
        a: "A: We use secure, automated payroll systems that ensure accuracy and timeliness. Our team verifies all pay rates, hours worked, tax deductions, and benefits before processing."
      },
      {
        q: "Q: Can you handle payroll for businesses with a large number of employees?",
        a: "A: Yes, we can handle payroll for businesses of all sizes. Whether you have a small team or hundreds of employees, we provide efficient, scalable payroll solutions tailored to your needs."
      },
      {
        q: "Q: How do you manage payroll tax calculations and filings?",
        a: "A: We calculate all payroll taxes, including income tax, social security, and other statutory deductions. We then file the required tax documents on time to ensure compliance and avoid penalties."
      }
    ]
  },
  {
    category: "Financial Software & Technology",
    questions: [
      {
        q: "Q: What software do you use for QuickBooks setup and maintenance?",
        a: "A: We specialize in QuickBooks Online and QuickBooks Desktop. We help you set up QuickBooks to match your business needs, ensure it integrates with your other systems, and provide ongoing maintenance and support."
      },
      {
        q: "Q: How can automation improve my financial processes?",
        a: "A: Automation eliminates manual processes such as data entry, invoice generation, and payment tracking. It reduces errors, saves time, and allows your team to focus on higher-value tasks."
      },
      {
        q: "Q: What financial reporting dashboards do you offer?",
        a: "A: We create customizable financial reporting dashboards that display key metrics such as profit and loss, cash flow, and expenses in real time. These dashboards help you make informed business decisions with ease."
      }
    ]
  },
  {
    category: "Corporate Governance & Internal Controls",
    questions: [
      {
        q: "Q: What are internal control systems, and why do I need them?",
        a: "A: Internal control systems are processes and procedures that help ensure accurate financial reporting, prevent fraud, and comply with regulations. Having robust internal controls protects your business and builds trust with stakeholders."
      },
      {
        q: "Q: How do you help with board reporting?",
        a: "A: We assist in preparing and presenting board reports that summarize key financial metrics, performance data, and any important issues requiring board attention. These reports are designed to facilitate better decision-making by the board of directors."
      },
      {
        q: "Q: Can you help me set up internal controls for a new business?",
        a: "A: Yes, we work with start-ups and established businesses to design and implement effective internal control systems tailored to your needs. This helps ensure your financial processes are secure from day one."
      }
    ]
  },
  {
    category: "Consulting Services",
    questions: [
      {
        q: "Q: What kind of financial consulting services do you provide?",
        a: "A: We provide a wide range of financial consulting services, including strategic financial planning, cost management, profitability analysis, and business performance optimization. We help businesses improve their financial health and achieve their long-term goals."
      },
      {
        q: "Q: How do you support start-ups with financial systems setup?",
        a: "A: We help start-ups establish solid financial systems, including accounting software setup, budgeting processes, cash flow management, and tax compliance. Our goal is to provide a strong financial foundation for your business to grow."
      },
      {
        q: "Q: Can you assist with compliance for a new business?",
        a: "A: Yes, we assist new businesses in tax compliance, SECP regulations, and other local financial requirements to ensure you are legally sound from the start."
      }
    ]
  }
];

export default function ServicesFAQ() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const headerRef = useRef(null);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? faqs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === faqs.length - 1 ? 0 : prev + 1));
  };

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
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-900 overflow-hidden">
      {/* Enhanced Background Pattern - matching How We Help section */}
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
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300"
            >
              Find answers to common questions about our financial services
            </motion.p>
          </motion.div>
        </div>

        {/* Carousel Container - Fixed Height */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Carousel Window - Dark Theme */}
          <div className="rounded-2xl shadow-xl overflow-hidden min-h-[400px]"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(80, 167, 195, 0.4)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Category Indicator */}
            <div className="px-8 py-4 border-b border-gray-700"
              style={{ backgroundColor: 'rgba(80, 167, 195, 0.1)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">Category</span>
                <span className="text-xs text-gray-500">
                  {currentIndex + 1} / {faqs.length}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {faqs[currentIndex].category}
              </h3>
            </div>

            {/* Questions Container - Fixed Height with Animation */}
            <div className="p-8 relative min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4"
                >
                  {faqs[currentIndex].questions.map((faq, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="rounded-xl p-5"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(80, 167, 195, 0.2)'
                      }}
                    >
                      <p className="text-[#50a7c3] font-medium mb-2 text-sm">
                        {faq.q}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows - Dark Theme */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none hover:scale-110"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(80, 167, 195, 0.4)',
              color: '#fff'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(80, 167, 195, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(80, 167, 195, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(80, 167, 195, 0.4)';
            }}
            aria-label="Previous category"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none hover:scale-110"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(80, 167, 195, 0.4)',
              color: '#fff'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(80, 167, 195, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(80, 167, 195, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(80, 167, 195, 0.4)';
            }}
            aria-label="Next category"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Navigation - Dark Theme */}
          <div className="flex justify-center gap-2 mt-8">
            {faqs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-[#50a7c3] w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                } h-2.5 rounded-full`}
                style={{ width: idx === currentIndex ? '2rem' : '0.625rem' }}
                aria-label={`Go to ${faqs[idx].category}`}
              />
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">
            Still have questions? We're here to help.
          </p>
          <Link href="/contact">
            <button className="bg-[#50a7c3] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#3d8aa3] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              Contact Our Team
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}