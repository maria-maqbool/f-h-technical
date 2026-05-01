"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, UserPlus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { ThemeToggle } from '@/components/theme-toggle'
import Image from "next/image";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky lg:px-0 px-6 top-0 left-0 right-0 z-50 shadow-lg border-b border-border/80 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
        {/* Logo */}
        {/* <Link href="/" className="flex-shrink-0">
          <span className="text-lg font-serif text-primary tracking-wide">
            FH Technical Services
          </span>
        </Link> */}

        <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="./logo.jpeg"
              alt="FH Technical Services Logo"
              width={50}
              height={50}
              className="object-contain rounded-full shadow-sm shadow-yellow-50"
            />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-xs tracking-[0.15em] font-medium transition-colors duration-200 py-1",
                isActive(item.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          {/* <ThemeToggle /> */}
          <Link
            href="/login"
            className="text-xs tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            LOGIN
          </Link>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 py-2 text-xs tracking-[0.15em] font-medium"
          >
            <Link href="/signup">SIGN UP</Link>
          </Button>
          {/* <Button 
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6 py-2 text-xs tracking-[0.15em] font-medium"
          >
            <Link href="/contact">GET A QUOTE</Link>
          </Button> */}
          {/* <Link
            href="/signup"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Sign up"
          >
            <UserPlus className="h-5 w-5" />
          </Link> */}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-4">
          {/* <ThemeToggle /> */}
          <button
            type="button"
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2 bg-background border-b border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-3 text-sm tracking-[0.15em] font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground/80",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-4 space-y-3">
              <Link
                href="/login"
                className="block py-2 text-sm tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                LOGIN
              </Link>
              <Link
                href="/signup"
                className="block py-2 text-sm tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                SIGN UP
              </Link>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-xs tracking-[0.15em]"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  GET A QUOTE
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
