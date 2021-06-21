import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProgrammesGrid from '@/components/ProgrammesGrid'
import FreeProgrammes from '@/components/FreeProgrammes'
import Footer from '@/components/Footer'
import FAQ from '@/components/Faq'
import MyStoryCTA from '@/components/MyStoryCTA'

export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MyStoryCTA />
      <ProgrammesGrid />
      <FreeProgrammes />
      <FAQ />
      <Footer />
    </div>
  )
}
