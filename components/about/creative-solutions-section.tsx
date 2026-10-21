'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function CreativeSolutionsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Left side - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="relative w-full h-full">
              {/* Background image - tilted */}
              <div className="absolute inset-0 opacity-80">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                  alt="Modern kitchen design"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay image - tilted differently */}
              <div className="absolute top-16 right-0 w-3/4 h-3/4 transform -rotate-3">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
                  alt="Kitchen interior detail"
                  fill
                  className="object-cover shadow-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 border-2 border-accent/20 rounded-lg"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-accent/20 rounded-lg"></div>
            </div>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Creative Solutions by Professional Designers
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Your kitchen is an expression of who you are, and its design should match your lifestyle. Whether you have traditional tastes or desire a modern feel, we can design your dream kitchen to suit any purpose.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-3 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-colors duration-300">
              CONTINUE READING
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-16 h-16 rounded-lg border-2 border-accent/30 flex items-center justify-center bg-accent/5">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    title: 'Reasonable Prices',
    description:
      'We produce furniture to fulfill needs of all people and offer it at affordable and fair prices',
    icon: (props: any) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
        <path d="M12 8v8M9 12h6" />
      </svg>
    ),
  },
  {
    title: 'Exclusive Design',
    description:
      'Mixture of imagination, experience and professionalism is the secret of our design!',
    icon: (props: any) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        <path d="M12 6v6M9 9h6" />
      </svg>
    ),
  },
  {
    title: 'Professional Team',
    description:
      'We are proud of our amicable, professional and always developing team!',
    icon: (props: any) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]