import { ButtonHTMLAttributes } from "react"

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'white' | 'ghost'
  size?: 'sm' | 'md'
}

export const variantStyles = {
  white: 'bg-white shadow-[0_1px_8px_rgba(0,0,0,0.10)] hover:shadow-[0_2px_16px_rgba(0,0,0,0.15)]',
  ghost: 'bg-transparent hover:bg-black/5',
}

export const sizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
}