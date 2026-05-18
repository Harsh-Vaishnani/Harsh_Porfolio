'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: 'Lantern Digital',
      position: 'Senior MERN Stack & Shopify Developer',
      duration: 'January 2025 – Present',
      achievements: [
        'Leading full-stack MERN development with focus on scalability and performance',
        'Designing and developing Shopify e-commerce solutions with custom theme customization',
        'Building RESTful APIs and implementing performance optimization strategies',
        'Mentoring junior developers and establishing coding best practices',
      ],
    },
    {
      company: 'The Shark Media',
      position: 'MERN Stack Developer',
      duration: 'March 2023 – January 2025',
      achievements: [
        'Developed responsive web applications using React.js, Tailwind CSS, and Bootstrap',
        'Collaborated with UI/UX designers to convert designs into functional components',
        'Ensured cross-browser compatibility and mobile responsiveness',
        'Implemented backend integration using Node.js and Express.js',
        'Contributed to performance optimization and debugging of production applications',
      ],
    },
  ]

  const education = [
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'Saurabh Science College',
      year: 'Completed',
    },
    {
      degree: 'H.S.C (Higher Secondary Certificate)',
      institution: 'Alpha High School',
      year: 'Completed',
    },
    {
      degree: 'S.S.C (Secondary School Certificate)',
      institution: 'Alpha High School',
      year: 'Completed',
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Experience
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="pl-6 sm:pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-all">
                    <div className="absolute left-0 top-0 -translate-x-[11px] w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-8 hover:border-blue-500/50 transition-all">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.position}</h3>
                        <span className="text-sm text-blue-400 font-semibold sm:whitespace-nowrap">{exp.duration}</span>
                      </div>
                      <p className="text-base sm:text-lg text-gray-300 mb-4">{exp.company}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-400"
                          >
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </h2>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-blue-400 mt-2">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 border border-white/10 rounded-lg p-8"
          >
            {[
              { label: 'Years in Development', value: '4+' },
              { label: 'Projects Delivered', value: '19+' },
              { label: 'Technologies Mastered', value: '25+' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
