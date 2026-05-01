'use client'

import { Palette, Hammer, Brush } from 'lucide-react'

export function DisciplinesSection() {
  const disciplines = [
    {
      icon: Palette,
      name: 'Wallpaper Installation',
      description: 'Precision application for aesthetics and exclusive architectural appeal.',
    },
    {
      icon: Hammer,
      name: 'Wood/Vinyl Wrapping',
      description: 'Engineered surfaces with meticulous precision and artistic mastery.',
    },
    {
      icon: Brush,
      name: 'Luxury Painting',
      description: 'Transformative finishes that elevate interiors to unprecedented heights.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-primary uppercase mb-4 font-medium">
            Technical Expertise
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Our Disciplines
          </h2>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {discipline.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {discipline.description}
                </p>
                <div className="h-0.5 w-8 bg-primary mx-auto mt-6" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
