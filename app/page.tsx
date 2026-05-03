import { SiteHeader, SiteFooter } from '@/components/layout'
import {
  HeroSection,
  MethodologySection,
  ProjectsSection,
  TestimonialsSection,
  CTASection,
} from '@/components/home'
import { AboutSection } from '@/components/home/about-section'
import { ServicesSection } from '@/components/home/services-section'

export default function Home() {
 return (
    // <div className="min-h-screen flex flex-col">
    //   <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <MethodologySection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    //   <SiteFooter />
    // </div>
  )
} 
