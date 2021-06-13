import Button from "@/components/Button"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import MyStoryCTA from "@/components/MyStoryCTA"
import ProgrammesGrid from "@/components/ProgrammesGrid"
import Footer from "@/components/Footer"


export default function IndexPage() {
  return (
    <div>

      <Navbar />
      <Hero />
      <MyStoryCTA />
      <ProgrammesGrid />
      <Footer />
    </div>
  )
}
