import Link from 'next/link'
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { RiTiktokLine } from 'react-icons/ri'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";




const navigationLinks = [
  { name: 'SERVICES', href: '/services' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
]

const locationLinks = [
  { name: 'LONDON', href: '#' },
  { name: 'DUBAI', href: '#' },
  { name: 'SINGAPORE', href: '#' },
]

const legalLinks = [
  { name: 'SUPPORT', href: '#' },
  { name: 'TERMS', href: '#' },
  { name: 'PRIVACY', href: '#' },
  { name: 'FAQ', href: '#' },
]

const contactInfo = [
  { icon: <FaLocationDot />, name: 'Saif Al-Rumhib Building, Deira Dubai', href: '#' },
  { icon: <IoMdMail />, name: 'fhinterior7@gmail.com', href: 'mailto:fhinterior7@gmail.com' },
  { icon: <IoCall />, name: '+971 56 530 2726', href: 'tel:+971 56 530 2726' },
  { icon: <IoCall />, name: '+971 52 151 6301', href: 'tel:+971 521516301' },
  // { name: 'PRIVACY', href: '/privacy' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and copyright */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-serif text-primary tracking-wide">
              FH Technical Services
            </Link>
            <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
              © 2026 FH Technical Services<br /> Co. L.L.C.<br />
              ALL RIGHTS RESERVED.
            </p>
            <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
             TRN: 105428279100003
            </p>

            <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/share/1CcXVg86bn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/fhtech_uae?igsh=MWJpcXpjbTFwM2xuNw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.tiktok.com/@fhtech_uae?_r=1&_t=ZS-95zywmGGfQa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary transition-colors"
              aria-label="Tiktok"
            >
              <RiTiktokLine />
            </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] font-medium text-primary uppercase">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>


          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] font-medium text-primary uppercase">
              Legal
            </h3>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.2em] font-medium text-primary uppercase">
              CONTACT INFO
            </h3>
            <nav className="flex flex-col gap-3">
              {contactInfo.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  <div className="flex items-center gap-2">
                  {link.icon && <span className="mr-2 text-tertiary text-lg">{link.icon}</span>}
                  {link.name}
                  </div>
                   
                  
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
       {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto py-6 flex md:flex-row justify-center items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 FH Technical Services Co. L.L.C. Excellence in Engineering.
          </p>
          {/* <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}   