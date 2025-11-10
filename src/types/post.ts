export type PostMeta = {
  title: string
  date: string
  excerpt?: string
  slug: string
}

export type Post = {
  title: string
  date: string
  excerpt?: string
  slug: string
  coverImage?: string
  category?: string
  content?: string
}

export type PostData = {
  data: any
  content: string
}
