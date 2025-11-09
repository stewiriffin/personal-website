type AnimatedGradientTextProps = {
  children: React.ReactNode
  className?: string
}

export default function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift ${className}`}
    >
      {children}
    </span>
  )
}
