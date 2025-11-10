import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllPosts } from '../lib/posts'
import { PostMeta } from '../types/post'

type Props = { posts: PostMeta[] }

export default function Blog({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blog — Ian Gicheha Mbae</title>
        <meta name="description" content="Read Ian Gicheha Mbae's thoughts on web development, technology, and software engineering" />
      </Head>

      <div className="bg-white dark:bg-gray-800 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20 -mt-20 pt-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8">
                <span className="text-2xl">✍️</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {posts.length} Articles Published
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Blog & Insights
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Thoughts, tutorials, and stories about web development, technology, and software engineering
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter - Coming Soon */}
        {/* <section className="py-8 bg-white dark:bg-gray-800 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  className="px-6 py-2 rounded-full font-medium text-sm transition-all bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section> */}

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            {posts.length === 0 ? (
              // Empty State
              <div className="max-w-2xl mx-auto text-center py-24">
                <div className="text-8xl mb-8">📝</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  No Posts Yet
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Stay tuned! Articles and tutorials coming soon.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Back to Home
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
              </div>
            ) : (
              // Posts Grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <article
                      className="h-full bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-800 animate-fadeInUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image Placeholder with Gradient */}
                      <div className="relative aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl opacity-50">📄</div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Read Time Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 glass backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">
                          5 min read
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        {/* Date */}
                        {post.date && (
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}

                        {/* Read More Link */}
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
                          Read Article
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-8 shadow-xl">
                <span className="text-4xl">📬</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Stay Updated
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Get notified when I publish new articles about web development and technology
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return { props: { posts } }
}
