'use client'

import { MxButton, PlaidButton } from '@/components'
import { gql } from '@/gql'
import { GetAccountsQuery } from '@/gql/graphql'
import { useQuery } from '@quiltt/react'

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
    return <>Loading...</>
  }

  return (
    <section>
      <PlaidButton />
      <MxButton />
      <pre>{JSON.stringify(data?.accounts, null, 2)}</pre>
    </section>
  )
}
