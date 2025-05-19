'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projectList = [
    {
      title: 'Tokyo Rent Prediction',
      url: 'https://github.com/Junxzi/signate-studentcup2019',
      stack: 'Python, scikit-learn, pandas',
      description:
        'A regression model to predict apartment rent in Tokyo based on property features. Achieved the highest accuracy in a university seminar competition.',
    },
    {
      title: 'Financial News Sentiment Analysis',
      url: 'https://github.com/Junxzi/news-sentiment-stock-prediction',
      stack: 'FinBERT, Python',
      description:
        'Analyzed sentiment of news articles for GAFAM stocks and evaluated correlation with returns. Designed for NLP × Finance predictive modeling.',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8 max-w-3xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4"
      >
        Projects
      </motion.h2>

      {projectList.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.04, delay: i * 0.05 }} // 👈 ここを調整
          viewport={{ once: true }}
          className="border p-4 rounded-lg shadow-md bg-white/70 dark:bg-gray-900/60 backdrop-blur-md transition-all"
        >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Built with {project.stack}
          </p>
          <p>{project.description}</p>
        </a>
        </motion.div>
      ))}
    </motion.section>
  )
}
