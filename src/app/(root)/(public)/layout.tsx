'use client'

import type { FC, PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { useQuilttSession } from '@quiltt/react'

type LayoutPublicProps = PropsWithChildren

const LayoutPublic: FC<LayoutPublicProps> = ({ children }) => {
  const redirectTo = '/'
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { session } = useQuilttSession()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading && session && redirectTo) {
      router.push(redirectTo)
    }
  }, [router, session, redirectTo, isLoading])

  if (isLoading) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center">Loading...</section>
    )
  }

  if (!session) {
    return <>{children}</>
  }

  return null
}

export default LayoutPublic
