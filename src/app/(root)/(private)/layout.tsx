'use client'

import type { FC, PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { QuilttProvider, useQuilttSession } from '@quiltt/react'
import { CodeBlock } from '@/components'

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
    return (
      <section className="flex flex-1 flex-col items-center justify-center">Loading...</section>
    )
  }

  if (session) {
    return (
      <div className="flex flex-1 flex-col items-center justify-start space-y-4">
        <CodeBlock>{session.token}</CodeBlock>
        <hr className="w-full border-t" />
        <QuilttProvider token={session.token}>{children}</QuilttProvider>
      </div>
    )
  }

  return null
}

export default LayoutPrivate
