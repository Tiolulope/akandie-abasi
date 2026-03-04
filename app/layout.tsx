import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Udofia Akandie-Abasi — Accountant & Data Analyst',
  description: 'Proactive, result-oriented accountant and data analyst leveraging analytics expertise to solve complex organizational problems.',
  openGraph: {
    title: 'Udofia Akandie-Abasi Sunday — Accountant & Data Analyst',
    description: 'Senior Accountant · Financial Analyst · Power BI · SPSS',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
