// components/page/home/Industries.jsx
'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const industriesData = [
    {
      title: "🏢 Small & Medium Businesses",
      description: "We help SMEs build strong financial foundations through structured accounting, cash flow management, tax planning, and financial reporting. Our solutions support business scalability, improve profitability, and ensure compliance with local regulations.",
      keyAreas: [
        "Bookkeeping & Financial Reporting",
        "Tax Planning & Compliance",
        "Cash Flow Optimization",
        "Business Performance Analysis"
      ]
    },
    {
      title: "🛍 E-commerce Companies",
      description: "E-commerce businesses face complex challenges such as multi-channel sales tracking, payment gateway reconciliation, inventory accounting, and cross-border taxation. We provide accurate financial tracking and reporting to support fast-growing online businesses.",
      keyAreas: [
        "Revenue & Sales Reconciliation",
        "Inventory Accounting",
        "VAT & Sales Tax Compliance",
        "Profit Margin Analysis"
      ]
    },
    {
      title: "🏗 Construction Firms",
      description: "Construction companies require detailed cost tracking, project-based accounting, and strict compliance management. We ensure accurate budgeting, cost control, and financial transparency across all projects.",
      keyAreas: [
        "Project Costing & Budgeting",
        "Contract Accounting",
        "Payroll & Compliance Management",
        "Financial Risk Assessment"
      ]
    },
    {
      title: "💻 Tech Startups",
      description: "Startups need financial clarity to attract investors and manage rapid growth. We assist with financial modeling, investor reporting, burn-rate analysis, and strategic budgeting to support sustainable expansion.",
      keyAreas: [
        "Financial Forecasting",
        "Investor-Ready Reports",
        "Expense Management",
        "Funding & Valuation Support"
      ]
    },
    {
      title: "🏥 Healthcare Providers",
      description: "Healthcare organizations operate under strict regulatory requirements and complex billing systems. We provide structured financial management, compliance monitoring, and cost optimization strategies.",
      keyAreas: [
        "Regulatory Compliance",
        "Medical Billing Oversight",
        "Expense Control",
        "Financial Reporting & Audits"
      ]
    },
    {
      title: "🏦 Financial Institutions",
      description: "We support financial institutions with accurate reporting, compliance monitoring, internal audits, and risk management strategies aligned with regulatory standards.",
      keyAreas: [
        "Internal Controls & Auditing",
        "Regulatory Reporting",
        "Risk Assessment",
        "Financial Compliance Management"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#50a7c3]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#50a7c3]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-600">
              At Fintech Dynamics, we understand that every industry operates under unique financial regulations, tax structures, and operational challenges. Our tailored accounting and financial strategies are designed to meet the specific needs of each sector, ensuring compliance, efficiency, and sustainable growth.
            </p>
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto mt-8"
            />
          </motion.div>

          {/* Industries Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#50a7c3] hover:shadow-xl transition-all duration-300 group h-full"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#50a7c3] transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {industry.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Support Areas:</h4>
                  <ul className="space-y-2">
                    {industry.keyAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-[#50a7c3] mt-1">•</span>
                        <span className="text-gray-600">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}