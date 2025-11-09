import Link from 'next/link'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Ian Gicheha Mbae
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Building exceptional digital experiences with modern technologies.
            </p>
            <SocialLinks size="sm" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get notified about new projects and blog posts.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-200 dark:border-gray-800 text-center text-sm md:text-base text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} Ian Gicheha Mbae. Built with ❤️ using{' '}
            <Link href="https://nextjs.org" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              Next.js
            </Link>
            {' '}and{' '}
            <Link href="https://tailwindcss.com" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
