import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Standard utility to merge Tailwind CSS classes cleanly without collision
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
