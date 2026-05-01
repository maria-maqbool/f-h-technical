'use client'

import { Sparkles, Cog, Truck, CheckCircle } from 'lucide-react'

export function FeaturesGridSection() {
  const features = [
    {
      icon: Sparkles,
      number: '01',
      title: 'Premium Materials',
      description: 'We curate only the finest materials for durability and exclusive aesthetic appeal.',
    },
    {
      icon: Cog,
      number: '02',
      title: 'Skilled Craftsmanship',
      description: 'Engineers of aesthetics with decades of combined technical expertise.',
    },
    {
      icon: Truck,
      number: '03',
      title: 'Reliable Delivery',
      description: 'Meticulous project management ensuring precision timelines.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Absolute Satisfaction',
      description: 'Our guarantee of perfection is etched into every surface we touch.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="space-y-4">
                <div className="text-xs tracking-[0.15em] text-muted-foreground/60 font-medium">
                  {feature.number}
                </div>
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="font-serif text-lg md:text-xl text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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