import Head from 'next/head'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Therapist Website',
      description: 'Professional therapist website built with HTML and modern web technologies. Features include appointment scheduling, service information, and contact forms.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      featured: true,
      github: 'https://github.com/stewiriffin/therapist',
      gallery: ['🏥', '💼', '📅', '📱'],
    },
    {
      title: 'Hot And Cold Game',
      description: 'An interactive word guessing game where players try to discover the secret word. Built as a fun learning project with engaging gameplay mechanics.',
      tags: ['JavaScript', 'Game Dev', 'Interactive'],
      category: 'app',
      github: 'https://github.com/stewiriffin/-r-HotAndCold-',
      gallery: ['🎮', '🔥', '❄️', '🎯'],
    },
    {
      title: 'Ian Portfolio',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience. Built with modern web technologies and responsive design.',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
      category: 'web',
      github: 'https://github.com/stewiriffin/Ian',
      gallery: ['💼', '🚀', '✨', '🎨'],
    },
    {
      title: 'GitHub Profile',
      description: 'Custom GitHub profile configuration with README and personalized settings. Showcases development skills and project portfolio.',
      tags: ['Markdown', 'GitHub', 'Documentation'],
      category: 'design',
      github: 'https://github.com/stewiriffin/stewiriffin',
      gallery: ['💻', '📝', '🌟', '🔧'],
    },
    {
      title: 'Tester Project',
      description: 'Experimental testing project for trying out new technologies and development patterns. A sandbox for learning and exploration.',
      tags: ['Testing', 'Experimentation', 'Dev'],
      category: 'app',
      github: 'https://github.com/stewiriffin/tester',
      gallery: ['🧪', '⚗️', '🔬', '📊'],
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'app', label: 'Applications' },
    { id: 'design', label: 'Design' },
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
        {/* Hero */}
        <section className="py-28 md:py-40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                My Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                A collection of my work — from web applications to design systems and everything in between
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-10 bg-white dark:bg-gray-800 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-8 py-3 rounded-xl font-medium text-base transition-all ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-32">
                <div className="text-8xl mb-8">🔍</div>
                <p className="text-2xl text-gray-600 dark:text-gray-400">
                  No projects found in this category
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
