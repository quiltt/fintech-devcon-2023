'use client'

import { Button } from '@/components'
import { QuilttButton } from '@quiltt/react'

export const MxButton = () => {
  return (
    <QuilttButton connectorId="s4baburzo2" as={Button}>
      Launch MX Connect
    </QuilttButton>
  )
}

export default MxButton
