import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import type { Post } from '../types/post'

interface HomeProps {
  recentPosts: Post[]
}

export default function Home({ recentPosts }: HomeProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Advanced mouse tracking for interactive effects
  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Parallax effect calculation
  const calculateParallax = (speed: number) => {
    if (typeof window === 'undefined') return { x: 0, y: 0 }
    return {
      x: (mousePosition.x - window.innerWidth / 2) * speed,
      y: (mousePosition.y - window.innerHeight / 2) * speed,
    }
  }

  const skills = [
    {
      title: 'Web Development',
      description: 'Building responsive, performant web applications with React, Next.js, TypeScript, and modern frameworks.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      color: 'bg-blue-600',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive, beautiful interfaces with attention to detail, accessibility, and user experience.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      color: 'bg-purple-600',
    },
    {
      title: 'Performance Optimization',
      description: 'Optimizing applications for blazing-fast speeds, seamless animations, and superior user experiences.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500',
      color: 'bg-pink-600',
    },
  ]

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: '🚀' },
    { label: 'Happy Clients', value: '30+', icon: '😊' },
    { label: 'Code Quality', value: '99%', icon: '✨' },
    { label: 'Coffee Consumed', value: '∞', icon: '☕' },
  ]

  return (
    <>
      <Head>
        <title>Ian's Portfolio - Award-Winning Web Developer & Designer</title>
        <meta name="description" content="Experienced full-stack developer specializing in React, Next.js, and modern web technologies. Creating stunning digital experiences with cutting-edge design and performance." />
        <meta property="og:title" content="Ian's Portfolio - Web Developer & Designer" />
        <meta property="og:description" content="Award-winning web developer crafting exceptional digital experiences" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="web developer, react developer, next.js, typescript, ui/ux designer, portfolio" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>

      <div className="min-h-screen overflow-hidden">
        {/* Enhanced Hero Section with Advanced Effects */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden -mt-20"
        >
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />

          {/* Animated Mesh Gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 50%)`,
            }}
          />

          {/* Advanced Floating Elements with Parallax */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-floatSlow"
              style={{
                transform: `translate(${calculateParallax(0.02).x}px, ${calculateParallax(0.02).y}px)`,
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-floatSlow delay-1000"
              style={{
                transform: `translate(${calculateParallax(0.03).x}px, ${calculateParallax(0.03).y}px)`,
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse-glow"
              style={{
                transform: `translate(${calculateParallax(0.015).x}px, ${calculateParallax(0.015).y}px)`,
              }}
            />
          </div>

          {/* Hero Content with Staggered Animations */}
          <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Status Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 glass rounded-full shadow-xl animate-fadeInUp backdrop-blur-md border border-white/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-400"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
                Available for Exciting Projects
              </span>
            </div>

            {/* Dynamic Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeInUp delay-100">
              <span className="block text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift">
                    Ian
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-sm"></span>
                </span>
              </span>
            </h1>

            {/* Rotating Text Effect */}
            <div className="mb-8 h-16 flex items-center justify-center animate-fadeInUp delay-200">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse-glow">
                Web Developer & Creative Designer
              </p>
            </div>

            {/* Enhanced Description */}
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed animate-fadeInUp delay-300">
              I craft <span className="font-semibold text-blue-600 dark:text-blue-400">beautiful digital experiences</span> with modern technologies.
              Passionate about <span className="font-semibold text-purple-600 dark:text-purple-400">clean code</span>,{' '}
              <span className="font-semibold text-pink-600 dark:text-pink-400">intuitive design</span>, and bringing ideas to life.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp delay-400">
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/contact"
                className="group px-8 py-4 glass backdrop-blur-md text-gray-700 dark:text-gray-200 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp delay-500">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce delay-1000">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
                <svg
                  className="w-6 h-6 text-gray-400 dark:text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  What I Do Best
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Delivering exceptional results through expertise and passion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className={`group relative p-8 bg-gradient-to-br ${
                    activeSkill === index ? 'from-gray-50 to-white dark:from-gray-800 dark:to-gray-700' : 'from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'
                  } rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 dark:border-gray-800 overflow-hidden`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Icon Container */}
                  <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {skill.icon}
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {skill.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Blog Posts Section */}
        {recentPosts && recentPosts.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-16">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Latest Insights
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Thoughts, tutorials, and stories from my journey
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:flex items-center gap-2 px-6 py-3 glass backdrop-blur-md rounded-xl font-semibold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform border border-blue-200 dark:border-blue-800 group"
                >
                  View All Posts
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <article className="h-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-800">
                      {post.coverImage && (
                        <div className="relative aspect-video bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={post.date} className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {post.date}
                          </time>
                          {post.category && (
                            <>
                              <span>•</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
                                {post.category}
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                          Read More
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Enhanced CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>

          {/* Floating Shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-floatSlow"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's turn your vision into reality with cutting-edge technology and stunning design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-600 font-bold rounded-xl shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
              >
                Start a Conversation
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-10 py-5 glass backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage',
    'category',
  ])

  return {
    props: {
      recentPosts: allPosts,
    },
  }
}
