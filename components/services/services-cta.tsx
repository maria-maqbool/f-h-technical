"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export function ServicesCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-background to-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
        >
          Elevate your living<br />standards.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-muted-foreground text-sm mb-10 max-w-md mx-auto"
        >
          Discuss your technical or renovation requirements with our team of specialist engineers today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            GET A QUOTE
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs tracking-wider border border-foreground/30 text-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            OUR PORTFOLIO
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
