'use client'

import { Rocket, TrendingUp } from 'lucide-react'

export default function HowWeHelp() {
  const businessTypes = [
    {
      icon: Rocket,
      title: "For Startups & Small Businesses",
      description: "We offer personalized accounting and financial services to help startups establish efficient, automated systems from day one. Our solutions grow with your business, ensuring you're always ready for the next step.",
      color: "from-[#50a7c3] to-[#2f697f]",
      features: [
        "Personalized accounting setup",
        "Automated financial systems",
        "Scalable solutions",
        "Growth-ready infrastructure"
      ]
    },
    {
      icon: TrendingUp,
      title: "For Growing & Established Businesses",
      description: "For businesses with complex financial operations, we help streamline processes with tailored automation, in-depth financial reporting, and strategic planning to improve efficiency and profitability.",
      color: "from-[#2f697f] to-[#004ba0]",
      features: [
        "Process optimization",
        "Advanced financial reporting",
        "Strategic planning",
        "Profitability enhancement"
      ]
    }
  ]

  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Top line */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-[#50a7c3] to-[#2f697f] rounded-full"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Help Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for businesses at every stage of growth
          </p>
        </div>

        {/* Business Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {businessTypes.map((business) => (
            <div key={business.title} className="group">
              <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#50a7c3]/40 hover:shadow-xl transition-all duration-300">
                
                {/* Icon and Title */}
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${business.color} bg-opacity-10 flex items-center justify-center mr-5 flex-shrink-0`}>
                    <business.icon className="w-7 h-7 text-[#50a7c3]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {business.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#50a7c3] to-[#2f697f] rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {business.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {business.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#50a7c3] rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="px-6 py-3 bg-[#50a7c3] hover:bg-[#2f697f] text-white font-semibold rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="flex justify-center mt-14 pt-8 border-t border-gray-200">
          <div className="w-20 h-1 bg-gradient-to-r from-[#2f697f] to-[#50a7c3] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}