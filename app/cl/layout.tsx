import type { Metadata } from 'next'
import Script from 'next/script'
import { countries } from '@/config/countries.config'
import { generateOrganizationSchema, generateServiceSchema, generateLocalBusinessSchema } from '@/utils/seo-helpers'

const country = countries.cl
const schemas = {
  organization: generateOrganizationSchema(country),
  service: generateServiceSchema(country),
  localBusiness: generateLocalBusinessSchema(country)
}

export const metadata: Metadata = {
  metadataBase: new URL('https://paternidadprenatal.com'),
  title: country.metaTitle,
  description: country.metaDescription,
  keywords: country.seoKeywords.join(', '),
  alternates: {
    canonical: 'https://paternidadprenatal.com/cl/',
    languages: {
      'es-CO': 'https://paternidadprenatal.com/',
      'es-AR': 'https://paternidadprenatal.com/ar/',
      'es-VE': 'https://paternidadprenatal.com/ve/',
      'es-CL': 'https://paternidadprenatal.com/cl/',
    },
  },
  openGraph: {
    title: country.metaTitle,
    description: country.metaDescription,
    type: 'website',
    locale: country.locale,
    url: 'https://paternidadprenatal.com/cl/',
    siteName: `Test Paternidad Prenatal ${country.name} - PacificGenomics`,
    images: [
      {
        url: '/imgs/og-image-cl.jpg',
        width: 1200,
        height: 630,
        alt: `Test Paternidad Prenatal ${country.name} - PacificGenomics`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: country.metaTitle,
    description: country.metaDescription,
    images: ['/imgs/twitter-card-cl.jpg'],
  },
}

export default function ChileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="alternate" hrefLang="es-CO" href="https://paternidadprenatal.com/" />
      <link rel="alternate" hrefLang="es-AR" href="https://paternidadprenatal.com/ar/" />
      <link rel="alternate" hrefLang="es-VE" href="https://paternidadprenatal.com/ve/" />
      <link rel="alternate" hrefLang="es-CL" href="https://paternidadprenatal.com/cl/" />
      <link rel="alternate" hrefLang="x-default" href="https://paternidadprenatal.com/" />
      <Script id="organization-schema-cl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }} />
      <Script id="service-schema-cl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      <Script id="local-business-schema-cl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusiness) }} />
      {children}
    </>
  )
}

