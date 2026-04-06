// Configuración centralizada de países para localización multi-país
// Fácilmente extensible para agregar más países en el futuro

export interface CountryConfig {
  code: string
  name: string
  fullName: string
  currency: string
  currencySymbol: string
  phone: string
  whatsappNumber: string
  email: string
  cities: string[]
  mainCity: string
  hreflang: string
  locale: string
  timezone: string
  price: number
  priceDisplay: string
  urlPrefix: string // '' para raíz (Colombia), '/ar' para Argentina, etc.
  flag: string
  paymentMethods: string[]
  businessHours: string
  deliveryDays: string
  /** Dirección física para pie de página y mapa (opcional) */
  officeAddress?: string
  /** Texto opcional en el modal de WhatsApp (ej. nombre del contacto comercial) */
  whatsappContactLine?: string
  // Términos localizados
  terms: {
    money: string // "plata" en AR, "dinero" en otros
    mom: string // "mamá" en algunos, "madre" en otros
    baby: string
    test: string
  }
  // SEO
  seoKeywords: string[]
  metaTitle: string
  metaDescription: string
}

export const countries: Record<string, CountryConfig> = {
  co: {
    code: 'co',
    name: 'Colombia',
    fullName: 'Colombia',
    currency: 'USD',
    currencySymbol: '$',
    phone: '+57 3002315914',
    whatsappNumber: '573002315914',
    email: 'cjflorez@southgenetics.com',
    cities: ['Cali', 'Bogotá', 'Medellín', 'Barranquilla', 'Cartagena'],
    mainCity: 'Cali',
    hreflang: 'es-CO',
    locale: 'es_CO',
    timezone: 'America/Bogota',
    price: 1199,
    priceDisplay: '$1,199',
    urlPrefix: '',
    flag: '🇨🇴',
    paymentMethods: ['Transferencia bancaria', 'PSE', 'Tarjetas débito/crédito', 'Nequi', 'Daviplata'],
    businessHours: 'Lunes a viernes 8:00 - 18:00',
    deliveryDays: '10 días hábiles',
    terms: {
      money: 'dinero',
      mom: 'mamá',
      baby: 'bebé',
      test: 'prueba'
    },
    seoKeywords: [
      'prueba paternidad prenatal cali',
      'test paternidad prenatal colombia',
      'prueba adn prenatal bogota',
      'test paternidad medellin',
      'prueba paternidad embarazo colombia'
    ],
    metaTitle: 'Prueba de Paternidad Prenatal en Cali - Test Paternidad Prenatal Colombia',
    metaDescription: 'Test Paternidad Prenatal Colombia: pruebas de paternidad prenatal seguras, confidenciales y certificadas. Resultados en 10 días hábiles. Precio $1,199 USD.'
  },
  ar: {
    code: 'ar',
    name: 'Argentina',
    fullName: 'Argentina',
    currency: 'USD',
    currencySymbol: 'US$',
    phone: '+54 9 11 3164-6386',
    whatsappNumber: '5491131646386',
    email: 'sgonzales@southgenetics.com',
    cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata'],
    mainCity: 'Buenos Aires',
    hreflang: 'es-AR',
    locale: 'es_AR',
    timezone: 'America/Argentina/Buenos_Aires',
    price: 1250,
    priceDisplay: 'US$ 1,250',
    urlPrefix: '/ar',
    flag: '🇦🇷',
    paymentMethods: ['Transferencia bancaria', 'Mercado Pago', 'Tarjetas débito/crédito', 'Rapipago', 'Pago Fácil'],
    businessHours: 'Todos los días 9:00 - 20:00',
    deliveryDays: '10 días hábiles',
    officeAddress:
      'Amenábar 1945, piso 4, oficina A, C1428 Ciudad Autónoma de Buenos Aires, Argentina',
    terms: {
      money: 'plata',
      mom: 'mamá',
      baby: 'bebé',
      test: 'test'
    },
    seoKeywords: [
      'prueba paternidad prenatal argentina',
      'test paternidad prenatal buenos aires',
      'prueba adn prenatal argentina',
      'test paternidad embarazo argentina',
      'prueba paternidad prenatal precio argentina'
    ],
    metaTitle: 'Prueba de Paternidad Prenatal en Argentina - Test ADN Prenatal Buenos Aires',
    metaDescription: 'Test de Paternidad Prenatal en Argentina: pruebas de ADN prenatal seguras y confidenciales. Resultados en 10 días hábiles. Atención en Buenos Aires y Belgrano.'
  },
  cl: {
    code: 'cl',
    name: 'Chile',
    fullName: 'Chile',
    currency: 'USD',
    currencySymbol: 'US$',
    phone: '+56 9 2842 9136',
    whatsappNumber: '56928429136',
    email: 'info@pacificgenomics.cl',
    cities: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta'],
    mainCity: 'Santiago',
    hreflang: 'es-CL',
    locale: 'es_CL',
    timezone: 'America/Santiago',
    price: 1250,
    priceDisplay: 'US$ 1,250',
    urlPrefix: '/cl',
    flag: '🇨🇱',
    paymentMethods: ['Transferencia bancaria', 'Webpay', 'Tarjetas débito/crédito', 'Khipu', 'Mach'],
    businessHours: 'Abierto de 9:00 a 18:00',
    deliveryDays: '10 días hábiles',
    officeAddress: 'Cerro del Plomo 568, comuna Las Condes, Región Metropolitana, Chile',
    whatsappContactLine:
      'Te atiende Carolina Acevedo, equipo comercial PacificGenomics Chile.',
    terms: {
      money: 'plata',
      mom: 'mamá',
      baby: 'bebé',
      test: 'test'
    },
    seoKeywords: [
      'prueba paternidad prenatal chile',
      'test paternidad prenatal santiago',
      'prueba adn prenatal chile',
      'test paternidad embarazo chile',
      'prueba paternidad prenatal precio chile'
    ],
    metaTitle: 'Prueba de Paternidad Prenatal en Chile - Test ADN Prenatal Santiago | PacificGenomics',
    metaDescription: 'Test de Paternidad Prenatal en Chile por PacificGenomics: pruebas de ADN prenatal seguras y confidenciales. Resultados en 10 días hábiles. Atención en Santiago.'
  },
  ve: {
    code: 've',
    name: 'Venezuela',
    fullName: 'Venezuela',
    currency: 'USD',
    currencySymbol: '$',
    phone: '+58 412 345 6789', // TODO: Actualizar con número real
    whatsappNumber: '584123456789', // TODO: Actualizar con número real
    email: 'venezuela@southgenetics.com',
    cities: ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Maracay'],
    mainCity: 'Caracas',
    hreflang: 'es-VE',
    locale: 'es_VE',
    timezone: 'America/Caracas',
    price: 1800,
    priceDisplay: '$1,800',
    urlPrefix: '/ve',
    flag: '🇻🇪',
    paymentMethods: ['Transferencia bancaria', 'Zelle', 'PayPal', 'Pago móvil', 'Criptomonedas'],
    businessHours: 'Lunes a viernes 8:00 - 17:00',
    deliveryDays: '10-12 días hábiles',
    terms: {
      money: 'dinero',
      mom: 'mamá',
      baby: 'bebé',
      test: 'prueba'
    },
    seoKeywords: [
      'prueba paternidad prenatal venezuela',
      'test paternidad prenatal caracas',
      'prueba adn prenatal venezuela',
      'test paternidad embarazo venezuela',
      'prueba paternidad prenatal precio venezuela'
    ],
    metaTitle: 'Prueba de Paternidad Prenatal en Venezuela - Test ADN Prenatal Caracas',
    metaDescription: 'Test de Paternidad Prenatal en Venezuela: pruebas de ADN prenatal seguras y confidenciales. Resultados en 10-12 días hábiles. Atención en Caracas solamente.'
  }
}

// Helper para obtener país por código
export const getCountryByCode = (code: string): CountryConfig | undefined => {
  return countries[code.toLowerCase()]
}

// Helper para obtener todos los países como array
export const getAllCountries = (): CountryConfig[] => {
  return Object.values(countries)
}

// Helper para obtener país por URL prefix
export const getCountryByUrlPrefix = (prefix: string): CountryConfig | undefined => {
  return Object.values(countries).find(c => c.urlPrefix === prefix)
}

// País por defecto (Colombia)
export const defaultCountry = countries.co

// Lista de códigos de país para detección geo
export const countryCodeMap: Record<string, string> = {
  'CO': 'co',
  'AR': 'ar',
  'VE': 've'
}
