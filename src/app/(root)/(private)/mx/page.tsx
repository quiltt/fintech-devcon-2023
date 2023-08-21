'use client'

import { CodeBlock, MxButton } from '@/components'
import { useMxData } from '@/hooks'

export default function PageMx() {
  const { data, loading, error } = useMxData()

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
      <MxButton />
      <CodeBlock>{JSON.stringify(data, null, 2)}</CodeBlock>
    </section>
  )
}
