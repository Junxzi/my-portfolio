'use client'

import { useTheme } from '@/components/ThemeProvider'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-md"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}