import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function DiaryPage() {
  const posts = getAllPosts()

  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-6">Diary</h2>
      {posts.map((post) => (
        <div key={post.slug} className="border-b pb-4">
          <h3 className="text-xl font-semibold">
            <Link href={`/en/diary/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      ))}
    </section>
  )
}