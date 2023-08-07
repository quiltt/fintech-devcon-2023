import React, { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...restProps } = props

  return (
    <button
      className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      ref={ref}
      {...restProps}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
