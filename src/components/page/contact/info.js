'use client'

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Linkedin,
  Facebook,
  Twitter,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.2 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Dummy submission - replace with actual form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
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

  const services = [
    "Bookkeeping",
    "Tax Services",
    "Monthly Audit",
    "SECP Services",
    "FP&A",
    "Financial Reporting",
    "Payroll",
    "Financial Software",
    "Corporate Governance",
    "Consulting"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" }
  ];

  return (
    <>
      {/* Main Contact Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#50a7c3] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#50a7c3] opacity-5 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div ref={headerRef}>
            <motion.div
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={headerInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8 origin-center"
        >
          <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
        </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Let's Collaborate for a Better Future!
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600"
              >
                Are you ready to streamline your operations and grow your business with expert accounting, IT, and digital marketing solutions?
              </motion.p>
            </motion.div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div ref={formRef}>
              <motion.div
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  Send Us a Message
                </motion.h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#50a7c3] text-white py-4 rounded-xl font-medium hover:bg-[#3d8aa3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl"
                    >
                      Thank you for reaching out! We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef}>
              <motion.div
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="space-y-6"
              >
                {/* Contact Details Card */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#50a7c3]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Call Us</p>
                        <a href="tel:+923700500852" className="text-gray-900 font-medium hover:text-[#50a7c3] transition-colors">
                          📞 +92 370 0500852
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#50a7c3]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email Us</p>
                        <a href="mailto:info@fintechdynamics.co" className="text-gray-900 font-medium hover:text-[#50a7c3] transition-colors">
                          ✉ info@fintechdynamics.co
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#50a7c3]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Office Address</p>
                        <p className="text-gray-900 font-medium">
                          Karachi, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#50a7c3]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Business Hours</p>
                        <p className="text-gray-900 font-medium">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600 text-sm">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stay Connected Card */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h3>
                  <p className="text-gray-600 mb-6">Follow us on social media for updates and insights</p>
                  
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center hover:bg-[#50a7c3] group transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-[#50a7c3] group-hover:text-white transition-colors" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center hover:bg-[#50a7c3] group transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5 text-[#50a7c3] group-hover:text-white transition-colors" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center hover:bg-[#50a7c3] group transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 text-[#50a7c3] group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}