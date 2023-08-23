'use client'

import { Button } from './Button'
import { QuilttButton, useQuilttSession } from '@quiltt/react'

const CONNECTORS: { [eid: string]: string } = {
  env_16dfkSTsGxQn1YaJ8h6SzLm: '2he3hw6g5d', // Production
  env_12t6FoVKzfqi99sWisEKQL: 'jse7ksai7n', // Sandbox
}

export const PlaidButton = () => {
  const { session } = useQuilttSession()
  if (!session) return

  return (
    <QuilttButton connectorId={CONNECTORS[session.claims.eid]} as={Button}>
      Launch Plaid Link
    </QuilttButton>
  )
}

export default PlaidButton
