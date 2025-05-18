import type React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import Contact from "./ContactPage"
import SecurityModels3D from "./SecurityModels3D"

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <SecurityModels3D />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
