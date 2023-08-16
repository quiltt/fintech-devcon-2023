import type { FC } from 'react'
import Image from 'next/image'

export type AccountCardProps = {}

export const AccountCard: FC<AccountCardProps> = ({}) => {
  return (
    <div className="bg-secondary-2 relative w-full rounded-md border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border md:h-16 md:w-16">
            <Image
              alt=""
              loading="lazy"
              width="64"
              height="64"
              decoding="async"
              data-nimg="1"
              className="h-full max-h-full w-full max-w-full"
              src="https://placehold.co/64x64.png"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="ml-4 flex flex-col">
            <h2 className="text-lg/none font-bold md:text-xl/tight">
              Checking <span className="truncate text-sm font-normal text-gray-500">x0001</span>
            </h2>
            <h3 className="text-lg font-normal md:text-xl">
              Bank <span className="text-base text-gray-500 md:text-lg">- Checking</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end">
          <div className="hidden text-lg font-medium text-gray-600 md:block md:text-xl">
            Balance
          </div>
          <span className="py-1 text-3xl text-gray-800 md:text-4xl ">$360.26</span>
          <span className="text-right text-xs sm:text-sm">Synced Sun, Aug 13</span>
        </div>
      </div>
    </div>
  )
}

export default AccountCard
