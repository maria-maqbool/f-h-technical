"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] bg-background pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-6">
              EXPERTISE & PRECISION
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6 text-balance">
              Technical Excellence in every Detail.
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              From bespoke interior fit-outs to comprehensive villa maintenance, we 
              provide Dubai&apos;s most discerning clients with engineering solutions that 
              balance aesthetics and performance.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Luxury interior design with modern furniture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
