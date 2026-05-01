import { SiteHeader, SiteFooter } from '@/components/layout'
import {
  HeroSection,
  MethodologySection,
  ProjectsSection,
  TestimonialsSection,
  CTASection,
} from '@/components/home'

export default function Home() {
 return (
    // <div className="min-h-screen flex flex-col">
    //   <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <MethodologySection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    //   <SiteFooter />
    // </div>
  )
} 
