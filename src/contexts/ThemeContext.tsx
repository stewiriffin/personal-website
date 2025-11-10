'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Get system theme preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Resolve theme based on user preference or system
  const resolveTheme = (userTheme: Theme): 'light' | 'dark' => {
    if (userTheme === 'system') {
      return getSystemTheme()
    }
    return userTheme
  }

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)
    const savedTheme = (typeof window !== 'undefined' ? localStorage.getItem('theme') : null) as Theme | null
    const initialTheme = savedTheme || 'system'
    setThemeState(initialTheme)
    setResolvedTheme(resolveTheme(initialTheme))
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return

    const root = document.documentElement
    const resolved = resolveTheme(theme)

    // Update resolved theme state
    setResolvedTheme(resolved)

    // Apply theme class
    if (resolved === 'dark') {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }

    // Save to localStorage
    localStorage.setItem('theme', theme)

    // Add smooth transition
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease'
  }, [theme, mounted])

  // Listen to system theme changes
  useEffect(() => {
    if (!mounted || typeof window === 'undefined' || theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      setResolvedTheme(e.matches ? 'dark' : 'light')
      const root = document.documentElement

      if (e.matches) {
        root.classList.add('dark')
        root.style.colorScheme = 'dark'
      } else {
        root.classList.remove('dark')
        root.style.colorScheme = 'light'
      }
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setThemeState(prev => {
      // Cycle through: light -> dark -> system -> light
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'system'
      return 'light'
    })
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Provide default value during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider
        value={{
          theme: 'system',
          resolvedTheme: 'light',
          toggleTheme: () => {},
          setTheme: () => {}
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    // Return default values if not in provider (for SSR compatibility)
    return {
      theme: 'system' as Theme,
      resolvedTheme: 'light' as 'light' | 'dark',
      toggleTheme: () => {},
      setTheme: () => {}
    }
  }
  return context
}
