'use client'

import { Button } from './Button'
import { QuilttButton, useQuilttSession } from '@quiltt/react'

const CONNECTORS: { [eid: string]: string } = {
  env_16dfkSTsGxQn1YaJ8h6SzLm: 's4baburzo2', // Production
  env_12t6FoVKzfqi99sWisEKQL: '54tnmmn7eg', // Sandbox
}

export const MxButton = () => {
  const { session } = useQuilttSession()
  if (!session) return

  return (
    <QuilttButton connectorId={CONNECTORS[session.claims.eid]} as={Button}>
      Launch MX Connect
    </QuilttButton>
  )
}

export default MxButton
