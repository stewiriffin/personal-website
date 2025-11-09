import Head from 'next/head'

export default function SEO({ title, description }: { title?: string; description?: string }){
  const siteTitle = 'Ian — Personal Site'
  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description ?? 'Personal website of Ian'} />
      <meta property="og:title" content={title ?? siteTitle} />
    </Head>
  )
}
