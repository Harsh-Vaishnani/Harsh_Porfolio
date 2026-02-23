'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  const socials = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/harsh-vaishnani' },
    { label: 'GitHub', url: 'https://github.com/Harsh-Vaishnani' },
    { label: 'Email', url: 'mailto:vaishnaniharsh8@gmail.com' },
  ]

  return (
    <footer className="bg-gradient-to-t from-black to-gray-950 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/HV-Logo-1.png"
                alt="HV Logo"
                className="h-15 w-auto mix-blend-lighten"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </Link>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Building scalable and performant web applications that drive business value.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold">Email:</span> vaishnaniharsh8@gmail.com
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold">Phone:</span> +91 8849862777
              </p>
            </div>
            <div className="flex gap-3">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm"
          >
            <p>© {currentYear} Harsh Vaishnani. All rights reserved.</p>
            <p className="mt-2">
              Designed & Built with React, Next.js, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
