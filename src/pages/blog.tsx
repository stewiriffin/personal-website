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

      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4 text-gray-700">Thoughts, notes, and experiments.</p>

        <ul className="mt-8 space-y-6">
          {posts.map((p) => (
            <li key={p.slug} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${p.slug}`} className="text-blue-600">{p.title}</Link>
              </h2>
              {p.date && <p className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</p>}
              <p className="mt-2 text-gray-600">{p.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return { props: { posts } }
}
