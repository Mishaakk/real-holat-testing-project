import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ru-RU').format(num)
}

export function formatCurrency(num: number): string {
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2 }).format(num)
}
