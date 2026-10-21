"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-background mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 opacity-80 w-3/4 h-3/4">
                <Image
                  src="./aboutmain.jpg"
                  alt="Luxury interior design with modern furniture"
                  fill
                  className="object-cover "
                  priority
                />
              </div>
              <div className="absolute top-16 left-16 w-3/4 h-3/4">
                <Image
                  src="./about-hero.jpg"
                  alt="Luxury interior design with modern furniture"
                  fill
                  className="object-cover shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 border-2 border-accent/20 rounded-lg"></div>
              <div className="absolute bottom-8 right-12 w-20 h-20 border-2 border-accent/20 rounded-lg"></div>
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <p className="text-xs tracking-[0.3em] text-muted-foreground mb-6"> */}
            <p className="mb-4 text-xs tracking-[0.2em] text-primary uppercase">
              Excellence in Engineering
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6 text-balance">
              The Art of Precision Engineering
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Defining the pinnacle of technical excellence through meticulous
              craftsmanship and uncompromising luxury standards.
            </p>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase"
            >
              Continue Reading
            </Link>
          </motion.div>
        </div>
        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 mt-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 flex space-between p-2"
            >
              {/* <div className="w-10 h-10 rounded-lg border-2 border-accent/30 flex items-center justify-center bg-accent/5"> */}
                <feature.icon className="h-18 w-auto text-accent mx-4" />
              {/* </div> */}
              <div className="pr-8">
              <h3 className="text-sm font-normal mb-3 text-tertiary hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "Reasonable Prices",
    description:
      "We produce furniture to fulfill needs of all people and offer it at affordable and fair prices",
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
    title: "Exclusive Design",
    description:
      "Mixture of imagination, experience and professionalism is the secret of our design!",
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
    title: "Professional Team",
    description:
      "We are proud of our amicable, professional and always developing team!",
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
];
