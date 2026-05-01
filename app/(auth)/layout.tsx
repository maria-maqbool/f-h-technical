// import { SiteHeader, SiteFooter } from '@/components/layout'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-32">
        {children}
      </main>
    // </div>
  )
}

