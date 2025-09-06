import Navbar from './components/navbar'
import Services from './components/services'
import AboutUs from './components/aboutUs'
import Carousel from './components/carousel'
import Contact from './components/contact'
import MenuTest from './components/menuTest'

import { useRef, useState } from 'react'
import './App.css'

function App() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const [showMenuTest, setShowMenuTest] = useState(false);

  if (showMenuTest) {
    return (
      <div className="relative w-full font-montserrat font-sans">
        <div className="fixed top-0 w-full bg-[#446E67] text-white p-4 z-50">
          <button
            onClick={() => setShowMenuTest(false)}
            className="bg-white text-[#446E67] px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            ← Back to Main Site
          </button>
          <span className="ml-4 text-lg font-semibold">Menu Test Mode</span>
        </div>
        <div className="pt-20">
          <MenuTest />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full font-montserrat font-sans">
      {/* Menu Test Toggle Button */}
      <button
        onClick={() => setShowMenuTest(true)}
        className="fixed bottom-4 right-4 bg-[#446E67] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#365a54] transition-colors z-50"
      >
        🍴 Test Menu
      </button>

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
