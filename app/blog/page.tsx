import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog - Saiswapna Gollapudi',
  description: 'Read my latest articles about web development, programming, and technology.',
}

export default function Blog() {
  const posts = getBlogPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
        Articles about web development, programming, and technology.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
              <div className="mb-4">
                <time className="text-gray-500 dark:text-gray-400 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-3xl font-bold my-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">by {post.author}</p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt || post.content.substring(0, 200)}...
              </p>
              
              <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
