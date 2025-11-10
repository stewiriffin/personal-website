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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'Mbaegicheha@gmail.com',
      href: 'mailto:Mbaegicheha@gmail.com',
      description: 'For project inquiries',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+254 708 617 059',
      href: 'tel:+254708617059',
      description: 'Business hours: 9AM - 6PM EAT',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kenya',
      href: null,
      description: 'Available for remote work globally',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact — Ian Gicheha Mbae</title>
        <meta name="description" content="Get in touch with Ian Gicheha Mbae - Let's discuss your next project" />
      </Head>

      <div className="bg-white dark:bg-gray-800 min-h-screen">
        {/* Hero Section with Enhanced Design */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20 -mt-20 pt-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-floatSlow"></div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-8 shadow-2xl animate-float">
                <span className="text-5xl">💬</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
              </p>

              <SocialLinks className="justify-center" />
            </div>
          </div>
        </section>

        {/* Contact Methods Cards */}
        <section className="py-20 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {method.description}
                      </p>
                      {method.href ? (
                        <CopyToClipboard text={method.value}>
                          <a
                            href={method.href}
                            className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                          >
                            {method.value}
                          </a>
                        </CopyToClipboard>
                      ) : (
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Left Side - Info */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Together</span>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                {/* Availability Status */}
                <div className="mb-12 p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Available for Work
                    </h3>
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Currently accepting new freelance projects and collaborations
                  </p>
                </div>

                {/* Response Time */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">⚡</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Quick Response
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    I typically respond within <span className="font-bold text-blue-600 dark:text-blue-400">24 hours</span> on business days
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-12 pl-6 border-l-4 border-blue-600">
                  <p className="text-lg italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "Great things are never done by one person. They're done by a team of people."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">— Steve Jobs</p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-4xl">✉️</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Send a Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        disabled={status === 'loading'}
                        className={`w-full px-5 py-4 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 ${
                          focusedField === 'name'
                            ? 'border-blue-500 ring-4 ring-blue-500/20'
                            : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        disabled={status === 'loading'}
                        className={`w-full px-5 py-4 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 ${
                          focusedField === 'email'
                            ? 'border-blue-500 ring-4 ring-blue-500/20'
                            : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        disabled={status === 'loading'}
                        className={`w-full px-5 py-4 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 ${
                          focusedField === 'subject'
                            ? 'border-blue-500 ring-4 ring-blue-500/20'
                            : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                        placeholder="Project Inquiry"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        disabled={status === 'loading'}
                        className={`w-full px-5 py-4 rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none ${
                          focusedField === 'message'
                            ? 'border-blue-500 ring-4 ring-blue-500/20'
                            : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                        placeholder="Tell me about your project, goals, timeline, and budget..."
                      />
                    </div>

                    {/* Success Message */}
                    {status === 'success' && (
                      <div className="p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 text-green-700 dark:text-green-400 rounded-xl text-base flex items-center gap-3 animate-fadeInUp">
                        <span className="text-2xl">✓</span>
                        <div>
                          <p className="font-semibold">Message sent successfully!</p>
                          <p className="text-sm opacity-90">I'll get back to you as soon as possible.</p>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                        status === 'loading'
                          ? 'opacity-75 cursor-not-allowed'
                          : 'hover:shadow-2xl hover:scale-105'
                      }`}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Quick answers to common questions
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: 'What types of projects do you work on?',
                    a: 'I work on web applications, websites, UI/UX design, and full-stack development projects using modern technologies like React, Next.js, Node.js, and more.'
                  },
                  {
                    q: 'What is your typical project timeline?',
                    a: 'Project timelines vary based on scope and complexity. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I provide detailed timelines during our initial consultation.'
                  },
                  {
                    q: 'Do you work with international clients?',
                    a: 'Yes! I work with clients globally and am comfortable with remote collaboration across different time zones.'
                  },
                  {
                    q: 'What are your rates?',
                    a: 'My rates vary depending on project scope, complexity, and timeline. Contact me with your project details for a personalized quote.'
                  }
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400">Q:</span>
                      {faq.q}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                      {faq.a}
                    </p>
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
