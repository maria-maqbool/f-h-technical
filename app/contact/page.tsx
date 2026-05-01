import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"
import { ContactCTA } from "@/components/contact/contact-cta"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </main>
  )
}