'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Project Management System (PMS)',
      year: '2025',
      description: 'An end-to-end project management solution with real-time collaboration, task tracking, and team management.',
      tech: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Figma'],
      live: 'https://syncup.lantern-digital.com',
      features: ['User Authentication', 'Role-Based Access', 'Task Management', 'Status Tracking', 'RESTful APIs'],
    },
    {
      id: 2,
      title: 'Label Niti Bothra - Shopify Store',
      year: '2025',
      description: 'A premium e-commerce platform for fashion retail with custom Shopify theme development and optimization.',
      tech: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      live: 'https://labelnitibothra.com',
      features: ['Theme Customization', 'PDP Optimization', 'Collection Layouts', 'Mobile-First Design'],
    },
    {
      id: 3,
      title: 'Kabcopro - Shopify Store',
      year: '2025',
      description: 'Fully functional e-commerce website with responsive design, optimized performance, and smooth checkout flow.',
      tech: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript'],
      live: 'https://kabcopro.com',
      features: ['Product Management', 'Cart & Checkout', 'Custom Sections', 'Performance Optimized'],
    },

    {
      id: 5,
      title: 'Finance & Tax Website',
      year: '2024',
      description: 'Professional responsive website with advanced animations and interactive components for financial services.',
      tech: ['HTML5', 'CSS3', 'jQuery', 'Bootstrap', 'AOS Library'],
      live: 'https://avalosluna-website.vercel.app',
      features: ['Animations', 'Responsive Layout', 'Interactive Elements', 'SEO Optimized'],
    },
    {
      id: 6,
      title: 'HerbCraft - Dynamic Website',
      year: '2024',
      description: '2nd place competition winner - A fully responsive website showcasing modern web development techniques.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'Media Queries', 'JavaScript'],
      live: 'https://my-website-herbcraft.vercel.app',
      features: ['Responsive Design', 'Media Queries', 'Modern Layout', 'Competition Winner'],
    },
        {
      id: 4,
      title: 'BOOKshelf - React Web App',
      year: '2023',
      description: 'A book discovery platform with cart and wishlist functionality, modern UI, and smooth interactions.',
      tech: ['React.js', 'JavaScript ES6+', 'React Router', 'LocalStorage', 'Tailwind CSS'],
      live: 'https://bookshelf-website-three.vercel.app',
      features: ['Add to Cart', 'Wishlist', 'Product Filtering', 'Responsive Design'],
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
              Featured Projects
            </h1>
            <p className="text-gray-400 text-lg">Showcasing my best work across MERN Stack and Shopify e-commerce solutions</p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <Link href={project.live} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-lg p-8 hover:border-blue-500/50 transition-all"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-blue-400 font-semibold">{project.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">KEY FEATURES</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">TECHNOLOGIES</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/20 hover:border-blue-400 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-gray-400 mb-6 text-lg">Let's discuss how I can help bring your next project to life</p>
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
