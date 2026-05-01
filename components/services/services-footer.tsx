import Link from 'next/link'
import { Linkedin, Instagram, Twitter } from 'lucide-react'

const servicesLinks = [
  { label: 'Interior Design', href: '#' },
  { label: 'Villa Renovation', href: '#' },
  { label: 'AC Maintenance', href: '#' },
]

const supportLinks = [
  { label: 'WhatsApp Support', href: '#' },
  { label: 'Technical Specifications', href: '#' },
  { label: 'Contact Us', href: '#' },
]

export function ServicesFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              FH TECHNICAL
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium technical services and bespoke interior solutions for the modern UAE lifestyle.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs tracking-wider text-muted-foreground mb-4">SERVICES</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-xs tracking-wider text-muted-foreground mb-4">SUPPORT</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs tracking-wider text-muted-foreground mb-4">CONTACT</h4>
            <div className="space-y-3">
              <p className="text-sm text-foreground/80">
                Office 402, Al Gella Business Center,<br />
                Dubai, United Arab Emirates
              </p>
              <Link
                href="mailto:info@fhtechnical.ae"
                className="block text-sm text-primary hover:underline"
              >
                info@fhtechnical.ae
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 FH Technical Services. Excellence in Engineering.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
