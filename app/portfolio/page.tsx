import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioCta } from "@/components/portfolio/portfolio-cta"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCta />
    </main>
  )
}