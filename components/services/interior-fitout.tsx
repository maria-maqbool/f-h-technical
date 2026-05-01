"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Wallpaper',
    description: 'Expert installation of high-end wall coverings, from luxury silk to technical acoustic papers.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Painting',
    description: 'Pristine finishes using premium Jotun and Benjamin Moore palettes for residential and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Media Walls',
    description: 'Custom-engineered feature walls integrating smart home technology and minimalist cabinetry.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
  },
]

export function InteriorFitout() {
  return (
    <section className="py-20 bg-background lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white"
          >
            Interior & Fit-Out
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs tracking-[0.2em] text-neutral-500"
          >
            01 | ARTISTRY & FINISH
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-black mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-xs tracking-wider text-primary hover:gap-3 transition-all duration-300"
              >
                LEARN MORE <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
