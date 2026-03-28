import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { HowItWorks } from '@/components/how-it-works'
import { Benefits } from '@/components/benefits'
import { FinalCTA } from '@/components/final-cta'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="services"><Services /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="benefits"><Benefits /></div>
      <FinalCTA />
      <FloatingWhatsApp />
    </main>
  )
}
