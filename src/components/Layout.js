import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
