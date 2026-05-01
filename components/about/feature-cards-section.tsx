'use client'

import { Gem, Ruler } from 'lucide-react'

export function FeatureCardsSection() {
  const features = [
    {
      icon: Gem,
      title: 'Elevating Standard of Living',
      description: 'To transform your spaces into residences that capture the full spectrum of luxury, creating environments tailored to perfectly embody your life.',
    },
    {
      icon: Ruler,
      title: 'Setting the Benchmark',
      description: 'To remain the definitive authority in technical craftsmanship, where every project serves as a testament to engineering perfection.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="bg-background border border-border/40 p-8 md:p-12 hover:border-border/60 transition-all duration-300"
              >
                <Icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
