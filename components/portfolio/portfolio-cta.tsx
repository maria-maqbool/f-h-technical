"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PortfolioCta() {
  return (
    <section className="bg-[#1a1a1a] py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
            Ready to begin your next<br />technical masterpiece?
          </h2>
          <Link
            href="#contact"
            className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-wide hover:bg-primary hover:text-background transition-colors duration-300"
          >
            CONSULT OUR ENGINEERS
          </Link>
        </motion.div>
      </div>
    </section>
  )
}