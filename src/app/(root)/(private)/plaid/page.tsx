'use client'

import { PlaidButton } from '../../_components'
import { usePlaidData } from '../../_hooks'

export default function PagePlaid() {
  const { data, loading, error } = usePlaidData()

  if (loading) {
    return <>Loading...</>
  }

  return (
    <section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}
