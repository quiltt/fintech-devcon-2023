'use client'

import { CodeBlock, PlaidButton } from '@/components'
import { usePlaidData } from '@/hooks'

export default function PagePlaid() {
  const { data, loading, error } = usePlaidData()

  if (loading) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center">Loading...</section>
    )
  }

  if (error) {
    console.error(error)
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-start space-y-4">
      <PlaidButton />
      <CodeBlock>{JSON.stringify(data, null, 2)}</CodeBlock>
    </section>
  )
}
