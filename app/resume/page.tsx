'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Resume() {
  const handleDownload = () => {
    const element = document.createElement('a')
    element.setAttribute('href', '/Harsh Vaishnani - Resume.pdf')
    element.setAttribute('download', 'Harsh_Vaishnani_Resume.pdf')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-start mb-12"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Resume
              </h1>
              <p className="text-gray-400 text-lg">Download or view my professional resume</p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all whitespace-nowrap"
            >
              Download PDF
            </motion.button>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 text-center"
            >
              <h2 className="text-3xl font-bold mb-2">HARSH VAISHNANI</h2>
              <p className="text-xl text-blue-400 mb-4">MERN Stack & Shopify Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span>📧 vaishnaniharsh8@gmail.com</span>
                <span>•</span>
                <span>📱 +91 8849862777</span>
                <span>•</span>
                <span>📍 Ahmedabad, Gujarat</span>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Results-driven MERN Stack and Shopify Developer with hands-on experience in building responsive, scalable, 
                and performance-optimized web applications. Proficient in modern web technologies with strong expertise in 
                full-stack development, e-commerce solutions, and performance optimization.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Experience</h3>
              <div className="space-y-8">
                {[
                  {
                    title: 'Senior MERN Stack & Shopify Developer',
                    company: 'Lantern Digital',
                    period: 'January 2025 – Present',
                  },
                  {
                    title: 'MERN Stack Developer',
                    company: 'The Shark Media',
                    period: 'March 2023 – January 2025',
                  },
                ].map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xl font-bold text-white">{exp.title}</p>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-blue-400 whitespace-nowrap ml-4">{exp.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    category: 'Frontend',
                    items: 'React.js, Next.js, HTML5, CSS3, JavaScript ES6+, Tailwind CSS, Bootstrap, GSAP, Framer Motion',
                  },
                  {
                    category: 'Backend',
                    items: 'Node.js, Express.js, REST APIs, JWT Auth, Performance Optimization',
                  },
                  {
                    category: 'Database',
                    items: 'MongoDB, MongoDB Atlas',
                  },
                  {
                    category: 'E-commerce & Tools',
                    items: 'Shopify, Shopify Liquid, Git, GitHub, Postman, Figma',
                  },
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-semibold text-gray-200 mb-2">{skill.category}</p>
                    <p className="text-gray-400 text-sm">{skill.items}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
              <div className="space-y-4">
                {[
                  { degree: 'BCA', institution: 'Saurabh Science College' },
                  { degree: 'H.S.C', institution: 'Alpha High School' },
                  { degree: 'S.S.C', institution: 'Alpha High School' },
                ].map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8"
            >
              <p className="text-gray-400 mb-4">Want to discuss opportunities?</p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
