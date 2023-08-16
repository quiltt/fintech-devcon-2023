'use client'

import { MxButton } from '@/components'
import { useMxData } from '@/hooks'

export default function PageMx() {
  const { data, loading, error } = useMxData()

  if (loading) {
    return <>Loading...</>
  }

  return (
    <section>
      <MxButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}
