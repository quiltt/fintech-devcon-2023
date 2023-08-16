'use client'

import { Button } from '@/components'
import { QuilttButton } from '@quiltt/react'

export const UnifiedButton = () => {
  return (
    <>
      <QuilttButton connectorId="2he3hw6g5d" as={Button}>
        Launch Plaid Link
      </QuilttButton>
      <QuilttButton connectorId="s4baburzo2" as={Button}>
        Launch MX Connect
      </QuilttButton>
    </>
  )
}

export default UnifiedButton
