'use client'

import { UnifiedButton } from '../../_components'

export default function PageUnified() {
  const data = {}
  const loading = false

  if (loading) {
    return <>Loading...</>
  }

  return (
    <section>
      <UnifiedButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}
