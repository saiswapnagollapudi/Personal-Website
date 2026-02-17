import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Saiswapna Gollapudi`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Blog
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>•</span>
          <span>by {post.author}</span>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        {/* For proper markdown rendering, you might want to use a library like react-markdown */}
        {/* For now, we'll display the content as is */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.content.split('\n\n').map((paragraph: string, index: number) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)?.[0].length || 1
              const text = paragraph.replace(/^#+\s/, '')
              const sizes: Record<number, string> = {
                1: 'text-3xl',
                2: 'text-2xl',
                3: 'text-xl',
                4: 'text-lg',
                5: 'text-base',
                6: 'text-base'
              }
              return (
                <div key={index} className={`${sizes[level]} font-bold mt-8 mb-4`}>
                  {text}
                </div>
              )
            }
            
            if (paragraph.startsWith('```')) {
              const code = paragraph.replace(/```[a-z]*\n?/, '').replace(/```/, '')
              return (
                <pre key={index} className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{code}</code>
                </pre>
              )
            }

            if (paragraph.startsWith('-')) {
              return (
                <ul key={index} className="list-disc list-inside space-y-2">
                  {paragraph.split('\n').map((item: string, i: number) => (
                    <li key={i}>{item.replace(/^-\s/, '')}</li>
                  ))}
                </ul>
              )
            }

            return <p key={index}>{paragraph}</p>
          })}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </article>
  )
}
