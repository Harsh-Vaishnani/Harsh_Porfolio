import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CursorLight from '@/components/cursor-light'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Harsh Vaishnani - MERN Stack & Shopify Developer',
  description: 'Senior MERN Stack and Shopify Developer | Building scalable web applications and e-commerce solutions',
  openGraph: {
    title: 'Harsh Vaishnani - MERN Stack & Shopify Developer',
    description: 'Senior MERN Stack and Shopify Developer | Building scalable web applications and e-commerce solutions',
    type: 'website',
  },
  icons: {
    icon: '/HV-Logo-1.png',
    apple: '/HV-Logo-1.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased bg-black text-white`}>
        <CursorLight />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
