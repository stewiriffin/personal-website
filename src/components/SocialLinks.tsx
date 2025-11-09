import Link from 'next/link'

type SocialLink = {
  name: string
  icon: string
  url: string
  color: string
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: '💻', url: 'https://github.com/stewiriffin', color: 'hover:text-gray-900 dark:hover:text-white' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername', color: 'hover:text-blue-400' },
  { name: 'Email', icon: '📧', url: 'mailto:Mbaegicheha@gmail.com', color: 'hover:text-red-500' },
]

type Props = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function SocialLinks({ className = '', size = 'md' }: Props) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  }

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} transition-all duration-300 transform hover:scale-110 ${social.color}`}
          aria-label={social.name}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}
