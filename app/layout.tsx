import type { Metadata } from 'next'
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Walid Allal — Développeur Full Stack & Chef de Projet',
  description:
    'Portfolio de Walid Allal, développeur Full Stack & futur Chef de Projet Informatique en 3ème année de Bachelor à l\'IPI Lyon, en alternance chez OUISOF. NextJs, Angular, Spring Boot, Oracle APEX, Flutter et plus.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${poppins.variable} ${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
