'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const NavbarDesktop = ({ menuItems }) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const dropdownRef = useRef(null)

  const handleMouseEnter = (label) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
    setHoverTimeout(timeout)
  }

  const handleClick = (label) => {
    if (openDropdown === label) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(label)
    }
  }

  const closeAllDropdowns = () => {
    setOpenDropdown(null)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllDropdowns()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [hoverTimeout])

  return (
    <div className="flex items-center space-x-1" ref={dropdownRef}>
      {menuItems.map((item) => {
        const isDropdown = item.submenu
        const isOpen = openDropdown === item.label

        return (
          <div
            key={item.label}
            className="relative px-4 py-2 group"
            onMouseEnter={() => isDropdown && handleMouseEnter(item.label)}
            onMouseLeave={isDropdown ? handleMouseLeave : undefined}
            onClick={() => isDropdown && handleClick(item.label)}
          >
            {isDropdown ? (
              <>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isOpen ? 'text-[#50a7c3]' : 'text-[#111827] group-hover:text-[#50a7c3]'
                  }`}>
                    {item.label}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                      isOpen ? 'text-[#50a7c3]' : 'text-[#111827] group-hover:text-[#50a7c3]'
                    }`} />
                  </motion.div>
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 min-w-[220px] rounded-xl shadow-2xl border border-gray-200 bg-white overflow-hidden z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.path}
                            onClick={closeAllDropdowns}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#50a7c3]/10 hover:text-[#50a7c3] transition-all duration-200 hover:pl-6"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href={item.path}
                onClick={closeAllDropdowns}
                className="block cursor-pointer"
              >
                <span className="text-sm font-medium text-[#111827] group-hover:text-[#50a7c3] transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            )}

            {/* Hover underline - THIS WORKS FOR ALL ITEMS */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#50a7c3] rounded-full transition-all duration-300 w-0 group-hover:w-full" 
                 style={{ 
                   width: isOpen ? '100%' : undefined 
                 }} 
            />
          </div>
        )
      })}
    </div>
  )
}

export default NavbarDesktop