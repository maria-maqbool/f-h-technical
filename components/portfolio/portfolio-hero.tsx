"use client"

import { motion } from "framer-motion"

const categories = [
  { id: "all", label: "ALL PROJECTS", active: true },
  { id: "residential", label: "RESIDENTIAL" },
  { id: "commercial", label: "COMMERCIAL" },
  { id: "renovation", label: "RENOVATION" },
  { id: "technical", label: "TECHNICAL SPECIFICATIONS" },
]

export function PortfolioHero() {
  return (
    <section className="bg-background pt-32 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4">
            Curated Excellence
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Architectural<br />Portfolio
          </h1>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-12">
            A meticulous selection of our engineering and interior technical services
            across the UAE. Each project represents a commitment to structural integrity
            and aesthetic precision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-6 border-b border-border pb-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`text-xs tracking-wide pb-2 transition-colors ${
                category.active
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}