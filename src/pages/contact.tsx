import Head from 'next/head'
import { useState, FormEvent } from 'react'
import SocialLinks from '../components/SocialLinks'
import CopyToClipboard from '../components/CopyToClipboard'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Head>
        <title>Contact — Ian Gicheha Mbae</title>
        <meta name="description" content="Get in touch with Ian Gicheha Mbae - Let's discuss your next project" />
      </Head>

      <div className="bg-white dark:bg-gray-800 min-h-screen">
        {/* Hero */}
        <section className="py-28 md:py-40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                Have a project in mind? Let's talk about how we can work together.
              </p>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                  Let's Connect
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="text-4xl">📧</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                      <CopyToClipboard text="Mbaegicheha@gmail.com">
                        <a href="mailto:Mbaegicheha@gmail.com" className="text-lg text-blue-600 dark:text-blue-400 hover:underline">
                          Mbaegicheha@gmail.com
                        </a>
                      </CopyToClipboard>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="text-4xl">📱</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                      <CopyToClipboard text="+254708617059">
                        <a href="tel:+254708617059" className="text-lg text-blue-600 dark:text-blue-400 hover:underline">
                          +254 708 617 059
                        </a>
                      </CopyToClipboard>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="text-4xl">📍</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="text-4xl">💼</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Availability</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        Open for freelance projects
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response Time</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    I typically respond within <span className="font-bold text-blue-600 dark:text-blue-400">24 hours</span> on business days.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-base">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
