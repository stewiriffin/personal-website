import Head from 'next/head'
import SocialLinks from '../components/SocialLinks'
import SkillBar from '../components/SkillBar'

export default function About() {
  const timeline = [
    { year: '2024', title: 'Senior Developer', company: 'Tech Company', description: 'Leading frontend development team' },
    { year: '2022', title: 'Full Stack Developer', company: 'Startup Inc', description: 'Built scalable web applications' },
    { year: '2020', title: 'Junior Developer', company: 'Agency', description: 'Developed client websites' },
    { year: '2019', title: 'Started Learning', company: 'Self-taught', description: 'Began coding journey' },
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '20+', label: 'Happy Clients' },
    { value: '15+', label: 'Technologies' },
  ]

  return (
    <>
      <Head>
        <title>About — Ian Gicheha Mbae</title>
        <meta name="description" content="Learn more about Ian Gicheha Mbae - Full stack developer passionate about creating exceptional digital experiences" />
      </Head>

      <div className="bg-white dark:bg-gray-800">
        {/* Hero Section */}
        <section className="py-28 md:py-40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-40 h-40 mx-auto mb-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl shadow-2xl">
                👨‍💻
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                About Me
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful, functional web experiences.
              </p>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 md:py-32 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10">My Story</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Hi, I'm Ian Gicheha Mbae! I'm a full-stack developer with over 5 years of experience building web applications
                  that users love. My journey into tech started with a curiosity about how websites worked, and
                  it quickly turned into a passion for creating them.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I specialize in modern JavaScript frameworks like React and Next.js, and I have extensive
                  experience with TypeScript, Node.js, and various databases. I'm particularly interested in
                  creating intuitive user interfaces and optimizing web performance.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or sharing what I've learned through blog posts and tutorials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Progress */}
        <section className="py-24 md:py-32 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
                Technical Proficiency
              </h2>
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

        {/* Timeline */}
        <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-20 text-center">Career Timeline</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

                {timeline.map((item, index) => (
                  <div key={index} className="relative mb-16 md:mb-12">
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-shadow ml-20 md:ml-0">
                          <div className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-3">{item.year}</div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                          <div className="text-lg text-gray-600 dark:text-gray-400 mb-3">{item.company}</div>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 border-4 border-white dark:border-gray-800 shadow-lg"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
