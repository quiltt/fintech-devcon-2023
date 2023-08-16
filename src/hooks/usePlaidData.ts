import { useRawData, QueryData } from './useRawData'

import { gql } from '@quiltt/react'
import { PlaidAccount, PlaidConnection, PlaidTransaction } from '../gql/graphql'

const QUERY = gql(`
  query PlaidData {
    connections {
      source(type: PLAID) {
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
          _sourcename
        }
      }
    }
    accounts {
      source(type: PLAID) {
        ... on PlaidAccount {
          mask
          officialName
          verificationStatus
          type
          subtype
          persistentAccountId
          name
          accountId
          _sourcename
        }
      }
    }
    transactionsConnection {
      nodes {
        source(type: PLAID) {
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
            _sourcename
          }
        }
      }
    }
  }
`)

export type RawPlaidData = {
  connections: Array<PlaidConnection>
  accounts: Array<PlaidAccount>
  transactions: Array<PlaidTransaction>
}

export const usePlaidData = (): QueryData<RawPlaidData> => useRawData(QUERY)

export default usePlaidData
