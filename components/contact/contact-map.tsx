"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function ContactMap() {
  return (
    <section className="relative h-[400px] lg:h-[500px] bg-background">
      <Image
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
        alt="Dubai Skyline"
        fill
        className="object-cover grayscale-50 opacity-60"
      />
      
      {/* Map Marker */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-background px-4 py-3 flex items-center gap-2 shadow-lg">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-foreground text-sm font-medium">FHHQ</span>
        </div>
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-background mx-auto" />
      </motion.div>
    </section>
  )
}