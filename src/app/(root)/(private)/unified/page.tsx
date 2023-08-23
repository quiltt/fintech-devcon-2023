'use client'

import { CodeBlock, MxButton, PlaidButton } from '@/components'
import { gql } from '@/gql'
import { GetAccountsQuery } from '@/gql/graphql'
import { useQuery } from '@quiltt/react'

// `npm graphql:codegen` to update types
const AccountsQuery = gql(`
  query GetAccounts {
    accounts {
      id
    }
  }
`)

export default function PageUnified() {
  const { data, loading, error } = useQuery<GetAccountsQuery>(AccountsQuery)

  if (loading) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center">Loading...</section>
    )
  }

  if (error) {
    console.error(error)
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-start space-y-4">
      <PlaidButton />
      <MxButton />
      <CodeBlock>{JSON.stringify(data, null, 2)}</CodeBlock>
    </section>
  )
}
