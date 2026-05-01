"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Renovation() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground"
          >
            Renovation & Construction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs tracking-[0.2em] text-muted-foreground"
          >
            02 | STRUCTURE & SPACE
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Villa Renovation - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative row-span-2 group overflow-hidden"
          >
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="Villa renovation project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                  Villa Renovation
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-sm">
                  Comprehensive structural and aesthetic overhauls, transforming legacy properties into modern masterpieces.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  START YOUR PROJECT
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Carpentry Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8"
            >
              <h3 className="text-xl font-medium text-foreground mb-3">
                Carpentry
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bespoke joinery, wardrobes, and structural wood solutions for luxury interiors.
              </p>
            </motion.div>

            {/* Kitchens Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 flex items-start gap-6"
            >
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern kitchen design"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  Kitchens
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High-end kitchen remodeling focusing on ergonomics, flow, and premium appliance integration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
