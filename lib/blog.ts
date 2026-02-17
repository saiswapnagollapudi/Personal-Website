import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'blog')

export function getBlogPosts() {
  const files = fs.readdirSync(blogDirectory)
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(blogDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: file.replace('.md', ''),
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content,
        author: data.author || 'Saiswapna'
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

export function getBlogPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    content,
    author: data.author || 'Saiswapna'
  }
}
