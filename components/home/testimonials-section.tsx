'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "FH Technical Services delivered more than just a renovation; they delivered a masterpiece of engineering. Their attention to detail is unparalleled.",
    author: 'ALEXANDER VANCE',
    title: 'PRIVATE ESTATE OWNER',
  },
  {
    quote: "The integration of technical precision with luxury design is where FH truly shines. They transformed our corporate HQ into a beacon of modern luxury.",
    author: 'ELENA ROSETTI',
    title: 'CEO, AURELIUS GROUP',
  },
  {
    quote: "Professional, discreet, and exceptionally fast. They understand the value of time and the requirement for absolute perfection.",
    author: 'JULIAN THORNE',
    title: 'INVESTMENT PRINCIPAL',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
            Client Voices
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6">
                <svg
                  className="w-8 h-8 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 pr-8">
                {`"${testimonial.quote}"`}
              </p>

              <div className="border-t border-border pt-4">
                <p className="text-xs tracking-[0.1em] text-primary font-medium">
                  {testimonial.author}
                </p>
                <p className="text-xs tracking-[0.05em] text-muted-foreground mt-1">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
