'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageTransition from '@/components/page-transition'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative pt-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto relative z-10 gap-12">
          {/* Left: Content */}
          <motion.div style={{ opacity, y }} className="md:basis-[70%] basis-full text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Harsh Vaishnani
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                MERN Stack & Shopify Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed"
            >
              Building scalable, performance-optimized web applications and e-commerce solutions. 
              Passionate about clean code, modern technologies, and delivering exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-white/5 transition-all"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Profile Picture - 3D Professional Design */}
          <div className="md:basis-[30%] basis-full flex items-center justify-center relative">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 3D Layered Frame with subtle animation */}
              <div className="absolute inset-0 w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                {/* Back layers for 3D depth */}
                <motion.div 
                  className="absolute inset-0 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-sm" 
                  style={{ transform: 'translateZ(-40px) scale(1.1)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-[60%_40%_40%_60%/40%_60%_40%_60%] bg-gradient-to-tr from-purple-600/15 to-blue-600/15 blur-sm" 
                  style={{ transform: 'translateZ(-30px) scale(1.08)' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-[45%_55%_55%_45%/55%_45%_55%_45%] bg-gradient-to-bl from-blue-500/10 to-purple-500/10" 
                  style={{ transform: 'translateZ(-20px) scale(1.05)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Main Image Container with Unique Shape */}
              <motion.div 
                className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]" 
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Outer Glow Ring with pulse */}
                <motion.div 
                  className="absolute inset-0 rounded-[50%_50%_55%_45%/55%_45%_50%_50%] bg-gradient-to-r from-blue-500 to-purple-500 blur-xl"
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Middle Frame */}
                <motion.div 
                  className="absolute inset-2 rounded-[50%_50%_55%_45%/55%_45%_50%_50%] bg-gradient-to-br from-blue-500/40 to-purple-500/40 backdrop-blur-sm" 
                  style={{ transform: 'translateZ(10px)' }}
                />
                
                {/* Inner Frame with Border */}
                <motion.div 
                  className="absolute inset-4 rounded-[50%_50%_55%_45%/55%_45%_50%_50%] border-2 border-white/20 bg-black/20" 
                  style={{ transform: 'translateZ(20px)' }}
                />
                
                {/* Image with Unique Organic Shape */}
                <div 
                  className="absolute inset-6 overflow-hidden rounded-[50%_50%_55%_45%/55%_45%_50%_50%]"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <img
                    src="/harsh-image.png"
                    alt="Professional Hero"
                    className="w-full h-full object-cover"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                </div>

                {/* Front Accent Lines with shimmer effect */}
                <motion.div 
                  className="absolute inset-0 rounded-[50%_50%_55%_45%/55%_45%_50%_50%] border border-white/10" 
                  style={{ transform: 'translateZ(40px)' }}
                  animate={{ 
                    borderColor: ["rgba(255,255,255,0.1)", "rgba(59,130,246,0.3)", "rgba(255,255,255,0.1)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Professional Orbital Particles */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 360) / 12;
                  const radius = 160;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        background: i % 3 === 0 
                          ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                          : i % 3 === 1 
                          ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                          : 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                      }}
                      animate={{
                        x: [x, x * 1.2, x],
                        y: [y, y * 1.2, y],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3 + (i * 0.2),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1,
                      }}
                    />
                  );
                })}

                {/* Floating Tech Icons/Particles */}
                {[
                  { icon: '⚡', delay: 0, duration: 6 },
                  { icon: '💻', delay: 1, duration: 7 },
                  { icon: '🚀', delay: 2, duration: 8 },
                  { icon: '⭐', delay: 3, duration: 6.5 },
                  { icon: '✨', delay: 4, duration: 7.5 },
                ].map((item, i) => (
                  <motion.div
                    key={`tech-${i}`}
                    className="absolute text-2xl opacity-0"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 70}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                      opacity: [0, 0.6, 0],
                      scale: [0.5, 1, 0.5],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: item.duration,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated Backgrounds with professional movements */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl" 
                style={{ transform: 'translateZ(-60px)' }}
                animate={{
                  x: [0, 30, -30, 0],
                  y: [0, 40, -20, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" 
                style={{ transform: 'translateZ(-50px)' }}
                animate={{
                  x: [0, -40, 40, 0],
                  y: [0, -30, 30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating Ring Effect */}
              <motion.div
                className="absolute inset-0 w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-blue-500/20"
                style={{ transform: 'translateZ(50px)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Projects Completed', value: '15+' },
            { label: 'Technologies', value: '25+' },
            { label: 'Years Experience', value: '2+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all bg-white/5"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}


// Dummy