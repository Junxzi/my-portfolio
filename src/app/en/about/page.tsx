'use client'

import { Code, Database, BarChart3, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I am currently engaged in research on data science and machine learning, with a strong interest in predictive modeling and natural language processing. To develop practical skills, I actively challenge myself through portfolio projects and participation in competitions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-500" />
            <span>Python, TypeScript, JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-green-500" />
            <span>PostgreSQL</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-500" />
            <span>scikit-learn, pandas, FinBERT</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-yellow-500" />
            <span>TOEIC 945</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-yellow-500" />
            <span>Japan Statistical Society Certificate in Statistics, Grade 2</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
