'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, 
  Globe, 
  Users, 
  Search
} from 'lucide-react';

export default function Services() {
  const headerRef = useRef(null);
  const cardsRef = useRef([useRef(null), useRef(null), useRef(null), useRef(null)]);
  
  const headerInView = useInView(headerRef, { 
    once: true,
    amount: 0.3
  });
  
  const card1InView = useInView(cardsRef.current[0], { once: true, amount: 0.2 });
  const card2InView = useInView(cardsRef.current[1], { once: true, amount: 0.2 });
  const card3InView = useInView(cardsRef.current[2], { once: true, amount: 0.2 });
  const card4InView = useInView(cardsRef.current[3], { once: true, amount: 0.2 });

  const services = [
    {
      icon: Palette,
      title: "Branding & Creative Solutions",
      description: "We help businesses build a strong and consistent brand identity that stands out.",
      features: [
        "Brand identity and visual design",
        "Brand consistency and creative guidelines",
        "Marketing materials and digital creatives",
        "Brand messaging and positioning"
      ],
      ref: cardsRef.current[0],
      inView: card1InView
    },
    {
      icon: Globe,
      title: "Website & Landing Page Development",
      description: "We design responsive, user-friendly websites that convert visitors into customers.",
      features: [
        "Custom website design and development",
        "High-converting landing pages",
        "UX/UI optimization",
        "CMS-based solutions",
        "Website maintenance and SEO optimization"
      ],
      ref: cardsRef.current[1],
      inView: card2InView
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "We manage and grow your social media presence through engaging content and strategic campaigns.",
      features: [
        "Social media strategy and planning",
        "Content creation and scheduling",
        "Audience engagement and community management",
        "Paid social media advertising",
        "Analytics and performance reporting"
      ],
      ref: cardsRef.current[2],
      inView: card3InView
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description: "Our SEO and content strategies help improve search rankings and drive organic traffic.",
      features: [
        "Keyword research and optimization",
        "Technical and on-page SEO",
        "Content planning and blog writing",
        "Link-building strategies",
        "SEO performance tracking"
      ],
      ref: cardsRef.current[3],
      inView: card4InView
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-16 h-1 bg-[#50a7c3] rounded-full mx-auto"
            />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              ref={service.ref}
              className="h-full"
            >
              <motion.div
                initial="hidden"
                animate={service.inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-[#50a7c3]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-3 mt-auto">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#50a7c3] mt-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}