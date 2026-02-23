'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle, 
  Clock,
  Sparkles,
  Target,
  Shield,
  Users,
  ChevronDown,
  Calendar,
  DollarSign,
  HeartHandshake
} from 'lucide-react';

export default function PayrollPage() {
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
                <ArrowLeft className="w-8 h-8" />
              </motion.div>
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
              <Calendar className="w-12 h-12 text-[#50a7c3]" />
            </motion.div>
            <div className="flex-1">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block"
              >
                Workforce Management
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Payroll Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-[#50a7c3]"
              >
                Efficient Payroll Management for Your Business
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
                Why Payroll Management Matters
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Simplify Your Payroll, Empower Your Business
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Managing payroll can be complex, but with Fintech Dynamics, you can simplify the process. Our payroll services ensure that your employees are paid on time and that your business remains compliant with all payroll tax laws and regulations.
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
              Our Payroll Services Include
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete payroll solutions tailored to your business needs.
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
      
      {/* 1. Salary Processing - White */}
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
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Salary Processing</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              Salary processing involves calculating and distributing employee salaries, ensuring that employees are paid accurately and on time.
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
                  We handle the entire salary processing cycle, from calculating gross pay to deducting taxes and distributing payments. Our payroll system ensures timely and accurate payments, reducing the administrative burden on your HR department.
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
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Timely and accurate salary payments</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Reduced administrative workload</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Compliance with local salary regulations</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Payroll Taxes Calculation & Filing - Light Gray */}
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
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Payroll Taxes Calculation & Filing</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              Payroll taxes include income tax, social security, and other government-mandated deductions. These must be calculated and submitted to tax authorities regularly.
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
                  We calculate and file all necessary payroll taxes, ensuring that your business remains in compliance with tax laws. Our team takes care of employee tax deductions, contributions, and ensures timely submissions to the tax authorities.
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
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Accurate payroll tax calculations to ensure compliance</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Timely filings to avoid penalties</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Peace of mind knowing taxes are handled correctly</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Employee Benefits Management - White */}
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
                3
              </motion.span>
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Employee Benefits Management</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              Employee benefits management involves overseeing various employee perks, including health insurance, retirement plans, and other benefits.
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
                  We manage all aspects of employee benefits, including enrollment, deductions, and compliance with benefits regulations. Our team helps you offer competitive and compliant benefits packages to your employees.
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
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Simplifies the management of employee benefits</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Ensures compliance with benefits laws and regulations</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 group/benefit"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                    <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">Helps attract and retain top talent by offering competitive benefits</span>
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
              Why Choose Fintech Dynamics for Payroll Services?
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
            At Fintech Dynamics, we offer complete payroll services that ensure accurate, on-time salary processing, tax calculations, and employee benefits management. Our team ensures that your payroll is handled efficiently and in compliance with all local tax regulations.
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
                          Everything you need to know about our payroll services
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
                            q: "How do you ensure payroll is processed accurately and on time?", 
                            a: "We use secure, automated payroll systems that ensure accuracy and timeliness. Our team verifies all pay rates, hours worked, tax deductions, and benefits before processing." 
                          },
                          { 
                            q: "Can you handle payroll for businesses with a large number of employees?", 
                            a: "Yes, we can handle payroll for businesses of all sizes. Whether you have a small team or hundreds of employees, we provide efficient, scalable payroll solutions tailored to your needs." 
                          },
                          { 
                            q: "How do you manage payroll tax calculations and filings?", 
                            a: "We calculate all payroll taxes, including income tax, social security, and other statutory deductions. We then file the required tax documents on time to ensure compliance and avoid penalties." 
                          },
                          { 
                            q: "Do you provide employee benefits management as well?", 
                            a: "Yes, we manage employee benefits, including health insurance, retirement plans, and other perks, ensuring that everything is compliant with local laws and regulations." 
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
                Get Started with Payroll Services Today
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl">
                Contact Fintech Dynamics for expert payroll management solutions that save you time, reduce risk, and keep your employees happy.
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
            Request a free payroll consultation
          </motion.p>
        </div>
      </section>
    </>
  );
}
