'use client'

import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  onClick, 
  variant = 'contained', 
  color = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-mui focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold'
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  }
  
  const variantClasses = {
    contained: `bg-${color} text-white hover:bg-${color}-700`,
    outlined: `border border-${color} text-${color} hover:bg-${color}/10`,
    text: `text-${color} hover:bg-${color}/10`,
  }
  
  // Fallback colors if Tailwind doesn't recognize them
  const getColorClass = () => {
    if (color === 'primary') {
      return {
        contained: 'bg-[#50a7c3] hover:bg-[#004ba0] text-white',
        outlined: 'border border-[#50a7c3] text-[#50a7c3] hover:bg-[#50a7c3]/10',
        text: 'text-[#50a7c3] hover:bg-[#50a7c3]/10'
      }
    }
    if (color === 'secondary') {
      return {
        contained: 'bg-[#9c27b0] hover:bg-[#6a0080] text-white',
        outlined: 'border border-[#9c27b0] text-[#9c27b0] hover:bg-[#9c27b0]/10',
        text: 'text-[#9c27b0] hover:bg-[#9c27b0]/10'
      }
    }
    return {}
  }
  
  const colorClasses = getColorClass()
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${colorClasses[variant] || variantClasses[variant]} 
        ${className}
      `}
      style={{ textTransform: 'none' }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button