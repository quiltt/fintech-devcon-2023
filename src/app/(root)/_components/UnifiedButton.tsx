'use client'

import { Button } from '@/components'
import { QuilttButton } from '@quiltt/react'

export const UnifiedButton = () => {
  return (
    <QuilttButton connectorId="c0n047lhcl" as={Button}>
      Launch Unified Connector
    </QuilttButton>
  )
}

export default UnifiedButton
