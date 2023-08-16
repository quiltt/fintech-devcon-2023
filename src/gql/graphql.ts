/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents an ISO 8601-encoded date. */
  Date: { input: any; output: any; }
  /** Represents an ISO 8601-encoded datetime. */
  DateTime: { input: any; output: any; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
  /** Represents a valid URL, transported as a string. */
  URL: { input: any; output: any; }
};

/** An Account represents the accounting of a banking relationship. */
export type Account = {
  __typename?: 'Account';
  /** The Account Balance for the Account. */
  balance?: Maybe<AccountBalance>;
  /** The primary Connection for this Account. */
  connection?: Maybe<Connection>;
  /** The ISO-4217 currency code of the Account */
  currencyCode?: Maybe<CurrencyCode>;
  /** The ID of the Account. */
  id: Scalars['ID']['output'];
  /** The Institution where the Account is held. */
  institution: Institution;
  /** @deprecated Use `mask` instead. */
  lastFourDigits?: Maybe<Scalars['String']['output']>;
  /** A mostly unique identifier, typically the last 4 numbers of the Account. */
  mask?: Maybe<Scalars['String']['output']>;
  /**
   * Custom metadata about the Account, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/guides/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** The Name of the Account */
  name: Scalars['String']['output'];
  /** The original source of the Account. */
  origin: AccountSourceType;
  /** API data from a specific source. */
  source?: Maybe<AccountSources>;
  /** API data from multiple sources */
  sources?: Maybe<Array<AccountSources>>;
  /** The State of the Account */
  state: AccountState;
  /** The date of the earliest known Transaction. */
  transactedFirstOn?: Maybe<Scalars['Date']['output']>;
  /** The date of the most recent known Transaction. */
  transactedLastOn?: Maybe<Scalars['Date']['output']>;
  /** A limited list of Transactions. Use `transactionsConnection` for a full paginated list. */
  transactions: Array<Transaction>;
  /** A paginated list of Transactions. */
  transactionsConnection: TransactionConnection;
  /** Represents the classification of an Account. */
  type: AccountType;
  /** Specifies whether the Account is verified for money movements. */
  verified: Scalars['Boolean']['output'];
};


/** An Account represents the accounting of a banking relationship. */
export type AccountSourceArgs = {
  type: AccountSourceType;
};


/** An Account represents the accounting of a banking relationship. */
export type AccountSourcesArgs = {
  types?: InputMaybe<Array<AccountSourceType>>;
};


/** An Account represents the accounting of a banking relationship. */
export type AccountTransactionsArgs = {
  filter?: InputMaybe<TransactionFilter>;
  limit?: Scalars['Int']['input'];
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<TransactionSort>;
};


/** An Account represents the accounting of a banking relationship. */
export type AccountTransactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<TransactionSort>;
};

/** Represents an Account Balance. */
export type AccountBalance = {
  __typename?: 'AccountBalance';
  /** The timestamp of the Account Balance record. */
  at: Scalars['DateTime']['output'];
  /** The amount of funds accounting for pending Transactions. */
  available?: Maybe<Scalars['Float']['output']>;
  /** The amount of funds based on posted Transactions. */
  current?: Maybe<Scalars['Float']['output']>;
  /** Balance ID */
  id: Scalars['ID']['output'];
  /** The amount of funds that may be overdraft or spent on credit. */
  limit?: Maybe<Scalars['Float']['output']>;
};

/** Options for filtering Accounts. */
export type AccountFilter = {
  /** Specifies the source of the Account. */
  source?: InputMaybe<AccountSourceFilter>;
  /** The date of the earliest known Transaction. */
  transactedFirstOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the earliest known Transaction. */
  transactedFirstOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the earliest known Transaction. */
  transactedFirstOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the earliest known Transaction. */
  transactedFirstOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the earliest known Transaction. */
  transactedFirstOn_lte?: InputMaybe<Scalars['Date']['input']>;
  /** The date of the most recent known Transaction. */
  transactedLastOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the most recent known Transaction. */
  transactedLastOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the most recent known Transaction. */
  transactedLastOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the most recent known Transaction. */
  transactedLastOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the most recent known Transaction. */
  transactedLastOn_lte?: InputMaybe<Scalars['Date']['input']>;
  /** The classification of the Account. */
  type?: InputMaybe<Array<AccountType>>;
};

/** Options for filtering Merchants. */
export type AccountMerchantFilter = {
  /** The date of the first Transaction. */
  transactedFirstOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the first Transaction. */
  transactedFirstOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the first Transaction. */
  transactedFirstOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the first Transaction. */
  transactedFirstOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the first Transaction. */
  transactedFirstOn_lte?: InputMaybe<Scalars['Date']['input']>;
  /** The date of the most recent Transaction. */
  transactedLastOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the most recent Transaction. */
  transactedLastOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the most recent Transaction. */
  transactedLastOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the most recent Transaction. */
  transactedLastOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the most recent Transaction. */
  transactedLastOn_lte?: InputMaybe<Scalars['Date']['input']>;
};

/** Autogenerated input type of AccountMerchantUpdate */
export type AccountMerchantUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Merchant to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of AccountMerchantUpdate. */
export type AccountMerchantUpdatePayload = {
  __typename?: 'AccountMerchantUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated merchant. */
  record?: Maybe<Merchant>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Options for sorting Accounts. */
export enum AccountSort {
  /** Oldest First, Pending Last. */
  LastTransactedOnAsc = 'LAST_TRANSACTED_ON_ASC',
  /** Newest First, Pending First. */
  LastTransactedOnDesc = 'LAST_TRANSACTED_ON_DESC'
}

/** Source-specific filters. */
export type AccountSourceFilter = {
  /** MX account data. */
  mx?: InputMaybe<AccountSourceMxFilter>;
  /** Plaid account data. */
  plaid?: InputMaybe<AccountSourcePlaidFilter>;
};

/** Options for filtering inside MX's API payload. */
export type AccountSourceMxFilter = {
  /** The account number associated with the account. This will typically be a masked or partial account number. */
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  /** The annual percentage rate associated with the account. */
  apr?: InputMaybe<Scalars['Float']['input']>;
  /** The annual percentage yield associated with the account. */
  apy?: InputMaybe<Scalars['Float']['input']>;
  /** The balance that is available for use in asset accounts like checking and savings. PENDING transactions are typically taken into account with the available balance, but this may not always be the case. available_balance will usually be a positive value for all account types, determined in the same way as the balance field. */
  availableBalance?: InputMaybe<Scalars['Float']['input']>;
  /** The amount of credit available for use in liability accounts like credit cards and lines of credit. PENDING transactions are typically taken into account with available credit, but this may not always be the case. available_credit will usually be a positive value for all account types, determined in the same way as the balance field. */
  availableCredit?: InputMaybe<Scalars['Float']['input']>;
  /** The current balance of the account. PENDING transactions are typically not taken into account with the current balance, but this may not always be the case. This is the value used for the account balance displayed in MX UIs. The balance will usually be a positive value for all account types. Asset-type accounts (CHECKING, SAVINGS, INVESTMENT) may have a negative balance if they are in overdraft. Debt-type accounts (CREDIT_CARD, LOAN, LINE_OF_CREDIT, MORTGAGE) may have a negative balance if they are overpaid. */
  balance?: InputMaybe<Scalars['Float']['input']>;
  /** The cash balance of the account. */
  cashBalance?: InputMaybe<Scalars['Float']['input']>;
  /** The sum of money paid to the policyholder or annuity holder in the event the policy is voluntarily terminated before it matures, or the insured event occurs. */
  cashSurrenderValue?: InputMaybe<Scalars['Float']['input']>;
  /** The date and time at which the account was created on the MX Platform. */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  /** The credit limit associated with the account. */
  creditLimit?: InputMaybe<Scalars['Float']['input']>;
  /** The three-character ISO 4217 currency code. */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** The day of the month the payment is due. For example, the 14th is passed as 14. */
  dayPaymentIsDue?: InputMaybe<Scalars['Int']['input']>;
  /** The amount paid to the beneficiary of the account upon death of the account owner. */
  deathBenefit?: InputMaybe<Scalars['Int']['input']>;
  /** The unique identifier for the account. Defined by MX. */
  guid?: InputMaybe<Scalars['String']['input']>;
  /** The sum of all long holdings within this account, not including any that are shorted and not including cash. */
  holdingsValue?: InputMaybe<Scalars['Float']['input']>;
  /** The unique partner-defined identifier for the account */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The date and time at which the account was last successfully aggregated and received data. */
  importedAt?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the institution associated with this account. Defined by MX. */
  institutionCode?: InputMaybe<Scalars['String']['input']>;
  /** The name of the insured individual. */
  insuredName?: InputMaybe<Scalars['String']['input']>;
  /** The interest rate associated with the account. */
  interestRate?: InputMaybe<Scalars['Float']['input']>;
  /** This indicates whether an account has been closed. */
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the account is hidden. Defaults to `false`. */
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date and time of the most recent payment on the account. */
  lastPayment?: InputMaybe<Scalars['Float']['input']>;
  /** The amount of the most recent payment on the account. */
  lastPaymentAt?: InputMaybe<Scalars['String']['input']>;
  /** The amount of the loan associated with the account. */
  loanAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The date on which the account matures. */
  maturesOn?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the member associated with the account. Defined by MX. */
  memberGuid?: InputMaybe<Scalars['String']['input']>;
  /** The unique, partner-defined, identifier for the member associated with this account. */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether the associated member is managed by the user or the MX partner. Members created with the managed member feature will have this field set to false. */
  memberIsManagedByUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** Additional information a partner can store on the account. */
  metadata?: InputMaybe<Scalars['String']['input']>;
  /** The minimum balance associated with the account. */
  minimumBalance?: InputMaybe<Scalars['Float']['input']>;
  /** The minimum payment required for an account. This can apply to any debt account. */
  minimumPayment?: InputMaybe<Scalars['Float']['input']>;
  /** The human-readable name for the account. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** An alternate name for the account. */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** The original balance associated with the account. This will always be positive. */
  originalBalance?: InputMaybe<Scalars['Float']['input']>;
  /** The amount paid out to the insured individual or beneficiary under the conditions of the insurance policy. */
  payOutAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The date and time at which the next payment is due on the account. */
  paymentDueAt?: InputMaybe<Scalars['String']['input']>;
  /** The payoff balance for a debt account. This will normally be a positive number. */
  payoffBalance?: InputMaybe<Scalars['Float']['input']>;
  /** The insurance policy’s premium amount. */
  premiumAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The routing number for the account. */
  routingNumber?: InputMaybe<Scalars['String']['input']>;
  /** The date on which a debt account was started. */
  startedOn?: InputMaybe<Scalars['String']['input']>;
  /** The account’s subtype, e.g., PLAN_401_K, MONEY_MARKET, or HOME_EQUITY. */
  subtype?: InputMaybe<Scalars['String']['input']>;
  /** The total value of the account. */
  totalAccountValue?: InputMaybe<Scalars['Float']['input']>;
  /** The general or parent type of the account. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** The date and time at which the account was most recently updated. */
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the user associated with the account. Defined by MX. */
  userGuid?: InputMaybe<Scalars['String']['input']>;
  /** The unique, partner-defined, identifier for the user associated with this account. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Options for filtering inside Plaid's API payload. */
export type AccountSourcePlaidFilter = {
  /**
   * Plaid’s unique identifier for the account. This value will not change unless Plaid can't reconcile the account with the data returned by the financial institution. This may occur, for example, when the name of the account changes. If this happens a new `account_id` will be assigned to the account.
   *
   * The `account_id` can also change if the `access_token` is deleted and the same credentials that were used to generate that `access_token` are used to generate a new `access_token` on a later date. In that case, the new `account_id` will be different from the old `account_id`.
   *
   * If an account with a specific `account_id` disappears instead of changing, the account is likely closed. Closed accounts are not returned by the Plaid API.
   *
   * Like all Plaid identifiers, the `account_id` is case sensitive.
   */
  accountId?: InputMaybe<Scalars['String']['input']>;
  /** The last 2-4 alphanumeric characters of an account's official account number. Note that the mask may be non-unique between an Item's accounts, and it may also not match the mask that the bank displays to the user. */
  mask?: InputMaybe<Scalars['String']['input']>;
  /** The name of the account, either assigned by the user or by the financial institution itself */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The official name of the account as given by the financial institution */
  officialName?: InputMaybe<Scalars['String']['input']>;
  /** A unique and persistent identifier for accounts that can be used to trace multiple instances of the same account across different Items for depository accounts. This is currently an opt-in field and only supported for Chase Items. */
  persistentAccountId?: InputMaybe<Scalars['String']['input']>;
  /** See the [Account type schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a full listing of account types and corresponding subtypes. */
  subtype?: InputMaybe<Scalars['String']['input']>;
  /**
   * `investment:` Investment account. In API versions 2018-05-22 and earlier, this type is called `brokerage` instead.
   *
   * `credit:` Credit card
   *
   * `depository:` Depository account
   *
   * `loan:` Loan account
   *
   * `other:` Non-specified account type
   *
   * See the [Account type schema](https://plaid.com/docs/api/accounts#account-type-schema) for a full listing of account types and corresponding subtypes.
   */
  type?: InputMaybe<Scalars['String']['input']>;
  /**
   * The current verification status of an Auth Item initiated through Automated or Manual micro-deposits.  Returned for Auth Items only.
   *
   * `pending_automatic_verification`: The Item is pending automatic verification
   *
   * `pending_manual_verification`: The Item is pending manual micro-deposit verification. Items remain in this state until the user successfully verifies the two amounts.
   *
   * `automatically_verified`: The Item has successfully been automatically verified	
   *
   * `manually_verified`: The Item has successfully been manually verified
   *
   * `verification_expired`: Plaid was unable to automatically verify the deposit within 7 calendar days and will no longer attempt to validate the Item. Users may retry by submitting their information again through Link.
   *
   * `verification_failed`: The Item failed manual micro-deposit verification because the user exhausted all 3 verification attempts. Users may retry by submitting their information again through Link.
   */
  verificationStatus?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a data source for the Account. */
export enum AccountSourceType {
  /** MX */
  Mx = 'MX',
  /** Plaid */
  Plaid = 'PLAID'
}

export type AccountSources = MxAccount | PlaidAccount;

export enum AccountState {
  /** Terminated */
  Closed = 'CLOSED',
  /** Open */
  Open = 'OPEN'
}

/** Represents the classification of an Account. */
export enum AccountType {
  /** Checking and cash management. */
  Checking = 'CHECKING',
  /** Credit cards. */
  Credit = 'CREDIT',
  /** Brokerage, retirement and other investments. */
  Investment = 'INVESTMENT',
  /** Lines of credit, mortgage, student and installment loans. */
  Loan = 'LOAN',
  /** All other Account types. */
  Other = 'OTHER',
  /** Savings and money market. */
  Savings = 'SAVINGS'
}

/** Autogenerated input type of AccountUpdate */
export type AccountUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Account to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of AccountUpdate. */
export type AccountUpdatePayload = {
  __typename?: 'AccountUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated Account. */
  record?: Maybe<Account>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** ISO 3166-1 alpha-3 country code. */
export enum AddressCountryCode {
  /** United States of America */
  Usa = 'USA'
}

/**
 * A Connection represents the data source for a Profile's accounts and transactions, such as a Plaid **Item** or MX **member**.
 *
 * The easiest way to register connections is with the Quiltt Connector, which handles the configuration for Plaid Link and MX Connect.
 *
 */
export type Connection = {
  __typename?: 'Connection';
  /** A list of Accounts. */
  accounts: Array<Account>;
  /** Specifies whether this Connection is managed by an external system. */
  externallyManaged: Scalars['Boolean']['output'];
  /** The ID of the Connection. */
  id: Scalars['ID']['output'];
  /** The Institution of the Connection. */
  institution: Institution;
  /**
   * Custom metadata about the Connection, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/guides/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** API data from a specific source. */
  source?: Maybe<ConnectionSources>;
  /** The source of the Connection. */
  sourceType: ConnectionSourceType;
  /** API data from multiple sources. */
  sources?: Maybe<Array<ConnectionSources>>;
  /** The status of the Connection. */
  status: ConnectionStatus;
};


/**
 * A Connection represents the data source for a Profile's accounts and transactions, such as a Plaid **Item** or MX **member**.
 *
 * The easiest way to register connections is with the Quiltt Connector, which handles the configuration for Plaid Link and MX Connect.
 *
 */
export type ConnectionAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<AccountSort>;
};


/**
 * A Connection represents the data source for a Profile's accounts and transactions, such as a Plaid **Item** or MX **member**.
 *
 * The easiest way to register connections is with the Quiltt Connector, which handles the configuration for Plaid Link and MX Connect.
 *
 */
export type ConnectionSourceArgs = {
  type: ConnectionSourceType;
};


/**
 * A Connection represents the data source for a Profile's accounts and transactions, such as a Plaid **Item** or MX **member**.
 *
 * The easiest way to register connections is with the Quiltt Connector, which handles the configuration for Plaid Link and MX Connect.
 *
 */
export type ConnectionSourcesArgs = {
  types?: InputMaybe<Array<ConnectionSourceType>>;
};

/** Autogenerated return type of ConnectionCreated. */
export type ConnectionCreatedPayload = {
  __typename?: 'ConnectionCreatedPayload';
  /** Connection */
  connection?: Maybe<Connection>;
};

/** Autogenerated input type of ConnectionDelete */
export type ConnectionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Connection to be deleted. */
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of ConnectionDelete. */
export type ConnectionDeletePayload = {
  __typename?: 'ConnectionDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The deleted Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Represents the requested Connection features for initializing a Connector session. */
export enum ConnectionFeature {
  /** Verify account numbers to support money movement operations. */
  AccountVerification = 'ACCOUNT_VERIFICATION',
  /** Verify account-holder identity information. */
  Identity = 'IDENTITY',
  /** Access deep transaction history. */
  Transactions = 'TRANSACTIONS'
}

/** Options for filtering Connections. */
export type ConnectionFilter = {
  /** Specifies the source of the Connection. */
  source?: InputMaybe<ConnectionSourceFilter>;
  /** The status of the Connection. */
  status?: InputMaybe<Array<ConnectionStatus>>;
};

/** Autogenerated input type of ConnectionPlaidImport */
export type ConnectionPlaidImportInput = {
  /** The `access_token` of the Plaid Item to be imported. */
  accessToken: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Specifies whether the Connection will be managed by an external system. */
  externallyManaged?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of ConnectionPlaidImport. */
export type ConnectionPlaidImportPayload = {
  __typename?: 'ConnectionPlaidImportPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A list of Plaid API errors from the mutation. */
  errors?: Maybe<Array<PlaidMutationError>>;
  /** The imported Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Source-specific filters. */
export type ConnectionSourceFilter = {
  /** MX Member data. */
  mx?: InputMaybe<ConnectionSourceMxFilter>;
  /** Plaid Item data. */
  plaid?: InputMaybe<ConnectionSourcePlaidFilter>;
};

/** Options for filtering inside MX's API payload. */
export type ConnectionSourceMxFilter = {
  /**
   * The date and time the most recent aggregation-type job was started, given in ISO 8601 format with a time component. A job will automatically be started when a member is created or its credentials are updated, unless the `skip_aggregation` parameter is used. Jobs can also be started via manual aggregations, background aggregations, API endpoints, or when opening an MX widget. A job can be a normal aggregation, or a premium job such as identification, verification, fetching statements, or fetching an extended transaction history.
   *
   */
  aggregatedAt?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether background aggregation is disabled for the member. */
  backgroundAggregationIsDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates the state of a member’s aggregation. See member connection statuses for more information. */
  connectionStatus?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the member. Defined by MX. */
  guid?: InputMaybe<Scalars['String']['input']>;
  /** The partner-defined unique identifier for the member. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the institution associated with the member. Defined by MX. */
  institutionCode?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether the member was being aggregated at the time of the request. */
  isBeingAggregated?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * This indicates whether the member is managed by the user or the MX partner. Members created with the managed member feature will have this field set to false.
   *
   */
  isManagedByUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the member uses OAuth to authenticate. Defaults to `false`. */
  isOauth?: InputMaybe<Scalars['Boolean']['input']>;
  /** Additional information you can store on this member. */
  metadata?: InputMaybe<Scalars['String']['input']>;
  /** The name of the member. */
  name?: InputMaybe<Scalars['String']['input']>;
  oauthWindowUri?: InputMaybe<Scalars['String']['input']>;
  /** The date and time the member was last successfully aggregated. */
  successfullyAggregatedAt?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the user associated with the member. Defined by MX. */
  userGuid?: InputMaybe<Scalars['String']['input']>;
  /** The unique partner-defined identifier for the user associated with the member. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Options for filtering inside Plaid's API payload. */
export type ConnectionSourcePlaidFilter = {
  /** A list of products available for the Item that have not yet been accessed. The contents of this array will be mutually exclusive with `billed_products`. */
  availableProducts?: InputMaybe<Array<Scalars['String']['input']>>;
  /** A list of products that have been billed for the Item. The contents of this array will be mutually exclusive with `available_products`. Note - `billed_products` is populated in all environments but only requests in Production are billed. Also note that products that are billed on a pay-per-call basis rather than a pay-per-Item basis, such as `balance`, will not appear here. */
  billedProducts?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * The RFC 3339 timestamp after which the consent provided by the end user will expire. Upon consent expiration, the item will enter the `ITEM_LOGIN_REQUIRED` error state. To circumvent the `ITEM_LOGIN_REQUIRED` error and maintain continuous consent, the end user can reauthenticate via Link’s update mode in advance of the consent expiration time.
   *
   * Note - This is only relevant for certain OAuth-based institutions. For all other institutions, this field will be null.
   */
  consentExpirationTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Beta: A list of products that have gone through consent collection for the Item. Only present for those enabled in the beta. */
  consentedProducts?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The Plaid Institution ID associated with the Item. Field is `null` for Items created via Same Day Micro-deposits. */
  institutionId?: InputMaybe<Scalars['String']['input']>;
  /** The Plaid Item ID. The `item_id` is always unique; linking the same account at the same institution twice will result in two Items with different `item_id` values. Like all Plaid identifiers, the `item_id` is case-sensitive. */
  itemId?: InputMaybe<Scalars['String']['input']>;
  /** A list of authorized products for the Item. */
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Indicates whether an Item requires user interaction to be updated, which can be the case for Items with some forms of two-factor authentication.
   *
   * `background` - Item can be updated in the background
   *
   * `user_present_required` - Item requires user interaction to be updated
   */
  updateType?: InputMaybe<Scalars['String']['input']>;
  /** The URL registered to receive webhooks for the Item. */
  webhook?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a data source for the Connection. */
export enum ConnectionSourceType {
  /** MX */
  Mx = 'MX',
  /** Plaid */
  Plaid = 'PLAID'
}

export type ConnectionSources = MxConnection | PlaidConnection;

/** Represents the status of a Connection. */
export enum ConnectionStatus {
  /** The Connection provider is indicating an issue with the institution. */
  ErrorInstitution = 'ERROR_INSTITUTION',
  /** The Connection provider is experiencing a service interruption. */
  ErrorProvider = 'ERROR_PROVIDER',
  /** The Connection has a repairable error. Initialize a Connector session for the user to repair the connection. */
  ErrorRepairable = 'ERROR_REPAIRABLE',
  /** Quiltt is experiencing a service interruption. Visit our [Status page](https://status.quiltt.io) for more information. */
  ErrorService = 'ERROR_SERVICE',
  /** The Connection is being initialized. */
  Initializing = 'INITIALIZING',
  /** The Connection is up to date. */
  Synced = 'SYNCED',
  /** The Connection is currently syncing. */
  Syncing = 'SYNCING'
}

/** Autogenerated input type of ConnectionUpdate */
export type ConnectionUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Connection to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of ConnectionUpdate. */
export type ConnectionUpdatePayload = {
  __typename?: 'ConnectionUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated return type of ConnectionUpdated. */
export type ConnectionUpdatedPayload = {
  __typename?: 'ConnectionUpdatedPayload';
  /** Connection */
  connection?: Maybe<Connection>;
};

/** Autogenerated input type of ConnectorMxClose */
export type ConnectorMxCloseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `connectorToken` string from the Connector session initialization response. */
  connectorToken: Scalars['String']['input'];
  /** The `metadata` object from MX Connect's `memberConnected` callback. */
  metadata: Scalars['JSON']['input'];
};

/** Autogenerated return type of ConnectorMxClose. */
export type ConnectorMxClosePayload = {
  __typename?: 'ConnectorMxClosePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A list of MX API errors from the mutation. */
  errors?: Maybe<Array<MxMutationError>>;
  /** The Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of ConnectorMxInitialize */
export type ConnectorMxInitializeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Used as a redirect destination at the end of OAuth, if used with `is_mobile_webview: true` or `oauth_referral_source: "APP"`.
   *
   */
  clientRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Load the Connect widget in the specified `color_scheme`; options are `light` and `dark`. Defaults to `light`.
   *
   */
  colorScheme?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID of the Connection that will be updated with MX Connect. This is typically used when repairing a connection with an `ERROR_REPAIRABLE` status.
   *
   */
  connectionId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Set to `true` or `false` to explicitly set the value of `background_aggregation_is_disabled` for new members created through the Connect widget
   *
   */
  disableBackgroundAgg?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Connection features to be enabled. */
  features?: InputMaybe<Array<ConnectionFeature>>;
  /**
   * When set to `false` while creating or updating a member, transaction data will not be automatically aggregated. Future manual or background aggregations will not be affected.
   *
   */
  includeTransactions?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Renders the widget in a mobile WebView. Executes URL updates in place of the JavaScript event postMessages.
   *
   */
  isMobileWebview?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * This determines how MX will respond to the result of an OAuth flow.
   *
   * When set to `APP`, MX will redirect to the URI specified in the ui_message_webview_url_scheme.
   *
   * When set to `BROWSER`, MX will send a postMessage but not redirect.
   *
   * If `is_mobile_webview` is `true`, this defaults to `APP`. If false, it defaults to `BROWSER`.
   *
   */
  oauthReferralSource?: InputMaybe<Scalars['String']['input']>;
  /**
   * Used in postMessages and OAuth redirects in WebViews. Defaults to `mx``.
   *
   */
  uiMessageWebviewUrlScheme?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ConnectorMxInitialize. */
export type ConnectorMxInitializePayload = {
  __typename?: 'ConnectorMxInitializePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A list of MX API errors from the mutation. */
  errors?: Maybe<Array<MxMutationError>>;
  /** Connector payload for MX Connect. */
  record?: Maybe<MxConnector>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of ConnectorPlaidClose */
export type ConnectorPlaidCloseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `connectorToken` string from the Connector session initialization response. */
  connectorToken: Scalars['String']['input'];
  /** The `metadata` object from Plaid Link's `onSuccess` callback. */
  metadata: Scalars['JSON']['input'];
  /** The `public_token` string from Plaid Link's `onSuccess` callback. */
  publicToken: Scalars['String']['input'];
};

/** Autogenerated return type of ConnectorPlaidClose. */
export type ConnectorPlaidClosePayload = {
  __typename?: 'ConnectorPlaidClosePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A list of Plaid API errors from the mutation. */
  errors?: Maybe<Array<PlaidMutationError>>;
  /** The Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of ConnectorPlaidInitialize */
export type ConnectorPlaidInitializeInput = {
  /**
   * By default, Link will provide limited account filtering: it will only display Institutions that are compatible with all products supplied in the `products` parameter of `/link/token/create`, and, if `auth` is specified in the `products` array, will also filter out accounts other than `checking` and `savings` accounts on the Account Select pane. You can further limit the accounts shown in Link by using `account_filters` to specify the account subtypes to be shown in Link. Only the specified subtypes will be shown. This filtering applies to both the Account Select view (if enabled) and the Institution Select view. Institutions that do not support the selected subtypes will be omitted from Link. To indicate that all subtypes should be shown, use the value `"all"`. If the `account_filters` filter is used, any account type for which a filter is not specified will be entirely omitted from Link. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema).
   *
   * For institutions using OAuth, the filter will not affect the list of accounts shown by the bank in the OAuth window.
   */
  accountFilters?: InputMaybe<PlaidLinkTokenAccountFilters>;
  /**
   * (Beta) This field has no effect unless you are participating in the Product Scope Transparency beta program.
   * List of additional Plaid product(s) you wish to collect consent for. These products will not be billed until you start using them by calling the relevant endpoints.
   *
   * `balance` is *not* a valid value, the Balance product does not require explicit initialization and will automatically have consent collected.
   *
   * Institutions that do not support these products will still be shown in Link
   */
  additionalConsentedProducts?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The name of your app's Android package. Required if using the `link_token` to initialize Link on Android. When creating a `link_token` for initializing Link on other platforms, this field must be left blank. Any package name specified here must also be added to the Allowed Android package names setting on the [developer dashboard](https://dashboard.plaid.com/team/api). */
  androidPackageName?: InputMaybe<Scalars['String']['input']>;
  /** Specifies options for initializing Link for use with the Auth product. This field can be used to enable or disable extended Auth flows for the resulting Link session. Omitting any field will result in a default that can be configured by your account manager. */
  auth?: InputMaybe<PlaidLinkTokenCreateRequestAuth>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The name of your application, as it should be displayed in Link. Maximum length of 30 characters. If a value longer than 30 characters is provided, Link will display "This Application" instead. */
  clientName?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID of the Connection that will be updated with Plaid Link. This is typically used when repairing a connection with an `ERROR_REPAIRABLE` status or for completing the Same-day (manual) Micro-deposit flow.
   *
   */
  connectionId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Specify an array of Plaid-supported country codes using the ISO-3166-1 alpha-2 country code standard. Institutions from all listed countries will be shown. For a complete mapping of supported products by country, see https://plaid.com/global/.
   *
   * If Link is launched with multiple country codes, only products that you are enabled for in all countries will be used by Link. Note that while all countries are enabled by default in Sandbox and Development, in Production only US and Canada are enabled by default. Access to European institutions requires additional compliance steps. To request access to European institutions in the Production environment, [file a product access Support ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access) via the Plaid dashboard. If you initialize with a European country code, your users will see the European consent panel during the Link flow.
   *
   * If using a Link customization, make sure the country codes in the customization match those specified in `country_codes`, or the customization may not be applied.
   *
   * If using the Auth features Instant Match, Same-day Micro-deposits, or Automated Micro-deposits, `country_codes` must be set to `['US']`.
   */
  countryCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Configuration parameters for EU flows */
  euConfig?: InputMaybe<PlaidLinkTokenEuConfig>;
  /** The Connection features to be enabled. */
  features?: InputMaybe<Array<ConnectionFeature>>;
  /**
   * The language that Link should be displayed in. When initializing with Identity Verification, this field is not used; for more details, see [Identity Verification supported languages](https://www.plaid.com/docs/identity-verification/#supported-languages).
   *
   * Supported languages are:
   * - Danish (`'da'`)
   * - Dutch (`'nl'`)
   * - English (`'en'`)
   * - Estonian (`'et'`)
   * - French (`'fr'`)
   * - German (`'de'`)
   * - Italian (`'it'`)
   * - Latvian (`'lv'`)
   * - Lithuanian (`'lt'`)
   * - Norwegian (`'no'`)
   * - Polish (`'pl'`)
   * - Portuguese (`'pt'`)
   * - Romanian (`'ro'`)
   * - Spanish (`'es'`)
   * - Swedish (`'se'`)
   *
   * When using a Link customization, the language configured here must match the setting in the customization, or the customization will not be applied.
   */
  language?: InputMaybe<Scalars['String']['input']>;
  /** The name of the Link customization from the Plaid Dashboard to be applied to Link. If not specified, the `default` customization will be used. When using a Link customization, the language in the customization must match the language selected via the `language` parameter, and the countries in the customization should match the country codes selected via `country_codes`. */
  linkCustomizationName?: InputMaybe<Scalars['String']['input']>;
  /**
   * List of Plaid product(s) you wish to use. If launching Link in update mode, should be omitted; required otherwise.
   *
   * `balance` is *not* a valid value, the Balance product does not require explicit initialization and will automatically be initialized when any other product is initialized.
   *
   * The products specified here will determine which institutions will be available to your users in Link. Only institutions that support *all* requested products can be selected; a if a user attempts to select an institution that does not support a listed product, a "Connectivity not supported" error message will appear in Link. To maximize the number of institutions available, initialize Link with the minimal product set required for your use case. Additional products can be added after Link initialization by calling the relevant endpoints. For details and exceptions, see [Choosing when to initialize products](https://plaid.com/docs/link/initializing-products/).
   *
   * Note that, unless you have opted to disable Instant Match support, institutions that support Instant Match will also be shown in Link if `auth` is specified as a product, even though these institutions do not contain `auth` in their product array.
   *
   * In Production, you will be billed for each product that you specify when initializing Link. Note that a product cannot be removed from an Item once the Item has been initialized with that product. To stop billing on an Item for subscription-based products, such as Liabilities, Investments, and Transactions, remove the Item via `/item/remove`.
   */
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  /** A URI indicating the destination where a user should be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or via a webview. The `redirect_uri` should not contain any query parameters. When used in Production or Development, must be an https URI. To specify any subdomain, use `*` as a wildcard character, e.g. `https://*.example.com/oauth.html`. If `android_package_name` is specified, this field should be left blank.  Note that any redirect URI must also be added to the Allowed redirect URIs list in the [developer dashboard](https://dashboard.plaid.com/team/api). */
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  /** Specifies options for initializing Link for [update mode](https://plaid.com/docs/link/update-mode). */
  update?: InputMaybe<PlaidLinkTokenCreateRequestUpdate>;
};

/** Autogenerated return type of ConnectorPlaidInitialize. */
export type ConnectorPlaidInitializePayload = {
  __typename?: 'ConnectorPlaidInitializePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A list of Plaid API errors from the mutation. */
  errors?: Maybe<Array<PlaidMutationError>>;
  /** Connector payload for Plaid Link. */
  record?: Maybe<PlaidConnector>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Represents the next step with initializing a Connector session. */
export enum ConnectorStatus {
  /** Indicates that the end-user should be prompted to continue with the Connector flow. */
  ActionRequired = 'ACTION_REQUIRED',
  /** Indicates that no action is required from the end-user. */
  Continue = 'CONTINUE'
}

/** Represents a supported ISO-4217 currency code. */
export enum CurrencyCode {
  /** United Arab Emirates Dirham */
  Aed = 'AED',
  /** Afghan Afghani */
  Afn = 'AFN',
  /** Albanian Lek */
  All = 'ALL',
  /** Armenian Dram */
  Amd = 'AMD',
  /** Netherlands Antillean Gulden */
  Ang = 'ANG',
  /** Angolan Kwanza */
  Aoa = 'AOA',
  /** Argentine Peso */
  Ars = 'ARS',
  /** Australian Dollar */
  Aud = 'AUD',
  /** Aruban Florin */
  Awg = 'AWG',
  /** Azerbaijani Manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark */
  Bam = 'BAM',
  /** Barbadian Dollar */
  Bbd = 'BBD',
  /** Bangladeshi Taka */
  Bdt = 'BDT',
  /** Bulgarian Lev */
  Bgn = 'BGN',
  /** Bahraini Dinar */
  Bhd = 'BHD',
  /** Burundian Franc */
  Bif = 'BIF',
  /** Bermudian Dollar */
  Bmd = 'BMD',
  /** Brunei Dollar */
  Bnd = 'BND',
  /** Bolivian Boliviano */
  Bob = 'BOB',
  /** Brazilian Real */
  Brl = 'BRL',
  /** Bahamian Dollar */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum */
  Btn = 'BTN',
  /** Botswana Pula */
  Bwp = 'BWP',
  /** Belarusian Ruble */
  Byn = 'BYN',
  /** Belarusian Ruble */
  Byr = 'BYR',
  /** Belize Dollar */
  Bzd = 'BZD',
  /** Canadian Dollar */
  Cad = 'CAD',
  /** Congolese Franc */
  Cdf = 'CDF',
  /** Swiss Franc */
  Chf = 'CHF',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean Peso */
  Clp = 'CLP',
  /** Chinese Renminbi Yuan */
  Cny = 'CNY',
  /** Colombian Peso */
  Cop = 'COP',
  /** Costa Rican Colón */
  Crc = 'CRC',
  /** Cuban Convertible Peso */
  Cuc = 'CUC',
  /** Cuban Peso */
  Cup = 'CUP',
  /** Cape Verdean Escudo */
  Cve = 'CVE',
  /** Czech Koruna */
  Czk = 'CZK',
  /** Djiboutian Franc */
  Djf = 'DJF',
  /** Danish Krone */
  Dkk = 'DKK',
  /** Dominican Peso */
  Dop = 'DOP',
  /** Algerian Dinar */
  Dzd = 'DZD',
  /** Egyptian Pound */
  Egp = 'EGP',
  /** Eritrean Nakfa */
  Ern = 'ERN',
  /** Ethiopian Birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fijian Dollar */
  Fjd = 'FJD',
  /** Falkland Pound */
  Fkp = 'FKP',
  /** British Pound */
  Gbp = 'GBP',
  /** Georgian Lari */
  Gel = 'GEL',
  /** Ghanaian Cedi */
  Ghs = 'GHS',
  /** Gibraltar Pound */
  Gip = 'GIP',
  /** Gambian Dalasi */
  Gmd = 'GMD',
  /** Guinean Franc */
  Gnf = 'GNF',
  /** Guatemalan Quetzal */
  Gtq = 'GTQ',
  /** Guyanese Dollar */
  Gyd = 'GYD',
  /** Hong Kong Dollar */
  Hkd = 'HKD',
  /** Honduran Lempira */
  Hnl = 'HNL',
  /** Croatian Kuna */
  Hrk = 'HRK',
  /** Haitian Gourde */
  Htg = 'HTG',
  /** Hungarian Forint */
  Huf = 'HUF',
  /** Indonesian Rupiah */
  Idr = 'IDR',
  /** Israeli New Sheqel */
  Ils = 'ILS',
  /** Indian Rupee */
  Inr = 'INR',
  /** Iraqi Dinar */
  Iqd = 'IQD',
  /** Iranian Rial */
  Irr = 'IRR',
  /** Icelandic Króna */
  Isk = 'ISK',
  /** Jamaican Dollar */
  Jmd = 'JMD',
  /** Jordanian Dinar */
  Jod = 'JOD',
  /** Japanese Yen */
  Jpy = 'JPY',
  /** Kenyan Shilling */
  Kes = 'KES',
  /** Kyrgyzstani Som */
  Kgs = 'KGS',
  /** Cambodian Riel */
  Khr = 'KHR',
  /** Comorian Franc */
  Kmf = 'KMF',
  /** North Korean Won */
  Kpw = 'KPW',
  /** South Korean Won */
  Krw = 'KRW',
  /** Kuwaiti Dinar */
  Kwd = 'KWD',
  /** Cayman Islands Dollar */
  Kyd = 'KYD',
  /** Kazakhstani Tenge */
  Kzt = 'KZT',
  /** Lao Kip */
  Lak = 'LAK',
  /** Lebanese Pound */
  Lbp = 'LBP',
  /** Sri Lankan Rupee */
  Lkr = 'LKR',
  /** Liberian Dollar */
  Lrd = 'LRD',
  /** Lesotho Loti */
  Lsl = 'LSL',
  /** Libyan Dinar */
  Lyd = 'LYD',
  /** Moroccan Dirham */
  Mad = 'MAD',
  /** Moldovan Leu */
  Mdl = 'MDL',
  /** Malagasy Ariary */
  Mga = 'MGA',
  /** Macedonian Denar */
  Mkd = 'MKD',
  /** Myanmar Kyat */
  Mmk = 'MMK',
  /** Mongolian Tögrög */
  Mnt = 'MNT',
  /** Macanese Pataca */
  Mop = 'MOP',
  /** Mauritanian Ouguiya */
  Mru = 'MRU',
  /** Mauritian Rupee */
  Mur = 'MUR',
  /** Maldivian Rufiyaa */
  Mvr = 'MVR',
  /** Malawian Kwacha */
  Mwk = 'MWK',
  /** Mexican Peso */
  Mxn = 'MXN',
  /** Malaysian Ringgit */
  Myr = 'MYR',
  /** Mozambican Metical */
  Mzn = 'MZN',
  /** Namibian Dollar */
  Nad = 'NAD',
  /** Nigerian Naira */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba */
  Nio = 'NIO',
  /** Norwegian Krone */
  Nok = 'NOK',
  /** Nepalese Rupee */
  Npr = 'NPR',
  /** New Zealand Dollar */
  Nzd = 'NZD',
  /** Omani Rial */
  Omr = 'OMR',
  /** Panamanian Balboa */
  Pab = 'PAB',
  /** Peruvian Sol */
  Pen = 'PEN',
  /** Papua New Guinean Kina */
  Pgk = 'PGK',
  /** Philippine Peso */
  Php = 'PHP',
  /** Pakistani Rupee */
  Pkr = 'PKR',
  /** Polish Złoty */
  Pln = 'PLN',
  /** Paraguayan Guaraní */
  Pyg = 'PYG',
  /** Qatari Riyal */
  Qar = 'QAR',
  /** Romanian Leu */
  Ron = 'RON',
  /** Serbian Dinar */
  Rsd = 'RSD',
  /** Russian Ruble */
  Rub = 'RUB',
  /** Rwandan Franc */
  Rwf = 'RWF',
  /** Saudi Riyal */
  Sar = 'SAR',
  /** Solomon Islands Dollar */
  Sbd = 'SBD',
  /** Seychellois Rupee */
  Scr = 'SCR',
  /** Sudanese Pound */
  Sdg = 'SDG',
  /** Swedish Krona */
  Sek = 'SEK',
  /** Singapore Dollar */
  Sgd = 'SGD',
  /** Saint Helenian Pound */
  Shp = 'SHP',
  /** Slovak Koruna */
  Skk = 'SKK',
  /** Sierra Leonean Leone */
  Sll = 'SLL',
  /** Somali Shilling */
  Sos = 'SOS',
  /** Surinamese Dollar */
  Srd = 'SRD',
  /** South Sudanese Pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe Dobra */
  Std = 'STD',
  /** Salvadoran Colón */
  Svc = 'SVC',
  /** Syrian Pound */
  Syp = 'SYP',
  /** Swazi Lilangeni */
  Szl = 'SZL',
  /** Thai Baht */
  Thb = 'THB',
  /** Tajikistani Somoni */
  Tjs = 'TJS',
  /** Turkmenistani Manat */
  Tmt = 'TMT',
  /** Tunisian Dinar */
  Tnd = 'TND',
  /** Tongan Paʻanga */
  Top = 'TOP',
  /** Turkish Lira */
  Try = 'TRY',
  /** Trinidad and Tobago Dollar */
  Ttd = 'TTD',
  /** New Taiwan Dollar */
  Twd = 'TWD',
  /** Tanzanian Shilling */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia */
  Uah = 'UAH',
  /** Ugandan Shilling */
  Ugx = 'UGX',
  /** United States Dollar */
  Usd = 'USD',
  /** Uruguayan Peso */
  Uyu = 'UYU',
  /** Uzbekistan Som */
  Uzs = 'UZS',
  /** Venezuelan Bolívar Soberano */
  Ves = 'VES',
  /** Vietnamese Đồng */
  Vnd = 'VND',
  /** Vanuatu Vatu */
  Vuv = 'VUV',
  /** Samoan Tala */
  Wst = 'WST',
  /** Central African Cfa Franc */
  Xaf = 'XAF',
  /** Silver (Troy Ounce) */
  Xag = 'XAG',
  /** Gold (Troy Ounce) */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean Dollar */
  Xcd = 'XCD',
  /** Special Drawing Rights */
  Xdr = 'XDR',
  /** West African Cfa Franc */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** Cfp Franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Codes specifically reserved for testing purposes */
  Xts = 'XTS',
  /** Yemeni Rial */
  Yer = 'YER',
  /** South African Rand */
  Zar = 'ZAR',
  /** Zambian Kwacha */
  Zmk = 'ZMK',
  /** Zambian Kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean Dollar */
  Zwl = 'ZWL'
}

/** Represents an Error. */
export type Error = {
  __typename?: 'Error';
  /** A description of the error. */
  message?: Maybe<Scalars['String']['output']>;
  /** Which input value this error came from. */
  path?: Maybe<Array<Scalars['String']['output']>>;
};

/** Represents an Image. */
export type Image = {
  __typename?: 'Image';
  /** The source of the Image. */
  _sourcename: ImageSource;
  /** The URL for the Image. */
  url?: Maybe<Scalars['URL']['output']>;
};

/** Represents the data source for the Image. */
export enum ImageSource {
  /** MX */
  Mx = 'MX',
  /** Plaid */
  Plaid = 'PLAID',
  /** Spade */
  Spade = 'SPADE'
}

/** Represents an Institution. */
export type Institution = {
  __typename?: 'Institution';
  /** A single Logo. */
  logo?: Maybe<Image>;
  /** A list of Logos. */
  logos?: Maybe<Array<Image>>;
  /** The name of the Institution. */
  name: Scalars['String']['output'];
  /** API data from a specific source. */
  source?: Maybe<InstitutionSources>;
  /** API data from multiple sources. */
  sources?: Maybe<Array<InstitutionSources>>;
};


/** Represents an Institution. */
export type InstitutionLogoArgs = {
  source?: InputMaybe<ImageSource>;
};


/** Represents an Institution. */
export type InstitutionLogosArgs = {
  sources?: InputMaybe<Array<ImageSource>>;
};


/** Represents an Institution. */
export type InstitutionSourceArgs = {
  type: InstitutionSourceType;
};


/** Represents an Institution. */
export type InstitutionSourcesArgs = {
  types?: InputMaybe<Array<InstitutionSourceType>>;
};

/** Represents a data source for the Institution. */
export enum InstitutionSourceType {
  /** MX */
  Mx = 'MX',
  /** Plaid */
  Plaid = 'PLAID'
}

export type InstitutionSources = MxInstitution | PlaidInstitution;

/** A Merchant represents the accounting of a merchant relationship. */
export type Merchant = {
  __typename?: 'Merchant';
  /** The ISO-4217 currency code of the Account */
  currencyCode?: Maybe<CurrencyCode>;
  /** The ID of the Merchant. */
  id: Scalars['ID']['output'];
  /**
   * Custom metadata about the Merchant, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/guides/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** The Name of the Account */
  name: Scalars['String']['output'];
  /** API data from a specific source. */
  source?: Maybe<MerchantSources>;
  /** API data from multiple sources. */
  sources?: Maybe<Array<MerchantSources>>;
  /** The State of the Account */
  state: AccountState;
  /** The date of the earliest known Transaction. */
  transactedFirstOn?: Maybe<Scalars['Date']['output']>;
  /** The date of the most recent known Transaction. */
  transactedLastOn?: Maybe<Scalars['Date']['output']>;
  /** A limited list of Transactions. Use `transactionsConnection` for a full paginated list. */
  transactions: Array<Transaction>;
  /** A paginated list of Transactions. */
  transactionsConnection: TransactionConnection;
};


/** A Merchant represents the accounting of a merchant relationship. */
export type MerchantSourceArgs = {
  type: MerchantSourceType;
};


/** A Merchant represents the accounting of a merchant relationship. */
export type MerchantSourcesArgs = {
  types?: InputMaybe<Array<MerchantSourceType>>;
};


/** A Merchant represents the accounting of a merchant relationship. */
export type MerchantTransactionsArgs = {
  filter?: InputMaybe<TransactionFilter>;
  limit?: Scalars['Int']['input'];
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<TransactionSort>;
};


/** A Merchant represents the accounting of a merchant relationship. */
export type MerchantTransactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<TransactionSort>;
};

/** Represents a data source for the Merchant. */
export enum MerchantSourceType {
  /** Plaid */
  Plaid = 'PLAID',
  /** Spade */
  Spade = 'SPADE'
}

export type MerchantSources = PlaidMerchant | SpadeMerchant;

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Update an Account's metadata. */
  accountUpdate?: Maybe<AccountUpdatePayload>;
  /** Delete a Connection. */
  connectionDelete?: Maybe<ConnectionDeletePayload>;
  /** Import an existing Plaid Item as a Connection in Quiltt. */
  connectionPlaidImport?: Maybe<ConnectionPlaidImportPayload>;
  /** Update a Connection's metadata. */
  connectionUpdate?: Maybe<ConnectionUpdatePayload>;
  /** Create or update an MX-sourced Connection from a successful MX Connect submission. */
  connectorMxClose?: Maybe<ConnectorMxClosePayload>;
  /** Generate a widget URL to initialize MX Connect. */
  connectorMxInitialize?: Maybe<ConnectorMxInitializePayload>;
  /** Create or update a Plaid-sourced Connection from a successful Plaid Link submission. */
  connectorPlaidClose?: Maybe<ConnectorPlaidClosePayload>;
  /** Generate a Plaid Link token to initialize Plaid Link. */
  connectorPlaidInitialize?: Maybe<ConnectorPlaidInitializePayload>;
  /** Update a Merchant's metadata. */
  merchantUpdate?: Maybe<AccountMerchantUpdatePayload>;
  /**
   * Create a Plaid processor token to send to one of Plaid's integration partners.
   * @deprecated Deprecated from GraphQL
   */
  plaidProcessorTokenCreate?: Maybe<PlaidProcessorTokenCreatePayload>;
  /** Update Profile information. */
  profileUpdate?: Maybe<ProfileUpdatePayload>;
  /** Update a transaction's metadata. */
  transactionUpdate?: Maybe<TransactionUpdatePayload>;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationAccountUpdateArgs = {
  input: AccountUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectionDeleteArgs = {
  input: ConnectionDeleteInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectionPlaidImportArgs = {
  input: ConnectionPlaidImportInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectionUpdateArgs = {
  input: ConnectionUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorMxCloseArgs = {
  input: ConnectorMxCloseInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorMxInitializeArgs = {
  input: ConnectorMxInitializeInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorPlaidCloseArgs = {
  input: ConnectorPlaidCloseInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorPlaidInitializeArgs = {
  input: ConnectorPlaidInitializeInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationMerchantUpdateArgs = {
  input: AccountMerchantUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationPlaidProcessorTokenCreateArgs = {
  input: PlaidProcessorTokenCreateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationProfileUpdateArgs = {
  input: ProfileUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationTransactionUpdateArgs = {
  input: TransactionUpdateInput;
};

/** MX Account data. */
export type MxAccount = {
  __typename?: 'MxAccount';
  /** The source of the data. */
  _sourcename: AccountSourceType;
  /** The account number associated with the account. This will typically be a masked or partial account number. */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /** The annual percentage rate associated with the account. */
  apr?: Maybe<Scalars['Float']['output']>;
  /** The annual percentage yield associated with the account. */
  apy?: Maybe<Scalars['Float']['output']>;
  /** The balance that is available for use in asset accounts like checking and savings. PENDING transactions are typically taken into account with the available balance, but this may not always be the case. available_balance will usually be a positive value for all account types, determined in the same way as the balance field. */
  availableBalance?: Maybe<Scalars['Float']['output']>;
  /** The amount of credit available for use in liability accounts like credit cards and lines of credit. PENDING transactions are typically taken into account with available credit, but this may not always be the case. available_credit will usually be a positive value for all account types, determined in the same way as the balance field. */
  availableCredit?: Maybe<Scalars['Float']['output']>;
  /** The current balance of the account. PENDING transactions are typically not taken into account with the current balance, but this may not always be the case. This is the value used for the account balance displayed in MX UIs. The balance will usually be a positive value for all account types. Asset-type accounts (CHECKING, SAVINGS, INVESTMENT) may have a negative balance if they are in overdraft. Debt-type accounts (CREDIT_CARD, LOAN, LINE_OF_CREDIT, MORTGAGE) may have a negative balance if they are overpaid. */
  balance?: Maybe<Scalars['Float']['output']>;
  /** The cash balance of the account. */
  cashBalance?: Maybe<Scalars['Float']['output']>;
  /** The sum of money paid to the policyholder or annuity holder in the event the policy is voluntarily terminated before it matures, or the insured event occurs. */
  cashSurrenderValue?: Maybe<Scalars['Float']['output']>;
  /** The date and time at which the account was created on the MX Platform. */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** The credit limit associated with the account. */
  creditLimit?: Maybe<Scalars['Float']['output']>;
  /** The three-character ISO 4217 currency code. */
  currencyCode?: Maybe<Scalars['String']['output']>;
  /** The day of the month the payment is due. For example, the 14th is passed as 14. */
  dayPaymentIsDue?: Maybe<Scalars['Int']['output']>;
  /** The amount paid to the beneficiary of the account upon death of the account owner. */
  deathBenefit?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for the account. Defined by MX. */
  guid?: Maybe<Scalars['String']['output']>;
  /** The sum of all long holdings within this account, not including any that are shorted and not including cash. */
  holdingsValue?: Maybe<Scalars['Float']['output']>;
  /** The unique partner-defined identifier for the account */
  id?: Maybe<Scalars['String']['output']>;
  /** The date and time at which the account was last successfully aggregated and received data. */
  importedAt?: Maybe<Scalars['String']['output']>;
  /** A unique identifier for the institution associated with this account. Defined by MX. */
  institutionCode?: Maybe<Scalars['String']['output']>;
  /** The name of the insured individual. */
  insuredName?: Maybe<Scalars['String']['output']>;
  /** The interest rate associated with the account. */
  interestRate?: Maybe<Scalars['Float']['output']>;
  /** This indicates whether an account has been closed. */
  isClosed?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the account is hidden. Defaults to `false`. */
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  /** The date and time of the most recent payment on the account. */
  lastPayment?: Maybe<Scalars['Float']['output']>;
  /** The amount of the most recent payment on the account. */
  lastPaymentAt?: Maybe<Scalars['String']['output']>;
  /** The amount of the loan associated with the account. */
  loanAmount?: Maybe<Scalars['Float']['output']>;
  /** The date on which the account matures. */
  maturesOn?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the member associated with the account. Defined by MX. */
  memberGuid?: Maybe<Scalars['String']['output']>;
  /** The unique, partner-defined, identifier for the member associated with this account. */
  memberId?: Maybe<Scalars['String']['output']>;
  /** This indicates whether the associated member is managed by the user or the MX partner. Members created with the managed member feature will have this field set to false. */
  memberIsManagedByUser?: Maybe<Scalars['Boolean']['output']>;
  /** Additional information a partner can store on the account. */
  metadata?: Maybe<Scalars['String']['output']>;
  /** The minimum balance associated with the account. */
  minimumBalance?: Maybe<Scalars['Float']['output']>;
  /** The minimum payment required for an account. This can apply to any debt account. */
  minimumPayment?: Maybe<Scalars['Float']['output']>;
  /** The human-readable name for the account. */
  name?: Maybe<Scalars['String']['output']>;
  /** An alternate name for the account. */
  nickname?: Maybe<Scalars['String']['output']>;
  /** The original balance associated with the account. This will always be positive. */
  originalBalance?: Maybe<Scalars['Float']['output']>;
  /** The amount paid out to the insured individual or beneficiary under the conditions of the insurance policy. */
  payOutAmount?: Maybe<Scalars['Float']['output']>;
  /** The date and time at which the next payment is due on the account. */
  paymentDueAt?: Maybe<Scalars['String']['output']>;
  /** The payoff balance for a debt account. This will normally be a positive number. */
  payoffBalance?: Maybe<Scalars['Float']['output']>;
  /** The insurance policy’s premium amount. */
  premiumAmount?: Maybe<Scalars['Float']['output']>;
  /** The routing number for the account. */
  routingNumber?: Maybe<Scalars['String']['output']>;
  /** The date on which a debt account was started. */
  startedOn?: Maybe<Scalars['String']['output']>;
  /** The account’s subtype, e.g., PLAN_401_K, MONEY_MARKET, or HOME_EQUITY. */
  subtype?: Maybe<Scalars['String']['output']>;
  /** The total value of the account. */
  totalAccountValue?: Maybe<Scalars['Float']['output']>;
  /** The general or parent type of the account. */
  type?: Maybe<Scalars['String']['output']>;
  /** The date and time at which the account was most recently updated. */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the user associated with the account. Defined by MX. */
  userGuid?: Maybe<Scalars['String']['output']>;
  /** The unique, partner-defined, identifier for the user associated with this account. */
  userId?: Maybe<Scalars['String']['output']>;
};

/** MX Member data. */
export type MxConnection = {
  __typename?: 'MxConnection';
  /** The source of the data. */
  _sourcename: ConnectionSourceType;
  /**
   * The date and time the most recent aggregation-type job was started, given in ISO 8601 format with a time component. A job will automatically be started when a member is created or its credentials are updated, unless the `skip_aggregation` parameter is used. Jobs can also be started via manual aggregations, background aggregations, API endpoints, or when opening an MX widget. A job can be a normal aggregation, or a premium job such as identification, verification, fetching statements, or fetching an extended transaction history.
   *
   */
  aggregatedAt?: Maybe<Scalars['String']['output']>;
  /** This indicates whether background aggregation is disabled for the member. */
  backgroundAggregationIsDisabled: Scalars['Boolean']['output'];
  /** This indicates the state of a member’s aggregation. See member connection statuses for more information. */
  connectionStatus?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the member. Defined by MX. */
  guid?: Maybe<Scalars['String']['output']>;
  /** The partner-defined unique identifier for the member. */
  id?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the institution associated with the member. Defined by MX. */
  institutionCode?: Maybe<Scalars['String']['output']>;
  /** This indicates whether the member was being aggregated at the time of the request. */
  isBeingAggregated?: Maybe<Scalars['Boolean']['output']>;
  /**
   * This indicates whether the member is managed by the user or the MX partner. Members created with the managed member feature will have this field set to false.
   *
   */
  isManagedByUser?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the member uses OAuth to authenticate. Defaults to `false`. */
  isOauth?: Maybe<Scalars['Boolean']['output']>;
  /** Additional information you can store on this member. */
  metadata?: Maybe<Scalars['String']['output']>;
  /** The name of the member. */
  name?: Maybe<Scalars['String']['output']>;
  oauthWindowUri?: Maybe<Scalars['String']['output']>;
  /** The date and time the member was last successfully aggregated. */
  successfullyAggregatedAt?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the user associated with the member. Defined by MX. */
  userGuid?: Maybe<Scalars['String']['output']>;
  /** The unique partner-defined identifier for the user associated with the member. */
  userId?: Maybe<Scalars['String']['output']>;
};

/** The Connector response for MX Connect. */
export type MxConnector = {
  __typename?: 'MxConnector';
  /** The status of the Connector Session. */
  connectorStatus: ConnectorStatus;
  /** The Token for the Connector Session. */
  connectorToken?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** MX Institution data. */
export type MxInstitution = {
  __typename?: 'MxInstitution';
  /** The source of the data. */
  _sourcename: InstitutionSourceType;
  /** A unique identifier for each institution, defined by MX. */
  code?: Maybe<Scalars['String']['output']>;
  /** The URL of the institution for helping users recover a forgotten password. */
  forgotPasswordUrl?: Maybe<Scalars['String']['output']>;
  /** The URL of the institution for helping users recover a forgotten username. */
  forgotUsernameUrl?: Maybe<Scalars['String']['output']>;
  /** The URL for a 100px X 100px logo for each institution. A generic logo is returned for institutions that don’t have one. */
  mediumLogoUrl?: Maybe<Scalars['String']['output']>;
  /** An easy-to-read name for an institution, e.g., “Chase Bank” or “Wells Fargo Bank.” */
  name?: Maybe<Scalars['String']['output']>;
  /** String	The URL for a 50px X 50px logo for each institution. A generic logo is returned for institutions that don’t have one. */
  smallLogoUrl?: Maybe<Scalars['String']['output']>;
  /** This indicates whether the institution supports account identification. */
  supportsAccountIdentification?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the institution provides access to account statements. */
  supportsAccountStatement?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the institution supports account verification. */
  supportsAccountVerification?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the institution supports OAuth authentication. */
  supportsOauth?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the institution allows access to up to 24 months of transaction data. */
  supportsTransactionHistory?: Maybe<Scalars['Boolean']['output']>;
  /** The URL of the institution for helping users troubleshoot any other sign-in issue. */
  troubleSigningInUrl?: Maybe<Scalars['String']['output']>;
  /** The URL for particular institution’s website , e.g., www.chase.com. */
  url?: Maybe<Scalars['String']['output']>;
};

/** An MX API error encountered while executing the mutation. */
export type MxMutationError = {
  __typename?: 'MxMutationError';
  /** A developer-friendly representation of the MX error. */
  message: Scalars['String']['output'];
  /** A representation of the HTTP status code. */
  status: Scalars['String']['output'];
  /** A categorization of the MX error. */
  type: Scalars['String']['output'];
};

/** MX Transaction data. */
export type MxTransaction = {
  __typename?: 'MxTransaction';
  /** The source of the data. */
  _sourcename: TransactionSourceType;
  /** The unique identifier for the account associated with the transaction. Defined by MX. */
  accountGuid?: Maybe<Scalars['String']['output']>;
  /** The unique partner-defined identifier for the account associated with the transaction. This can only be set for partner-managed accounts. It should be ignored for user-managed transactions, even in occasional cases where it may return with a value. */
  accountId?: Maybe<Scalars['String']['output']>;
  /** The monetary amount of the transaction. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** The category of the transaction. */
  category?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the category assigned to the transaction. */
  categoryGuid?: Maybe<Scalars['String']['output']>;
  /** The check number for the transaction. */
  checkNumberString?: Maybe<Scalars['String']['output']>;
  /** The date and time the transaction was created. */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** The three-character ISO 4217 currency code, e.g. USD. */
  currencyCode?: Maybe<Scalars['String']['output']>;
  /** The date on which the transaction took place. This is the field used when searching for transactions by date. This field is generally the same as transacted_at, but uses posted_at as a fallback. */
  date?: Maybe<Scalars['String']['output']>;
  /** A human-readable version of the original_description field described below, e.g., “Sam’s Club,” “Johnny’s Tavern.” This is provided by the MX Platform. */
  description?: Maybe<Scalars['String']['output']>;
  /** The transaction type assigned by the partner. */
  extendedTransactionType?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the transaction. Defined by MX. */
  guid?: Maybe<Scalars['String']['output']>;
  /** The unique partner-defined identifier for the transaction. This can only be set for partner-managed transactions. It should be ignored for user-managed transactions, even in occasional cases where it may return with a value. */
  id?: Maybe<Scalars['String']['output']>;
  /** This indicates whether the transaction represents a bill pay. */
  isBillPay?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the transaction represents a direct deposit. */
  isDirectDeposit?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the transaction represents an expense. */
  isExpense?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the transaction represents a fee. */
  isFee?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the transaction represents income. */
  isIncome?: Maybe<Scalars['Boolean']['output']>;
  /** If the transaction is international as defined by the data provider, this field will be true. If the data provider determines it is not international then it will be false. It will be null if the data provider does not have this information. */
  isInternational?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the transaction represents an overdraft fee. */
  isOverdraftFee?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the transaction represents a payroll advance. */
  isPayrollAdvance?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether a transaction is a recurring credit or debit. */
  isRecurring?: Maybe<Scalars['Boolean']['output']>;
  /** This indicates whether the transaction represents a payment for a subscription service such as Netflix or Audible. */
  isSubscription?: Maybe<Scalars['Boolean']['output']>;
  /** The latitude of the location where the transaction occurred. The number is a signed decimal (e.g. Rio de Janeiro’s latitude is -22.9027800 and Tokyo’s latitude is 35.689488). */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** A human-readable description of the transaction, provided in a local language. */
  localizedDescription?: Maybe<Scalars['String']['output']>;
  /** Additional descriptive information about the transaction, provided in a local language. */
  localizedMemo?: Maybe<Scalars['String']['output']>;
  /** The longitude of the location where the transaction occurred. The number is a signed decimal (e.g. Rio de Janeiro’s longitude is -43.2075000 and Tokyo’s longitude is 139.691706). */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The unique identifier for the member associated with the transaction Defined by MX. */
  memberGuid?: Maybe<Scalars['String']['output']>;
  /** This indicates whether the associated member is managed by the user or the MX partner. Members created with the managed member feature will have this field set to false. */
  memberIsManagedByUser?: Maybe<Scalars['Boolean']['output']>;
  /** This field contains additional descriptive information about the transaction. */
  memo?: Maybe<Scalars['String']['output']>;
  /** The ISO 18245 category code for the transaction. */
  merchantCategoryCode?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for the merchant associated with this transaction. Defined by MX. */
  merchantGuid?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the merchant_location associated with this transaction. Defined by MX. */
  merchantLocationGuid?: Maybe<Scalars['String']['output']>;
  /** Custom data */
  metadata?: Maybe<Scalars['String']['output']>;
  /** The original description of the transaction as provided by our data feed. See description above for more information. */
  originalDescription?: Maybe<Scalars['String']['output']>;
  /** The date and time the transaction was posted to the account. */
  postedAt?: Maybe<Scalars['String']['output']>;
  /** The status of the transaction. This will be either POSTED or PENDING. */
  status?: Maybe<Scalars['String']['output']>;
  /** The parent category assigned to this transaction’s category. */
  topLevelCategory?: Maybe<Scalars['String']['output']>;
  /** The date and time the transaction took place. */
  transactedAt?: Maybe<Scalars['String']['output']>;
  /** The type of transaction. This will be either CREDIT or DEBIT. */
  type?: Maybe<Scalars['String']['output']>;
  /** The date and time the transaction was last updated. */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the user associated with this transaction. Defined by MX. */
  userGuid?: Maybe<Scalars['String']['output']>;
  /** The unique partner-defined identifier for the user associated with the transaction. */
  userId?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of Ping. */
export type PingPayload = {
  __typename?: 'PingPayload';
  /** Time */
  timestamp?: Maybe<Scalars['String']['output']>;
};

/** Information about the APR on the account. */
export type PlaidApr = {
  __typename?: 'PlaidAPR';
  /** Annual Percentage Rate applied. */
  aprPercentage: Scalars['Float']['output'];
  /** The type of balance to which the APR applies. */
  aprType: Scalars['String']['output'];
  /** Amount of money that is subjected to the APR if a balance was carried beyond payment due date. How it is calculated can vary by card issuer. It is often calculated as an average daily balance. */
  balanceSubjectToApr?: Maybe<Scalars['Float']['output']>;
  /** Amount of money charged due to interest from last statement. */
  interestChargeAmount?: Maybe<Scalars['Float']['output']>;
};

/** Plaid Account data. */
export type PlaidAccount = {
  __typename?: 'PlaidAccount';
  /** The source of the data. */
  _sourcename: AccountSourceType;
  /**
   * Plaid’s unique identifier for the account. This value will not change unless Plaid can't reconcile the account with the data returned by the financial institution. This may occur, for example, when the name of the account changes. If this happens a new `account_id` will be assigned to the account.
   *
   * The `account_id` can also change if the `access_token` is deleted and the same credentials that were used to generate that `access_token` are used to generate a new `access_token` on a later date. In that case, the new `account_id` will be different from the old `account_id`.
   *
   * If an account with a specific `account_id` disappears instead of changing, the account is likely closed. Closed accounts are not returned by the Plaid API.
   *
   * Like all Plaid identifiers, the `account_id` is case sensitive.
   */
  accountId: Scalars['String']['output'];
  /** A set of fields describing the balance for an account. Balance information may be cached unless the balance object was returned by `/accounts/balance/get`. */
  balances: PlaidAccountBalance;
  /** The liabilities account details */
  liabilities?: Maybe<PlaidAccountLiabilities>;
  /** The last 2-4 alphanumeric characters of an account's official account number. Note that the mask may be non-unique between an Item's accounts, and it may also not match the mask that the bank displays to the user. */
  mask?: Maybe<Scalars['String']['output']>;
  /** The name of the account, either assigned by the user or by the financial institution itself */
  name: Scalars['String']['output'];
  /** The official name of the account as given by the financial institution */
  officialName?: Maybe<Scalars['String']['output']>;
  /** A unique and persistent identifier for accounts that can be used to trace multiple instances of the same account across different Items for depository accounts. This is currently an opt-in field and only supported for Chase Items. */
  persistentAccountId?: Maybe<Scalars['String']['output']>;
  /** See the [Account type schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a full listing of account types and corresponding subtypes. */
  subtype?: Maybe<Scalars['String']['output']>;
  /**
   * `investment:` Investment account. In API versions 2018-05-22 and earlier, this type is called `brokerage` instead.
   *
   * `credit:` Credit card
   *
   * `depository:` Depository account
   *
   * `loan:` Loan account
   *
   * `other:` Non-specified account type
   *
   * See the [Account type schema](https://plaid.com/docs/api/accounts#account-type-schema) for a full listing of account types and corresponding subtypes.
   */
  type: Scalars['String']['output'];
  /**
   * The current verification status of an Auth Item initiated through Automated or Manual micro-deposits.  Returned for Auth Items only.
   *
   * `pending_automatic_verification`: The Item is pending automatic verification
   *
   * `pending_manual_verification`: The Item is pending manual micro-deposit verification. Items remain in this state until the user successfully verifies the two amounts.
   *
   * `automatically_verified`: The Item has successfully been automatically verified	
   *
   * `manually_verified`: The Item has successfully been manually verified
   *
   * `verification_expired`: Plaid was unable to automatically verify the deposit within 7 calendar days and will no longer attempt to validate the Item. Users may retry by submitting their information again through Link.
   *
   * `verification_failed`: The Item failed manual micro-deposit verification because the user exhausted all 3 verification attempts. Users may retry by submitting their information again through Link.
   */
  verificationStatus?: Maybe<Scalars['String']['output']>;
};

/** A set of fields describing the balance for an account. Balance information may be cached unless the balance object was returned by `/accounts/balance/get`. */
export type PlaidAccountBalance = {
  __typename?: 'PlaidAccountBalance';
  /**
   * The amount of funds available to be withdrawn from the account, as determined by the financial institution.
   *
   * For `credit`-type accounts, the `available` balance typically equals the `limit` less the `current` balance, less any pending outflows plus any pending inflows.
   *
   * For `depository`-type accounts, the `available` balance typically equals the `current` balance less any pending outflows plus any pending inflows. For `depository`-type accounts, the `available` balance does not include the overdraft limit.
   *
   * For `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and earlier), the `available` balance is the total cash available to withdraw as presented by the institution.
   *
   * Note that not all institutions calculate the `available`  balance. In the event that `available` balance is unavailable, Plaid will return an `available` balance value of `null`.
   *
   * Available balance may be cached and is not guaranteed to be up-to-date in realtime unless the value was returned by `/accounts/balance/get`.
   *
   * If `current` is `null` this field is guaranteed not to be `null`.
   */
  available?: Maybe<Scalars['Float']['output']>;
  /**
   * The total amount of funds in or owed by the account.
   *
   * For `credit`-type accounts, a positive balance indicates the amount owed; a negative amount indicates the lender owing the account holder.
   *
   * For `loan`-type accounts, the current balance is the principal remaining on the loan, except in the case of student loan accounts at Sallie Mae (`ins_116944`). For Sallie Mae student loans, the account's balance includes both principal and any outstanding interest.
   *
   * For `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and earlier), the current balance is the total value of assets as presented by the institution.
   *
   * Note that balance information may be cached unless the value was returned by `/accounts/balance/get`; if the Item is enabled for Transactions, the balance will be at least as recent as the most recent Transaction update. If you require realtime balance information, use the `available` balance as provided by `/accounts/balance/get`.
   *
   * When returned by `/accounts/balance/get`, this field may be `null`. When this happens, `available` is guaranteed not to be `null`.
   */
  current?: Maybe<Scalars['Float']['output']>;
  /** The ISO-4217 currency code of the balance. Always null if `unofficial_currency_code` is non-null. */
  isoCurrencyCode?: Maybe<Scalars['String']['output']>;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`) indicating the last time that the balance for the given account has been updated
   *
   * This is currently only provided when the `min_last_updated_datetime` is passed when calling `/accounts/balance/get` for `ins_128026` (Capital One).
   */
  lastUpdatedDatetime?: Maybe<Scalars['DateTime']['output']>;
  /**
   * For `credit`-type accounts, this represents the credit limit.
   *
   * For `depository`-type accounts, this represents the pre-arranged overdraft limit, which is common for current (checking) accounts in Europe.
   *
   * In North America, this field is typically only available for `credit`-type accounts.
   */
  limit?: Maybe<Scalars['Float']['output']>;
  /**
   * The unofficial currency code associated with the balance. Always null if `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode?: Maybe<Scalars['String']['output']>;
};

/** Plaid Liabilities data. */
export type PlaidAccountLiabilities = {
  __typename?: 'PlaidAccountLiabilities';
  /** The credit card account details. */
  credit?: Maybe<PlaidAccountLiabilitiesCredit>;
  /** The mortgage account details. */
  mortgage?: Maybe<PlaidAccountLiabilitiesMortgage>;
  /** The student loan account details. */
  student?: Maybe<PlaidAccountLiabilitiesStudent>;
};

/** Plaid Credit Card data. */
export type PlaidAccountLiabilitiesCredit = {
  __typename?: 'PlaidAccountLiabilitiesCredit';
  /** The ID of the account that this liability belongs to. */
  accountId?: Maybe<Scalars['String']['output']>;
  /** The various interest rates that apply to the account. APR information is not provided by all card issuers; if APR data is not available, this array will be empty. */
  aprs: Array<PlaidApr>;
  /** true if a payment is currently overdue. Availability for this field is limited. */
  isOverdue?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of the last payment. */
  lastPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** The date of the last payment. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). Availability for this field is limited. */
  lastPaymentDate?: Maybe<Scalars['Date']['output']>;
  /** The total amount owed as of the last statement issued */
  lastStatementBalance?: Maybe<Scalars['Float']['output']>;
  /** The date of the last statement. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  lastStatementIssueDate?: Maybe<Scalars['Date']['output']>;
  /** The minimum payment due for the next billing cycle. */
  minimumPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** The due date for the next payment. The due date is `null` if a payment is not expected. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  nextPaymentDueDate?: Maybe<Scalars['Date']['output']>;
};

/** Plaid Mortgage data. */
export type PlaidAccountLiabilitiesMortgage = {
  __typename?: 'PlaidAccountLiabilitiesMortgage';
  /** The ID of the account that this liability belongs to. */
  accountId: Scalars['String']['output'];
  /** The account number of the loan. */
  accountNumber: Scalars['String']['output'];
  /** The current outstanding amount charged for late payment. */
  currentLateFee?: Maybe<Scalars['Float']['output']>;
  /** Total amount held in escrow to pay taxes and insurance on behalf of the borrower. */
  escrowBalance?: Maybe<Scalars['Float']['output']>;
  /** Indicates whether the borrower has private mortgage insurance in effect. */
  hasPmi?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the borrower will pay a penalty for early payoff of mortgage. */
  hasPrepaymentPenalty?: Maybe<Scalars['Boolean']['output']>;
  /** Object containing metadata about the interest rate for the mortgage. */
  interestRate: PlaidMortgageInterestRate;
  /** The amount of the last payment. */
  lastPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** The date of the last payment. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  lastPaymentDate?: Maybe<Scalars['Date']['output']>;
  /** Full duration of mortgage as at origination (e.g. `10 year`). */
  loanTerm?: Maybe<Scalars['String']['output']>;
  /** Description of the type of loan, for example `conventional`, `fixed`, or `variable`. This field is provided directly from the loan servicer and does not have an enumerated set of possible values. */
  loanTypeDescription?: Maybe<Scalars['String']['output']>;
  /** Original date on which mortgage is due in full. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  maturityDate?: Maybe<Scalars['Date']['output']>;
  /** The amount of the next payment. */
  nextMonthlyPayment?: Maybe<Scalars['Float']['output']>;
  /** The due date for the next payment. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  nextPaymentDueDate?: Maybe<Scalars['Date']['output']>;
  /** The date on which the loan was initially lent. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  originationDate?: Maybe<Scalars['Date']['output']>;
  /** The original principal balance of the mortgage. */
  originationPrincipalAmount?: Maybe<Scalars['Float']['output']>;
  /** Amount of loan (principal + interest) past due for payment. */
  pastDueAmount?: Maybe<Scalars['Float']['output']>;
  /** Object containing fields describing property address. */
  propertyAddress: PlaidMortgagePropertyAddress;
  /** The year to date (YTD) interest paid. */
  ytdInterestPaid?: Maybe<Scalars['Float']['output']>;
  /** The YTD principal paid. */
  ytdPrincipalPaid?: Maybe<Scalars['Float']['output']>;
};

/** Plaid Student Loan data. */
export type PlaidAccountLiabilitiesStudent = {
  __typename?: 'PlaidAccountLiabilitiesStudent';
  /** The ID of the account that this liability belongs to. */
  accountId?: Maybe<Scalars['String']['output']>;
  /** The account number of the loan. For some institutions, this may be a masked version of the number (e.g., the last 4 digits instead of the entire number). */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /** The dates on which loaned funds were disbursed or will be disbursed. These are often in the past. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  disbursementDates?: Maybe<Array<Scalars['Date']['output']>>;
  /** The date when the student loan is expected to be paid off. Availability for this field is limited. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  expectedPayoffDate?: Maybe<Scalars['Date']['output']>;
  /** The guarantor of the student loan. */
  guarantor?: Maybe<Scalars['String']['output']>;
  /** The interest rate on the loan as a percentage. */
  interestRatePercentage: Scalars['Float']['output'];
  /** `true` if a payment is currently overdue. Availability for this field is limited. */
  isOverdue?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of the last payment. */
  lastPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** The date of the last payment. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  lastPaymentDate?: Maybe<Scalars['Date']['output']>;
  /** The date of the last statement. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  lastStatementIssueDate?: Maybe<Scalars['Date']['output']>;
  /** The type of loan, e.g., "Consolidation Loans". */
  loanName?: Maybe<Scalars['String']['output']>;
  /** An object representing the status of the student loan */
  loanStatus: PlaidStudentLoanStatus;
  /**
   * The minimum payment due for the next billing cycle. There are some exceptions:
   * Some institutions require a minimum payment across all loans associated with an account number. Our API presents that same minimum payment amount on each loan. The institutions that do this are: Great Lakes ( `ins_116861`), Firstmark (`ins_116295`), Commonbond Firstmark Services (`ins_116950`), Nelnet (`ins_116528`), EdFinancial Services (`ins_116304`), Granite State (`ins_116308`), and Oklahoma Student Loan Authority (`ins_116945`).
   * Firstmark (`ins_116295` ) and Navient (`ins_116248`) will display as $0 if there is an autopay program in effect.
   */
  minimumPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** The due date for the next payment. The due date is `null` if a payment is not expected. A payment is not expected if `loan_status.type` is `deferment`, `in_school`, `consolidated`, `paid in full`, or `transferred`. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  nextPaymentDueDate?: Maybe<Scalars['Date']['output']>;
  /** The date on which the loan was initially lent. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  originationDate?: Maybe<Scalars['Date']['output']>;
  /** The original principal balance of the loan. */
  originationPrincipalAmount?: Maybe<Scalars['Float']['output']>;
  /** The total dollar amount of the accrued interest balance. For Sallie Mae ( `ins_116944`), this amount is included in the current balance of the loan, so this field will return as `null`. */
  outstandingInterestAmount?: Maybe<Scalars['Float']['output']>;
  /** The relevant account number that should be used to reference this loan for payments. In the majority of cases, `payment_reference_number` will match `account_number,` but in some institutions, such as Great Lakes (`ins_116861`), it will be different. */
  paymentReferenceNumber?: Maybe<Scalars['String']['output']>;
  /** Information about the student's eligibility in the Public Service Loan Forgiveness program. This is only returned if the institution is FedLoan (`ins_116527`). */
  pslfStatus: PlaidPslfStatus;
  /** An object representing the repayment plan for the student loan */
  repaymentPlan: PlaidStudentRepaymentPlan;
  /** The sequence number of the student loan. Heartland ECSI (`ins_116948`) does not make this field available. */
  sequenceNumber?: Maybe<Scalars['String']['output']>;
  /** The address of the student loan servicer. This is generally the remittance address to which payments should be sent. */
  servicerAddress: PlaidServicerAddressData;
  /** The year to date (YTD) interest paid. Availability for this field is limited. */
  ytdInterestPaid?: Maybe<Scalars['Float']['output']>;
  /** The year to date (YTD) principal paid. Availability for this field is limited. */
  ytdPrincipalPaid?: Maybe<Scalars['Float']['output']>;
};

/** Metadata that captures information about the Auth features of an institution. */
export type PlaidAuthMetadata = {
  __typename?: 'PlaidAuthMetadata';
  /** Metadata specifically related to which auth methods an institution supports. */
  supportedMethods?: Maybe<PlaidAuthSupportedMethods>;
};

/** Metadata specifically related to which auth methods an institution supports. */
export type PlaidAuthSupportedMethods = {
  __typename?: 'PlaidAuthSupportedMethods';
  /** Indicates if automated microdeposits are supported. */
  automatedMicroDeposits: Scalars['Boolean']['output'];
  /** Indicates if instant auth is supported. */
  instantAuth: Scalars['Boolean']['output'];
  /** Indicates if instant match is supported. */
  instantMatch: Scalars['Boolean']['output'];
};

/** Plaid Item data. */
export type PlaidConnection = {
  __typename?: 'PlaidConnection';
  /** The source of the data. */
  _sourcename: ConnectionSourceType;
  /** A list of products available for the Item that have not yet been accessed. The contents of this array will be mutually exclusive with `billed_products`. */
  availableProducts: Array<Scalars['String']['output']>;
  /** A list of products that have been billed for the Item. The contents of this array will be mutually exclusive with `available_products`. Note - `billed_products` is populated in all environments but only requests in Production are billed. Also note that products that are billed on a pay-per-call basis rather than a pay-per-Item basis, such as `balance`, will not appear here. */
  billedProducts: Array<Scalars['String']['output']>;
  /**
   * The RFC 3339 timestamp after which the consent provided by the end user will expire. Upon consent expiration, the item will enter the `ITEM_LOGIN_REQUIRED` error state. To circumvent the `ITEM_LOGIN_REQUIRED` error and maintain continuous consent, the end user can reauthenticate via Link’s update mode in advance of the consent expiration time.
   *
   * Note - This is only relevant for certain OAuth-based institutions. For all other institutions, this field will be null.
   */
  consentExpirationTime?: Maybe<Scalars['DateTime']['output']>;
  /** Beta: A list of products that have gone through consent collection for the Item. Only present for those enabled in the beta. */
  consentedProducts?: Maybe<Array<Scalars['String']['output']>>;
  /** We use standard HTTP response codes for success and failure notifications, and our errors are further classified by `error_type`. In general, 200 HTTP codes correspond to success, 40X codes are for developer- or user-related failures, and 50X codes are for Plaid-related issues. An Item with a non-`null` error object will only be part of an API response when calling `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has occurred; if an error has occurred, an error code will be returned instead. */
  error?: Maybe<PlaidError>;
  /** The Plaid Institution ID associated with the Item. Field is `null` for Items created via Same Day Micro-deposits. */
  institutionId?: Maybe<Scalars['String']['output']>;
  /** The Plaid Item ID. The `item_id` is always unique; linking the same account at the same institution twice will result in two Items with different `item_id` values. Like all Plaid identifiers, the `item_id` is case-sensitive. */
  itemId: Scalars['String']['output'];
  /** A list of authorized products for the Item. */
  products: Array<Scalars['String']['output']>;
  /**
   * Indicates whether an Item requires user interaction to be updated, which can be the case for Items with some forms of two-factor authentication.
   *
   * `background` - Item can be updated in the background
   *
   * `user_present_required` - Item requires user interaction to be updated
   */
  updateType: Scalars['String']['output'];
  /** The URL registered to receive webhooks for the Item. */
  webhook?: Maybe<Scalars['String']['output']>;
};

/** The Connector response for Plaid Link. */
export type PlaidConnector = {
  __typename?: 'PlaidConnector';
  /** The status of the Connector Session. */
  connectorStatus: ConnectorStatus;
  /** The Token for the Connector Session. */
  connectorToken?: Maybe<Scalars['String']['output']>;
  /** The expiration date for the `link_token`, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format. A `link_token` created to generate a `public_token` that will be exchanged for a new `access_token` expires after 4 hours. A `link_token` created for an existing Item (such as when updating an existing `access_token` by launching Link in update mode) expires after 30 minutes. */
  expiration?: Maybe<Scalars['DateTime']['output']>;
  /** A `link_token`, which can be supplied to Link in order to initialize it and receive a `public_token`, which can be exchanged for an `access_token`. */
  linkToken?: Maybe<Scalars['String']['output']>;
  /** A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive. */
  requestId?: Maybe<Scalars['String']['output']>;
};

/** A filter to apply to `credit`-type accounts */
export type PlaidCreditFilter = {
  /** An array of account subtypes to display in Link. If not specified, all account subtypes will be shown. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema). */
  accountSubtypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A filter to apply to `depository`-type accounts */
export type PlaidDepositoryFilter = {
  /** An array of account subtypes to display in Link. If not specified, all account subtypes will be shown. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema). */
  accountSubtypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** We use standard HTTP response codes for success and failure notifications, and our errors are further classified by `error_type`. In general, 200 HTTP codes correspond to success, 40X codes are for developer- or user-related failures, and 50X codes are for Plaid-related issues. An Item with a non-`null` error object will only be part of an API response when calling `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has occurred; if an error has occurred, an error code will be returned instead. */
export type PlaidError = {
  __typename?: 'PlaidError';
  /**
   * In the Assets product, a request can pertain to more than one Item. If an error is returned for such a request, `causes` will return an array of errors containing a breakdown of these errors on the individual Item level, if any can be identified.
   *
   * `causes` will only be provided for the `error_type` `ASSET_REPORT_ERROR`. `causes` will also not be populated inside an error nested within a `warning` object.
   */
  causes?: Maybe<Array<Scalars['String']['output']>>;
  /**
   * A user-friendly representation of the error code. `null` if the error is not related to user action.
   *
   * This may change over time and is not safe for programmatic use.
   */
  displayMessage?: Maybe<Scalars['String']['output']>;
  /** The URL of a Plaid documentation page with more information about the error */
  documentationUrl?: Maybe<Scalars['String']['output']>;
  /** The particular error code. Safe for programmatic use. */
  errorCode: Scalars['String']['output'];
  /** A developer-friendly representation of the error code. This may change over time and is not safe for programmatic use. */
  errorMessage: Scalars['String']['output'];
  /** A broad categorization of the error. Safe for programmatic use. */
  errorType: Scalars['String']['output'];
  /** A unique ID identifying the request, to be used for troubleshooting purposes. This field will be omitted in errors provided by webhooks. */
  requestId?: Maybe<Scalars['String']['output']>;
  /** The HTTP status code associated with the error. This will only be returned in the response body when the error information is provided via a webhook. */
  status?: Maybe<Scalars['Float']['output']>;
  /** Suggested steps for resolving the error */
  suggestedAction?: Maybe<Scalars['String']['output']>;
};

/** Plaid Institution data. */
export type PlaidInstitution = {
  __typename?: 'PlaidInstitution';
  /** The source of the data. */
  _sourcename: InstitutionSourceType;
  /** Metadata that captures information about the Auth features of an institution. */
  authMetadata?: Maybe<PlaidAuthMetadata>;
  /** A list of the country codes supported by the institution. */
  countryCodes: Array<Scalars['String']['output']>;
  /** A partial list of DTC numbers associated with the institution. */
  dtcNumbers?: Maybe<Array<Scalars['String']['output']>>;
  /** Unique identifier for the institution */
  institutionId: Scalars['String']['output'];
  /** Base64 encoded representation of the institution's logo, returned as a base64 encoded 152x152 PNG. Not all institutions' logos are available. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The official name of the institution */
  name: Scalars['String']['output'];
  /** Indicates that the institution has a mandatory OAuth login flow. Note that `oauth` may be `false` even for institutions that support OAuth, if the institution is in the process of migrating to OAuth and some active Items still exist that do not use OAuth. */
  oauth: Scalars['Boolean']['output'];
  /** Hexadecimal representation of the primary color used by the institution */
  primaryColor?: Maybe<Scalars['String']['output']>;
  /** A list of the Plaid products supported by the institution. Note that only institutions that support Instant Auth will return `auth` in the product array; institutions that do not list `auth` may still support other Auth methods such as Instant Match or Automated Micro-deposit Verification. To identify institutions that support those methods, use the `auth_metadata` object. For more details, see [Full Auth coverage](https://plaid.com/docs/auth/coverage/). */
  products: Array<Scalars['String']['output']>;
  /** A partial list of routing numbers associated with the institution. This list is provided for the purpose of looking up institutions by routing number. It is not comprehensive and should never be used as a complete list of routing numbers for an institution. */
  routingNumbers: Array<Scalars['String']['output']>;
  /** The URL for the institution's website */
  url?: Maybe<Scalars['String']['output']>;
};

/** A filter to apply to `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and earlier). */
export type PlaidInvestmentFilter = {
  /** An array of account subtypes to display in Link. If not specified, all account subtypes will be shown. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema). */
  accountSubtypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * By default, Link will provide limited account filtering: it will only display Institutions that are compatible with all products supplied in the `products` parameter of `/link/token/create`, and, if `auth` is specified in the `products` array, will also filter out accounts other than `checking` and `savings` accounts on the Account Select pane. You can further limit the accounts shown in Link by using `account_filters` to specify the account subtypes to be shown in Link. Only the specified subtypes will be shown. This filtering applies to both the Account Select view (if enabled) and the Institution Select view. Institutions that do not support the selected subtypes will be omitted from Link. To indicate that all subtypes should be shown, use the value `"all"`. If the `account_filters` filter is used, any account type for which a filter is not specified will be entirely omitted from Link. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema).
 *
 * For institutions using OAuth, the filter will not affect the list of accounts shown by the bank in the OAuth window.
 */
export type PlaidLinkTokenAccountFilters = {
  /** A filter to apply to `credit`-type accounts */
  credit?: InputMaybe<PlaidCreditFilter>;
  /** A filter to apply to `depository`-type accounts */
  depository?: InputMaybe<PlaidDepositoryFilter>;
  /** A filter to apply to `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and earlier). */
  investment?: InputMaybe<PlaidInvestmentFilter>;
  /** A filter to apply to `loan`-type accounts */
  loan?: InputMaybe<PlaidLoanFilter>;
};

/** Specifies options for initializing Link for use with the Auth product. This field can be used to enable or disable extended Auth flows for the resulting Link session. Omitting any field will result in a default that can be configured by your account manager. */
export type PlaidLinkTokenCreateRequestAuth = {
  /** Specifies whether Auth Type Select is enabled for the Link session, allowing the end user to choose between linking instantly or manually prior to selecting their financial institution. Note that this can only be true if `same_day_microdeposits_enabled` is set to true. */
  authTypeSelectEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies whether the Link session is enabled for the Automated Micro-deposits flow. */
  automatedMicrodepositsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** This field has been deprecated in favor of `auth_type_select_enabled`. */
  flowType?: InputMaybe<Scalars['String']['input']>;
  /** Specifies whether the Link session is enabled for the Instant Match flow. As of November 2022, Instant Match will be enabled by default. Instant Match can be disabled by setting this field to `false`. */
  instantMatchEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies whether the Link session is enabled for the Same Day Micro-deposits flow. */
  sameDayMicrodepositsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies options for initializing Link for [update mode](https://plaid.com/docs/link/update-mode). */
export type PlaidLinkTokenCreateRequestUpdate = {
  /** If `true`, enables [update mode with Account Select](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts). */
  accountSelectionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Configuration parameters for EU flows */
export type PlaidLinkTokenEuConfig = {
  /** If `true`, open Link without an initial UI. Defaults to `false`. */
  headless?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to apply to `loan`-type accounts */
export type PlaidLoanFilter = {
  /** An array of account subtypes to display in Link. If not specified, all account subtypes will be shown. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema). */
  accountSubtypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A representation of where a transaction took place */
export type PlaidLocation = {
  __typename?: 'PlaidLocation';
  /** The street address where the transaction occurred. */
  address?: Maybe<Scalars['String']['output']>;
  /** The city where the transaction occurred. */
  city?: Maybe<Scalars['String']['output']>;
  /** The ISO 3166-1 alpha-2 country code where the transaction occurred. */
  country?: Maybe<Scalars['String']['output']>;
  /** The latitude where the transaction occurred. */
  lat?: Maybe<Scalars['Float']['output']>;
  /** The longitude where the transaction occurred. */
  lon?: Maybe<Scalars['Float']['output']>;
  /** The postal code where the transaction occurred. In API versions 2018-05-22 and earlier, this field is called `zip`. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The region or state where the transaction occurred. In API versions 2018-05-22 and earlier, this field is called `state`. */
  region?: Maybe<Scalars['String']['output']>;
  /** The merchant defined store number where the transaction occurred. */
  storeNumber?: Maybe<Scalars['String']['output']>;
};

/** Plaid Merchant data. */
export type PlaidMerchant = {
  __typename?: 'PlaidMerchant';
  /** The source of the data. */
  _sourcename: MerchantSourceType;
  /**
   * The Merchant name, as extracted by Plaid from a corresponding Plaid Transaction's `name` field.
   *
   */
  merchantName?: Maybe<Scalars['String']['output']>;
};

/** Object containing metadata about the interest rate for the mortgage. */
export type PlaidMortgageInterestRate = {
  __typename?: 'PlaidMortgageInterestRate';
  /** Percentage value (interest rate of current mortgage, not APR) of interest payable on a loan. */
  percentage?: Maybe<Scalars['Float']['output']>;
  /** The type of interest charged (fixed or variable). */
  type?: Maybe<Scalars['String']['output']>;
};

/** Object containing fields describing property address. */
export type PlaidMortgagePropertyAddress = {
  __typename?: 'PlaidMortgagePropertyAddress';
  /** The city name. */
  city?: Maybe<Scalars['String']['output']>;
  /** The ISO 3166-1 alpha-2 country code. */
  country?: Maybe<Scalars['String']['output']>;
  /** The five or nine digit postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The region or state (example "NC"). */
  region?: Maybe<Scalars['String']['output']>;
  /** The full street address (example "564 Main Street, Apt 15"). */
  street?: Maybe<Scalars['String']['output']>;
};

/** A Plaid API error encountered while executing the mutation. */
export type PlaidMutationError = {
  __typename?: 'PlaidMutationError';
  /** The particular Plaid error code. */
  code: Scalars['String']['output'];
  /** A user-friendly representation of the Plaid error code. */
  displayMessage?: Maybe<Scalars['String']['output']>;
  /** A developer-friendly representation of the Plaid error code. */
  message: Scalars['String']['output'];
  /** A unique ID identifying the request, to be used for troubleshooting purposes. */
  requestId?: Maybe<Scalars['String']['output']>;
  /** A broad categorization of the Plaid error. */
  type: Scalars['String']['output'];
};

/** Information about the student's eligibility in the Public Service Loan Forgiveness program. This is only returned if the institution is FedLoan (`ins_116527`). */
export type PlaidPslfStatus = {
  __typename?: 'PlaidPSLFStatus';
  /** The estimated date borrower will have completed 120 qualifying monthly payments. Returned in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  estimatedEligibilityDate?: Maybe<Scalars['Date']['output']>;
  /** The number of qualifying payments that have been made. */
  paymentsMade?: Maybe<Scalars['Float']['output']>;
  /** The number of qualifying payments remaining. */
  paymentsRemaining?: Maybe<Scalars['Float']['output']>;
};

/**
 * Transaction information specific to inter-bank transfers. If the transaction was not an inter-bank transfer, all fields will be `null`.
 *
 * If the `transactions` object was returned by a Transactions endpoint such as `/transactions/get`, the `payment_meta` key will always appear, but no data elements are guaranteed. If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
 */
export type PlaidPaymentMeta = {
  __typename?: 'PlaidPaymentMeta';
  /** The party initiating a wire transfer. Will be `null` if the transaction is not a wire transfer. */
  byOrderOf?: Maybe<Scalars['String']['output']>;
  /** For transfers, the party that is receiving the transaction. */
  payee?: Maybe<Scalars['String']['output']>;
  /** For transfers, the party that is paying the transaction. */
  payer?: Maybe<Scalars['String']['output']>;
  /** The type of transfer, e.g. 'ACH' */
  paymentMethod?: Maybe<Scalars['String']['output']>;
  /** The name of the payment processor */
  paymentProcessor?: Maybe<Scalars['String']['output']>;
  /** The ACH PPD ID for the payer. */
  ppdId?: Maybe<Scalars['String']['output']>;
  /** The payer-supplied description of the transfer. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The transaction reference number supplied by the financial institution. */
  referenceNumber?: Maybe<Scalars['String']['output']>;
};

/**
 * Information describing the intent of the transaction. Most relevant for personal finance use cases, but not limited to such use cases.
 *
 * See the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.
 */
export type PlaidPersonalFinanceCategory = {
  __typename?: 'PlaidPersonalFinanceCategory';
  /** A granular category conveying the transaction's intent. This field can also be used as a unique identifier for the category. */
  detailed: Scalars['String']['output'];
  /** A high level category that communicates the broad category of the transaction. */
  primary: Scalars['String']['output'];
};

/** Represents a Plaid processor token. */
export type PlaidProcessorToken = {
  __typename?: 'PlaidProcessorToken';
  /** The `processor_token` that can then be used by the Plaid partner to make API requests */
  processorToken: Scalars['String']['output'];
  /** A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive. */
  requestId: Scalars['String']['output'];
};

/** Autogenerated input type of PlaidProcessorTokenCreate */
export type PlaidProcessorTokenCreateInput = {
  /** The Plaid `account_id` value from Plaid Link's `onSuccess` callback or the `accountId` from the account`s `PlaidAccount` source. */
  accountId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Connection associated with the Account. */
  connectionId: Scalars['ID']['input'];
  /** The processor you are integrating with */
  processor: Scalars['String']['input'];
};

/** Autogenerated return type of PlaidProcessorTokenCreate. */
export type PlaidProcessorTokenCreatePayload = {
  __typename?: 'PlaidProcessorTokenCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** A list of Plaid API errors from the mutation. */
  errors?: Maybe<Array<PlaidMutationError>>;
  /** Created processor token. */
  record?: Maybe<PlaidProcessorToken>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The address of the student loan servicer. This is generally the remittance address to which payments should be sent. */
export type PlaidServicerAddressData = {
  __typename?: 'PlaidServicerAddressData';
  /** The full city name */
  city?: Maybe<Scalars['String']['output']>;
  /** The ISO 3166-1 alpha-2 country code */
  country?: Maybe<Scalars['String']['output']>;
  /** The postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /**
   * The region or state
   * Example: `"NC"`
   */
  region?: Maybe<Scalars['String']['output']>;
  /**
   * The full street address
   * Example: `"564 Main Street, APT 15"`
   */
  street?: Maybe<Scalars['String']['output']>;
};

/** An object representing the status of the student loan */
export type PlaidStudentLoanStatus = {
  __typename?: 'PlaidStudentLoanStatus';
  /** The date until which the loan will be in its current status. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). */
  endDate?: Maybe<Scalars['Date']['output']>;
  /** The status type of the student loan */
  type?: Maybe<Scalars['String']['output']>;
};

/** An object representing the repayment plan for the student loan */
export type PlaidStudentRepaymentPlan = {
  __typename?: 'PlaidStudentRepaymentPlan';
  /** The description of the repayment plan as provided by the servicer. */
  description?: Maybe<Scalars['String']['output']>;
  /** The type of the repayment plan. */
  type?: Maybe<Scalars['String']['output']>;
};

/** Plaid Transaction data. */
export type PlaidTransaction = {
  __typename?: 'PlaidTransaction';
  /** The source of the data. */
  _sourcename: TransactionSourceType;
  /** The ID of the account in which this transaction occurred. */
  accountId: Scalars['String']['output'];
  /** The name of the account owner. This field is not typically populated and only relevant when dealing with sub-accounts. */
  accountOwner?: Maybe<Scalars['String']['output']>;
  /** The settled value of the transaction, denominated in the transactions's currency, as stated in `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the account; negative values when money moves in. For example, debit card purchases are positive; credit card payments, direct deposits, and refunds are negative. */
  amount: Scalars['Float']['output'];
  /** The date that the transaction was authorized. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ). */
  authorizedDate?: Maybe<Scalars['Date']['output']>;
  /**
   * Date and time when a transaction was authorized in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DDTHH:mm:ssZ` ).
   *
   * This field is returned for select financial institutions and comes as provided by the institution. It may contain default time values (such as 00:00:00). This field is only populated in API version 2019-05-29 and later.
   */
  authorizedDatetime?: Maybe<Scalars['DateTime']['output']>;
  /**
   * A hierarchical array of the categories to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  category?: Maybe<Array<Scalars['String']['output']>>;
  /**
   * The ID of the category to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  categoryId?: Maybe<Scalars['String']['output']>;
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: Maybe<Scalars['String']['output']>;
  /** The counterparties present in the transaction. Counterparties, such as the financial institutions, are extracted by Plaid from the raw description. */
  counterparties?: Maybe<Array<PlaidTransactionCounterparty>>;
  /** For pending transactions, the date that the transaction occurred; for posted transactions, the date that the transaction posted. Both dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ). */
  date: Scalars['Date']['output'];
  /**
   * Date and time when a transaction was posted in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DDTHH:mm:ssZ` ).
   *
   * This field is returned for select financial institutions and comes as provided by the institution. It may contain default time values (such as 00:00:00). This field is only populated in API version 2019-05-29 and later.
   */
  datetime?: Maybe<Scalars['DateTime']['output']>;
  /** The ISO-4217 currency code of the transaction. Always `null` if `unofficial_currency_code` is non-null. */
  isoCurrencyCode?: Maybe<Scalars['String']['output']>;
  /** A representation of where a transaction took place */
  location: PlaidLocation;
  /** The logo associated with the merchant, if available. Formatted as a 100x100 pixels PNG file path. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The merchant name, as enriched by Plaid from the `name` field. This is typically a more human-readable version of the merchant counterparty in the transaction. For some bank transactions (such as checks or account transfers) where there is no meaningful merchant name, this value will be `null`. */
  merchantName?: Maybe<Scalars['String']['output']>;
  /**
   * The merchant name or transaction description.
   *
   * If the `transactions` object was returned by a Transactions endpoint such as `/transactions/get`, this field will always appear. If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  name: Scalars['String']['output'];
  /** The string returned by the financial institution to describe the transaction. For transactions returned by `/transactions/get`, this field is in beta and will be omitted unless the client is both enrolled in the closed beta program and has set `options.include_original_description` to `true`. */
  originalDescription?: Maybe<Scalars['String']['output']>;
  /**
   * The channel used to make a payment.
   * `online:` transactions that took place online.
   *
   * `in store:` transactions that were made at a physical location.
   *
   * `other:` transactions that relate to banks, e.g. fees or deposits.
   *
   * This field replaces the `transaction_type` field.
   */
  paymentChannel: Scalars['String']['output'];
  /**
   * Transaction information specific to inter-bank transfers. If the transaction was not an inter-bank transfer, all fields will be `null`.
   *
   * If the `transactions` object was returned by a Transactions endpoint such as `/transactions/get`, the `payment_meta` key will always appear, but no data elements are guaranteed. If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  paymentMeta: PlaidPaymentMeta;
  /** When `true`, identifies the transaction as pending or unsettled. Pending transaction details (name, type, amount, category ID) may change before they are settled. */
  pending: Scalars['Boolean']['output'];
  /** The ID of a posted transaction's associated pending transaction, where applicable. */
  pendingTransactionId?: Maybe<Scalars['String']['output']>;
  /**
   * Information describing the intent of the transaction. Most relevant for personal finance use cases, but not limited to such use cases.
   *
   * See the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.
   */
  personalFinanceCategory?: Maybe<PlaidPersonalFinanceCategory>;
  /** A link to the icon associated with the primary personal finance category. The logo will always be 100x100 pixels. */
  personalFinanceCategoryIconUrl?: Maybe<Scalars['String']['output']>;
  /**
   * An identifier classifying the transaction type.
   *
   * This field is only populated for European institutions. For institutions in the US and Canada, this field is set to `null`.
   *
   * `adjustment:` Bank adjustment
   *
   * `atm:` Cash deposit or withdrawal via an automated teller machine
   *
   * `bank charge:` Charge or fee levied by the institution
   *
   * `bill payment`: Payment of a bill
   *
   * `cash:` Cash deposit or withdrawal
   *
   * `cashback:` Cash withdrawal while making a debit card purchase
   *
   * `cheque:` Document ordering the payment of money to another person or organization
   *
   * `direct debit:` Automatic withdrawal of funds initiated by a third party at a regular interval
   *
   * `interest:` Interest earned or incurred
   *
   * `purchase:` Purchase made with a debit or credit card
   *
   * `standing order:` Payment instructed by the account holder to a third party at a regular interval
   *
   * `transfer:` Transfer of money between accounts
   */
  transactionCode?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case sensitive. */
  transactionId: Scalars['String']['output'];
  /**
   * The unofficial currency code associated with the transaction. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
   */
  unofficialCurrencyCode?: Maybe<Scalars['String']['output']>;
  /** The website associated with the merchant, if available. */
  website?: Maybe<Scalars['String']['output']>;
};

/** The counterparty, such as the merchant or financial institution, is extracted by Plaid from the raw description. */
export type PlaidTransactionCounterparty = {
  __typename?: 'PlaidTransactionCounterparty';
  /** The URL of a logo associated with the counterparty, if available. The logo is formatted as a 100x100 pixel PNG filepath. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the counterparty, such as the merchant or the financial institution, as extracted by Plaid from the raw description. */
  name: Scalars['String']['output'];
  /**
   * The counterparty type.
   *
   * `merchant`: a provider of goods or services for purchase
   * `financial_institution`: a financial entity (bank, credit union, BNPL, fintech)
   * `payment_app`: a transfer or P2P app (e.g. Zelle)
   * `marketplace`: a marketplace (e.g DoorDash, Google Play Store)
   * `payment_terminal`: a point-of-sale payment terminal (e.g Square, Toast)
   */
  type: Scalars['String']['output'];
  /** The website associated with the counterparty. */
  website?: Maybe<Scalars['String']['output']>;
};

/** A Profile represents an entity with data in a Quiltt Environment, typically a physical person or company end-user of your application. */
export type Profile = {
  __typename?: 'Profile';
  /** The mailing address. */
  address?: Maybe<ProfileAddress>;
  /** The birthday. */
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  /** The email. */
  email?: Maybe<Scalars['String']['output']>;
  /** The ID of the Profile. */
  id: Scalars['ID']['output'];
  /**
   * Custom metadata about the Profile, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/guides/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** A common name or nickname. */
  name?: Maybe<Scalars['String']['output']>;
  /** The legal name. */
  names?: Maybe<ProfileName>;
  /** The cellphone in E164 Format. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The UUID of the Profile */
  uuid: Scalars['ID']['output'];
};

/** Represents an address. */
export type ProfileAddress = {
  __typename?: 'ProfileAddress';
  /** The city. */
  city?: Maybe<Scalars['String']['output']>;
  /** The country code. */
  countryCode?: Maybe<AddressCountryCode>;
  /** The first line of the address. */
  line1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. */
  line2?: Maybe<Scalars['String']['output']>;
  /** The postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The state. */
  state?: Maybe<Scalars['String']['output']>;
};

/** Attributes for setting an address. */
export type ProfileAddressInput = {
  /** The city. */
  city: Scalars['String']['input'];
  /** The country code. */
  countryCode: AddressCountryCode;
  /** The first line of the address. */
  line1: Scalars['String']['input'];
  /** The second line of the address. */
  line2?: InputMaybe<Scalars['String']['input']>;
  /** The postal code. */
  postalCode: Scalars['String']['input'];
  /** The state. */
  state: Scalars['String']['input'];
};

/** Represents a legal name. */
export type ProfileName = {
  __typename?: 'ProfileName';
  /** The legal given name. */
  first?: Maybe<Scalars['String']['output']>;
  /** The full name. */
  full?: Maybe<Scalars['String']['output']>;
  /** The legal surname. */
  last?: Maybe<Scalars['String']['output']>;
};

/** Attributes for setting a legal name. */
export type ProfileNameInput = {
  /** The legal given name. */
  first: Scalars['String']['input'];
  /** The legal surname. */
  last: Scalars['String']['input'];
};

/** Autogenerated input type of ProfileUpdate */
export type ProfileUpdateInput = {
  /** Mailing address. */
  address?: InputMaybe<ProfileAddressInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Birthday. */
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** Email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Common or nickname. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Legal name. */
  names?: InputMaybe<ProfileNameInput>;
  /** Cellphone in E164 Format. */
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ProfileUpdate. */
export type ProfileUpdatePayload = {
  __typename?: 'ProfileUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** Updated Profile. */
  record?: Maybe<Profile>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The top-level Query type. Queries are used to fetch data. */
export type Query = {
  __typename?: 'Query';
  /** Look up an Account by its ID. */
  account?: Maybe<Account>;
  /**
   * Get a list of Accounts.
   *
   * You can apply filters, search and sort to refine the list.
   *
   */
  accounts?: Maybe<Array<Account>>;
  /** Look up a Connection by its ID. */
  connection?: Maybe<Connection>;
  /**
   * Get a list of Connections.
   *
   * You can apply filters to refine the list.
   *
   */
  connections?: Maybe<Array<Connection>>;
  /** Look up a Merchant by its ID. */
  merchant?: Maybe<Merchant>;
  /**
   * Get a list of Merchants.
   *
   * You can apply filters, search and sort to refine the list.
   *
   */
  merchants?: Maybe<Array<Merchant>>;
  /** Access information about the authenticated Profile. */
  profile: Profile;
  /** Look up a Transaction by its ID. */
  transaction?: Maybe<Transaction>;
  /**
   * Get a paginated list of up to 100 Transactions.
   *
   * You can apply filters, search and sort to refine the list.
   *
   */
  transactionsConnection: TransactionConnection;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<AccountSort>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryConnectionArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryConnectionsArgs = {
  filter?: InputMaybe<ConnectionFilter>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryMerchantArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryMerchantsArgs = {
  filter?: InputMaybe<AccountMerchantFilter>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<AccountSort>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryTransactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<TransactionSort>;
};

/** Options for searching through a list. */
export type SearchQuery = {
  /** Query for searching. */
  term?: InputMaybe<Scalars['String']['input']>;
};

/** Spade Category data. */
export type SpadeCategory = {
  __typename?: 'SpadeCategory';
  /** Numerical code describing the category. Two digits per depth of category. */
  hierarchyCode: Scalars['Int']['output'];
  /** Png icon for the category. If category doesn't have an icon it defers to the parent category. */
  iconUrl?: Maybe<Scalars['URL']['output']>;
  /** Category ID. */
  id: Scalars['String']['output'];
  /** Name of the category. */
  name: Scalars['String']['output'];
};

/** Spade Location data. */
export type SpadeLocation = {
  __typename?: 'SpadeLocation';
  /** Street and number. */
  address?: Maybe<Scalars['String']['output']>;
  /** City or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** Latitude coordinate. */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Longitude coordinate. */
  longitude?: Maybe<Scalars['String']['output']>;
  /** State, Province, Territory etc. */
  state?: Maybe<Scalars['String']['output']>;
  /** Store number of chain retailer. */
  storeNumber?: Maybe<Scalars['String']['output']>;
  /** Zip or postal code. */
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** Spade Logo data. */
export type SpadeLogo = {
  __typename?: 'SpadeLogo';
  /** Name of the logo (for use in logo endpoint, same as path). */
  logoName: Scalars['String']['output'];
  /** Full url for logo. */
  logoUrl: Scalars['URL']['output'];
  /** Path to the image. */
  path: Scalars['String']['output'];
  /** mime type of image (currently all are PNGs). */
  type: Scalars['String']['output'];
  /** Is this logo from our verified logo database. */
  verified: Scalars['Boolean']['output'];
};

/** Spade Merchant data. */
export type SpadeMerchant = {
  __typename?: 'SpadeMerchant';
  /** The source of the data. */
  _sourcename: MerchantSourceType;
  /** Spade merchant info data. */
  merchantInfo?: Maybe<SpadeMerchantInfo>;
  /** Name of the merchant. */
  merchantName?: Maybe<Scalars['String']['output']>;
  /** Our best guess as to what the true merchant name is. Utilizing AI, our database of merchants, and geolocation providers. */
  normalizedMerchantName?: Maybe<Scalars['String']['output']>;
};

/** Spade Merchant Info data. */
export type SpadeMerchantInfo = {
  __typename?: 'SpadeMerchantInfo';
  /** Unique ID for a verified merchant. */
  merchantId?: Maybe<Scalars['String']['output']>;
  /** Local or corporate phone number. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Is this merchant from our verified database. */
  verified?: Maybe<Scalars['Boolean']['output']>;
  /** Merchant's website. */
  website?: Maybe<Scalars['String']['output']>;
};

/** Spade recent occurrences data. */
export type SpadeRecentOccurrences = {
  __typename?: 'SpadeRecentOccurrences';
  /** Amount of this transaction. */
  amount?: Maybe<Scalars['Float']['output']>;
  /**
   * Spade's Transaction ID of this occurrence.
   *
   */
  transactionId?: Maybe<Scalars['String']['output']>;
};

/** Spade transaction recurrency data. */
export type SpadeRecurrenceInfo = {
  __typename?: 'SpadeRecurrenceInfo';
  /** Median number of days between recent occurrences */
  intervalDays?: Maybe<Scalars['Int']['output']>;
  /** Closest conventional billing period (if applicable) */
  intervalType?: Maybe<SpadeRecurrenceInfoInterval>;
  /** List of previous occurrences */
  recentOccurrences?: Maybe<Array<SpadeRecentOccurrences>>;
};

/** Represents the interval of a Recurrence. */
export enum SpadeRecurrenceInfoInterval {
  /** Every two weeks. */
  Biweekly = 'BIWEEKLY',
  /** Every month. */
  Monthly = 'MONTHLY',
  /** Every week. */
  Weekly = 'WEEKLY'
}

/** Spade Transaction data. */
export type SpadeTransaction = {
  __typename?: 'SpadeTransaction';
  /** The source of the data. */
  _sourcename: TransactionSourceType;
  /** @deprecated This field has been deprecated. */
  brickAndMortar?: Maybe<Scalars['Boolean']['output']>;
  /** List of increasingly specific categories and their Id's. */
  categories?: Maybe<Array<SpadeCategory>>;
  /** @deprecated Use `categories` instead. */
  category?: Maybe<Array<Scalars['String']['output']>>;
  /** Code of the most specific category in 'categories'. */
  categoryHierarchyCode?: Maybe<Scalars['Int']['output']>;
  /** Is likely a recurring transaction. */
  isRecurring?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<SpadeLocation>;
  logo?: Maybe<SpadeLogo>;
  /**
   * 'Merchant Category Code' (Marqueta, Galileo, etc.).
   *
   */
  mcc?: Maybe<Scalars['String']['output']>;
  merchantInfo?: Maybe<SpadeMerchantInfo>;
  /** Name of the merchant. */
  merchantName?: Maybe<Scalars['String']['output']>;
  /** Our best guess as to what the true merchant name is. Utilizing AI, our database of merchants, and geolocation providers. */
  normalizedMerchantName?: Maybe<Scalars['String']['output']>;
  /**
   * 'category_id' from Plaid.
   *
   */
  plaidCategoryId?: Maybe<Scalars['String']['output']>;
  /** Transaction recurrency information. */
  recurrenceInfo?: Maybe<SpadeRecurrenceInfo>;
  /**
   * Spade's ID for the transaction.
   *
   */
  transactionId?: Maybe<Scalars['String']['output']>;
  /**
   * Description of the transaction (often just called 'name').
   *
   */
  transactionName?: Maybe<Scalars['String']['output']>;
  /** Facilitator of transaction. */
  via?: Maybe<Scalars['String']['output']>;
};

/** The top-level Subscription type. Subscriptions are used to watch for events emitted from the server. */
export type Subscription = {
  __typename?: 'Subscription';
  /** A Connection was created. */
  connectionCreated: ConnectionCreatedPayload;
  /** A Connection was updated. */
  connectionUpdated: ConnectionUpdatedPayload;
  /** A Subscription for Debuging, Runs at every minute */
  ping: PingPayload;
};


/** The top-level Subscription type. Subscriptions are used to watch for events emitted from the server. */
export type SubscriptionConnectionUpdatedArgs = {
  connectionId?: InputMaybe<Scalars['ID']['input']>;
};

/** A Transaction represents financial activity associated with an Account */
export type Transaction = {
  __typename?: 'Transaction';
  /** The Account of the Transaction. */
  account: Account;
  /** The amount. */
  amount: Scalars['Float']['output'];
  /** The ISO-4217 currency code of the Transaction */
  currencyCode: CurrencyCode;
  /** The date. */
  date: Scalars['Date']['output'];
  /** The description or line item name. */
  description: Scalars['String']['output'];
  /** Specifies whether the Transaction is a debit or a credit. */
  entryType: TransactionEntryType;
  /** The ID of the Transaction. */
  id: Scalars['ID']['output'];
  /** A single Logo. */
  logo?: Maybe<Image>;
  /** A list of Logos. */
  logos?: Maybe<Array<Image>>;
  /** The Merchant associated with the Transaction. */
  merchant?: Maybe<Merchant>;
  /**
   * Custom metadata about the Transaction, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/guides/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** The original source of the Transaction. */
  origin: TransactionSourceType;
  /** API data from a specific source. */
  source?: Maybe<TransactionSources>;
  /** API data from multiple sources. */
  sources?: Maybe<Array<TransactionSources>>;
  /** The status of the Transaction. */
  status: TransactionStatus;
};


/** A Transaction represents financial activity associated with an Account */
export type TransactionLogoArgs = {
  source?: InputMaybe<ImageSource>;
};


/** A Transaction represents financial activity associated with an Account */
export type TransactionLogosArgs = {
  sources?: InputMaybe<Array<ImageSource>>;
};


/** A Transaction represents financial activity associated with an Account */
export type TransactionSourceArgs = {
  type: TransactionSourceType;
};


/** A Transaction represents financial activity associated with an Account */
export type TransactionSourcesArgs = {
  types?: InputMaybe<Array<TransactionSourceType>>;
};

/** The connection type for Transaction. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** The total number of records. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TransactionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Transaction>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Transaction>;
};

/** Whether the transaction represents a credit or a debit. */
export enum TransactionEntryType {
  /** An entry recording money being advanced into the account. */
  Credit = 'CREDIT',
  /** An entry recording money being withdrawn from the account. */
  Debit = 'DEBIT'
}

/** Options for filtering Transactions. */
export type TransactionFilter = {
  /** A list of Account IDs. */
  accountIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The amount. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Absolute value of the amount. */
  amount_abs?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the absolute value of the amount. */
  amount_abs_gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the absolute value of the amount. */
  amount_abs_gte?: InputMaybe<Scalars['Float']['input']>;
  /** Less than the absolute value of the amount. */
  amount_abs_lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the absolute value of the amount. */
  amount_abs_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the amount. */
  amount_gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the amount. */
  amount_gte?: InputMaybe<Scalars['Float']['input']>;
  /** Less than the amount. */
  amount_lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the amount. */
  amount_lte?: InputMaybe<Scalars['Float']['input']>;
  /** The date. */
  date?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Specifies whether the Transaction is a debit or a credit. */
  entryType?: InputMaybe<TransactionEntryType>;
  /** Specifies the source of the Transaction. */
  source?: InputMaybe<TransactionSourceFilter>;
  /** A list of transaction statuses. */
  status?: InputMaybe<Array<TransactionStatus>>;
};

/** Options for sorting transactions. */
export enum TransactionSort {
  /** Oldest First, Pending Last */
  DateAsc = 'DATE_ASC',
  /** Newest First, Pending First */
  DateDesc = 'DATE_DESC'
}

/** Source-specific filters. */
export type TransactionSourceFilter = {
  /** MX Transaction data. */
  mx?: InputMaybe<TransactionSourceMxFilter>;
  /** Plaid Transaction data. */
  plaid?: InputMaybe<TransactionSourcePlaidFilter>;
  /** Spade Transaction data. */
  spade?: InputMaybe<TransactionSourceSpadeFilter>;
};

/** Options for filtering inside MX's API payloads */
export type TransactionSourceMxFilter = {
  /** The unique identifier for the account associated with the transaction. Defined by MX. */
  accountGuid?: InputMaybe<Scalars['String']['input']>;
  /** The unique partner-defined identifier for the account associated with the transaction. This can only be set for partner-managed accounts. It should be ignored for user-managed transactions, even in occasional cases where it may return with a value. */
  accountId?: InputMaybe<Scalars['String']['input']>;
  /** The monetary amount of the transaction. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** The category of the transaction. */
  category?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the category assigned to the transaction. */
  categoryGuid?: InputMaybe<Scalars['String']['input']>;
  /** The check number for the transaction. */
  checkNumberString?: InputMaybe<Scalars['String']['input']>;
  /** The date and time the transaction was created. */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  /** The three-character ISO 4217 currency code, e.g. USD. */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** The date on which the transaction took place. This is the field used when searching for transactions by date. This field is generally the same as transacted_at, but uses posted_at as a fallback. */
  date?: InputMaybe<Scalars['String']['input']>;
  /** A human-readable version of the original_description field described below, e.g., “Sam’s Club,” “Johnny’s Tavern.” This is provided by the MX Platform. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The transaction type assigned by the partner. */
  extendedTransactionType?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the transaction. Defined by MX. */
  guid?: InputMaybe<Scalars['String']['input']>;
  /** The unique partner-defined identifier for the transaction. This can only be set for partner-managed transactions. It should be ignored for user-managed transactions, even in occasional cases where it may return with a value. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether the transaction represents a bill pay. */
  isBillPay?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the transaction represents a direct deposit. */
  isDirectDeposit?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the transaction represents an expense. */
  isExpense?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the transaction represents a fee. */
  isFee?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the transaction represents income. */
  isIncome?: InputMaybe<Scalars['Boolean']['input']>;
  /** If the transaction is international as defined by the data provider, this field will be true. If the data provider determines it is not international then it will be false. It will be null if the data provider does not have this information. */
  isInternational?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the transaction represents an overdraft fee. */
  isOverdraftFee?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the transaction represents a payroll advance. */
  isPayrollAdvance?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether a transaction is a recurring credit or debit. */
  isRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the transaction represents a payment for a subscription service such as Netflix or Audible. */
  isSubscription?: InputMaybe<Scalars['Boolean']['input']>;
  /** The latitude of the location where the transaction occurred. The number is a signed decimal (e.g. Rio de Janeiro’s latitude is -22.9027800 and Tokyo’s latitude is 35.689488). */
  latitude?: InputMaybe<Scalars['Float']['input']>;
  /** A human-readable description of the transaction, provided in a local language. */
  localizedDescription?: InputMaybe<Scalars['String']['input']>;
  /** Additional descriptive information about the transaction, provided in a local language. */
  localizedMemo?: InputMaybe<Scalars['String']['input']>;
  /** The longitude of the location where the transaction occurred. The number is a signed decimal (e.g. Rio de Janeiro’s longitude is -43.2075000 and Tokyo’s longitude is 139.691706). */
  longitude?: InputMaybe<Scalars['Float']['input']>;
  /** The unique identifier for the member associated with the transaction Defined by MX. */
  memberGuid?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether the associated member is managed by the user or the MX partner. Members created with the managed member feature will have this field set to false. */
  memberIsManagedByUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** This field contains additional descriptive information about the transaction. */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** The ISO 18245 category code for the transaction. */
  merchantCategoryCode?: InputMaybe<Scalars['Int']['input']>;
  /** The unique identifier for the merchant associated with this transaction. Defined by MX. */
  merchantGuid?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the merchant_location associated with this transaction. Defined by MX. */
  merchantLocationGuid?: InputMaybe<Scalars['String']['input']>;
  /** Custom data */
  metadata?: InputMaybe<Scalars['String']['input']>;
  /** The original description of the transaction as provided by our data feed. See description above for more information. */
  originalDescription?: InputMaybe<Scalars['String']['input']>;
  /** The date and time the transaction was posted to the account. */
  postedAt?: InputMaybe<Scalars['String']['input']>;
  /** The status of the transaction. This will be either POSTED or PENDING. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** The parent category assigned to this transaction’s category. */
  topLevelCategory?: InputMaybe<Scalars['String']['input']>;
  /** The date and time the transaction took place. */
  transactedAt?: InputMaybe<Scalars['String']['input']>;
  /** The type of transaction. This will be either CREDIT or DEBIT. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** The date and time the transaction was last updated. */
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  /** The unique identifier for the user associated with this transaction. Defined by MX. */
  userGuid?: InputMaybe<Scalars['String']['input']>;
  /** The unique partner-defined identifier for the user associated with the transaction. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Options for filtering inside Plaid's API payloads */
export type TransactionSourcePlaidFilter = {
  /** The ID of the account in which this transaction occurred. */
  accountId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the account owner. This field is not typically populated and only relevant when dealing with sub-accounts. */
  accountOwner?: InputMaybe<Scalars['String']['input']>;
  /** The settled value of the transaction, denominated in the transactions's currency, as stated in `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the account; negative values when money moves in. For example, debit card purchases are positive; credit card payments, direct deposits, and refunds are negative. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** The date that the transaction was authorized. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ). */
  authorizedDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Date and time when a transaction was authorized in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DDTHH:mm:ssZ` ).
   *
   * This field is returned for select financial institutions and comes as provided by the institution. It may contain default time values (such as 00:00:00). This field is only populated in API version 2019-05-29 and later.
   */
  authorizedDatetime?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * A hierarchical array of the categories to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * The ID of the category to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  categoryId?: InputMaybe<Scalars['String']['input']>;
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  /** For pending transactions, the date that the transaction occurred; for posted transactions, the date that the transaction posted. Both dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ). */
  date?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Date and time when a transaction was posted in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DDTHH:mm:ssZ` ).
   *
   * This field is returned for select financial institutions and comes as provided by the institution. It may contain default time values (such as 00:00:00). This field is only populated in API version 2019-05-29 and later.
   */
  datetime?: InputMaybe<Scalars['DateTime']['input']>;
  /** The ISO-4217 currency code of the transaction. Always `null` if `unofficial_currency_code` is non-null. */
  isoCurrencyCode?: InputMaybe<Scalars['String']['input']>;
  /** A representation of where a transaction took place */
  location?: InputMaybe<TransactionSourcePlaidLocationFilter>;
  /** The logo associated with the merchant, if available. Formatted as a 100x100 pixels PNG file path. */
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  /** The merchant name, as enriched by Plaid from the `name` field. This is typically a more human-readable version of the merchant counterparty in the transaction. For some bank transactions (such as checks or account transfers) where there is no meaningful merchant name, this value will be `null`. */
  merchantName?: InputMaybe<Scalars['String']['input']>;
  /**
   * The merchant name or transaction description.
   *
   * If the `transactions` object was returned by a Transactions endpoint such as `/transactions/get`, this field will always appear. If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The string returned by the financial institution to describe the transaction. For transactions returned by `/transactions/get`, this field is in beta and will be omitted unless the client is both enrolled in the closed beta program and has set `options.include_original_description` to `true`. */
  originalDescription?: InputMaybe<Scalars['String']['input']>;
  /**
   * The channel used to make a payment.
   * `online:` transactions that took place online.
   *
   * `in store:` transactions that were made at a physical location.
   *
   * `other:` transactions that relate to banks, e.g. fees or deposits.
   *
   * This field replaces the `transaction_type` field.
   */
  paymentChannel?: InputMaybe<Scalars['String']['input']>;
  /**
   * Transaction information specific to inter-bank transfers. If the transaction was not an inter-bank transfer, all fields will be `null`.
   *
   * If the `transactions` object was returned by a Transactions endpoint such as `/transactions/get`, the `payment_meta` key will always appear, but no data elements are guaranteed. If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
   */
  paymentMeta?: InputMaybe<TransactionSourcePlaidPaymentMetaFilter>;
  /** When `true`, identifies the transaction as pending or unsettled. Pending transaction details (name, type, amount, category ID) may change before they are settled. */
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of a posted transaction's associated pending transaction, where applicable. */
  pendingTransactionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Information describing the intent of the transaction. Most relevant for personal finance use cases, but not limited to such use cases.
   *
   * See the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.
   */
  personalFinanceCategory?: InputMaybe<TransactionSourcePlaidPersonalFinanceCategoryFilter>;
  /**
   * An identifier classifying the transaction type.
   *
   * This field is only populated for European institutions. For institutions in the US and Canada, this field is set to `null`.
   *
   * `adjustment:` Bank adjustment
   *
   * `atm:` Cash deposit or withdrawal via an automated teller machine
   *
   * `bank charge:` Charge or fee levied by the institution
   *
   * `bill payment`: Payment of a bill
   *
   * `cash:` Cash deposit or withdrawal
   *
   * `cashback:` Cash withdrawal while making a debit card purchase
   *
   * `cheque:` Document ordering the payment of money to another person or organization
   *
   * `direct debit:` Automatic withdrawal of funds initiated by a third party at a regular interval
   *
   * `interest:` Interest earned or incurred
   *
   * `purchase:` Purchase made with a debit or credit card
   *
   * `standing order:` Payment instructed by the account holder to a third party at a regular interval
   *
   * `transfer:` Transfer of money between accounts
   */
  transactionCode?: InputMaybe<Scalars['String']['input']>;
  /** The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case sensitive. */
  transactionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The unofficial currency code associated with the transaction. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
   */
  unofficialCurrencyCode?: InputMaybe<Scalars['String']['input']>;
  /** The website associated with the merchant, if available. */
  website?: InputMaybe<Scalars['String']['input']>;
};

/** Options for filtering inside Plaid's Transaction Location data */
export type TransactionSourcePlaidLocationFilter = {
  /** The street address where the transaction occurred. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The city where the transaction occurred. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The ISO 3166-1 alpha-2 country code where the transaction occurred. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The latitude where the transaction occurred. */
  lat?: InputMaybe<Scalars['Float']['input']>;
  /** The longitude where the transaction occurred. */
  lon?: InputMaybe<Scalars['Float']['input']>;
  /** The postal code where the transaction occurred. In API versions 2018-05-22 and earlier, this field is called `zip`. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** The region or state where the transaction occurred. In API versions 2018-05-22 and earlier, this field is called `state`. */
  region?: InputMaybe<Scalars['String']['input']>;
  /** The merchant defined store number where the transaction occurred. */
  storeNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Options for filtering inside Plaid's Transaction Payment Meta data */
export type TransactionSourcePlaidPaymentMetaFilter = {
  /** The party initiating a wire transfer. Will be `null` if the transaction is not a wire transfer. */
  byOrderOf?: InputMaybe<Scalars['String']['input']>;
  /** For transfers, the party that is receiving the transaction. */
  payee?: InputMaybe<Scalars['String']['input']>;
  /** For transfers, the party that is paying the transaction. */
  payer?: InputMaybe<Scalars['String']['input']>;
  /** The type of transfer, e.g. 'ACH' */
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  /** The name of the payment processor */
  paymentProcessor?: InputMaybe<Scalars['String']['input']>;
  /** The ACH PPD ID for the payer. */
  ppdId?: InputMaybe<Scalars['String']['input']>;
  /** The payer-supplied description of the transfer. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** The transaction reference number supplied by the financial institution. */
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Options for filtering inside Plaid's Personal Finance Category data */
export type TransactionSourcePlaidPersonalFinanceCategoryFilter = {
  /** A granular category conveying the transaction's intent. This field can also be used as a unique identifier for the category. */
  detailed?: InputMaybe<Scalars['String']['input']>;
  /** A high level category that communicates the broad category of the transaction. */
  primary?: InputMaybe<Scalars['String']['input']>;
};

/** Options for filtering inside Spade's API payloads */
export type TransactionSourceSpadeFilter = {
  brickAndMortar?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Code of the most specific category in 'categories'. */
  categoryHierarchyCode?: InputMaybe<Scalars['Int']['input']>;
  /** Is likely a recurring transaction. */
  isRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * 'Merchant Category Code' (Marqueta, Galileo, etc.).
   *
   */
  mcc?: InputMaybe<Scalars['String']['input']>;
  /** Name of the merchant. */
  merchantName?: InputMaybe<Scalars['String']['input']>;
  /** Our best guess as to what the true merchant name is. Utilizing AI, our database of merchants, and geolocation providers. */
  normalizedMerchantName?: InputMaybe<Scalars['String']['input']>;
  /**
   * 'category_id' from Plaid.
   *
   */
  plaidCategoryId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Spade's ID for the transaction.
   *
   */
  transactionId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Description of the transaction (often just called 'name').
   *
   */
  transactionName?: InputMaybe<Scalars['String']['input']>;
  /** Facilitator of transaction. */
  via?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a data source for the Transaction. */
export enum TransactionSourceType {
  /** MX */
  Mx = 'MX',
  /** Plaid */
  Plaid = 'PLAID',
  /** Quiltt */
  Quiltt = 'QUILTT',
  /** Spade */
  Spade = 'SPADE'
}

export type TransactionSources = MxTransaction | PlaidTransaction | SpadeTransaction;

/** Represents the status for a Transaction. */
export enum TransactionStatus {
  /** Awaiting decision or settlement, and may be replaced, updated, or removed. */
  Pending = 'PENDING',
  /** Announced or published as conclusive. */
  Posted = 'POSTED',
  /** Estimated or forecast on the basis of current trends or data. */
  Projected = 'PROJECTED'
}

/** Autogenerated input type of TransactionUpdate */
export type TransactionUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the transaction to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of TransactionUpdate. */
export type TransactionUpdatePayload = {
  __typename?: 'TransactionUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated transaction. */
  record?: Maybe<Transaction>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};
