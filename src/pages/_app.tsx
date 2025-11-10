import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ParticleBackground from '../components/ParticleBackground'
import CustomCursor from '../components/CustomCursor'
import PageTransition from '../components/PageTransition'
import { ThemeProvider } from '../contexts/ThemeContext'
import ErrorBoundary from '../components/ErrorBoundary'
import LoadingScreen from '../components/LoadingScreen'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Handle first load
    const timer = setTimeout(() => {
      setIsFirstLoad(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Page transition loading states
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setIsLoading(true)
      }
    }

    const handleComplete = () => {
      setIsLoading(false)
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

  useEffect(() => {
    // Prevent flash of unstyled content
    document.documentElement.classList.add('app-loaded')
  }, [])

  useEffect(() => {
    // Performance optimization: Preload critical resources
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Preload fonts or other critical resources here
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = 'https://fonts.googleapis.com'
        document.head.appendChild(link)
      })
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ErrorBoundary>
        <ThemeProvider>
          {/* First Load Screen */}
          {isFirstLoad && <LoadingScreen />}

          {/* Background Effects */}
          <ParticleBackground />
          
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Navigation */}
          <Navbar />

          {/* Page Transition Loading Bar */}
          {isLoading && (
            <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer" />
          )}

          {/* Main Content with Page Transitions */}
          <PageTransition>
            <main
              className="flex-1 relative z-10 min-h-screen pt-20"
              role="main"
              aria-label="Main content"
            >
              <Component {...pageProps} />
            </main>
          </PageTransition>

          {/* Footer */}
          <Footer />

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Accessibility Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}