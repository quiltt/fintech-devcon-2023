import { gql, useQuery } from '@quiltt/react'
import { useMemo } from 'react'

const QUERY = gql(`
  query PlaidData {
    connections {
      sources {
        ... on PlaidConnection {
          consentExpirationTime
          institutionId
          updateType
          products
          itemId
          error {
            suggestedAction
            status
            requestId
            errorType
            errorMessage
            errorCode
            documentationUrl
            displayMessage
            causes
          }
          consentedProducts
          billedProducts
          availableProducts
        }
      }
    }
    accounts {
      sources {
        ... on PlaidAccount {
          mask
          officialName
          verificationStatus
          type
          subtype
          persistentAccountId
          name
          accountId
        }
      }
    }
    transactionsConnection {
      nodes {
        sources {
          ... on PlaidTransaction {
            accountOwner
            authorizedDate
            website
            unofficialCurrencyCode
            transactionId
            transactionCode
            personalFinanceCategoryIconUrl
            personalFinanceCategory {
              primary
              detailed
            }
            pendingTransactionId
            pending
            paymentMeta {
              referenceNumber
              reason
              ppdId
              paymentProcessor
              paymentMethod
              payer
              payee
              byOrderOf
            }
            paymentChannel
            originalDescription
            name
            merchantName
            logoUrl
            location {
              storeNumber
              region
              postalCode
              lon
              lat
              city
              country
              address
            }
            isoCurrencyCode
            datetime
            date
            counterparties {
              website
              type
              name
              logoUrl
            }
            checkNumber
            categoryId
            category
            authorizedDatetime
            amount
            accountId
          }
        }
      }
    }
  }
`)

export const usePlaidData = () => {
  const { loading, error, data } = useQuery(QUERY, {
    errorPolicy: 'all',
  })

  const plaidData = useMemo(() => {
    if (!data) return data

    const rawData: any = {}

    if (data.connections) {
      rawData['connections'] = data.connections
        .map((obj: any) => obj.sources && obj.sources[0])
        .filter((obj: any) => !!obj)
    }

    if (data.accounts) {
      rawData['accounts'] = data.accounts
        .map((obj: any) => obj.sources && obj.sources[0])
        .filter((obj: any) => !!obj)
    }

    if (data.transactions) {
      rawData['transactions'] = data.transactions
        .map((obj: any) => obj.sources && obj.sources[0])
        .filter((obj: any) => !!obj)
    }

    return rawData
  }, [data])

  return { loading, error, data: plaidData }
}

export default usePlaidData
