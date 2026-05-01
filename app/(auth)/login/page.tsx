'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    console.log('[v0] Login attempt:', { email, rememberMe })
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center px-6 py-12 relative">
      {/* Background with subtle imagery */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
          }}
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-card border border-border p-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.2em] text-primary mb-2">MEMBER ACCESS</p>
          <h1 className="text-xl font-medium text-foreground">FH Technical Services</h1>
          <div className="w-12 h-0.5 bg-primary mt-4" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs tracking-[0.15em] text-foreground mb-3">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@aurelian.com"
              className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-primary placeholder:text-primary/60 focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.15em] text-foreground mb-3">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label 
                htmlFor="remember" 
                className="text-xs tracking-[0.1em] text-muted-foreground cursor-pointer"
              >
                REMEMBER ME
              </label>
            </div>
            <Link 
              href="/forgot-password" 
              className="text-xs tracking-[0.1em] text-primary hover:text-primary/80 transition-colors"
            >
              FORGOT PASSWORD?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 text-xs tracking-[0.15em]"
          >
            LOGIN TO ATELIER
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Security Notice */}
        <p className="text-center text-xs text-muted-foreground tracking-[0.05em] leading-relaxed">
          PRIVATE ACCESS ONLY. UNAUTHORIZED ENTRY IS STRICTLY
          <br />
          PROHIBITED.
        </p>
      </div>
    </div>
  )
}
