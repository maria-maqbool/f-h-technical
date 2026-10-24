"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"


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
    src: "./portfolio-images/img12.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 8,
    src: "./portfolio-images/img13.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 9,
    src: "./portfolio-images/img14.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  // {
  //   id: 10,
  //   src: "./portfolio-images/img15.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  {
    id: 10,
    src: "./portfolio-images/img16.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 11,
    src: "./portfolio-images/img17.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 12,
    src: "./portfolio-images/img18.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 13,
    src: "./portfolio-images/img19.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 14,
    src: "./portfolio-images/img20.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 15,
    src: "./portfolio-images/img21.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 16,
    src: "./portfolio-images/img22.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  //  {
  //   id: 18,
  //   src: "./portfolio-images/img1.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  {
    id: 17,
    src: "./portfolio-images/img2.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  // {
  //   id: 20,
  //   src: "./portfolio-images/img3.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 21,
  //   src: "./portfolio-images/img4.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 22,
  //   src: "./portfolio-images/img5.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 23,
  //   src: "./portfolio-images/img6.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 24,
  //   src: "./portfolio-images/img7.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 25,
  //   src: "./portfolio-images/img8.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 26,
  //   src: "./portfolio-images/img9.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 27,
  //   src: "./portfolio-images/img10.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  // {
  //   id: 28,
  //   src: "./portfolio-images/img11.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  {
    id: 18,
    src: "./portfolio-images/img24.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 19,
    src: "./portfolio-images/img25.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 20,
    src: "./portfolio-images/img26.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 21,
    src: "./portfolio-images/img27.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  // {
  //   id: 22,
  //   src: "./portfolio-images/img28.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  {
    id: 23,
    src: "./portfolio-images/img29.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 24,
    src: "./portfolio-images/img30.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 25,
    src: "./portfolio-images/img31.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 26,
    src: "./portfolio-images/img32.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 27,
    src: "./portfolio-images/img33.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 28,
    src: "./portfolio-images/img34.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 29,
    src: "./portfolio-images/img35.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 30,
    src: "./portfolio-images/img36.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 31,
    src: "./portfolio-images/img37.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 32,
    src: "./portfolio-images/img38.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 33,
    src: "./portfolio-images/img39.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 34,
    src: "./portfolio-images/img40.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 35,
    src: "./portfolio-images/img41.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 36,
    src: "./portfolio-images/img42.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 37,
    src: "./portfolio-images/img43.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 38,
    src: "./portfolio-images/img44.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 39,
    src: "./portfolio-images/img45.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 40,
    src: "./portfolio-images/img46.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 41,
    src: "./portfolio-images/img47.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 42,
    src: "./portfolio-images/img48.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 43,
    src: "./portfolio-images/img49.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 44,
    src: "./portfolio-images/img50.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 45,
    src: "./portfolio-images/img51.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 46,
    src: "./portfolio-images/img52.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 47,
    src: "./portfolio-images/img53.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 48,
    src: "./portfolio-images/img54.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 49,
    src: "./portfolio-images/img55.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 50,
    src: "./portfolio-images/img56.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  // {
  //   id: 51,
  //   src: "./portfolio-images/img57.jpeg",
  //   alt: "Elegant Wallpaper Design",
  //   category: "residential",
  // },
  {
    id: 52,
    src: "./portfolio-images/img58.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 53,
    src: "./portfolio-images/img59.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 54,
    src: "./portfolio-images/img60.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 55,
    src: "./portfolio-images/img61.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 56,
    src: "./portfolio-images/img62.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 57,
    src: "./portfolio-images/img63.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 58,
    src: "./portfolio-images/img64.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 59,
    src: "./portfolio-images/img65.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 60,
    src: "./portfolio-images/img66.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 61,
    src: "./portfolio-images/img67.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 62,
    src: "./portfolio-images/img68.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 63,
    src: "./portfolio-images/img69.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 64,
    src: "./portfolio-images/img70.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 65,
    src: "./portfolio-images/img71.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 66,
    src: "./portfolio-images/img72.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 67,
    src: "./portfolio-images/img73.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 68,
    src: "./portfolio-images/img74.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 69,
    src: "./portfolio-images/img75.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 70,
    src: "./portfolio-images/img76.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 71,
    src: "./portfolio-images/img77.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 72,
    src: "./portfolio-images/img78.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 73,
    src: "./portfolio-images/img79.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 74,
    src: "./portfolio-images/img80.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 75,
    src: "./portfolio-images/img81.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 76,
    src: "./portfolio-images/img82.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 77,
    src: "./portfolio-images/img83.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
  {
    id: 78,
    src: "./portfolio-images/img84.jpeg",
    alt: "Elegant Wallpaper Design",
    category: "residential",
  },
]
const IMAGES_PER_LOAD = 10

export function PortfolioGrid() {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD)

  // Display only the images currently allowed
  const visibleProjects = projects.slice(0, visibleCount)

  const leftProjects = visibleProjects.filter((_, i) => i % 2 === 0)
  const rightProjects = visibleProjects.filter((_, i) => i % 2 === 1)

  const hasMoreProjects = visibleCount < projects.length

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + IMAGES_PER_LOAD, projects.length)
    )
  }

  return (
    <section className="bg-background py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden"
              >
                <div
                  className={`relative ${
                    index === 1 ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale-50 hover:grayscale-0 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:mt-24">
            {rightProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale-50 hover:grayscale-0 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="mt-12 flex justify-center align-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-wide hover:bg-primary hover:text-background transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}