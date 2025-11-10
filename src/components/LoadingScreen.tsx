'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Exponential progress for more natural feel
        return prev + (100 - prev) * 0.1
      })
    }, 50)

    // Fade out after loading completes
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1400)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(fadeOutTimer)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated Logo/Brand */}
        <div className="relative mb-8">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-transparent border-t-blue-600 border-r-purple-600 animate-spin" />

          {/* Middle pulsing circle */}
          <div className="absolute inset-2 w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse-glow" />

          {/* Inner icon/logo */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-blue-600 dark:text-blue-400 animate-float"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 w-32 h-32 animate-rotate-slow">
            <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 bg-blue-600 rounded-full" />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 bg-purple-600 rounded-full" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6 overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white animate-fadeInUp">
            Loading<span className="animate-blink">...</span>
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400 tabular-nums">
          {Math.round(progress)}%
        </div>

        {/* Fun loading messages */}
        <div className="mt-6 h-6">
          <p className="text-xs text-gray-500 dark:text-gray-400 animate-fadeIn">
            {progress < 30 && 'Initializing experience...'}
            {progress >= 30 && progress < 60 && 'Loading components...'}
            {progress >= 60 && progress < 90 && 'Almost there...'}
            {progress >= 90 && 'Ready!'}
          </p>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-floatSlow delay-1000" />
      </div>

      {/* Minimal style alternative (uncomment if preferred) */}
      {/*
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 border-t-blue-600 rounded-full animate-spin mb-4" />
        <p className="text-sm text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
      */}
    </div>
  )
}
