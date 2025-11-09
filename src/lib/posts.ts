import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { PostMeta } from '../types/post'


const POSTS_DIR = path.join(process.cwd(), 'posts')
const POST_EXTENSIONS = ['.mdx', '.md'] as const


export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => POST_EXTENSIONS.some((ext) => f.endsWith(ext)))
    .map((fileName) => {
      const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8'))
      const slug = fileName.replace(/\.(mdx?|md)$/i, '')

      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        excerpt: data.excerpt || null,
      } as PostMeta
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}


export function getPostSource(slug: string) {
  for (const ext of POST_EXTENSIONS) {
    const filePath = path.join(POSTS_DIR, `${slug}${ext}`)
    if (fs.existsSync(filePath)) {
      return matter(fs.readFileSync(filePath, 'utf8'))
    }
  }

  return null
}
