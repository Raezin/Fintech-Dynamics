'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarDesktop from './navbardesktop'
import NavbarMobile from './navbarmobile'

// Elevated AppBar on scroll
const ElevationScroll = ({ children }) => {
  const [isElevated, setIsElevated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsElevated(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return children({ isElevated })
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    {
      label: "Services",
      path: "/services",
      submenu: [
        { label: "Finance", path: "/finance" },
        { label: "IT Services", path: "/itservices" },
        { label: "Digital Marketing", path: "/digitalmarketing" },
        { label: "QuickBooks", path: "/quickbooks" },
      ],
    },
    { label: "Resources", path: "/resources" },
    {
      label: "Industries",
      path: "/industries",
      submenu: [
        { label: "Accounting", path: "/industries/accounting" },
        { label: "Property Management", path: "/industries/property-management" },
        { label: "Restaurant & Hotel", path: "/industries/restaurant-hotel" },
        { label: "Construction Business", path: "/industries/construction" },
      ],
    },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
  ]

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ElevationScroll>
      {({ isElevated }) => (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isElevated 
              ? 'bg-white/95 backdrop-blur-md shadow-lg' 
              : 'bg-white shadow-sm'
          }`}
          style={{
            backdropFilter: isElevated ? 'blur(10px)' : 'none',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-18 transition-all duration-300">
              {/* Logo Section */}
              <Link 
                href="/" 
                className="flex items-center space-x-3 group cursor-pointer"
              >
                {/* Logo Container */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Logo Image */}
                  <div className="relative w-3/4 h-3/4">
                    <Image
                      src="/logo.png"
                      alt="Fintech Dynamics Logo"
                      width={36}
                      height={36}
                      className="object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `
                          <span class="text-white font-bold text-sm md:text-base">
                            FTD
                          </span>
                        `
                      }}
                    />
                  </div>
                </div>
                
                {/* Company Name */}
                <span className="text-lg md:text-xl font-bold text-[#111827] group-hover:text-[#50a7c3] transition-colors duration-300">
                  Fintech Dynamics
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <NavbarDesktop menuItems={menuItems} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden w-11 h-11 rounded-lg transition-all duration-300 flex items-center justify-center"
                style={{
                  backgroundColor: mobileOpen ? 'rgba(80, 167, 195, 0.1)' : 'transparent',
                }}
              >
                <div className="relative w-5 h-4">
                  {/* Hamburger lines */}
                  <span
                    className={`absolute left-0 w-full h-0.5 bg-[#111827] rounded-full transition-all duration-300 ${
                      mobileOpen ? 'top-1/2 transform -translate-y-1/2 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute top-1/2 left-0 w-full h-0.5 bg-[#111827] rounded-full transform -translate-y-1/2 transition-all duration-300 ${
                      mobileOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-full h-0.5 bg-[#111827] rounded-full transition-all duration-300 ${
                      mobileOpen ? 'bottom-1/2 transform translate-y-1/2 -rotate-45' : 'bottom-0'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <NavbarMobile 
            menuItems={menuItems} 
            isOpen={mobileOpen} 
            onClose={toggleMobileMenu} 
          />
        </nav>
      )}
    </ElevationScroll>
  )
}

export default Navbar