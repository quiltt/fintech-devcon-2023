import { Navbar } from './_components'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      {children}
    </main>
  )
}
