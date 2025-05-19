import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data } = matter(fileContents)

    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
    }
  })

  // 日付の新しい順に並べる
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}