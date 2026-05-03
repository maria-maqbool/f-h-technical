'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Defining your vision through meticulous requirement analysis and spatial assessment.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Bespoke technical blueprints that balance opulence with flawless structural integrity.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'White-glove implementation handled by our elite technical engineering teams.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Final unveiling and technical handover of your transformed luxury environment.',
  },
]

export function MethodologySection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.2em] text-primary mb-4">THE METHODOLOGY</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight">
            Precision-engineered delivery from
            <br />
            concept to completion.
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-4">
                <span className="text-sm text-primary font-light">{step.number}</span>
                <div className="w-12 h-px bg-border mt-4 group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-tertiary hover:text-primary">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
