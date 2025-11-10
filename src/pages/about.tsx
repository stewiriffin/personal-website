import Head from 'next/head'
import { useState } from 'react'
import SocialLinks from '../components/SocialLinks'
import SkillBar from '../components/SkillBar'

export default function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const timeline = [
    {
      year: '2024',
      title: 'Senior Developer',
      company: 'Tech Company',
      description: 'Leading frontend development team and architecting scalable solutions',
      icon: '🚀'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Built scalable web applications using modern tech stack',
      icon: '💻'
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'Agency',
      description: 'Developed client websites and learned industry best practices',
      icon: '🌱'
    },
    {
      year: '2019',
      title: 'Started Learning',
      company: 'Self-taught',
      description: 'Began coding journey with HTML, CSS, and JavaScript',
      icon: '✨'
    },
  ]

  const stats = [
    { value: '5+', label: 'Years Experience', icon: '⏰', color: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Projects Completed', icon: '🎯', color: 'from-purple-500 to-pink-500' },
    { value: '20+', label: 'Happy Clients', icon: '😊', color: 'from-green-500 to-emerald-500' },
    { value: '15+', label: 'Technologies', icon: '⚡', color: 'from-orange-500 to-red-500' },
  ]

  const values = [
    {
      icon: '🎨',
      title: 'Design Excellence',
      description: 'Creating beautiful, intuitive interfaces that users love'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Building fast, optimized applications for the best user experience'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Implementing best practices to keep applications secure'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and improving skills'
    }
  ]

  return (
    <>
      <Head>
        <title>About — Ian Gicheha Mbae</title>
        <meta name="description" content="Learn more about Ian Gicheha Mbae - Full stack developer passionate about creating exceptional digital experiences" />
      </Head>

      <div className="bg-white dark:bg-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20 -mt-20 pt-32 overflow-hidden">
          {/* Animated Background Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-floatSlow"></div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Avatar with animated ring */}
              <div className="relative w-40 h-40 mx-auto mb-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 animate-spin-slow opacity-75 blur-md"></div>
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl shadow-2xl animate-float">
                  👨‍💻
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ian</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                A passionate full-stack developer crafting beautiful, functional web experiences that make a difference
              </p>

              <SocialLinks className="justify-center" />
            </div>
          </div>
        </section>

        {/* Stats Section with Enhanced Design */}
        <section className="py-20 md:py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`text-center p-8 rounded-3xl bg-gradient-to-br ${stat.color} transform transition-all duration-300 ${hoveredStat === index ? 'scale-110 shadow-2xl' : 'scale-100 shadow-lg'}`}>
                    <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-125">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fadeInUp">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section with Enhanced Layout */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Journey</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My journey into tech started with curiosity about how websites worked. That curiosity turned into a
                    passion for creating elegant solutions to complex problems.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Passion</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in modern JavaScript frameworks, with a focus on creating intuitive user interfaces
                    and optimizing web performance for exceptional user experiences.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge through blog posts and tutorials. I believe in continuous learning and giving back
                  to the developer community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - New */}
        <section className="py-20 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  What I Value
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Core principles that guide my work
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Progress with Enhanced Design */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proficiency</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Technologies and tools I work with
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <SkillBar name="React & Next.js" level={95} color="from-blue-600 to-cyan-600" delay={0} />
                <SkillBar name="TypeScript" level={90} color="from-blue-500 to-blue-700" delay={100} />
                <SkillBar name="Node.js & Express" level={88} color="from-green-500 to-green-700" delay={200} />
                <SkillBar name="TailwindCSS" level={92} color="from-cyan-400 to-blue-500" delay={300} />
                <SkillBar name="PostgreSQL & MongoDB" level={85} color="from-indigo-600 to-purple-600" delay={400} />
                <SkillBar name="Git & DevOps" level={87} color="from-orange-500 to-red-600" delay={500} />
                <SkillBar name="Python & Django" level={80} color="from-yellow-400 to-blue-500" delay={600} />
                <SkillBar name="UI/UX Design" level={83} color="from-pink-500 to-purple-500" delay={700} />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline with Enhanced Animations */}
        <section className="py-20 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Career <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  My professional journey so far
                </p>
              </div>

              <div className="relative">
                {/* Timeline line with gradient */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative mb-16 md:mb-12 animate-fadeInUp"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                        <div className="group bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ml-20 md:ml-0 border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1">
                          <div className="flex items-center gap-3 mb-4" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                            <span className="text-3xl">{item.icon}</span>
                            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <div className="text-lg text-gray-600 dark:text-gray-400 mb-3 font-medium">{item.company}</div>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Dot with pulsing animation */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-8 shadow-xl">
                <span className="text-4xl">👋</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Work Together
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
