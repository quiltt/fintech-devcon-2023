'use client'

import { PlaidButton, MxButton } from '@/components'

export default function PageUnified() {
  const data = {}
  const loading = false

  if (loading) {
    return <>Loading...</>
  }

  return (
    <section>
      <PlaidButton />
      <MxButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}
