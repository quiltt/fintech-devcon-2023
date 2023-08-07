'use client'

import { Button } from '@/components'
import { QuilttButton } from '@quiltt/react'

export const ConnectorButton = () => {
  return (
    // Quiltt: Marketing Connector Demo
    <QuilttButton connectorId="connector" as={Button}>
      Launch Connector
    </QuilttButton>
  )
}

export default ConnectorButton
