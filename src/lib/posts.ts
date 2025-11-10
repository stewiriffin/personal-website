import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post } from '../types/post'


const POSTS_DIR = path.join(process.cwd(), 'posts')
const POST_EXTENSIONS = ['.mdx', '.md'] as const


export function getAllPosts(fields: string[] = []): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => POST_EXTENSIONS.some((ext) => f.endsWith(ext)))
    .map((fileName) => {
      const fullPath = path.join(POSTS_DIR, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const slug = fileName.replace(/\.(mdx?|md)$/i, '')

      const post: Post = {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split('T')[0],
        excerpt: data.excerpt || null,
        coverImage: data.coverImage || null,
        category: data.category || null,
      }

      // If specific fields are requested, only include those
      if (fields.length > 0) {
        const filteredPost: any = {}
        fields.forEach(field => {
          if (field === 'content') {
            filteredPost.content = content
          } else if (field in post) {
            filteredPost[field] = post[field as keyof Post]
          }
        })
        // Always include slug
        filteredPost.slug = slug
        return filteredPost as Post
      }

      return post
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           