'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe } from 'lucide-react'
import { getAllCountries, type CountryConfig } from '@/config/countries.config'

interface CountrySelectorProps {
  currentCountry: CountryConfig
  variant?: 'header' | 'footer'
}

const flagIconByCode: Record<string, { src: string; alt: string }> = {
  co: {
    src: 'https://flagcdn.com/w40/co.png',
    alt: 'Bandera de Colombia',
  },
  ar: {
    src: 'https://flagcdn.com/w40/ar.png',
    alt: 'Bandera de Argentina',
  },
  ve: {
    src: 'https://flagcdn.com/w40/ve.png',
    alt: 'Bandera de Venezuela',
  },
  cl: {
    src: 'https://img.freepik.com/vector-premium/ilustracion-vectorial-digital-icono-circulo-bandera-chile_1143296-1720.jpg?semt=ais_incoming&w=740&q=80',
    alt: 'Bandera de Chile estilo circular',
  },
  mx: {
    src: 'https://flagcdn.com/w40/mx.png',
    alt: 'Bandera de México',
  },
}

export default function CountrySelector({ currentCountry, variant = 'header' }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const countries = getAllCountries()

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCountrySelect = (country: CountryConfig) => {
    if (country.code !== currentCountry.code) {
      // Obtener la ruta actual sin el prefijo de país
      const currentPath = window.location.pathname
        .replace(/^\/(ar|ve|co|cl|mx)/, '')
        .replace(/^\//, '')
      
      // Construir la nueva URL
      const newPath = country.urlPrefix + (currentPath ? `/${currentPath}` : '')
      window.location.href = newPath || '/'
    }
    setIsOpen(false)
  }

  const isHeader = variant === 'header'

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-1.5 px-2.5 py-2 rounded-lg transition-all duration-200
          ${isHeader 
            ? 'text-white bg-white/10 hover:bg-white/20 border border-white/30' 
            : 'text-gray-300 hover:text-white hover:bg-white/10'
          }
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium flex items-center gap-1.5">
          {flagIconByCode[currentCountry.code] && (
            <span className="relative inline-flex h-4 w-4 overflow-hidden rounded-full ring-1 ring-white/40">
              <Image
                src={flagIconByCode[currentCountry.code].src}
                alt={flagIconByCode[currentCountry.code].alt}
                fill
                sizes="20px"
                className="object-cover"
                style={currentCountry.code === 'cl' ? { transform: 'scale(1.5)' } : undefined}
              />
            </span>
          )}
          <span className={isHeader ? 'hidden md:inline' : 'hidden sm:inline'}>
            {currentCountry.name}
          </span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute z-50 mt-2 w-48 rounded-xl shadow-lg overflow-hidden
              ${isHeader 
                ? 'bg-white border border-gray-200 right-0' 
                : 'bg-navy-800 border border-navy-700 left-0 bottom-full mb-2'
              }
            `}
            role="listbox"
          >
            <div className="py-1">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150
                    ${isHeader 
                      ? 'hover:bg-gray-50 text-gray-700' 
                      : 'hover:bg-navy-700 text-gray-300 hover:text-white'
                    }
                    ${country.code === currentCountry.code 
                      ? isHeader 
                        ? 'bg-ocean-50 text-ocean-700' 
                        : 'bg-navy-700 text-white' 
                      : ''
                    }
                  `}
                  role="option"
                  aria-selected={country.code === currentCountry.code}
                >
                  {flagIconByCode[country.code] && (
                    <span className="relative inline-flex h-5 w-5 overflow-hidden rounded-full ring-1 ring-black/10">
                      <Image
                        src={flagIconByCode[country.code].src}
                        alt={flagIconByCode[country.code].alt}
                        fill
                        sizes="20px"
                        className="object-cover"
                        style={country.code === 'cl' ? { transform: 'scale(1.5)' } : undefined}
                      />
                    </span>
                  )}
                  <div className="flex-1">
                    <span className="font-medium">{country.name}</span>
                  </div>
                  {country.code === currentCountry.code && (
                    <div className={`
                      w-2 h-2 rounded-full
                      ${isHeader ? 'bg-ocean-500' : 'bg-accent-400'}
                    `} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
