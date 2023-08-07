'use client'

import { QuilttProvider } from '@quiltt/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QuilttProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">{children}</main>
    </QuilttProvider>
  )
}
