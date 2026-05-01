import { SiteHeader, SiteFooter } from '@/components/layout'
import {
  HeroSection,
  MethodologySection,
  ProjectsSection,
  TestimonialsSection,
  CTASection,
} from '@/components/home'

export default function HomePage() {
 return (
    // <div className="min-h-screen flex flex-col">
    //   <SiteHeader />
      <main className="flex-1 pt-16">
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
