<<<<<<< HEAD
// app/finance/consulting/page.jsx
'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronLeft, 
  ArrowUpRight, 
  CheckCircle, 
  Clock,
  Users,
  Sparkles,
  Target,
  Shield,
  Briefcase,
  ChevronDown,
  Lightbulb,
  TrendingUp,
  FileText
} from 'lucide-react';

export default function ConsultingPage() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const whyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section - Dark Background */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/3 h-full bg-[#50a7c3]"
          />
          <motion.div 
            initial={{ rotate: 12, opacity: 0 }}
            animate={{ rotate: 12, opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -left-20 top-20 w-40 h-40 border-2 border-[#50a7c3] rotate-12"
          />
          <motion.div 
            initial={{ rotate: -12, opacity: 0 }}
            animate={{ rotate: -12, opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -right-20 bottom-20 w-60 h-60 border-2 border-[#50a7c3] -rotate-12"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          {/* Back button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/finance"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.div>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Back to Finance
              </span>
            </Link>
          </motion.div>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, borderColor: '#50a7c3' }}
              className="w-24 h-24 rounded-2xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0 border border-[#50a7c3]/20 transition-all duration-300"
            >
              <Users className="w-12 h-12 text-[#50a7c3]" />
            </motion.div>
            <div className="flex-1">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block"
              >
                Strategic Advisory
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Consulting Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-[#50a7c3]"
              >
                Expert Financial Consulting to Help Your Business Grow
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={heroInView ? { width: 80 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-[#50a7c3] rounded-full mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - White Background */}
      <section ref={introRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              className="md:w-all"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block">
                Why Consulting Matters
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Guidance for Sustainable Growth
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Fintech Dynamics, we offer financial consulting services designed to guide your business toward long-term success. Whether you're starting a new business or looking for advice on improving your financial systems, our experienced consultants provide actionable insights and strategies to optimize your financial management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview - Light Gray Background */}
      <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.span variants={fadeIn} className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block">
              What We Offer
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Services Include
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert guidance to optimize your financial management and business performance.
            </motion.p>
            <motion.div 
              variants={scaleIn}
              whileHover={{ width: 128 }}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto mt-6 transition-all duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      
      {/* 1. Financial Consulting - White */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-6"
          >
            <motion.h3 
              whileHover={{ x: 5 }}
              className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2 group"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-[#50a7c3] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300"
              >
                1
              </motion.span>
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Financial Consulting</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              Financial consulting involves providing expert advice and strategies to help businesses optimize their financial performance, manage risks, and improve profitability.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-50 rounded-xl p-6 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#50a7c3]" />
                  How We Help You
                </h4>
                <p className="text-gray-600">
                  We assess your financial position, analyze key metrics, and offer tailored recommendations to improve cash flow, reduce costs, and maximize profitability. Our team works closely with you to develop strategies that align with your business goals.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#50a7c3]/5 rounded-xl p-6 border border-[#50a7c3]/10 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#50a7c3]" />
                  Benefits
                </h4>
                <ul className="space-y-3">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Expert financial advice tailored to your business</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Improved cash flow and profitability</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Actionable recommendations to enhance financial performance</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Start-up Support - Light Gray */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-6"
          >
            <motion.h3 
              whileHover={{ x: 5 }}
              className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2 group"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-[#50a7c3] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300"
              >
                2
              </motion.span>
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Start-up Support (Financial Systems Setup and Compliance)</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              Starting a new business requires setting up financial systems and ensuring compliance with tax and regulatory requirements. Our start-up support services help you lay a solid financial foundation for your new venture.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl p-6 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#50a7c3]" />
                  How We Help You
                </h4>
                <p className="text-gray-600">
                  We assist with setting up financial systems, including accounting software, banking accounts, and tax filing systems. Additionally, we ensure that your business complies with local tax and regulatory requirements from the beginning.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#50a7c3]/5 rounded-xl p-6 border border-[#50a7c3]/10 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#50a7c3]" />
                  Benefits
                </h4>
                <ul className="space-y-3">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">A solid financial infrastructure for your start-up</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Compliance with local tax and regulatory requirements</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Professional guidance to ensure your business's financial success</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Fintech Dynamics - White Background */}
      <section ref={whyChooseRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.span variants={fadeIn} className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fintech Dynamics for Consulting Services?
            </motion.h2>
            <motion.div 
              variants={scaleIn}
              whileHover={{ width: 128 }}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto transition-all duration-300"
            />
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="text-center text-gray-700 max-w-3xl mx-auto"
          >
            At Fintech Dynamics, our consulting services provide businesses with the expertise needed to optimize financial performance, set up efficient financial systems, and ensure compliance with local regulations. Whether you need help improving your finances or starting a new venture, our team is here to help.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section - Light Gray */}
      <section ref={faqRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.span variants={fadeIn} className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block">
              Got Questions?
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              Everything you need to know about our consulting services
            </motion.p>
            <motion.div 
              variants={scaleIn}
              whileHover={{ width: 128 }}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto mt-6 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {[
              { 
                q: "What kind of financial consulting services do you provide?", 
                a: "We provide a wide range of financial consulting services, including strategic financial planning, cost management, profitability analysis, and business performance optimization. We help businesses improve their financial health and achieve their long-term goals." 
              },
              { 
                q: "How do you support start-ups with financial systems setup?", 
                a: "We help start-ups establish solid financial systems, including accounting software setup, budgeting processes, cash flow management, and tax compliance. Our goal is to provide a strong financial foundation for your business to grow." 
              },
              { 
                q: "Can you assist with compliance for a new business?", 
                a: "Yes, we assist new businesses in tax compliance, SECP regulations, and other local financial requirements to ensure you are legally sound from the start." 
              },
              { 
                q: "How can your consulting services help improve my business’s profitability?", 
                a: "Our financial consulting focuses on analyzing your business’s operations, identifying inefficiencies, and recommending actionable strategies to reduce costs, improve revenue, and enhance profitability." 
              }
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                variants={fadeIn}
                whileHover={{ borderColor: '#50a7c3' }}
                className="group bg-white rounded-xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#50a7c3] transition-colors duration-300">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-500 group-open:rotate-180 transition-transform duration-300"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </summary>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4"
                >
                  {faq.a}
                </motion.div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section ref={ctaRef} className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/3 h-full bg-[#50a7c3]"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#50a7c3]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Clock className="w-6 h-6 text-[#50a7c3]" />
                </motion.div>
                Get Started with Consulting Services Today
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl">
                Need financial advice for your business? Contact Fintech Dynamics for expert financial consulting and start-up support services.
              </p>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 bg-[#50a7c3] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Contact Us Today</span>
                  <motion.div
                    animate={{ x: 0, y: 0 }}
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.p
            variants={fadeIn}
            className="text-center text-gray-400 mt-6 text-sm"
          >
            Request a free financial consultation
          </motion.p>
        </div>
      </section>
    </>
  );
}
=======
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
>>>>>>> eac3847daa4f86e01149324c4d451e270c0c068b
