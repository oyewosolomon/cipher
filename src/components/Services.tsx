"use client"

import type React from "react"
import { useRef, useState, type ReactNode } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

interface Service {
  icon: ReactNode
  title: string
  description: string
  category: "assessment" | "compliance" | "implementation" | "monitoring"
  color: string
}

const Services: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Services" },
    { id: "assessment", name: "Assessment" },
    { id: "compliance", name: "Compliance" },
    { id: "implementation", name: "Implementation" },
    { id: "monitoring", name: "Monitoring" },
  ]

  const services: Service[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Security Audits",
      description: "Comprehensive assessment of your systems to identify vulnerabilities and security gaps.",
      category: "assessment",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Compliance Strategy",
      description: "Navigate complex regulatory requirements with tailored compliance roadmaps.",
      category: "compliance",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Secure Architecture",
      description: "Design and implement secure application architectures from the ground up.",
      category: "implementation",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      title: "Data Protection",
      description: "Implement robust data protection measures to safeguard sensitive information.",
      category: "implementation",
      color: "from-teal-400 to-teal-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Access Management",
      description: "Develop and implement secure access control systems and policies.",
      category: "implementation",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: "Incident Response",
      description: "Prepare for and respond to security incidents with minimal impact.",
      category: "monitoring",
      color: "from-red-400 to-red-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
      title: "24/7 Monitoring",
      description: "Continuous security monitoring to detect and respond to threats in real-time.",
      category: "monitoring",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Security Training",
      description: "Comprehensive security awareness training for your team to prevent human errors.",
      category: "compliance",
      color: "from-pink-400 to-pink-600",
    },
  ]

  const filteredServices = services.filter((service) => activeCategory === "all" || service.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Hexagon clip path
  const hexagonClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden" id="services" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-emerald-500"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div
              className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center justify-center"
              style={{ clipPath: hexagonClipPath }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-white"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Comprehensive cybersecurity solutions tailored to protect your digital assets and strengthen your security
            posture.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mt-8 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium"
                    : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl h-full transform transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                    {/* Top colored bar */}
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                    <div className="p-8">
                      {/* Icon with gradient background */}
                      <div className="mb-6 relative">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${service.color} flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12`}
                          style={{ clipPath: hexagonClipPath }}
                        >
                          <div className="text-white">{service.icon}</div>
                        </div>

                        {/* Animated particles on hover */}
                        {hoveredService === index && (
                          <>
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                                initial={{ x: 0, y: 0, opacity: 0 }}
                                animate={{
                                  x: Math.random() * 100 - 50,
                                  y: Math.random() * 100 - 50,
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 1 + Math.random(),
                                  ease: "easeOut",
                                }}
                              />
                            ))}
                          </>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent bg-clip-text bg-gradient-to-r group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>

                      {/* Animated arrow on hover */}
                      <div className="mt-6 overflow-hidden h-8">
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={hoveredService === index ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center text-emerald-400 font-medium"
                        >
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 w-4 h-4"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 rounded-xl border border-slate-700 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to secure your digital assets?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of security experts is ready to help you build a comprehensive security strategy tailored to your
              needs.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
              Schedule a Security Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
