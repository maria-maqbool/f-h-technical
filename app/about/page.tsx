import type { Metadata } from 'next'
import {
  AboutHeroSection,
  HeritageSection,
  FeatureCardsSection,
  DisciplinesSection,
  FeaturesGridSection,
} from '@/components/about'
import { CTASection } from '@/components/home'

export const metadata: Metadata = {
  title: 'About Us | FH Technical Services',
  description: 'Learn about FH Technical Services - experts in precision engineering, luxury interior design, and uncompromising craftsmanship.',
}

export default function AboutPage() {
  return (
    <main className="flex-1 pt-32 min-h-screen">
      <AboutHeroSection />
      <HeritageSection />
      <FeatureCardsSection />
      <DisciplinesSection />
      <FeaturesGridSection />
      <CTASection />
    </main>
  )
}