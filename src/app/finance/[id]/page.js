// app/finance/[id]/page.js
'use client'

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ArrowUpRight, 
  CheckCircle, 
  Clock,
  Target,
  Sparkles
} from 'lucide-react';
import { services } from '@/components/data/services';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const service = services.find(s => s.id === params.id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <Link href="/finance" className="text-[#50a7c3] hover:underline">
            Back to Finance
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#50a7c3]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#50a7c3]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#50a7c3] transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </button>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Hero Section */}
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#50a7c3]/5 to-transparent rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 rounded-2xl bg-[rgba(80,167,195,0.1)] flex items-center justify-center flex-shrink-0">
                <Icon className="w-12 h-12 text-[#50a7c3]" />
              </div>
              <div className="flex-1">
                <span className="text-sm uppercase tracking-[0.2em] text-[#50a7c3] font-semibold mb-3 block">
                  {service.category} Service
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h1>
                <p className="text-xl text-[#50a7c3]">
                  {service.tagline}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Detailed Service Breakdown */}
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Details</h2>
            <div className="space-y-8">
              {service.includes.map((item, idx) => (
                <div key={idx} className="border-l-4 border-[#50a7c3] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.details[item]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUp}
            className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#50a7c3]" />
                  Ready to get started?
                </h3>
                <p className="text-gray-600">
                  Contact us today to learn more about our {service.name.toLowerCase()} services.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#50a7c3] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3d8ba5] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}