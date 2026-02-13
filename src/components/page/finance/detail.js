'use client'

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  BookOpen,                // Bookkeeping
  Receipt,                  // Tax Services
  ClipboardCheck,           // Monthly Audit
  Building2,                // SECP Services
  TrendingUp,               // FP&A
  BarChart3,                // Financial Reporting
  Clock,                    // Payroll
  Layout,                   // Financial Software
  Shield,                   // Corporate Governance
  Users,                    // Consulting
  ChevronRight,
  X,
  Sparkles
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: BookOpen,
    name: "Bookkeeping",
    tagline: "Your Trusted Partner for Accurate and Reliable Bookkeeping",
    description: "At Fintech Dynamics, we understand that accurate bookkeeping is the backbone of any successful business. Our comprehensive bookkeeping services ensure that your financial records are organized, up-to-date, and compliant with all relevant regulations.",
    includes: [
      "Recording Transactions",
      "General Ledger Maintenance",
      "Accounts Receivable/Payable Management",
      "Bank Reconciliation"
    ],
    details: {
      "Recording Transactions": "Recording transactions involves systematically documenting every financial transaction that occurs within your business. These transactions include sales, purchases, expenses, and payments. We handle the meticulous task of recording each transaction in your accounting system. This ensures that your financial data is accurate and up-to-date. Whether it's a one-time purchase or a recurring payment, we ensure that every detail is accurately recorded to provide you with a clear financial picture.",
      "General Ledger Maintenance": "The general ledger is a comprehensive record of all your business's financial transactions. It's where all the data from your accounting system is consolidated, including assets, liabilities, income, and expenses. We maintain and update your general ledger regularly to reflect all financial activity. This allows you to easily track your financial position and prepare accurate financial reports. Our team ensures that all entries are correctly classified and posted, so your financial records remain organized and accurate.",
      "Accounts Receivable/Payable Management": "Accounts receivable refers to the money owed to your business, while accounts payable represent the money your business owes to vendors or suppliers. Effective management of both is crucial for maintaining positive cash flow and financial health. We help you manage both sides of your business's financials by tracking outstanding payments from customers and ensuring timely payments to your suppliers. Our system keeps you updated on all outstanding transactions, preventing overdue payments or missed collections.",
      "Bank Reconciliation": "Bank reconciliation involves comparing your financial records with your bank statements to ensure that both matches. This is an essential part of maintaining the accuracy of your business's financial records. We perform regular bank reconciliations to ensure that all financial transactions are accurately reflected in your accounts. This helps identify discrepancies, such as missing transactions or errors, and ensures that your financial records align with your bank statements."
    },
    href: "/services/bookkeeping",
    category: "core"
  },
  {
    id: 2,
    icon: Receipt,
    name: "Tax Services",
    tagline: "Optimize Your Tax Position with Expert Tax Services",
    description: "At Fintech Dynamics, we provide comprehensive tax services to help your business reduce liabilities, stay compliant, and plan for the future. Our team of tax professionals works closely with you to ensure that your tax strategy aligns with your business goals, minimizing your tax burden and maximizing savings.",
    includes: [
      "Tax Planning and Preparation",
      "Filing Tax Returns",
      "Tax Strategy and Advice"
    ],
    details: {
      "Tax Planning and Preparation": "Tax planning and preparation are critical to minimizing your business's tax liabilities while ensuring compliance with local and national tax laws. Tax planning involves strategically organizing your financial activities to take advantage of tax deductions, credits, and exemptions, while tax preparation involves the accurate calculation and filing of taxes owed. We assess your financial situation and help create a tax strategy that reduces liabilities and optimizes savings. Our team prepares your tax filings with precision, ensuring accuracy and compliance with Income Tax Ordinance and other applicable laws.",
      "Filing Tax Returns": "Filing tax returns is a mandatory requirement for all businesses. Our tax filing service ensures that your returns are accurate, complete, and submitted on time, preventing costly mistakes or missed deadlines. We prepare and file all types of business tax returns, including income tax, sales tax, and other relevant taxes. Our team handles all the paperwork, ensuring that all necessary forms are submitted and compliant with tax regulations. We e-file your returns with the appropriate authorities, providing you with electronic confirmation of submission.",
      "Tax Strategy and Advice": "A strong tax strategy can make a significant difference in your business's bottom line. Our tax strategy and advisory services are designed to help you make smart decisions about your financial structure, operational activities, and investments to minimize tax liability while maximizing profitability. We provide customized tax strategies based on your unique business model and goals. Our experts analyze your current tax situation and provide actionable insights for future tax savings."
    },
    href: "/services/tax-services",
    category: "core"
  },
  {
    id: 3,
    icon: ClipboardCheck,
    name: "Monthly Audit",
    tagline: "Ensure Accuracy, Transparency, and Compliance with Our Expert Audit Services",
    description: "At Fintech Dynamics, we offer comprehensive monthly end-to-end service audits to help your business maintain financial integrity, improve internal controls, and ensure compliance with industry standards. Our team of experts conducts thorough audits that provide you with detailed insights into your financial health, operational efficiency, and compliance status.",
    includes: [
      "Internal Auditing",
      "Financial Reporting",
      "Compliance Check",
      "Audit Trail Maintenance"
    ],
    details: {
      "Internal Auditing": "Internal auditing involves evaluating your company's internal financial processes and systems to ensure they are functioning effectively. It helps identify potential risks, inefficiencies, and areas for improvement in your business operations. We conduct thorough reviews of your internal controls, financial reporting systems, and operational workflows. Our audits uncover hidden risks, inefficiencies, and potential fraud, helping you strengthen your internal processes.",
      "Financial Reporting": "Financial reporting involves creating key financial statements that summarize your company's financial performance and position. These reports include the Balance Sheet, Income Statement, and Cash Flow Statement, which are crucial for understanding your business's financial health. We prepare and analyze all critical financial statements, ensuring they are accurate and reflect the true financial standing of your business.",
      "Compliance Check": "Compliance checks ensure that your business adheres to local, national, and international regulations. It involves reviewing your financial and operational processes to confirm that they align with applicable laws, industry standards, and best practices. We ensure that your financial activities are fully compliant with tax laws, accounting standards, and industry regulations.",
      "Audit Trail Maintenance": "Audit trail maintenance involves keeping a record of all financial transactions, activities, and changes within your accounting system. This is essential for ensuring transparency and traceability, particularly during audits or investigations. We maintain a secure and detailed audit trail of all financial transactions, ensuring that each entry is documented, traceable, and backed by supporting evidence."
    },
    href: "/services/monthly-audit",
    category: "core"
  },
  {
    id: 4,
    icon: Building2,
    name: "SECP Services",
    tagline: "Ensure Your Business Meets SECP Regulations with Expert Assistance",
    description: "At Fintech Dynamics, we offer a comprehensive suite of services designed to help your business stay compliant with the regulations set by the Securities and Exchange Commission of Pakistan (SECP). Whether you're starting a new business, handling ongoing compliance, or managing shareholder records, our expert team is here to guide you.",
    includes: [
      "Company Registration",
      "Compliance & Filings with SECP",
      "Shareholder Records Management",
      "Regulatory Compliance Assistance"
    ],
    details: {
      "Company Registration": "Starting a new business? We help you navigate the company registration process with ease. From preparing documents to submitting them to SECP, we handle everything, ensuring your company is legally registered and compliant from day one. We ensure that all necessary documentation is properly submitted to SECP, so you can focus on getting your business up and running.",
      "Compliance & Filings with SECP": "Remaining compliant with SECP regulations is crucial for the long-term success of your business. We provide expert services for ongoing compliance and ensure your business meets all filing requirements, including annual returns, financial statements, and other mandatory filings. Our team ensures your business stays up-to-date with all SECP requirements, avoiding penalties and maintaining good standing with regulatory authorities.",
      "Shareholder Records Management": "Keeping accurate records of your company's shareholders is an essential part of maintaining compliance with SECP regulations. We manage your shareholder records, ensuring all share transactions are properly documented and compliant with regulatory standards. Whether you're issuing new shares or updating shareholder information, our team ensures that all records are maintained correctly and in line with SECP requirements.",
      "Regulatory Compliance Assistance": "Navigating regulatory compliance can be challenging, especially with the constant changes in laws and regulations. At Fintech Dynamics, we offer comprehensive regulatory compliance assistance to ensure that your business is always compliant with local and industry regulations. We keep you informed about any changes in the regulatory landscape and help your business stay compliant with SECP regulations, tax laws, and other industry standards."
    },
    href: "/services/secp-services",
    category: "compliance"
  },
  {
    id: 5,
    icon: TrendingUp,
    name: "FP&A",
    tagline: "Make Data-Driven Decisions with Expert Financial Planning & Analysis",
    description: "At Fintech Dynamics, we provide expert Financial Planning & Analysis (FP&A) services designed to give you a comprehensive view of your business's financial health. Our FP&A services help you forecast future performance, manage costs, and track variances, allowing you to make strategic decisions that drive long-term growth.",
    includes: [
      "Budgeting",
      "Forecasting",
      "Cost Management",
      "Variance Analysis"
    ],
    details: {
      "Budgeting": "Creating a detailed budget is essential to the financial success of any business. We assist you in developing a realistic budget that aligns with your business goals, ensuring that resources are allocated effectively to support growth and operations. We work with you to assess your income, expenses, and capital expenditures to create a budget that guides your financial decisions and ensures your business stays within its financial means.",
      "Forecasting": "Accurate financial forecasting helps you predict future revenues and expenses based on historical data and market trends. Our team provides data-driven forecasts that give you a clear picture of your business's financial future, helping you plan for upcoming challenges and opportunities. Our forecasting services help you predict cash flow, manage inventory, and plan for future investments.",
      "Cost Management": "Effective cost management is crucial for maximizing profitability. We help you identify and reduce unnecessary expenses by analyzing your financial records and optimizing spending across different business functions. Our team evaluates your operational costs, analyzes spending patterns, and offers actionable strategies to help you save money without compromising on quality or efficiency.",
      "Variance Analysis": "Variance analysis compares actual performance to budgeted figures, identifying discrepancies and providing insights for corrective action. We use variance analysis to highlight areas where your business is underperforming or exceeding expectations, allowing you to take proactive steps to improve financial outcomes."
    },
    href: "/services/fpa",
    category: "strategic"
  },
  {
    id: 6,
    icon: BarChart3,
    name: "Financial Reporting",
    tagline: "Stay on Top of Your Business's Financial Health with Accurate Reporting",
    description: "At Fintech Dynamics, we offer comprehensive financial reporting services that provide you with a clear view of your business's financial health. Our expert team prepares essential reports, including management reports, annual financial statements, and tax reporting, ensuring that you have the information you need to make informed decisions and stay compliant.",
    includes: [
      "Management Reports",
      "Annual Financial Statements (IFRS or local standards)",
      "Tax Reporting"
    ],
    details: {
      "Management Reports": "Management reports are tailored to your business's needs and provide valuable insights into your financial performance. These reports help you track key metrics such as revenues, expenses, profit margins, and operational efficiency. We prepare monthly or quarterly management reports that highlight critical financial data, enabling you to make strategic decisions. Our reports are designed to be easy to understand, giving you real-time visibility into your business's financial performance.",
      "Annual Financial Statements (IFRS or local standards)": "Annual financial statements include your balance sheet, income statement, and cash flow statement. These reports are essential for external stakeholders like investors, banks, and regulatory bodies. We prepare your financial statements in compliance with International Financial Reporting Standards (IFRS) or local accounting standards. Our team ensures that the statements are accurate, transparent, and in full compliance with all applicable regulations.",
      "Tax Reporting": "Tax reporting involves preparing the necessary documentation and filings for taxes, including income tax, sales tax, and other applicable taxes. We ensure that your tax reports are accurate and filed on time. Our team handles everything from gathering the necessary data to submitting tax returns, ensuring full compliance with tax regulations."
    },
    href: "/services/financial-reporting",
    category: "reporting"
  },
  {
    id: 7,
    icon: Clock,
    name: "Payroll",
    tagline: "Efficient Payroll Management for Your Business",
    description: "Managing payroll can be complex, but with Fintech Dynamics, you can simplify the process. Our payroll services ensure that your employees are paid on time and that your business remains compliant with all payroll tax laws and regulations.",
    includes: [
      "Salary Processing",
      "Payroll Taxes Calculation & Filing",
      "Employee Benefits Management"
    ],
    details: {
      "Salary Processing": "Salary processing involves calculating and distributing employee salaries, ensuring that employees are paid accurately and on time. We handle the entire salary processing cycle, from calculating gross pay to deducting taxes and distributing payments. Our payroll system ensures timely and accurate payments, reducing the administrative burden on your HR department.",
      "Payroll Taxes Calculation & Filing": "Payroll taxes include income tax, social security, and other government-mandated deductions. These must be calculated and submitted to tax authorities regularly. We calculate and file all necessary payroll taxes, ensuring that your business remains in compliance with tax laws. Our team takes care of employee tax deductions, contributions, and ensures timely submissions to the tax authorities.",
      "Employee Benefits Management": "Employee benefits management involves overseeing various employee perks, including health insurance, retirement plans, and other benefits. We manage all aspects of employee benefits, including enrollment, deductions, and compliance with benefits regulations. Our team helps you offer competitive and compliant benefits packages to your employees."
    },
    href: "/services/payroll",
    category: "operations"
  },
  {
    id: 8,
    icon: Layout,
    name: "Financial Software",
    tagline: "Harness the Power of Technology to Optimize Your Financial Processes",
    description: "At Fintech Dynamics, we offer financial software and technology solutions that help automate your financial processes, improve accuracy, and provide real-time financial reporting. We specialize in QuickBooks setup, financial process automation, and reporting dashboards that give you better control over your finances.",
    includes: [
      "QuickBooks Setup & Maintenance",
      "Automation of Financial Processes",
      "Financial Reporting Dashboards"
    ],
    details: {
      "QuickBooks Setup & Maintenance": "QuickBooks is one of the most popular accounting software solutions for businesses. We help you set up QuickBooks from scratch and ensure that it's customized to meet your specific needs. Our team handles the QuickBooks setup, ensuring it is tailored to your business's accounting structure. We also offer ongoing QuickBooks maintenance, providing support to keep your system running smoothly.",
      "Automation of Financial Processes": "Automation in finance refers to using technology to streamline repetitive financial tasks such as invoicing, billing, reconciliation, and payroll. We help automate key financial processes, reducing manual effort and the risk of errors. By automating tasks like invoice generation, payments, and reconciliation, we save you time and improve operational efficiency.",
      "Financial Reporting Dashboards": "Financial reporting dashboards provide real-time, interactive visualizations of your business's financial data. These dashboards give you immediate insights into your financial performance, helping you make informed decisions. We set up financial reporting dashboards that display key metrics, including profitability, cash flow, and expenses. Our dashboards are customizable, giving you the ability to track the metrics that matter most to your business."
    },
    href: "/services/financial-software",
    category: "technology"
  },
  {
    id: 9,
    icon: Shield,
    name: "Corporate Governance",
    tagline: "Strengthen Your Business with Robust Governance and Internal Control Systems",
    description: "At Fintech Dynamics, we understand that effective corporate governance and internal control systems are essential for ensuring transparency, accountability, and operational efficiency. We provide expert services in setting up internal control systems and creating board reports that help businesses operate smoothly, reduce risks, and maintain regulatory compliance.",
    includes: [
      "Internal Control Systems Setup",
      "Board Reporting"
    ],
    details: {
      "Internal Control Systems Setup": "Internal controls are policies and procedures designed to ensure the accuracy of financial reporting, safeguard assets, prevent fraud, and ensure compliance with regulations. Setting up robust internal controls is critical for the integrity and security of your business operations. We work closely with you to design and implement a customized internal control system tailored to your business's needs. Our team evaluates your current processes, identifies areas of risk, and recommends improvements to ensure that your financial records, operational systems, and compliance efforts are secure and efficient.",
      "Board Reporting": "Board reporting involves preparing comprehensive financial and operational reports for your company's board of directors. These reports provide insights into your business's performance, financial health, and compliance status, allowing your board members to make informed decisions. We assist in creating board reports that present key financial metrics, such as income statements, balance sheets, cash flow statements, and other relevant data. We ensure that your reports are clear, accurate, and actionable, helping your board make strategic decisions that drive business growth and compliance."
    },
    href: "/services/corporate-governance",
    category: "governance"
  },
  {
    id: 10,
    icon: Users,
    name: "Consulting",
    tagline: "Expert Financial Consulting to Help Your Business Grow",
    description: "At Fintech Dynamics, we offer financial consulting services designed to guide your business toward long-term success. Whether you're starting a new business or looking for advice on improving your financial systems, our experienced consultants provide actionable insights and strategies to optimize your financial management.",
    includes: [
      "Financial Consulting",
      "Start-up Support (Financial Systems Setup and Compliance)"
    ],
    details: {
      "Financial Consulting": "Financial consulting involves providing expert advice and strategies to help businesses optimize their financial performance, manage risks, and improve profitability. We assess your financial position, analyze key metrics, and offer tailored recommendations to improve cash flow, reduce costs, and maximize profitability. Our team works closely with you to develop strategies that align with your business goals.",
      "Start-up Support (Financial Systems Setup and Compliance)": "Starting a new business requires setting up financial systems and ensuring compliance with tax and regulatory requirements. Our start-up support services help you lay a solid financial foundation for your new venture. We assist with setting up financial systems, including accounting software, banking accounts, and tax filing systems. Additionally, we ensure that your business complies with local tax and regulatory requirements from the beginning."
    },
    href: "/services/consulting",
    category: "advisory"
  }
];

// Custom scrollbar styles - positioned inside with padding
const scrollbarStyles = `
  .modal-custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #50a7c3 #f1f1f1;
    position: relative;
  }
  
  .modal-custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .modal-custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 2px;
  }
  
  .modal-custom-scrollbar::-webkit-scrollbar-thumb {
    background: #50a7c3;
    border-radius: 20px;
    transition: all 0.3s ease;
  }
  
  .modal-custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #3d8aa3;
  }
  
  /* Hide scrollbar when not hovering (optional) */
  .modal-custom-scrollbar:not(:hover)::-webkit-scrollbar-thumb {
    background: #50a7c3;
  }
`;

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);
  const headerRef = useRef(null);
  const section2Ref = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const section2InView = useInView(section2Ref, { once: true, amount: 0.2 });

  // Add scrollbar styles to document
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = scrollbarStyles;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

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

  // Only first 3 services for featured section
  const featuredServices = services.slice(0, 3);
  const remainingServices = services.slice(3);

  return (
    <>
      {/* SECTION 1: Featured Services Overview - Only 3 Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header with decorative elements */}
          <div ref={headerRef} className="relative">
            <motion.div
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >             
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Our Services
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600"
              >
                Comprehensive financial solutions tailored to your business needs
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-[#50a7c3] rounded-full mx-auto mt-8"
              />
            </motion.div>
          </div>

          {/* Featured Services Grid - Only 3 prominent cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredServices.map((service) => {
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, { once: true, amount: 0.2 });
              
              const cardVariants = {
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              };

              return (
                <div key={service.id} ref={cardRef} className="h-full group">
                  <motion.div
                    initial="hidden"
                    animate={cardInView ? "visible" : "hidden"}
                    variants={cardVariants}
                    className="h-full"
                  >
                    <div 
                      className="h-full bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#50a7c3] transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden group"
                      onClick={() => setSelectedService(service)}
                    >
                      {/* Background Decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#50a7c3] opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative z-10">
                        {/* Icon with animated background */}
                        <div className="w-16 h-16 rounded-2xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#50a7c3] transition-all duration-300">
                          <service.icon className="w-8 h-8 text-[#50a7c3] group-hover:text-white transition-colors duration-300" />
                        </div>
                        
                        {/* Service Name */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {service.name}
                        </h3>
                        
                        {/* Tagline */}
                        <p className="text-[#50a7c3] font-medium mb-4">
                          {service.tagline}
                        </p>
                        
                        {/* Description */}
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {service.description}
                        </p>
                        
                        {/* Key Services Pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.includes.slice(0, 2).map((item, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                          {service.includes.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                              +{service.includes.length - 2}
                            </span>
                          )}
                        </div>
                        
                        {/* Learn More Link */}
                        <div className="flex items-center gap-2 text-[#50a7c3] font-medium group/link">
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* View All Services Link */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a 
              href="#all-services" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#50a7c3] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Additional Services - All Remaining 7 Services */}
      <section id="all-services" ref={section2Ref} className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={section2InView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              More Services We Offer
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600"
            >
              Explore our additional specialized financial services
            </motion.p>
          </motion.div>

          {/* Remaining Services Grid - 7 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {remainingServices.map((service) => {
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, { once: true, amount: 0.2 });

              const cardVariants = {
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              };

              return (
                <div key={service.id} ref={cardRef} className="h-full">
                  <motion.div
                    initial="hidden"
                    animate={cardInView ? "visible" : "hidden"}
                    variants={cardVariants}
                    className="h-full"
                  >
                    <div 
                      className="h-full bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#50a7c3] transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#50a7c3] transition-colors">
                            <service.icon className="w-5 h-5 text-[#50a7c3] group-hover:text-white transition-colors" />
                          </div>
                          <h4 className="font-bold text-gray-900">{service.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.tagline}</p>
                        <div className="flex items-center gap-1 text-[#50a7c3] text-sm font-medium mt-auto">
                          <span>View details</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details Modal - No CTA, Custom Scrollbar Inside */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto modal-custom-scrollbar relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Header */}
                <div className="flex items-start gap-5 mb-8 pr-12">
                  <div className="w-16 h-16 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                    <selectedService.icon className="w-8 h-8 text-[#50a7c3]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedService.name}
                    </h2>
                    <p className="text-[#50a7c3] text-lg">
                      {selectedService.tagline}
                    </p>
                  </div>
                </div>

                {/* Main Description */}
                <div className="mb-10">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Detailed Service Information - No CTA */}
                <div className="space-y-8">
                  {selectedService.includes.map((item, idx) => (
                    <div key={idx} className="border-l-4 border-[#50a7c3] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedService.details[item]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}