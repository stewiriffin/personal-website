import Head from 'next/head'
import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Therapist Website',
      description: 'Professional therapist website built with HTML and modern web technologies. Features include appointment scheduling, service information, and contact forms.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      featured: true,
      github: 'https://github.com/stewiriffin/therapist',
      gallery: ['🏥', '💼', '📅', '📱'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Hot And Cold Game',
      description: 'An interactive word guessing game where players try to discover the secret word. Built as a fun learning project with engaging gameplay mechanics.',
      tags: ['JavaScript', 'Game Dev', 'Interactive'],
      category: 'app',
      github: 'https://github.com/stewiriffin/-r-HotAndCold-',
      gallery: ['🎮', '🔥', '❄️', '🎯'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Ian Portfolio',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience. Built with modern web technologies and responsive design.',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
      category: 'web',
      github: 'https://github.com/stewiriffin/Ian',
      gallery: ['💼', '🚀', '✨', '🎨'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'GitHub Profile',
      description: 'Custom GitHub profile configuration with README and personalized settings. Showcases development skills and project portfolio.',
      tags: ['Markdown', 'GitHub', 'Documentation'],
      category: 'design',
      github: 'https://github.com/stewiriffin/stewiriffin',
      gallery: ['💻', '📝', '🌟', '🔧'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tester Project',
      description: 'Experimental testing project for trying out new technologies and development patterns. A sandbox for learning and exploration.',
      tags: ['Testing', 'Experimentation', 'Dev'],
      category: 'app',
      github: 'https://github.com/stewiriffin/tester',
      gallery: ['🧪', '⚗️', '🔬', '📊'],
      color: 'from-indigo-500 to-purple-500'
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🎯', count: projects.length },
    { id: 'web', label: 'Web Apps', icon: '🌐', count: projects.filter(p => p.category === 'web').length },
    { id: 'app', label: 'Applications', icon: '📱', count: projects.filter(p => p.category === 'app').length },
    { id: 'design', label: 'Design', icon: '🎨', count: projects.filter(p => p.category === 'design').length },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <>
      <Head>
        <title>Projects — Ian Gicheha Mbae</title>
        <meta name="description" content="Explore Ian Gicheha Mbae's portfolio of web applications, mobile apps, and design projects" />
      </Head>

      <div className="bg-white dark:bg-gray-800 min-h-screen">
        {/* Enhanced Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20 -mt-20 pt-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-floatSlow"></div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8">
                <span className="text-2xl">💼</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {projects.length} Projects Completed
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                A showcase of my work — from web applications to design systems, each project built with passion and attention to detail
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Filter */}
        <section className="py-8 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700 shadow-sm backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">{cat.icon}</span>
                    {cat.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      filter === cat.id
                        ? 'bg-white/20'
                        : 'bg-gray-200 dark:bg-gray-600'
                    }`}>
                      {cat.count}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid with Custom Cards */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <article className="h-full bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:-translate-y-2">
                      {/* Project Header with Gradient */}
                      <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                        {/* Gallery Icons */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4">
                          {project.gallery.map((emoji, i) => (
                            <span
                              key={i}
                              className={`text-5xl transform transition-all duration-500 ${
                                hoveredProject === index
                                  ? 'scale-125 rotate-12'
                                  : 'scale-100 rotate-0'
                              }`}
                              style={{
                                transitionDelay: `${i * 50}ms`,
                                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                              }}
                            >
                              {emoji}
                            </span>
                          ))}
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 dark:text-white border border-white/50 shadow-lg">
                            ⭐ Featured
                          </div>
                        )}

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8">
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View Code
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-32">
                <div className="text-8xl mb-8 animate-bounce">🔍</div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  No Projects Found
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  No projects match the selected category
                </p>
                <button
                  onClick={() => setFilter('all')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View All Projects
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-8 shadow-xl animate-float">
                <span className="text-4xl">🚀</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Have a Project in Mind?
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Let's collaborate and bring your ideas to life with cutting-edge technology
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Start a Project
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="https://github.com/stewiriffin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
