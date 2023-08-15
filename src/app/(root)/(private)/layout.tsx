'use client'

import type { FC, PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { QuilttProvider, useQuilttSession } from '@quiltt/react'

type LayoutPrivateProps = PropsWithChildren

export const LayoutPrivate: FC<LayoutPrivateProps> = ({ children }) => {
  const redirectTo = '/login'
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { session } = useQuilttSession()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading && !session && redirectTo) {
      router.push(redirectTo)
    }
  }, [router, session, redirectTo, isLoading])

  if (isLoading) {
    return <>Loading...</>
  }

  if (session) {
    return (
      <>
        <pre>{session.token}</pre>
        <hr />
        <QuilttProvider token={session.token}>{children}</QuilttProvider>
      </>
    )
  }

  return null
}

export default LayoutPrivate
