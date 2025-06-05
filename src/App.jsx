import pic from './assets/pic1.png'
import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import email from './assets/email.svg'
import phone from './assets/phone.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myElementRef  = useRef(null)

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection =(ref) => (e) => {
     e.preventDefault();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
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
    <div className = "relative w-full font-montserrat">
      <nav className = "bar fixed top-0 w-full h-[80px] flex items-center bg-[#446E67] text-white p-4 flex justify-between px-7 font-montserrat">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <ul>
          <li><a href = "#"onClick={scrollToSection(homeRef)}> Home </a></li>
           <li><a href= "#"onClick={scrollToSection(aboutRef)}> About us </a></li>
          <li><a href = "#"onClick={scrollToSection(contactRef)} > Contact </a></li>
        </ul>
      </nav>
      <div className = "h-[100px]"></div> {/* spacer for nav this is probably scuffed*/}

     
      <div ref={homeRef} className="h-[600px] bg-[#f5f5f5] text-black text-3xl font-bold">
        <h1 className="">Welcome to the Home Section</h1>
        <div>
          <br></br>
          <h3 className="text-center">
            This is the home section of the page. You can navigate to the About Us and Contact sections using the navigation bar above.
          </h3>
        </div>
      </div>


      
      <div ref={aboutRef} className=" flex justify-center h-[600px] bg-[#dbe9e6] text-black text-3xl font-bold p-4">
        {/* <h1 className="">About Us Section</h1> */}
        <div>
          <div>
           <h1 className = " text-left">
              {/* About Us */}
           </h1>
            <br></br>


          </div>
          {/* <div className ="grid grid-cols-2 gap-4 items-center justify-center"> */}
      <div className="flex max-w-4xl mx-auto my-8 overflow-hidden ">

          {/* <h3 className="text-left mt-4 max-w-2xl font-normal m-12 ">  */}
          <div className="w-1/2 flex flex-col justify-center text-left p-1 font-normal">
          <div className = "text-left font-mono"> About Us </div>
          <br></br>
            This is a simple React application demonstrating how to use the useRef hook to scroll to different sections of the page. 
            The navigation bar allows you to smoothly scroll to the Home, About Us, and Contact sections.
          </div>
          <div className="w-1/2 flex items-center justify-center">        

            <img src={pic} className="h-120" alt="React logo" />
            </div>
          </div>

        </div>

      </div>



      {/* home section */}
      <div className="flex max-w-4xl mx-auto my-8 bg-white rounded shadow overflow-hidden">
     {/* Left: Carousel */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
          <img src={images[current]} alt="carousel - this entire component will be changed" className="object-cover w-full h-64" />
          <div className="flex justify-between w-full px-4 py-2">
            <button onClick={prevImage} className="bg-[#446E67] text-white px-3 py-1 rounded">Prev</button>
            <button onClick={nextImage} className="bg-[#446E67] text-white px-3 py-1 rounded">Next</button>

      <div className="h-[90px]" />





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
        <div ref = {contactRef} className = "h-[250px] bg-[#446E67] flex items-center justify-center">
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
