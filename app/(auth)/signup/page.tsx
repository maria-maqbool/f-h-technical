'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log('[v0] Signup attempt:', formData)
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-stretch">
      {/* Left Side - Image and Text */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative z-10 p-12 flex flex-col justify-end">
          <p className="text-xs tracking-[0.2em] text-primary mb-4">ESTABLISHED MMXXIV</p>
          <h2 className="font-serif text-2xl text-foreground mb-2">Technical Excellence.</h2>
          <h2 className="font-serif text-2xl text-foreground mb-6">Aurelian Precision.</h2>
          <div className="w-full h-px bg-border mb-6" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Enter the inner sanctum of FH Technical Services. Access exclusive architectural 
            portfolios and bespoke interior engineering tools.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-card">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-xl font-medium text-foreground mb-2">Create Account</h1>
            <p className="text-sm text-muted-foreground">
              Complete the authentication to join the circle.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-[0.15em] text-foreground mb-3">
                FULL NAME
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="ALEXANDER VANCE"
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-primary placeholder:text-primary/60 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] text-foreground mb-3">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="OFFICE@AURELIAN.COM"
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-primary placeholder:text-primary/60 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.15em] text-foreground mb-3">
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] text-foreground mb-3">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 text-xs tracking-[0.15em]"
            >
              JOIN THE CIRCLE
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8 border-t border-border" />

          {/* Sign In Link */}
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-[0.1em] text-muted-foreground">
              ALREADY REGISTERED?
            </span>
            <Link 
              href="/login" 
              className="text-xs tracking-[0.1em] text-primary hover:text-primary/80 transition-colors"
            >
              SIGN IN TO YOUR ATELIER
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
