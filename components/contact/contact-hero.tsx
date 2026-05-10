"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="bg-background pt-16 pb-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6">
              Connect with Excellence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Architecting Precision in Every Technical Detail.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-50"
          >
            <div className="border-l-2 border-primary pl-6">
              <p className="text-tertiary text-sm leading-relaxed">
                From the skyline of Dubai to the cultural heart of Abu Dhabi, we provide 
                engineering solutions that stand the test of time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}