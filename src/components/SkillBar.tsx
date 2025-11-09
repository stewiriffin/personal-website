'use client'
import { useState, useEffect, useRef } from 'react'

type SkillBarProps = {
  name: string
  level: number
  color: string
  delay?: number
}

export default function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setWidth(level)
      }, delay)
    }
  }, [isVisible, level, delay])

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-base font-semibold text-gray-900 dark:text-white">{name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}
