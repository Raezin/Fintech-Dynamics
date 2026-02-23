'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const NavbarMobile = ({ menuItems, isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null)

  const toggleSubmenu = (label) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(label)
    }
  }

  const handleItemClick = (item) => {
    if (!item.submenu) {
      onClose()
      setOpenSubmenu(null)
    }
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  const submenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 overflow-hidden"
          style={{ zIndex: 999 }}
        >
          <div className="container mx-auto px-4">
            <ul className="py-2">
              {menuItems.map((item) => {
                const hasSubmenu = item.submenu
                const isSubmenuOpen = openSubmenu === item.label

                return (
                  <li key={item.label} className="border-b border-gray-100 last:border-b-0">
                    {hasSubmenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className="w-full flex items-center justify-between py-4 px-2 text-left transition-all duration-300 hover:bg-gray-50"
                        >
                          <span className={`font-medium text-[#111827] ${isSubmenuOpen ? 'text-[#50a7c3]' : ''}`}>
                            {item.label}
                          </span>
                          <motion.div
                            animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className={`w-5 h-5 ${isSubmenuOpen ? 'text-[#50a7c3]' : 'text-gray-400'}`} />
                          </motion.div>
                        </button>

                        {/* Submenu */}
                        <motion.div
                          initial="closed"
                          animate={isSubmenuOpen ? "open" : "closed"}
                          variants={submenuVariants}
                          className="overflow-hidden"
                        >
                          <ul className="pl-6 pb-2">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.path}
                                  onClick={() => {
                                    onClose()
                                    setOpenSubmenu(null)
                                  }}
                                  className="flex items-center py-3 px-2 text-gray-600 hover:text-[#50a7c3] transition-all duration-300 group"
                                >
                                  <ChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-[#50a7c3] transition-colors duration-300" />
                                  <span className="text-sm">{subItem.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => handleItemClick(item)}
                        className="block py-4 px-2 font-medium text-[#111827] hover:text-[#50a7c3] transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavbarMobile