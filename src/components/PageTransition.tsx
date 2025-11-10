'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }

    const handleComplete = () => {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsAnimating(false)
      }, 100)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  // Update children after animation starts
  useEffect(() => {
    if (!isAnimating) {
      setDisplayChildren(children)
    }
  }, [isAnimating, children])

  return (
    <>
      {/* Page Transition Overlay */}
      {isAnimating && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          {/* Sliding overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-slideInRight origin-left" />

          {/* Optional: Add a loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        </div>
      )}

      {/* Content with fade transition */}
      <div
        className={`transition-all duration-500 ${
          isAnimating
            ? 'opacity-0 scale-95 blur-sm'
            : 'opacity-100 scale-100 blur-0'
        }`}
      >
        {displayChildren}
      </div>
    </>
  )
}
