'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
            Ready to Elevate Your Space?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            We are currently accepting new high-tier commissions. Connect with our principal
            consultants to begin your journey.
          </p>

          {/* Email Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="w-full sm:flex-1 bg-transparent border-b border-border px-4 py-3 text-sm tracking-[0.1em] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 py-3 text-xs tracking-[0.15em] whitespace-nowrap"
            >
              
              <Link href="/contact">START A CONVERSATION</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
