'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'

export default function MenuButton() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  // ✅ モバイルかどうか判定（768px以下）
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // ✅ 外クリックで閉じる
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const { theme, toggleTheme } = useTheme()

  // ✅ リンク一覧
  const links = [
    { href: '/en/about', label: 'About' },
    { href: '/en/projects', label: 'Projects' },
    { href: '/en/diary', label: 'Diary' },
    { href: '/en/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* ☰ ボタン */}
      <button
        onClick={() => isMobile && setOpen(!open)}
        onMouseEnter={() => !isMobile && setOpen(true)}
        className="text-4xl text-gray-800 dark:text-white
                    hover:text-black dark:hover:text-gray-300
                    transition duration-200"
        aria-label="Toggle menu"
        >
        ☰
      </button>

      {/* オーバーレイ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* 📱 ドロワー本体 */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            ref={drawerRef}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onMouseEnter={() => !isMobile && setOpen(true)}
            onMouseLeave={() => !isMobile && setOpen(false)}
            className="fixed top-0 left-0 h-full w-[80vw] max-w-xs z-50 bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="p-6 space-y-4 text-sm">
              {/* ✅ 各リンクにふわっとアニメーション */}
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={link.href} className="block hover:underline" onClick={() => setOpen(false)}>
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
                                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform
                                    ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}
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