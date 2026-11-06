"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="bg-background py-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Elevate Your Infrastructure?
          </h2>
          <p className="text-tertiary text-sm max-w-xl mx-auto mb-10">
            Our team of certified engineers and technical specialists is ready to provide the 
            precision your high-end project deserves.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors">
              <a
               href="tel:+971565302726"
                aria-label="Call FH Technical Services"
                >
                Schedule Call
              </a>
            </button>
            <Link href="/portfolio" className="border border-primary text-primary px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
              {/* Download Portfolio */}
              Our Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}