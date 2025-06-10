import Navbar from './components/navbar'
import Services from './components/services'
import AboutUs from './components/aboutUs'
import Carousel from './components/carousel'
import Contact from './components/contact'

import { useRef } from 'react'
import './App.css'

function App() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative w-full font-montserrat font-sans">
      {/* Navbar */}
      <Navbar
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />

      {/* Carousel Section */}
      <Carousel/>

      {/* Services */}
      <Services servicesRef={servicesRef} />

      {/* About Section */}
      <AboutUs aboutRef={aboutRef} />

      {/* Contact Section */}
      <Contact contactRef={contactRef}/>
    </div>
  )
}

export default App
