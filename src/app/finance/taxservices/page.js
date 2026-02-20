// app/finance/tax-services/page.jsx
'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronLeft, 
  ArrowUpRight, 
  CheckCircle, 
  Clock,
  Receipt,
  Sparkles,
  Target,
  Shield,
  Users,
  ChevronDown,
  FileText,
  TrendingUp,
  BookOpen
} from 'lucide-react';

export default function TaxServicesPage() {
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
              <Receipt className="w-12 h-12 text-[#50a7c3]" />
            </motion.div>
            <div className="flex-1">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block"
              >
                Core Service
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Tax Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-[#50a7c3]"
              >
                Optimize Your Tax Position with Expert Tax Services
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
                Why Tax Services Matter
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Tax Management for Business Success
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Fintech Dynamics, we provide comprehensive tax services to help your business reduce liabilities, stay compliant, and plan for the future. Our team of tax professionals works closely with you to ensure that your tax strategy aligns with your business goals, minimizing your tax burden and maximizing savings.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need help with tax planning, filing returns, or strategic tax advice, we have the expertise to ensure your business remains on track and compliant with all tax regulations.
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
              Our Tax Services Include
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of tax services designed to meet the unique needs of your business.
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
      
      {/* 1. Tax Planning and Preparation - White */}
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
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Tax Planning and Preparation</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              Tax planning and preparation are critical to minimizing your business's tax liabilities while ensuring compliance with local and national tax laws. Tax planning involves strategically organizing your financial activities to take advantage of tax deductions, credits, and exemptions, while tax preparation involves the accurate calculation and filing of taxes owed.
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
                <ul className="space-y-3">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">We assess your financial situation and help create a tax strategy that reduces liabilities and optimizes savings.</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Our team prepares your tax filings with precision, ensuring accuracy and compliance with Income Tax Ordinance and other applicable laws.</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">We identify potential tax-saving opportunities to help you make the most of deductions, credits, and other benefits.</span>
                  </motion.li>
                </ul>
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
                  {[
                    "Minimized tax liabilities through proactive planning.",
                    "Avoid penalties and interest by filing on time.",
                    "Expert advice on deductions, credits, and exemptions."
                  ].map((benefit, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2 group/benefit"
                    >
                      <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                      <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Filing Tax Returns - Light Gray */}
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
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Filing Tax Returns</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              Filing tax returns is a mandatory requirement for all businesses. Our tax filing service ensures that your returns are accurate, complete, and submitted on time, preventing costly mistakes or missed deadlines.
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
                <ul className="space-y-3">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">We prepare and file all types of business tax returns, including income tax, sales tax, and other relevant taxes.</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Our team handles all the paperwork, ensuring that all necessary forms are submitted and compliant with tax regulations.</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">We e-file your returns with the appropriate authorities, providing you with electronic confirmation of submission.</span>
                  </motion.li>
                </ul>
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
                  {[
                    "Accuracy: We ensure that your tax returns are filed correctly, minimizing the risk of audits or penalties.",
                    "Timely Filing: We file your returns on time to avoid late fees.",
                    "Peace of Mind: You can trust that your returns are handled by experts, so you never have to worry about tax compliance."
                  ].map((benefit, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2 group/benefit"
                    >
                      <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                      <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Tax Strategy and Advice - White */}
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
              <span className="group-hover:text-[#50a7c3] transition-colors duration-300">Tax Strategy and Advice</span>
            </motion.h3>
            <p className="text-gray-700 mb-6 text-lg">
              A strong tax strategy can make a significant difference in your business's bottom line. Our tax strategy and advisory services are designed to help you make smart decisions about your financial structure, operational activities, and investments to minimize tax liability while maximizing profitability.
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
                <ul className="space-y-3">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">We provide customized tax strategies based on your unique business model and goals.</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Our experts analyze your current tax situation and provide actionable insights for future tax savings.</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">We advise on tax-efficient business structures, investments, and transactions, ensuring long-term tax advantages.</span>
                  </motion.li>
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">We offer guidance on international tax laws and regulations if your business operates across borders.</span>
                  </motion.li>
                </ul>
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
                  {[
                    "Tailored Tax Strategy: A tax strategy aligned with your business goals.",
                    "Increased Savings: Maximize deductions and credits to reduce your tax burden.",
                    "Strategic Planning: Plan for future growth with a tax-efficient approach."
                  ].map((benefit, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2 group/benefit"
                    >
                      <CheckCircle className="w-5 h-5 text-[#50a7c3] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/benefit:scale-110" />
                      <span className="text-gray-600 group-hover/benefit:text-gray-900 transition-colors duration-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Tax Strategy and Advice?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FileText, title: "Custom Solutions", desc: "Our advice is tailored specifically to your business's financial situation." },
                { icon: TrendingUp, title: "Long-Term Benefits", desc: "We help you plan for long-term tax savings and business success." },
                { icon: Shield, title: "Expertise", desc: "Our team stays updated on the latest tax laws, ensuring that your tax strategy is both current and effective." }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 text-center transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-[#50a7c3] rounded-lg flex items-center justify-center mx-auto mb-4"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                );
              })}
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
              Why Choose Fintech Dynamics for Your Tax Services?
            </motion.h2>
            <motion.div 
              variants={scaleIn}
              whileHover={{ width: 128 }}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto transition-all duration-300"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { icon: Users, title: "Expert Knowledge", text: "Our team has deep expertise in tax law and regulations, ensuring that your taxes are handled with the highest level of professionalism and accuracy." },
              { icon: Target, title: "Proactive Approach", text: "We don't just file your taxes. We help you plan to reduce your liabilities and improve your financial situation." },
              { icon: BookOpen, title: "Comprehensive Services", text: "Whether you need tax planning, return filing, or strategy advice, we offer a complete suite of tax services tailored to your business." },
              { icon: Shield, title: "Full Compliance", text: "We ensure that all your tax filings meet local and national tax regulations, avoiding penalties and interest." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50 rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-[#50a7c3] rounded-lg p-2 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#50a7c3] transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
              Everything you need to know about our tax services
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
              { q: "What documents do I need to provide for tax filing?", a: "We'll provide you with a checklist of the necessary documents, including your financial statements, receipts for deductions, and any tax-related records." },
              { q: "How can tax planning help my business?", a: "Tax planning helps you minimize tax liabilities, increase deductions, and optimize your financial structure, allowing you to save money and reinvest in your business." },
              { q: "Do you offer tax services for personal tax returns?", a: "Our primary focus is on business tax services, but we can also assist with personal tax returns for business owners and key stakeholders if needed." },
              { q: "How do you ensure that my tax returns are filed on time?", a: "We set reminders and ensure all necessary documentation is submitted ahead of time to avoid missing any filing deadlines." }
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
                Get Started with Our Tax Services Today
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl">
                At Fintech Dynamics, we offer tax services that go beyond simple filing. Our team is here to help you reduce your tax liabilities, stay compliant, and make informed decisions for your business's future.
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
            Schedule a consultation or get a free tax consultation
          </motion.p>
        </div>
      </section>
    </>
  );
}