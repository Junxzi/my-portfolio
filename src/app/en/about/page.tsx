'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.section
      className="prose dark:prose-invert max-w-2xl mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Turning Curiosity into Code.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Ever since I was a kid, I’ve loved solving puzzles—whether that meant Rubik’s cubes, brain teasers, or now, complex data problems.
        At university, I found myself drawn to data science, where logical thinking meets creativity.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        I&apos;m currently studying at Tokyo University of Science, focusing on data science and machine learning.
        Recently, I’ve been exploring how large language models can be used for financial forecasting.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        I value collaboration, clean code, and continuous learning. I believe the best solutions come from diverse perspectives and asking bold questions.
      </motion.p>
    </motion.section>
  )
}
