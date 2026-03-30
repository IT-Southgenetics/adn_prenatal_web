'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function InstagramBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
      <div className="container-custom">
        <motion.a
          href="https://www.instagram.com/southgeneticsargentina/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 group cursor-pointer"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
            <Instagram className="w-7 h-7 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
              Síguenos en Instagram
            </p>
            <p className="text-sm md:text-base text-gray-500">
              Para más información sobre nuestros productos y servicios, visitanos en @southgeneticsargentina
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-pink-500 group-hover:text-pink-600 group-hover:translate-x-1 transition-all duration-300">
            Visitar →
          </span>
        </motion.a>
      </div>
    </section>
  )
}
