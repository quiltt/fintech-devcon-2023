'use client'

import { QuilttProvider } from '@quiltt/react'

const QUILTT_API_KEY = '...'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QuilttProvider token={QUILTT_API_KEY}>
      <main className="flex min-h-screen flex-col items-center justify-between">{children}</main>
    </QuilttProvider>
  )
}
