import { useRawData, QueryData } from './useRawData'

import { gql } from '@quiltt/react'
// import { MxAccount, MxConnection, MxTransaction } from '../../../gql/graphql'

type MxAccount = {}
type MxConnection = {}
type MxTransaction = {}

const QUERY = gql(`
  query MxData {
    connections {
      sources {
        ... on MxConnection {
          id
        }
      }
    }
    accounts {
      sources {
        ... on MxAccount {
          id
        }
      }
    }
    transactionsConnection {
      nodes {
        sources {
          ... on MxTransaction {
            id
          }
        }
      }
    }
  }
`)

export type RawMxData = {
  connections: Array<MxConnection>
  accounts: Array<MxAccount>
  transactions: Array<MxTransaction>
}

export const useMxData = (): QueryData<RawMxData> => useRawData(QUERY)

export default useMxData
