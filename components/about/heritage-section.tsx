'use client'

export function HeritageSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Logo and Title */}
          <div>
            <div className="mb-8">
              <div className="inline-block">
                <div className="text-5xl md:text-6xl font-serif text-primary mb-4">
                  FH Technical
                </div>
                <div className="text-4xl md:text-5xl font-serif text-foreground">
                  Services
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xs tracking-[0.15em] text-primary uppercase font-medium">
                Our Heritage
              </h3>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="space-y-6">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Born from a legacy of architectural precision, FH Technical Services represents the intersection of robust engineering and delicate aesthetic mastery. Our journey began with a simple yet profound restoration. That luxury is not just seen, but felt.
            </p>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We specialize in luxury transformations that demand more than just a decorative touch. From the intricate artistry of bespoke installations to the microscopic precision of high-end finishes, our team of master craftsmen delivers results that redefine the boundaries of residential and commercial excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}