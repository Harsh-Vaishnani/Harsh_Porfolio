'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'GSAP Animations', 'Framer Motion', 'AOS Animations'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Performance Optimization', 'API Integration'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Database & Storage',
      skills: ['MongoDB', 'MongoDB Atlas'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'E-commerce & Tools',
      skills: ['Shopify', 'Shopify Liquid', 'Redux Toolkit', 'React Query', 'Git', 'GitHub', 'Postman', 'Figma'],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Skills & Technologies
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-8 hover:border-blue-500/50 transition-all h-full hover:bg-white/10">
                  <div className={`flex items-center gap-3 mb-6`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 border border-opacity-50 border-current text-sm font-medium transition-all hover:shadow-lg hover:shadow-current/50`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Levels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <h3 className="text-3xl font-bold mb-8">Proficiency Overview</h3>

            <div className="space-y-6">
              {[
                { label: 'Frontend Development', level: 95 },
                { label: 'Full-Stack MERN', level: 90 },
                { label: 'Shopify Development', level: 88 },
                { label: 'UI/UX Implementation', level: 92 },
                { label: 'Performance Optimization', level: 85 },
                { label: 'REST API Development', level: 90 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{item.label}</span>
                    <span className="text-blue-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
