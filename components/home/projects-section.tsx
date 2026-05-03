"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from '@/components/ui/button'
import Link from "next/link";


export function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <div className=" text-center px-6 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.2em] text-primary mb-4"
          >
            OUR PROJECTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight"
          >
            Explore our Latest Completed Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm leading-relaxed  mb-10"
          >
            Explore finished Projects from some of our customers and see how
            they created their dream spaces while getting ideas for your own.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Residential Architecture - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden aspect-[4/4] lg:row-span-2"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Residential Architecture
              </h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Seamlessly integrating smart technology with timeless aesthetic
                excellence.
              </p>
            </div>
          </motion.div>

          {/* Commercial Spaces - Small card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden aspect-video"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl text-foreground">
                Commercial Spaces
              </h3>
            </div>
          </motion.div>

          {/* Certified Precision - Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 flex flex-col justify-center"
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">
              Certified Precision
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Exceeding international standards for safety and technical
              innovation in luxury builds.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 my-8"
        >
          {/* <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.15em]"
          >
            <Link href="/portfolio">GET FREE CONSULTATION</Link>
          </Button> */}
          <Button
            asChild
            variant="outline"
            className="border-solid-[1px] border-primary hover:text-tertiary text-primary bg-foreground hover:bg-foreground/10 rounded-none px-8 py-6 text-xs tracking-[0.15em]"
          >
            <Link href="/portfolio">VIEW PORTFOLIO</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
