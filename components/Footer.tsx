import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Location: United States</p>
            <p className="text-gray-600 dark:text-gray-400">Open to opportunities and collaborations</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">About</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/sai-swapna-gollapudi-316a83a2/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/saiswapnagollapudi" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Saiswapna Gollapudi. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 md:mt-0">
            Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}
