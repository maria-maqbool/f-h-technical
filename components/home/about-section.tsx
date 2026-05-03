"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export function AboutSection() {
  return (
    <section className="relative min-h-[70vh] px-6 bg-surface-elevated/60 py-8">
      <div className="mx-auto max-w-7xl mx-auto py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.2em] text-primary mb-4">
              WHO WE ARE
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight mb-4">
              Technical Excellence in
              <br/>
              every Detail.
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-10">
             At FH TECHNICAL SERVICES CO. L.L.C, we don’t just maintain spaces—we transform them. Based in the heart of Dubai, we are a premier, fully licensed technical and interior design firm dedicated to delivering high-precision craftsmanship and reliable engineering solutions.
             <br />
             <br />
             Whether it’s a high-end villa renovation, bespoke custom carpentry, or critical HVAC and electrical maintenance, we bring a "client-first" philosophy to every project. We understand the unique demands of the Dubai climate and architectural landscape, providing turnkey services that blend aesthetic beauty with technical durability.
            </p>
            <h1 className="text-lg font-normal text-tertiary leading-tight mb-4">
              Why Trust Us?
            </h1>
            <ul className="list-disc list-inside">
              <li className="text-muted-foreground text-xs leading-relaxed max-w-md mb-4">
                <span className="text-xs font-semibold text-tertiary leading-tight mb-4">Fully Compliant & Regulated:</span> <div className="pl-4">
                  We are a professionally registered company with the Federal Tax Authority (FTA). Our Tax Registration Number (TRN) ensures full transparency and compliance for both our residential and commercial partners.
                </div>
              </li>
              {/* <li className="text-muted-foreground text-xs leading-relaxed max-w-md mb-4">
                <span className="text-xs font-semibold text-tertiary leading-tight mb-4">End-to-End Solutions: </span>
                 Forget managing multiple contractors. From demolition to final epoxy painting and annual maintenance, we handle it all under one roof.
              </li> */}
            </ul>
  
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.15em]"
          >
            <Link href="/about">KNOW MORE</Link>
          </Button>
            
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/4] overflow-hidden">
              <Image
                src="./about.png"
                alt="Luxury interior design with modern furniture"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-background/80 dark:bg-background/70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
