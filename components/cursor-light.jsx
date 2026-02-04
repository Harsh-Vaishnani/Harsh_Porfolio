'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor light */}
      <motion.div
        className="pointer-events-none fixed w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl mix-blend-screen"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 60,
          mass: 1,
        }}
        style={{
          opacity: isVisible ? 0.6 : 0,
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="pointer-events-none fixed w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl mix-blend-screen"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 40,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 0.8 : 0,
        }}
      />
    </>
  )
}
