'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'

export default function MenuButton() {
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { theme, toggleTheme } = useTheme()

  const links = [
    { href: '/en/about', label: 'About' },
    { href: '/en/projects', label: 'Projects' },
    { href: '/en/career', label: 'Career' },
    { href: '/en/contact', label: 'Contact' },
  ]
  const ignoreNextOpen = useRef(false)

  const handleClickToggle = () => {
    if (open) {
      ignoreNextOpen.current = true
      setTimeout(() => {
        ignoreNextOpen.current = false
      }, 300) // 300msくらいで十分
    }
    setOpen(!open)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        if (!ignoreNextOpen.current) {
          setOpen(false)
        }
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])


  return (
    <>
      {/* ☰ / × トグルボタン */}
      <button
        ref={buttonRef}
        onClick={handleClickToggle}
        className="text-4xl text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 transition duration-200 z-50 relative"
        aria-label="Toggle menu"
      >
        {open ? '×' : '☰'}
      </button>

      {/* 背景オーバーレイ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[52px] left-0 right-0 bottom-0 inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* メニュー本体 */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            ref={drawerRef}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-[52px] left-0 h-[calc(100%-4rem)] w-[80vw] max-w-xs z-50 
                       bg-white/90 dark:bg-gray-900/90 shadow-xl 
                       backdrop-blur-md rounded-r-2xl"
          >
            <div className="p-6 space-y-6 text-lg">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block relative text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition duration-200
                               after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <hr className="my-4 border-gray-300 dark:border-gray-700" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">Theme</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={theme === 'dark'}
                      onChange={toggleTheme}
                      className="sr-only"
                    />
                    <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative transition-colors">
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                          theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </div>
                  </label>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
