'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutMainSection() {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center object-cover bg-no-repeat"
        style={{
          backgroundImage: `url('./about-main.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/80 dark:bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4"
        >
          About Us
        </motion.h1> 
      </div>
    </section>
  )
}
