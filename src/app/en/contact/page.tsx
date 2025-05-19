'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-xl rounded-xl p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Let&apos;s connect
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Feel free to reach out through any of the platforms below!
        </p>

        <div className="space-y-6">
          {/* Email */}
          <motion.a
            href="mailto:junish826@gmail.com"
            className="flex items-center space-x-4 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-lg" />
            <span>junish826@gmail.com</span>
          </motion.a>

          {/* LinkedIn */}
          {/*
          <motion.a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <FaLinkedin className="text-lg" />
            <span>linkedin.com/in/your-profile</span>
          </motion.a>
          */}
          {/* GitHub */}
          <motion.a
            href="https://github.com/Junxzi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="text-lg" />
            <span>github.com/Junxzi</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}
