"use client"

import { motion } from 'framer-motion'
import { Zap, Wind, FileCheck, Droplets } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Electrical',
    description: 'Smart lighting systems, panel upgrades, and preventative electrical auditing for safety and efficiency.',
    link: 'AVAILABLE 24/7',
  },
  {
    icon: Wind,
    title: 'HVAC/AC',
    description: 'Advanced cooling solutions and duct cleaning tailored for the unique climate of the UAE.',
    link: 'TECHNICAL EXCELLENCE',
  },
  {
    icon: FileCheck,
    title: 'AMC Contracts',
    description: 'Annual Maintenance Contracts offering peace of mind through scheduled inspections and priority response.',
    link: 'ASSURED SERVICE',
  },
  {
    icon: Droplets,
    title: 'Pool Care',
    description: 'Water chemistry management, filtration maintenance, and structural pool repairs.',
    link: 'PREMIUM MAINTENANCE',
  },
]

export function TechnicalMaintenance() {
  return (
    <section className="bg-background py-20 lg:py-28 border-t border-border">
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
            Technical & Maintenance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs tracking-[0.2em] text-primary"
          >
            03 | PERFORMANCE & RELIABILITY
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 group hover:bg-card/80 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary mb-6">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-xs tracking-wider text-muted-foreground/60">
                {service.link}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
