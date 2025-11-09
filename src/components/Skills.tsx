type Skill = {
  name: string
  icon: string
  color: string
}

const skills: Skill[] = [
  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
  { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
  { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
  { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-600' },
]

export default function Skills() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <div className={`text-xl font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                {skill.name}
              </div>

              {/* Animated border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
