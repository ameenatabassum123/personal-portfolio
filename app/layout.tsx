import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ameena Tabassum - Computer Science Student & Developer",
  description:
    "Portfolio of Ameena Tabassum, a passionate Computer Science student specializing in full-stack development, AI/ML, and modern web technologies.",
  keywords: ["Ameena Tabassum", "Computer Science", "Full Stack Developer", "React", "Next.js", "AI/ML", "Portfolio"],
  authors: [{ name: "Ameena Tabassum" }],
  creator: "Ameena Tabassum",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ameena-portfolio.vercel.app",
    title: "Ameena Tabassum - Computer Science Student & Developer",
    description:
      "Portfolio of Ameena Tabassum, a passionate Computer Science student specializing in full-stack development, AI/ML, and modern web technologies.",
    siteName: "Ameena Tabassum Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameena Tabassum - Computer Science Student & Developer",
    description:
      "Portfolio of Ameena Tabassum, a passionate Computer Science student specializing in full-stack development, AI/ML, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${poppins.variable} ${roboto.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
