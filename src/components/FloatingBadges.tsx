'use client'
import { useEffect, useState } from 'react'

const badges = [
  { icon: '⚛️', label: 'React', color: 'from-blue-400 to-cyan-400' },
  { icon: '🚀', label: 'Next.js', color: 'from-gray-700 to-gray-900' },
  { icon: '💙', label: 'TypeScript', color: 'from-blue-500 to-blue-700' },
  { icon: '🎨', label: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
  { icon: '⚡', label: 'Fast', color: 'from-yellow-400 to-orange-500' },
  { icon: '✨', label: 'Modern', color: 'from-purple-400 to-pink-500' },
]

export default function FloatingBadges() {
  const [positions, setPositions] = useState<Array<{ x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newPositions = badges.map(() => ({
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 80 + 10,
      delay: Math.random() * 2,
    }))
    setPositions(newPositions)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${positions[index]?.x || 50}%`,
            top: `${positions[index]?.y || 50}%`,
            animationDelay: `${positions[index]?.delay || 0}s`,
          }}
        >
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white shadow-lg opacity-20 hover:opacity-100 transition-opacity duration-300`}
          >
            <span className="text-2xl">{badge.icon}</span>
            <span className="text-sm font-semibold">{badge.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
