import { useRawData } from './useRawData'

import { gql } from '@quiltt/react'

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

export const useMxData = () => useRawData(QUERY)

export default useMxData
