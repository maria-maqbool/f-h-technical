"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Play, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const stats = [
  {
    number: "25+",
    label: "Interior Design",
  },
  {
    number: "93+",
    label: "Architecture",
  },
  {
    number: "48+",
    label: "Construction",
  },
  {
    number: "68+",
    label: "Projects Done",
  },
];

const teamMembers = [
  {
    name: "Ali Raza",
    role: "Site Incharge",
    image:
      "./aliRaza.jpeg",
  },
  {
    name: "Kashif Shehzad",
    role: "Site supervisor",
    image:
      "./kashif.jpeg",
  },
  {
    name: "Umar Gill",
    role: "Site coordinator",
    image:
      "./umar.jpeg",
  },
  {
    name: "Ali hassan",
    role: "Team leader",
    image:
      "./aliHassan.jpeg",
  },
  {
    name: "Kaleem",
    role: "Site execution team",
    image:
      "./kaleem.jpeg",
  },
  {
    name: "Anwar ul haq ",
    role: "Team leader",
    image:
      "./anwar.jpeg",
  },
  {
    name: "Azhar",
    role: "Elecrical & Machenical Engineer",
    image:
      "./azhar.jpeg",
  },
  {
    name: "Ghulam Ali",
    role: "Site team",
    image:
      "./ghulam.jpeg",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function LuxuryInteriorSection() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO STATS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            // src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1920&auto=format&fit=crop"
            src="./about-milestone.jpg"
            alt="Kitchen"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80 dark:bg-background/65" />
        </div>

        <div className="relative mx-auto grid min-h-[430px] max-w-7xl grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl self-center"
          >
            <span className="block font-medium uppercase block text-xs tracking-[0.3em] text-primary mb-6">
              Quality Of Work
            </span>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight font-semibold mb-4 text-balance">
              Milestones that we proudly accomplished & lead us forward.
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-x-14 gap-y-10 self-center lg:justify-self-end"
          >
            {stats.map((item) => (
              <div key={item.label}>
                <h2 className="text-4xl font-bold tracking-tight text-gold">
                  {item.number}
                </h2>

                <p className=" text-sm font-medium text-white/80">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MATERIAL SECTION */}
      <section className="bg-[#f7f5f1] py-28 dark:bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="overflow-hidden">
              <AspectRatio.Root ratio={18 / 10}>
                <Image
                  src="./material1-section.jpg"
                  alt="Drawer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/10 to-transparent" />
              </AspectRatio.Root>
            </div>

            <div className="mt-10 max-w-md">
              <span className="block font-medium uppercase block text-xs tracking-[0.3em] text-primary mb-6">
                Best Selling Finishes
              </span>

              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight font-semibold mb-4 text-balance">
                We use materials only from personally verified suppliers
              </h2>

              <div className="mt-8 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-border bg-card text-xs font-bold tracking-wide">
                <span className="text-[6px]">100%</span>
                <span className="text-primary">HIGH</span>
                <span className="text-[6px]">QUALITY</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
            }}
            className="self-center"
          >
            <div className="overflow-hidden">
              <AspectRatio.Root ratio={18 / 16}>
                <Image
                  src="./material2-section.jpg"
                  alt="Luxury kitchen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/10 to-transparent" />
              </AspectRatio.Root>
            </div>

            <p className="mt-7 max-w-xl border-b border-gold/40 pb-7 text-base leading-7 text-foreground">
              Gloss, matte wood texture, 200+ colors to choose from.
              Environmentally friendly materials, all certificates are
              available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Meet Our Team
            </span>

            <h2 className="font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
              Creative Minds Always Think Something.
            </h2>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <div className="group relative overflow-hidden">
                  {/* Image */}
                  <AspectRatio.Root
                    ratio={3 / 4}
                    className="relative overflow-hidden bg-muted"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

                    {/* Social Icons */}
                    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 translate-y-10 gap-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {[
                        {
                          icon: <Facebook size={18} />,
                          href: "#",
                        },
                        {
                          icon: <Instagram size={18} />,
                          href: "#",
                        },
                        {
                          icon: <Linkedin size={18} />,
                          href: "#",
                        },
                      ].map((item, i) => (
                        <motion.a
                          key={i}
                          href={item.href}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg"
                        >
                          {item.icon}
                        </motion.a>
                      ))}
                    </div>
                  </AspectRatio.Root>

                  {/* Content */}
                  <div className="pt-6 text-center">
                    <h3 className="text-lg hover:text-primary font-semibold">{member.name}</h3>

                    <p className="mt-1 text-xs font-normal mb-3 text-tertiary">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="./video1-section.jpg"
            alt="Luxury Interior"
            fill
            className="bg-cover bg-center object-cover bg-no-repeat"
          />

          <div className="absolute inset-0 bg-[#111827]/75" />
        </div>

        <div className="relative mx-auto grid min-h-[520px] max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <span className="block font-medium uppercase block text-xs tracking-[0.3em] text-primary mb-6">
              Promo Video
            </span>

            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight font-semibold mb-4 text-balance">
              Ensuring a safe experience from design to installation
            </h2>

            <p className="text-sm text-secondary-foreground tracking-wide mt-7 ">
              We&apos;re following all protocols to ensure your safety and
              vaccination drives are underway to ensure our employees are ready
              to meet you safely.
            </p>

            <button className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-4xl px-6 py-3 text-xs tracking-[0.15em]">
              MORE VIDEOS
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
            }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <AspectRatio.Root ratio={16 / 10}>
                <Image
                  src="./video2-section.jpg"
                  alt="Kitchen video"
                  fill
                  className="object-cover"
                />
              </AspectRatio.Root>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md"
                >
                  <Play className="ml-1 h-8 w-8 text-white" fill="white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
