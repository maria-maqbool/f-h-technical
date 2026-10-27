"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"

export function ContactMap() {
  const mapQuery =
    "Saif Al-Rumhib Building, Deira, Dubai, United Arab Emirates"

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery
  )}`

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section className="relative h-[400px] lg:h-[500px] bg-background overflow-hidden">
      {/* Interactive Google Map */}
      <iframe
        title="FH Technical Services Dubai Office Location"
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
      {/* <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
          alt="Dubai Skyline"
          fill
          className="object-cover grayscale-50 opacity-60"
        /> */}


      {/* Office Location Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-auto z-10 max-w-sm"
      >
        <div className="bg-background/95 backdrop-blur-sm border border-border p-5 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#C5A059]/15 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#C5A059]" />
            </div>

            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                Regional Headquarters
              </p>

              <h3 className="font-serif text-lg text-foreground">
                FH Technical Services
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                Saif Al-Rumhib Building, Deira,
                Dubai, United Arab Emirates
              </p>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#C5A059] hover:underline underline-offset-4"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
