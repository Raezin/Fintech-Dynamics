// app/contact/page.jsx
'use client'

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Facebook,
  Instagram,
  ExternalLink,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import MapPinComponent from '@/components/page/contact/MapPin';

// Snackbar Component
const Snackbar = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: 50, x: '-50%' }}
      className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${type === 'success'
          ? 'bg-green-50 border-green-200 text-green-800'
          : 'bg-red-50 border-red-200 text-red-800'
        }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-green-500" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-500" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-4">
        <X className="w-4 h-4 opacity-70 hover:opacity-100" />
      </button>
    </motion.div>
  );
};

export default function ContactPage() {
  const {
    formData,
    isSubmitting,
    submitStatus,
    errors,
    handleChange,
    handleSubmit
  } = useContactForm();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('success');

  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const leftColumnInView = useInView(leftColumnRef, { once: true, amount: 0.2 });
  const rightColumnInView = useInView(rightColumnRef, { once: true, amount: 0.2 });

  // Handle submit status changes
  useEffect(() => {
    if (submitStatus === 'success') {
      setSnackbarMessage('Thank you for reaching out! We\'ll get back to you soon.');
      setSnackbarType('success');
      setShowSnackbar(true);
    } else if (submitStatus === 'error') {
      setSnackbarMessage('Something went wrong. Please try again later.');
      setSnackbarType('error');
      setShowSnackbar(true);
    }
  }, [submitStatus]);

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

  // Fixed height for error messages to prevent layout shift
  const ErrorMessage = ({ error }) => (
    <div className="h-5 mt-1">
      {error && (
        <p className="text-xs text-red-500 animate-fadeIn">{error}</p>
      )}
    </div>
  );

  return (
    <>
      {/* Snackbar Notification */}
      <AnimatePresence>
        {showSnackbar && (
          <Snackbar
            message={snackbarMessage}
            type={snackbarType}
            onClose={() => setShowSnackbar(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Contact Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden min-h-screen">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#50a7c3] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#50a7c3] opacity-5 rounded-full translate-x-1/2 translate-y-1/2" />

          {/* Map pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 60 L0 30 L30 0 L60 30 L30 60' stroke='%2350a7c3' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
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

          {/* Contact Grid - Using flex for equal height columns */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div ref={leftColumnRef} className="flex-1">
              <motion.div
                initial="hidden"
                animate={leftColumnInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="h-full flex flex-col gap-6"
              >
                {/* Contact Form - Fixed height container */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
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
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-300'
                          } focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none`}
                        placeholder="John Doe"
                      />
                      <ErrorMessage error={errors.name} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-300'
                            } focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none`}
                          placeholder="john@company.com"
                        />
                        <ErrorMessage error={errors.email} />
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
                        <div className="h-5" /> {/* Placeholder for alignment */}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-500' : 'border-gray-300'
                          } focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none bg-white`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <ErrorMessage error={errors.service} />
                    </div>

                    <div>
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
                        className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-300'
                          } focus:border-[#50a7c3] focus:ring-2 focus:ring-[#50a7c3] focus:ring-opacity-20 transition-colors outline-none resize-none`}
                        placeholder="Tell us about your requirements..."
                      />
                      <ErrorMessage error={errors.message} />
                    </div>

                    <div className="pt-2">
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
                    </div>
                  </form>
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
                      href="https://www.linkedin.com/company/fintech-dynamics01/posts/?feedView=all"
                      className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center hover:bg-[#50a7c3] group transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-[#50a7c3] group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.facebook.com/p/Fintech-Dynamics-Pvt-Ltd-61557444514807/"
                      className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center hover:bg-[#50a7c3] group transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5 text-[#50a7c3] group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.instagram.com/fintechdynamics_official/"
                      className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center hover:bg-[#50a7c3] group transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 text-[#50a7c3] group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div ref={rightColumnRef} className="flex-1">
              <motion.div
                initial="hidden"
                animate={rightColumnInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex flex-col gap-6"
              >
                {/* Contact Details Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl px-8 py-12 shadow-xl border border-gray-200 flex-1"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#50a7c3]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Call Us</p>
                        <a href="tel:+923487988543" className="text-gray-900 font-medium hover:text-[#50a7c3] transition-colors">
                          📞 +92 348 7988543
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
                          Office #409, Empire Plaza, Executive Block, Civic Center, Gulberg Greens, Islamabad
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

                {/* Map Location Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                    <a
                      href="https://maps.app.goo.gl/fA6GCURTcTs9ARJTA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#50a7c3] hover:gap-3 transition-all"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Map Container */}
                  <div className="relative w-full h-[373px] rounded-xl overflow-hidden bg-gray-100 shadow-lg">

                    {/* Google Map */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53170.928055167715!2d73.0764215!3d33.6005559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4555457c9430b6fd%3A0x794f73465b5e1871!2sFintech%20Dynamics%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1772052401474!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />

                    {/* Soft gradient overlay (optional for design consistency) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}