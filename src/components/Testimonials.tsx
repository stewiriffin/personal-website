'use client'
import { useState } from 'react'

type Testimonial = {
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Innovations Inc',
    image: '👩‍💼',
    content: 'Ian delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartUp Labs',
    image: '👨‍💻',
    content: 'Working with Ian was a game-changer for our startup. He not only built a robust platform but also provided valuable insights on user experience and scalability.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'Creative Studio',
    image: '👩‍🎨',
    content: 'Ian has an incredible ability to turn design concepts into pixel-perfect, performant web applications. His collaboration and communication skills are top-notch.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Feedback from amazing people I've had the pleasure to work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 md:p-16 relative">
            <div className="text-6xl text-blue-600 dark:text-blue-400 absolute top-8 left-8 opacity-20">"</div>

            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="text-6xl mb-4">{testimonials[activeIndex].image}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
                  {testimonials[activeIndex].company}
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                {testimonials[activeIndex].content}
              </p>

              <div className="flex justify-center mb-8">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
