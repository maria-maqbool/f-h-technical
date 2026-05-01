import { ServicesHero } from '@/components/services/services-hero'
import { InteriorFitout } from '@/components/services/interior-fitout'
import { Renovation } from '@/components/services/renovation'
import { TechnicalMaintenance } from '@/components/services/technical-maintenance'
import { ServicesCTA } from '@/components/services/services-cta'
import { ServicesFooter } from '@/components/services/services-footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <InteriorFitout />
      <Renovation />
      <TechnicalMaintenance />
      <ServicesCTA />
      {/* <ServicesFooter /> */}
    </main>
  )
}