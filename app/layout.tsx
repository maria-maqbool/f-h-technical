import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { TopBar } from "@/components/layout/top-bar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "FH Technical Services | Luxury Interior Engineering",
//   description:
//     "Transforming spaces into luxury living. Premium interior design and technical engineering services for residential and commercial projects.",
//   keywords: [
//     "interior design",
//     "luxury",
//     "architecture",
//     "engineering",
//     "residential",
//     "commercial",
//   ],
// };



export const metadata: Metadata = {
  metadataBase: new URL("https://fhfitout.ae"),

  title: {
    default: "FH Technical Services | Interior Fit-Out & Maintenance Dubai",
    template: "%s | FH Technical Services",
  },

  description:
    "FH Technical Services provides professional interior fit-out, renovation, construction, electrical, HVAC, AC maintenance, plumbing, carpentry, flooring, kitchen installation, wallpaper and AMC services in Dubai, UAE.",

  keywords: [
    // Main business keywords
    "FH Technical Services",
    "Technical Services Dubai",
    "Interior Fit-Out Dubai",
    "Interior Fit-Out Company Dubai",
    "Renovation Services Dubai",
    "Construction Services Dubai",

    // Interior and fit-out
    "Interior Fit-Out Services",
    "Kitchen Installation Dubai",
    "Carpentry Works Dubai",
    "Wallpaper Fixing Dubai",
    "Wood Flooring Dubai",
    "Floor and Wall Tiling Dubai",

    // Technical and maintenance
    "Electrical Maintenance Dubai",
    "Electrical Fittings and Fixtures Repair",
    "HVAC Maintenance Dubai",
    "AC Installation and Maintenance Dubai",
    "Plumbing Services Dubai",
    "Sanitary Installation Dubai",
    "Electromechanical Equipment Maintenance",

    // Additional services
    "Annual Maintenance Contracts Dubai",
    "AMC Services Dubai",
    "Swimming Pool Maintenance Dubai",
    "Residential Maintenance Dubai",
    "Commercial Maintenance Dubai",

    // Location-based keywords
    "Technical Services UAE",
    "Interior Renovation UAE",
    "Villa Renovation Dubai",
    "Commercial Fit-Out Dubai",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "FH Technical Services | Interior Fit-Out & Maintenance Dubai",
    description:
      "Professional interior fit-out, renovation, construction and technical maintenance services for residential and commercial properties in Dubai, UAE.",
    url: "https://fhfitout.ae",
    siteName: "FH Technical Services",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "./about-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "FH Technical Services - Interior Fit-Out and Technical Maintenance Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FH Technical Services | Dubai, UAE",
    description:
      "Interior fit-out, renovation, electrical, HVAC, plumbing and maintenance services in Dubai.",
    images: ["./about-hero.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};



export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a18" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TopBar />
          <SiteHeader />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
