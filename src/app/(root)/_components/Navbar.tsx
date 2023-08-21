'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

const links = [
  {
    href: '/mx',
    label: 'MX',
  },
  {
    href: '/plaid',
    label: 'Plaid',
  },
  {
    href: '/unified',
    label: 'Unified',
  },
]

const Navbar: FC = () => {
  const pathname = usePathname()
  return (
    <nav className="px-4 py-2">
      <ul className="flex space-x-3">
        {links.map(({ href, label }) => {
          const isActive = pathname === href

          return (
            <li key={href}>
              <Link
                href={href}
                className={`border-b-2 px-2 py-1 font-medium leading-none text-blue-500 hover:text-blue-700 focus-visible:text-blue-700 ${
                  isActive ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
