import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// 静的パス生成（SSG 用）
export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'posts'))
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }))
}

export default async function DiaryPost(propsPromise: Promise<{ params: { slug: string } }>) {
  const { params } = await propsPromise
  const slug = params.slug


  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return (
    <article className="prose max-w-2xl mx-auto px-4 py-10 text-black font-serif dark:prose-invert">
      <h1>{data.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}