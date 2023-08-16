import type { FC } from 'react'

export type TransactionsCardProps = {}

export const TransactionsCard: FC<TransactionsCardProps> = ({}) => {
  return (
    <table className="mb-4 w-full table-auto border-collapse cursor-default border">
      <thead className="bg-secondary-100 hidden md:table-header-group">
        <tr>
          <th className="w-auto sm:w-32 ">Date</th>
          <th>Merchant</th>
          <th className="!pr-6 !text-right ">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className="even:bg-secondary-50 hover:bg-primary-100 odd:bg-white">
          <td>
            <span className="px-2">Mar 17, 2023</span>
            <span className="w-full max-w-full md:hidden">
              <dl className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-start">
                <dt className="sr-only">Merchant</dt>
                <dd className="flex w-auto max-w-full items-center justify-start">
                  <span className="mr-2 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      id=":r4g:"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      ></path>
                    </svg>
                  </span>
                  <span className="break-words text-base/none font-semibold text-gray-700">
                    Transfer from Auto-Save
                  </span>
                </dd>
              </dl>
            </span>
          </td>
          <td className="!hidden md:!table-cell">
            <dl className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-start">
              <dt className="sr-only">Merchant</dt>
              <dd className="flex w-auto max-w-full items-center justify-start">
                <span className="mr-2 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    id=":r4h:"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    ></path>
                  </svg>
                </span>
                <span className="break-words text-base/none font-semibold text-gray-700">
                  Transaction
                </span>
              </dd>
            </dl>
          </td>
          <td className="!pr-4 text-right sm:!pr-6">
            <span className="text-xl font-semibold text-gray-800 ">$7.11</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
