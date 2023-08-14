'use client'

import { PlaidButton } from '../../_components'
import { usePlaidData } from '../../_hooks'

export default function PagePlaid() {
  const { data } = usePlaidData()
  return <section>Plaid: {JSON.stringify(data)}</section>
}
