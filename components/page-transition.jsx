'use client'

import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SmoothScroll() {
  return (
    <style>{`
      html {
        scroll-behavior: smooth;
      }

      * {
        scroll-margin-top: 100px;
      }
    `}</style>
  )
}
