
import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import email from './assets/email.svg'
import phone from './assets/phone.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myElementRef  = useRef(null)
  const scrollToElement = (e) => {
     e.preventDefault();
    myElementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const images = [
    'https://via.placeholder.com/400x300?text=Image+1',
    'https://via.placeholder.com/400x300?text=Image+2',
    'https://via.placeholder.com/400x300?text=Image+3'
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className = "relative">
      <nav className = "bar absolute top-0 w-full h-[80px] flex items-center bg-[#446E67] text-white p-4 flex justify-between px-7 font-montserrat">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <ul>
          <li><a href = ""
          onClick={scrollToElement}
          > Home </a></li>
           <li><a href= ""> About us </a></li>
          <li><a href = "" > Contact </a></li>
        </ul>
      </nav>
      <div className = "h-[100px]"></div> {/* spacer for nav this is probably scuffed*/}

      {/* home section */}
      <div className="flex max-w-4xl mx-auto my-8 bg-white rounded shadow overflow-hidden">
     {/* Left: Carousel */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
          <img src={images[current]} alt="carousel" className="object-cover w-full h-64" />
          <div className="flex justify-between w-full px-4 py-2">
            <button onClick={prevImage} className="bg-[#446E67] text-white px-3 py-1 rounded">Prev</button>
            <button onClick={nextImage} className="bg-[#446E67] text-white px-3 py-1 rounded">Next</button>
          </div>
        </div>
        {/* Right: Text */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Site</h2>
          <p>
            This is the right box. You can put any text here, such as a description of your business, a welcome message, or anything else you want visitors to see alongside your image carousel.
          </p>
        </div>
      </div>

      <div className = "h-[100px]"></div> {/* spacer for nav this is probably scuffed*/}
      {/* contact box */}
        

        <div className = "h-[1000px]">

        </div>
        <div ref = {myElementRef} className = "h-[250px] bg-[#446E67] flex items-center justify-center">
          <div className="bg-[#446E67] max-w-4xl mx-auto px-4">
            <div className="text-2xl text-white font-bold">Contact us</div>
            <div className="flex items-center text-white mt-4">
              <img src={email} className="m-0 h-6 p-0 mr-2" alt="Email logo" />
              email@example.com
            </div>
            <div className="flex items-center text-white mt-4">
              <img src={phone} className="m-0 h-7 p-0 mr-2" alt="Phone logo" />
              Phone: (123) 456-7890
            </div>
          </div>
        </div>
    </div>

  )
}

export default App
