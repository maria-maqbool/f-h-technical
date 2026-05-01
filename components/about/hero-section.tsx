'use client'
import { motion } from 'framer-motion'


export function AboutHeroSection() {
  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center bg-gradient-to-b from-background via-background/80 to-background overflow-hidden">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="mb-4 text-xs tracking-[0.2em] text-primary uppercase">
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-primary mb-6"
        >
          Excellence in Engineering
          </motion.p>
        </div>
        {/* <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"> */}
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8"
        >
          <span className="text-balance">The Art of Precision Engineering</span>
          </motion.h1>
        {/* </h1> */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-balance">
          Defining the pinnacle of technical excellence through meticulous craftsmanship and uncompromising luxury standards.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-0.5 bg-primary/40" />
          <div className="h-2 w-0.5 bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}