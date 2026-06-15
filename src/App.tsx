import AuroraBackground from './components/AuroraBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pitch from './components/Pitch'
import About from './components/About'
import Founders from './components/Founders'
import Services from './components/Services'
import Process from './components/Process'
import Cases from './components/Cases'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <Pitch />
        <About />
        <Founders />
        <Services />
        <Process />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
