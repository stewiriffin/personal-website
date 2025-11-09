import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPosts, getPostSource } from '../../lib/posts'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: any
}

export default function Post({ source, frontMatter }: Props) {
  return (
    <>
      <Head>
        <title>{frontMatter?.title ?? 'Post'} — Ian Gicheha Mbae</title>
        <meta name="description" content={frontMatter?.excerpt || 'Blog post by Ian Gicheha Mbae'} />
      </Head>

      <div className="container mx-auto px-4 py-24">
        <nav className="text-sm text-gray-600">
          <Link href="/blog" className="hover:text-gray-900">← Back to blog</Link>
        </nav>

        <article className="mt-6">
          <h1 className="text-3xl font-bold">{frontMatter?.title}</h1>
          {frontMatter?.date && <p className="text-sm text-gray-500">{new Date(frontMatter.date).toLocaleDateString()}</p>}

          <section className="mt-6 prose prose-lg max-w-none">
            <MDXRemote {...source} />
          </section>
        </article>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getPostSource(slug)
  if (!post) return { notFound: true }

  const mdxSource = await serialize(post.content, { mdxOptions: { remarkPlugins: [], rehypePlugins: [] } })

  return { props: { source: mdxSource, frontMatter: post.data } }
}
