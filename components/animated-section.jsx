'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function SectionTitle({ children, className = '' }) {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.h2 variants={titleVariants} className={className}>
      {children}
    </motion.h2>
  )
}

export function SectionContent({ children, className = '' }) {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div variants={contentVariants} className={className}>
      {children}
    </motion.div>
  )
}
