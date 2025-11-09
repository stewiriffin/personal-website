import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import Testimonials from '../components/Testimonials'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Therapist Website',
      description: 'Professional therapist website built with HTML and modern web technologies. Features include appointment scheduling and contact forms.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      featured: true,
      github: 'https://github.com/stewiriffin/therapist',
      gallery: ['🏥', '💼', '📅', '📱'],
    },
    {
      title: 'Hot And Cold Game',
      description: 'An interactive word guessing game where players try to discover the secret word with engaging gameplay mechanics.',
      tags: ['JavaScript', 'Game Dev', 'Interactive'],
      github: 'https://github.com/stewiriffin/-r-HotAndCold-',
      gallery: ['🎮', '🔥', '❄️', '🎯'],
    },
    {
      title: 'Ian Portfolio',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience with modern web technologies.',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/stewiriffin/Ian',
      gallery: ['💼', '🚀', '✨', '🎨'],
    },
  ]

  return (
    <>
      <Head>
        <title>Ian Gicheha Mbae — Full Stack Developer & Designer</title>
        <meta name="description" content="Ian Gicheha Mbae's personal portfolio - Full stack developer specializing in React, Next.js, and modern web technologies" />
        <meta property="og:title" content="Ian Gicheha Mbae — Full Stack Developer" />
        <meta property="og:description" content="Building exceptional digital experiences" />
      </Head>

      <Hero />

      <Skills />

      {/* Featured Projects Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A selection of my recent work — from web applications to design systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              href="/about"
              className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
