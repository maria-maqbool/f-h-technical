"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    alt: "Modern living room with panoramic city view",
    category: "residential",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    alt: "Minimalist corridor with LED lighting",
    category: "commercial",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=700&fit=crop",
    alt: "Luxury bathroom with freestanding tub",
    category: "residential",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    alt: "Dubai skyline view from balcony",
    category: "residential",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=700&fit=crop",
    alt: "Modern architectural structure",
    category: "commercial",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    alt: "Elegant restaurant interior",
    category: "commercial",
  },
  {
    id: 7,
    src: "./img12.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 8,
    src: "./img13.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 9,
    src: "./img14.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 10,
    src: "./img15.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 11,
    src: "./img16.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 12,
    src: "./img17.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 13,
    src: "./img18.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 14,
    src: "./img19.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 15,
    src: "./img20.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 16,
    src: "./img21.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 17,
    src: "./img22.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
   {
    id: 18,
    src: "./img1.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 19,
    src: "./img2.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 20,
    src: "./img3.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 21,
    src: "./img4.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 22,
    src: "./img5.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 23,
    src: "./img6.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 24,
    src: "./img7.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 25,
    src: "./img8.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 26,
    src: "./img9.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 27,
    src: "./img10.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 28,
    src: "./img11.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 29,
    src: "./img24.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 30,
    src: "./img25.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 31,
    src: "./img26.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 32,
    src: "./img27.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
]

export function PortfolioGrid() {
  return (
    <section className="bg-background py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {projects.filter((_, i) => i % 2 === 0).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className={`relative ${index === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover grayscale-50 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - offset for masonry effect */}
          <div className="flex flex-col gap-6 md:mt-24">
            {projects.filter((_, i) => i % 2 === 1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
                className="group relative overflow-hidden"
              >
                <div className={`relative ${index === 0 ? "aspect-[4/3]" : index === 1 ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover grayscale-50 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}