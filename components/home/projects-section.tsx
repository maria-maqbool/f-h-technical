'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Residential Architecture - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden aspect-[4/3] lg:row-span-2"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif text-2xl text-foreground mb-2">Residential Architecture</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Seamlessly integrating smart technology with timeless aesthetic excellence.
              </p>
            </div>
          </motion.div>

          {/* Commercial Spaces - Small card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden aspect-video"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl text-foreground">Commercial Spaces</h3>
            </div>
          </motion.div>

          {/* Certified Precision - Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 flex flex-col justify-center"
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">Certified Precision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Exceeding international standards for safety and technical innovation in luxury builds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
