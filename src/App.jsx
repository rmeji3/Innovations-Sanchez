import Navbar from './components/navbar'
import Services from './components/services'
import AboutUs from './components/aboutUs'
import Carousel from './components/carousel'
import Contact from './components/contact'
import { useTrackHitMutation } from './store/pageViews'

import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const [trackHit] = useTrackHitMutation();

  useEffect(() => {
    trackHit("/"); // count a general visit once per load
  }, [trackHit]);

  return (
    <div className="relative w-full font-montserrat font-sans">
      {/* Navbar */}
      <Navbar
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        homeRef={homeRef}
      />

      {/* Carousel Section */}
      <Carousel homeRef={homeRef}/>

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
