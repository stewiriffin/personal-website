'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setIsAnimating(true)
    const handleComplete = () => {
      setIsAnimating(false)
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

  return (
    <>
      {isAnimating && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 animate-slideIn origin-left"></div>
        </div>
      )}
      <div className={isAnimating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </>
  )
}
