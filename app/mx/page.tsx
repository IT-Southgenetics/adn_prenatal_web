import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Allies from '@/components/Allies'
import Experience from '@/components/Experience'
import GlobalTrust from '@/components/GlobalTrust'
import Empathy from '@/components/Empathy'
import HowItWorksAr from '@/components/ar/HowItWorksAr'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import InstagramBanner from '@/components/InstagramBanner'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import { countries } from '@/config/countries.config'

export default function MexicoPage() {
  const country = countries.mx

  return (
    <main className="min-h-screen">
      <Header country={country} />
      <Hero country={country} />
      <Allies country={country} />
      <Empathy country={country} />
      <Experience />
      <HowItWorksAr country={country} />
      <GlobalTrust country={country} />
      <Benefits country={country} />
      <FAQ country={country} />
      <InstagramBanner country={country} />
      <ContactCTA country={country} />
      <Footer country={country} />
    </main>
  )
}

