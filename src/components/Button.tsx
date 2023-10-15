import React from 'react'

import { cva, cx } from 'class-variance-authority'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
}

const buttonStyle = cva('px-4 py-2 rounded shadow border', {
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600',
      secondary: 'bg-white text-blue-500 border-blue-500 hover:bg-gray-100',
    },
  },
})

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cx(buttonStyle({ variant }), className)} {...props}>
      {children}
    </button>
  )
}
