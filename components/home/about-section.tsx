"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

const features = [
  "On-time services",
  "24/7 services",
  "Verified professionals",
]

export function AboutSection() {
  return (
    <section className="relative bg-surface-elevated/60 px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
              WHO WE ARE
            </p>

            <h2 className="mb-5 font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Technical Excellence in
              <br className="hidden sm:block" /> every Detail.
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              At FH TECHNICAL SERVICES CO. L.L.C, we don’t just maintain
              spaces—we transform them. Based in the heart of Dubai, we are
              a premier, fully licensed technical and interior design firm
              dedicated to delivering high-precision craftsmanship and
              reliable engineering solutions.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t py-6 sm:grid-cols-3 sm:gap-5 lg:mt-12">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 text-primary sm:size-7"
                    aria-hidden="true"
                  />

                  <span className="text-sm leading-5 text-tertiary">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group min-w-0 overflow-hidden"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about.png"
                alt="Luxury interior design with modern furniture"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                <Link
                  href="/about"
                  className="inline-flex min-h-11 items-center justify-center border border-primary px-5 py-3 text-xs font-medium tracking-wider text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  KNOW MORE
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}




// "use client"

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import { Check } from 'lucide-react'


// export function AboutSection() {
//   return (
//     <section className="relative min-h-[70vh] px-6 bg-surface-elevated/60 py-6">
//       <div className="mx-auto max-w-7xl mx-auto py-16 lg:py-24">
//         <div className="grid lg:grid-cols-2 gap-6 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className='mr-14'
//           >
//             <p className="text-xs tracking-[0.2em] text-primary mb-4">
//               WHO WE ARE
//             </p>
//             <h1 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight mb-4">
//               Technical Excellence in
//               <br/>
//               every Detail.
//             </h1>
//             <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-10">
//              At FH TECHNICAL SERVICES CO. L.L.C, we don’t just maintain spaces—we transform them. Based in the heart of Dubai, we are a premier, fully licensed technical and interior design firm dedicated to delivering high-precision craftsmanship and reliable engineering solutions.
//              {/* <br />
//              <br />
//              Whether it’s a high-end villa renovation, bespoke custom carpentry, or critical HVAC and electrical maintenance, we bring a "client-first" philosophy to every project. We understand the unique demands of the Dubai climate and architectural landscape, providing turnkey services that blend aesthetic beauty with technical durability. */}
//             </p>
//             {/* <h1 className="text-lg font-normal text-tertiary leading-tight mb-4">
//               Why Trust Us?
//             </h1>
//             <ul className="list-disc list-inside">
//               <li className="text-muted-foreground text-xs leading-relaxed max-w-md mb-4">
//                 <span className="text-xs font-semibold text-tertiary leading-tight mb-4">Fully Compliant & Regulated:</span> <div className="pl-4">
//                   We are a professionally registered company with the Federal Tax Authority (FTA). Our Tax Registration Number (TRN) ensures full transparency and compliance for both our residential and commercial partners.
//                 </div>
//               </li>
//               <li className="text-muted-foreground text-xs leading-relaxed max-w-md mb-4">
//                 <span className="text-xs font-semibold text-tertiary leading-tight mb-4">End-to-End Solutions: </span>
//                  <div className="pl-4">
//                  Forget managing multiple contractors. From demolition to final epoxy painting and annual maintenance, we handle it all under one roof.
//                  </div>
//               </li>
//             </ul> */}

//             <div className='border-t py-4 mr-32 flex items-center justify-between mt-14'>
//               <div className='flex items-center w-32 gap-4'>
//                 <div className='text-primary'>
//                 <Check size={40} strokeWidth={3} />
//                 </div>
//                 <div className='text-tertiary text-xs'>
//                   Ontime at services
//                 </div>
//               </div>
//               <div className='flex items-center w-32 gap-4'>
//                 <div className='text-primary'>
//                 <Check size={40} strokeWidth={3} />
//                 </div>
//                 <div className='text-xs text-tertiary'>
//                   24/7 hours services
//                 </div>
//               </div>
//               <div className='flex items-center w-32 gap-4'>
//                 <div className='text-primary'>
//                 <Check size={40} strokeWidth={3} />
//                 </div>
//                 <div className='text-xs text-tertiary'>
//                  Verified professionals
//                 </div>
//               </div>
              
//             </div>
  
//           {/* <Button
//             asChild
//             className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.15em]"
//           >
//             <Link href="/about">KNOW MORE</Link>
//           </Button> */}
            
//           </motion.div>

//           {/* Right Image */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="relative aspect-[4/4] overflow-hidden">
//               <Image
//                 src="./about.png"
//                 alt="Luxury interior design with modern furniture"
//                 fill
//                 priority
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-background/80 dark:bg-background/70" />
//             </div>
//           </motion.div> */}

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative row-span-2 group overflow-hidden"
//           >
//             <div className="relative aspect-[4/3]">
//               <Image
//                 src="./about.png"
//                 alt="Luxury interior design with modern furniture"
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               {/* <div className="absolute inset-0 bg-background/80 dark:bg-background/30" /> */}
//               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-8">
//                 <Link
//                   href="/about"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//                 >
//                   {/* VIEW ALL SERVICES */}
//                   KNOW MORE
//                 </Link>
                
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
