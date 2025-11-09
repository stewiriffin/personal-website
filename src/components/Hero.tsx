import Link from 'next/link'
import { useState, useEffect } from 'react'
import AnimatedGradientText from './AnimatedGradientText'
import MagneticButton from './MagneticButton'
import FloatingBadges from './FloatingBadges'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const roles = ['Developer', 'Designer', 'Creator', 'Problem Solver']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 opacity-50"></div>

      {/* Floating Badges */}
      <FloatingBadges />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting with fade-in */}
          <div className="animate-fadeInUp mb-8">
            <span className="inline-block px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main heading with stagger animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 animate-fadeInUp delay-100 leading-tight">
            Hi, I'm <AnimatedGradientText>Ian Gicheha Mbae</AnimatedGradientText>
          </h1>

          {/* Typing animation */}
          <div className="h-20 md:h-24 mb-10 animate-fadeInUp delay-200">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300">
              I'm a <span className="text-blue-600 dark:text-blue-400">{displayText}</span>
              <span className="animate-blink">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-300">
            I build modern web applications with cutting-edge technologies.
            Passionate about creating beautiful, functional, and user-friendly experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fadeInUp delay-400">
            <MagneticButton>
              <Link
                href="/projects"
                className="block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="block px-10 py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </MagneticButton>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto animate-fadeInUp delay-500">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">5+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">20+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-3">10+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}
