import '../globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ThemeProvider } from '@/components/ThemeProvider'
import MenuButton from '@/components/MenuButton' // ✅ 追加！

export const metadata: Metadata = {
  title: "Jun's Portfolio",
  description: 'Welcome to my personal site',
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <div className="bg-background text-foreground font-sans">
            <header
              className="fixed top-0 left-0 w-full z-50
                        px-4 py-3
                        border-b border-gray-200 dark:border-white/10
                        flex justify-between items-center
                        bg-background text-foreground"
            >
              <div className="absolute left-4">
                <MenuButton />
              </div>

              {/* 中央: Jun */}
              <div className="mx-auto">
                <Link href="/en" className="text-xl font-bold">Jun</Link>
              </div>

              {/* 右: 今は空、将来的に言語切替やアイコン入れてもOK */}
              <div className="absolute right-4">
                {/* Placeholder */}
              </div>
            </header>
            <main className="pt-20 p-8 max-w-3xl mx-auto">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
