'use client'

import { type CountryConfig } from '@/config/countries.config'

function mapSearchQuery(country: CountryConfig): string {
  const addr = country.officeAddress?.trim()
  if (addr) return addr
  return `${country.mainCity}, ${country.fullName}`
}

export default function FooterMapEmbed({ country }: { country: CountryConfig }) {
  const q = encodeURIComponent(mapSearchQuery(country))

  return (
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
  )
}
