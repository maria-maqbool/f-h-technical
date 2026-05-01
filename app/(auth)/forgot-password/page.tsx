'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Shield, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic
    console.log('[v0] Password reset requested for:', email)
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center px-6 py-12">
      {/* Reset Card */}
      <div className="w-full max-w-md bg-card border border-border p-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center">
            <Lock className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl text-foreground mb-3">Password Recovery</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to receive recovery instructions.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs tracking-[0.15em] text-foreground mb-3">
              OFFICIAL EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@aurelian-interiors.com"
              className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-primary placeholder:text-primary/60 focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 text-xs tracking-[0.15em]"
          >
            RESET PASSWORD
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Back to Login */}
        <div className="text-center">
          <Link 
            href="/login" 
            className="inline-flex items-center text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO SECURE LOGIN
          </Link>
        </div>
      </div>

      {/* Security Badges */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-xs tracking-[0.1em] text-muted-foreground">ENCRYPTION ACTIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs tracking-[0.1em] text-muted-foreground">SECURE PORTAL</span>
        </div>
      </div>
    </div>
  )
}
