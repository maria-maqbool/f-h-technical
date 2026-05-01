'use client'

import Link from 'next/link'
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-[#110D0A] border-b border-border/20">
      <div className="mx-auto max-w-7xl px-6  py-3 lg:px-0">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left side - Contact info */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:fhinterior7@gmail.com"
              className="flex items-center gap-2 text-xs hover:text-muted-foreground text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">fhinterior7@gmail.com</span>
            </a>
            <a
              href="tel:+971 56 530 2726"
              className="flex items-center gap-2 text-xs hover:text-muted-foreground text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+971 56 530 2726</span>
            </a>
          </div>

          {/* Right side - Social media */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/share/1CcXVg86bn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/fhtech_uae?igsh=MWJpcXpjbTFwM2xuNw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            {/* <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <TikTok_Sans className="h-4 w-4" />
            </Link> */}
            <Link
              href="https://www.tiktok.com/@fhtech_uae?_r=1&_t=ZS-95zywmGGfQa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}