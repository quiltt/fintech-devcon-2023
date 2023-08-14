import { useQuery } from '@quiltt/react'
import { DocumentNode } from 'graphql'
import { useMemo } from 'react'

export const prepareRawData = (objects: Array<any>) => {
  return objects
    .map((obj: any) => {
      const data = obj.sources && obj.sources[0]
      if (data) delete data['__typename']
      return data
    })
    .filter((obj: any) => !!obj)
}

export const useRawData = (query: DocumentNode) => {
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
