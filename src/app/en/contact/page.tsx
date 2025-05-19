// src/app/en/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        If you’d like to get in touch, feel free to reach out via email or social media.
      </p>

      <ul className="space-y-2 text-blue-600 dark:text-blue-400 underline">
        <li>
          <a href="https://www.instagram.com/jun_i826?igsh=ZHFlMGhsb2d3dmow&utm_source=qr">Instagram</a>
        </li>
        <li>
          <a href="https://github.com/Junxzi" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  )
}
