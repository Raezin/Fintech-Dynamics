'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-[#111827] text-white mt-auto">
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info - Full width on mobile, 1/4 on desktop */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-1"
            >
              <div className="space-y-4">
                <h5 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#50a7c3] to-[#2f697f] bg-clip-text text-transparent">
                  FinTech Dynamics
                </h5>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We provide cutting-edge financial technology solutions to help businesses 
                  thrive in the digital era. Our expertise spans across automation, 
                  integration, and digital transformation.
                </p>
                
                {/* Social Media Icons */}
                <div className="flex space-x-2 mt-4">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Instagram, label: 'Instagram' }
                  ].map((social) => (
                    <button
                      key={social.label}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#50a7c3]/10 text-white hover:bg-[#50a7c3]/20 hover:-translate-y-0.5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links, Services, Contact - Full width on mobile, 3/4 on desktop */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Quick Links */}
                <motion.div variants={itemVariants}>
                  <h6 className="text-lg font-semibold mb-6 relative pb-2">
                    Quick Links
                    <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#50a7c3] rounded-full"></span>
                  </h6>
                  <ul className="space-y-2">
                    {['About Us', 'Blog', 'Contact Us', 'Privacy Policy'].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-sm text-gray-300 hover:text-[#50a7c3] transition-all duration-300 py-1 block hover:pl-2 hover:border-l-2 hover:border-[#50a7c3]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Our Services */}
                <motion.div variants={itemVariants}>
                  <h6 className="text-lg font-semibold mb-6 relative pb-2">
                    Our Services
                    <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#50a7c3] rounded-full"></span>
                  </h6>
                  <ul className="space-y-2">
                    {[
                      'Financial Solutions',
                      'IT Services',
                      'Digital Marketing',
                      'QuickBooks'
                    ].map((service) => (
                      <li key={service}>
                        <Link
                          href="#"
                          className="text-sm text-gray-300 hover:text-[#50a7c3] transition-all duration-300 py-1 block hover:pl-2 hover:border-l-2 hover:border-[#50a7c3]"
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={itemVariants}>
                  <h6 className="text-lg font-semibold mb-6 relative pb-2">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#50a7c3] rounded-full"></span>
                  </h6>
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#50a7c3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#50a7c3]" />
                      </div>
                      <p className="text-sm text-gray-300">
                        Islamabad, Pakistan
                      </p>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#50a7c3]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-[#50a7c3]" />
                      </div>
                      <p className="text-sm text-gray-300">
                        +92 370 0500852
                      </p>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#50a7c3]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-[#50a7c3]" />
                      </div>
                      <p className="text-sm text-gray-300">
                        info@fintechdynamics.co
                      </p>
                    </div>
                    
                    {/* Business Hours */}
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-400 italic">
                        Business Hours: Mon - Fri, 9AM - 6PM
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 mb-6 h-px bg-gradient-to-r from-transparent via-[#50a7c3] to-transparent"
          />

          {/* Copyright */}
          <motion.div variants={itemVariants}>
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © {currentYear} FinTech Dynamics. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}