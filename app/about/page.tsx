import type { Metadata } from 'next'
import {
  AboutHeroSection,
  CreativeSolutionsSection,
  HeritageSection,
  FeatureCardsSection,
  DisciplinesSection,
  FeaturesGridSection,
  LuxuryInteriorSection,
} from '@/components/about'
import { CTASection } from '@/components/home'
import { AboutMainSection } from '@/components/about/about-main-section'

export const metadata: Metadata = {
  title: 'About Us | FH Technical Services',
  description: 'Learn about FH Technical Services - experts in precision engineering, luxury interior design, and uncompromising craftsmanship.',
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutMainSection />
      <AboutHeroSection />
      <LuxuryInteriorSection />
      {/* <CreativeSolutionsSection /> */}
      <HeritageSection />
      <FeatureCardsSection />
      <DisciplinesSection />
      <FeaturesGridSection />
      <CTASection />
    </main>
  )
}