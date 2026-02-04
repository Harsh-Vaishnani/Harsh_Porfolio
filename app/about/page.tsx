'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
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
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              About Me
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-blue-500/50 transition-all">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Professional Summary</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a results-driven MERN Stack and Shopify Developer with hands-on experience in building responsive, 
                scalable, and performance-optimized web applications and e-commerce platforms. With a strong foundation in 
                modern web technologies and a passion for creating user-centric solutions, I transform complex requirements 
                into clean, maintainable code that drives business value.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-blue-500/50 transition-all">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">My Approach</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Clean Code:</strong> Writing maintainable, scalable code following industry best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Performance First:</strong> Optimizing applications for speed, responsiveness, and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Modern Technologies:</strong> Leveraging cutting-edge tools and frameworks for better solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Continuous Learning:</strong> Staying updated with industry trends and emerging technologies</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-blue-500/50 transition-all">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Key Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-200">Frontend</h3>
                  <p className="text-gray-400 text-sm">React.js, Next.js, Tailwind CSS, GSAP, Framer Motion, HTML5, CSS3, JavaScript ES6+</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-200">Backend</h3>
                  <p className="text-gray-400 text-sm">Node.js, Express.js, REST APIs, JWT Authentication, MongoDB, Performance Optimization</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-200">E-commerce</h3>
                  <p className="text-gray-400 text-sm">Shopify, Shopify Liquid, Theme Customization, Dynamic Sections, PDP Optimization</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-200">Tools & Platforms</h3>
                  <p className="text-gray-400 text-sm">Git, GitHub, Figma, Postman, VS Code, Vercel, MongoDB Atlas</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-blue-500/50 transition-all">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Background</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I hold a BCA degree from Saurabh Science College, where I developed a strong foundation in computer science 
                and software development. Through my professional journey, I've worked on diverse projects ranging from 
                corporate MERN applications to high-performance e-commerce platforms, each contributing to my growth as a developer.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently working at Lantern Digital, I function in a senior MERN Stack Developer capacity, leading projects 
                from design and development to deployment while mentoring junior developers and following modern development best practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
