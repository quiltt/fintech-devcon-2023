import { gql, useQuery, ApolloError } from '@quiltt/react'
import { DocumentNode } from 'graphql'
import { useMemo } from 'react'

export const prepareRawData = (objects: Array<any>) => {
  return objects.map((obj: any) => obj.sources && obj.sources[0]).filter((obj: any) => !!obj)
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
      prepared['connections'] = prepareRawData(data.connections)
    }

    if (data.accounts) {
      prepared['accounts'] = prepareRawData(data.accounts)
    }

    if (data.transactions) {
      prepared['transactions'] = prepareRawData(data.transactions)
    }

    return prepared
  }, [data])

  return { loading, error, data: output }
}

export default useRawData
