'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface CareerItem {
  title: string
  company?: string
  location?: string
  date: string
  description: string
}

const careers: CareerItem[] = [
  {
    title: 'High School',
    company: 'Shiba High School',
    location: 'Tokyo',
    date: 'April 2020 - March 2022',
    description:
      'My high school was located right next to the Tokyo Tower🗼.',
  },
  {
    title: 'Undergraduate',
    company: 'Tokyo University of Science, Faculty of Business Economics',
    location: 'Tokyo, Japan',
    date: 'April 2022 - Present',
    description:
      'Studying data science and currently conducting research in the field of machine learning.',
  },
  {
    title: 'Engineer Intern @ English school company',
    company: 'Gecipe Inc.',
    location: 'Remote, On-Site(Tokyo)',
    date: 'May 2024 - Sep 2024',
    description:
      'Worked on improving student LTV and contributed to web app development.',
  },
]

export default function CareerTimeline() {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 sm:ml-6 ml-4">
      {careers.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="mb-10 sm:ml-6 ml-4 relative"
        >
          {/* タイムラインの丸ポイント */}
          <span className="absolute -left-[1.05rem] top-2 w-3 h-3 bg-gray-500 dark:bg-blue-400 rounded-full shadow-sm" />

          {/* カード風に */}
          <div className="p-4 sm:p-6 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-md backdrop-blur-md transition-all">
            <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
            {item.company && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.company} &mdash; {item.location}
              </p>
            )}
            <p className="text-sm text-gray-400 mb-2">{item.date}</p>
            <p className="text-[0.95rem] leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
