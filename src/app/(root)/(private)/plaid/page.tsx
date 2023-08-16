'use client'

import { PlaidButton } from '@/components'
import { usePlaidData } from '@/hooks'

export default function PagePlaid() {
  const { data, loading, error } = usePlaidData()

  if (loading) {
    return <>Loading...</>
  }

  return (
    <section>
      <PlaidButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}
