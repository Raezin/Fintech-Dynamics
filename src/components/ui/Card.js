'use client'

import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  elevation = 1,
  hover = false,
  ...props 
}) => {
  const elevationClasses = {
    0: 'shadow-none',
    1: 'shadow-[0px_1px_3px_rgba(0,0,0,0.08),_0px_1px_2px_rgba(0,0,0,0.04)]',
    2: 'shadow-md',
    3: 'shadow-lg',
  }
  
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`
        bg-white 
        rounded-[14px] 
        ${elevationClasses[elevation]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
)

export const CardHeader = ({ title, subheader, action, className = '' }) => (
  <div className={`p-6 border-b border-[#e5e7eb] ${className}`}>
    <div className="flex items-center justify-between">
      <div>
        <h5 className="text-lg font-semibold mb-1 text-[#111827]">{title}</h5>
        {subheader && <p className="text-sm text-[#6b7280]">{subheader}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  </div>
)

export default Card