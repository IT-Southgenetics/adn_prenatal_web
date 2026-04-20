'use client'

import { type CountryConfig } from '@/config/countries.config'

function mapSearchQuery(country: CountryConfig): string {
  const addr = country.officeAddress?.trim()
  if (addr) {
    const countryHint = country.fullName.toLowerCase()
    return addr.toLowerCase().includes(countryHint) ? addr : `${addr}, ${country.fullName}`
  }
  return `${country.mainCity}, ${country.fullName}`
}

export default function FooterMapEmbed({ country }: { country: CountryConfig }) {
  if (country.locationPending) {
    return (
      <div className="rounded-lg border border-navy-700 bg-navy-800 p-4 text-sm text-gray-200 shadow-lg">
        Ubicacion por confirmar para {country.fullName}. Actualizaremos esta seccion en breve.
      </div>
    )
  }

  const query = mapSearchQuery(country)
  const q = encodeURIComponent(query)
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${q}`

  return (
    <div className="space-y-3">
      <div className="w-full overflow-hidden rounded-lg border border-navy-700 bg-navy-800 shadow-lg aspect-video min-h-[200px] max-h-[320px]">
        <iframe
          title={`Ubicación — ${country.fullName}`}
          src={`https://maps.google.com/maps?q=${q}&z=16&output=embed`}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-md border border-navy-600 px-3 py-2 text-sm text-gray-200 hover:bg-navy-700 transition-colors duration-200"
      >
        Abrir en Google Maps
      </a>
    </div>
  )
}
