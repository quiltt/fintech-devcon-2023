'use client'

import { useEffect, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import { useQuilttSession } from '@quiltt/react'

const LoginPage = () => {
  const { importSession } = useQuilttSession()
  const router = useRouter()

  const searchParams = useSearchParams()
  const redirectToken = searchParams.get('token')

  const [tokenChecked, setTokenChecked] = useState(false)

  // Check the token on mount
  useEffect(() => {
    // If we have a redirect token, try to import the session
    if (redirectToken) {
      importSession(redirectToken).then((greatSuccess) => {
        if (greatSuccess) {
          router.push('/')
        } else {
          setTokenChecked(true)
        }
      })
    } else {
      setTokenChecked(true)
    }
  }, [redirectToken, importSession, router])

  if (!tokenChecked) {
    return <>Loading...</>
  }

  return (
    <section className="flex h-full flex-1 items-center justify-center p-4">
      <a
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        href="https://www.quiltthub.com"
      >
        Login with QuilttHub
      </a>
    </section>
  )
}

export default LoginPage
