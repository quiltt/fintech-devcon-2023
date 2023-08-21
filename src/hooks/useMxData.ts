import { useRawData, QueryData } from './useRawData'

import { gql } from '@quiltt/react'
// @ts-ignore
import { MxAccount, MxConnection, MxTransaction } from '../gql/graphql'

const QUERY = gql(`
  query MxData {
    connections {
      source(type: MX) {
        ... on MxConnection {
          id
          name
          userId
          userGuid
          successfullyAggregatedAt
          oauthWindowUri
          metadata
          isOauth
          isManagedByUser
          isBeingAggregated
          institutionCode
          guid
          connectionStatus
          backgroundAggregationIsDisabled
          aggregatedAt
          _sourcename
        }
      }
    }
    accounts {
      source(type: MX) {
        ... on MxAccount {
          id
          name
          userId
          userGuid
          updatedAt
          type
          totalAccountValue
          subtype
          startedOn
          routingNumber
          premiumAmount
          payoffBalance
          paymentDueAt
          payOutAmount
          originalBalance
          nickname
          minimumPayment
          minimumBalance
          metadata
          memberIsManagedByUser
          memberId
          memberGuid
          maturesOn
          loanAmount
          lastPaymentAt
          isHidden
          lastPayment
          isClosed
          interestRate
          insuredName
          institutionCode
          importedAt
          holdingsValue
          guid
          deathBenefit
          dayPaymentIsDue
          currencyCode
          creditLimit
          createdAt
          cashSurrenderValue
          balance
          cashBalance
          availableCredit
          availableBalance
          apy
          apr
          accountNumber
          _sourcename
        }
      }
    }
    transactionsConnection {
      nodes {
        source(type: MX) {
          ... on MxTransaction {
            id
            userId
            userGuid
            updatedAt
            type
            transactedAt
            topLevelCategory
            status
            postedAt
            originalDescription
            metadata
            merchantLocationGuid
            merchantGuid
            merchantCategoryCode
            memo
            memberIsManagedByUser
            memberGuid
            longitude
            localizedMemo
            localizedDescription
            latitude
            isSubscription
            isRecurring
            isPayrollAdvance
            isOverdraftFee
            isIncome
            isInternational
            isFee
            isExpense
            isDirectDeposit
            isBillPay
            guid
            extendedTransactionType
            description
            date
            currencyCode
            createdAt
            checkNumberString
            categoryGuid
            category
            accountId
            amount
            accountGuid
            _sourcename
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
