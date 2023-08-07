import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`font-sans antialiased ${inter.variable}`}>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
