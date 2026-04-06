'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { countries, type CountryConfig } from '@/config/countries.config'

interface InstagramBannerProps {
  country?: CountryConfig
}

export default function InstagramBanner({ country = countries.co }: InstagramBannerProps) {
  const isChile = country.code === 'cl'
  const instagramHref = isChile
    ? 'https://www.instagram.com/pacificgenomics/'
    : 'https://www.instagram.com/southgeneticsargentina/'
  const triColor = 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400'

  return (
    <section className="overflow-visible py-16 pt-20 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
      <div className="container-custom overflow-visible">
        <motion.a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center overflow-visible sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8 group cursor-pointer rounded-3xl bg-white/80 border border-pink-100/70 shadow-[0_18px_45px_rgba(244,114,182,0.20)] px-6 sm:px-10 py-6 sm:py-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(236,72,153,0.28)]"
        >
          <div className="absolute -top-3 left-6 sm:left-8 inline-flex items-center gap-2 rounded-full bg-pink-100/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-pink-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_0_4px_rgba(244,114,182,0.35)]" />
            {isChile ? 'Comunidad PacificGenomics' : 'Comunidad SouthGenetics'}
          </div>

          <div
            className={`flex shrink-0 items-center justify-center h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] rounded-2xl shadow-lg ${triColor} group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
          >
            <Instagram className="h-8 w-8 text-white" />
          </div>

          <div className="flex-1 text-center sm:text-left space-y-1.5 sm:space-y-2 pl-0 sm:pl-2">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-pink-500 uppercase">
              Instagram oficial
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-900">
              Seguinos para conocer más acerca de nuestra amplia variedad de pruebas y nuevos lanzamientos.
            </p>
          </div>

          <div className="mt-2 sm:mt-0">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white shadow-md ${triColor} group-hover:shadow-lg group-hover:translate-x-0.5 transition-all duration-300`}
            >
              Visitar perfil
              <span className="text-lg leading-none">↗</span>
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
