import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits: string[] = [
    "24/7 security monitoring and support",
    "Industry-leading security experts",
    "Tailored solutions for businesses of all sizes",
    "Continuous security posture improvement",
    "Proactive threat detection and prevention",
    "Compliance with global security standards",
  ]

  return (
    <section className="py-20 bg-slate-900" id="about" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-emerald-400">CipherNest</span>
            </h2>
            <p className="text-gray-300 mb-6">
              CipherNest Advisory was founded with a mission to provide comprehensive cybersecurity services that
              protect organizations from evolving digital threats. Our team of security experts brings decades of
              combined experience in securing critical infrastructure and sensitive data across various industries.
            </p>
            <p className="text-gray-300 mb-8">
              We believe that robust security is not just about implementing tools, but about creating a culture of
              security awareness and continuous improvement. Our holistic approach ensures that your organization is
              protected at every level.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-400 mt-1 flex-shrink-0 w-5 h-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-slate-700">
              <div className="aspect-w-16 aspect-h-9 bg-slate-800">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url(https://via.placeholder.com/600x400)" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-emerald-900/20"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                    <span className="font-bold text-white">10+</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Years of Experience</p>
                    <p className="text-gray-300 text-sm">In Cybersecurity</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="font-bold text-white">500+</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Successful Projects</p>
                    <p className="text-gray-300 text-sm">Across Various Industries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
