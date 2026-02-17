'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            SG
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col space-y-2">
            <Link href="/" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">Home</Link>
            <Link href="/about" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">About</Link>
            <Link href="/blog" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">Blog</Link>
            <Link href="/contact" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
