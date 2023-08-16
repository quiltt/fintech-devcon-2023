import { gql, useQuery, ApolloError } from '@quiltt/react'
import { DocumentNode } from 'graphql'
import { useMemo } from 'react'

export const prepareRawData = (objects: Array<any>) => {
  return objects.map((obj: any) => obj.source).filter((obj: any) => !!obj)
}

export type QueryData<T> = {
  loading: boolean
  error: undefined | ApolloError
  data: undefined | T
}

export const useRawData = (query: DocumentNode): QueryData<any> => {
  const { loading, error, data } = useQuery(query, {
    errorPolicy: 'all',
  })

  const output = useMemo(() => {
    if (!data) return data

    const prepared: any = {}

    if (data.connections) {
      const preparedConnections = prepareRawData(data.connections)

      if (preparedConnections.length) {
        prepared['connections'] = preparedConnections
      }
    }

    if (data.accounts) {
      const preparedAccounts = prepareRawData(data.accounts)

      if (preparedAccounts.length) {
        prepared['accounts'] = preparedAccounts
      }
    }

    if (data.transactionsConnection) {
      const preparedTransactions = prepareRawData(data.transactionsConnection.nodes)

      if (preparedTransactions.length) {
        prepared['transactions'] = preparedTransactions
      }
    }

    return prepared
  }, [data])

  return { loading, error, data: output }
}

export default useRawData
