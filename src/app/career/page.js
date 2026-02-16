'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  GraduationCap,
  Target,
  Users,
  HeartHandshake,
  ChevronRight
} from 'lucide-react';

export default function CareersPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.2 
  });

  // Reusing the exact animation variants from EndSection
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / Karachi",
      type: "Full-time",
      description: "Build responsive fintech dashboards with Next.js and Tailwind CSS."
    },
    {
      id: 2,
      title: "Financial Analyst",
      department: "Finance",
      location: "Islamabad",
      type: "Full-time",
      description: "Analyze market trends and support strategic financial planning."
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Lahore",
      type: "Hybrid",
      description: "Create intuitive interfaces for complex financial data visualization."
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive brand awareness and lead generation for B2B fintech solutions."
    }
  ];

  // Culture values
  const cultureValues = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're building the future of financial infrastructure."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Work with passionate experts across accounting, IT, and marketing."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "We invest in your growth with learning stipends and mentorship."
    },
    {
      icon: HeartHandshake,
      title: "Work-Life Balance",
      description: "Flexible hours and remote-first culture to do your best work."
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 bg-gray-50 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Divider - matching EndSection style */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-1 bg-[#50a7c3] rounded-full"></div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6 leading-tight px-4">
              Join the <span className="text-[#50a7c3]">Fintech Dynamics</span> Team
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-lg leading-relaxed px-4">
              We're on a mission to empower businesses with cutting-edge technology and financial expertise. 
              If you're passionate about innovation and making an impact, we'd love to meet you.
            </p>
          </motion.div>

          {/* Culture Values Cards - matching contact card style */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#50a7c3]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Open Positions Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-[#50a7c3]" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Open Positions
              </h3>
            </div>
          </motion.div>

          {/* Job Listings */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4 max-w-4xl mx-auto mb-12"
          >
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Link href={`/career`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#50a7c3] hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#50a7c3] transition-colors">
                          {job.title}
                        </h4>
                        <p className="text-gray-600 mb-3">{job.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-gray-500">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-[#50a7c3] font-medium">
                        <span className="mr-2">Apply</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action - matching button style */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#50a7c3] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3d8ba5] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <span>Get in touch</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Tagline - matching EndSection style */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <p className="text-gray-500 text-center text-lg font-medium">
              Let's collaborate to build a better future for finance!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}