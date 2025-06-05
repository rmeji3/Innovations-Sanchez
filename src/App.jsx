
import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const homeRef  = useRef(null)
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => (e) =>{
     e.preventDefault();
   ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className = "relative w-full font-montserrat">
      <nav className = "bar fixed top-0 w-full h-[80px] flex items-center bg-[#446E67] text-white p-4 flex justify-between px-7 font-montserrat">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <ul>
          <li><a href = "#" onClick={scrollToSection(homeRef)} > Home </a></li>
           <li><a href= "#"onClick={scrollToSection(aboutRef)}> About us </a></li>
          <li><a href = "#" onClick={scrollToSection(contactRef)} > Contact </a></li>
        </ul>
      </nav>

      <div className="h-[90px]" />



     
      <div ref={homeRef} className="h-[600px] bg-[#f5f5f5] text-black text-3xl font-bold">
        <h1 className="">Welcome to the Home Section</h1>
        <div>
          <br></br>
          <h3 className="text-center">
            This is the home section of the page. You can navigate to the About Us and Contact sections using the navigation bar above.
          </h3>
        </div>
      </div>


      
      <div ref={aboutRef} className="h-[600px] bg-[#dbe9e6] text-black text-3xl font-bold p-4">
        {/* <h1 className="">About Us Section</h1> */}
        <div>
          <div>
           <h1 className = " flex justify-start">
              About Us
           </h1>
            <br></br>

            <img src={reactLogo} className="ml-auto" alt="React logo" />

          </div>
          <h3 className="text-left mt-4 max-w-2xl font-normal"> 
            This is a simple React application demonstrating how to use the useRef hook to scroll to different sections of the page. 
            The navigation bar allows you to smoothly scroll to the Home, About Us, and Contact sections.
          </h3>
        </div>

      </div>

      


      

      <div className="bg-[#446E67] max-w-962">
        <div ref={contactRef} className="text-white text-3xl font-bold p-4">
          Contact
        </div>
      
          <div>
            <label>
              <input name="myInput"
              className="bg-white text-black rounded p-2 m-2" 
              placeholder="Enter your email" />
            </label>
          </div>

          <div>
            <label>
              <input name="myInput" 
              className="bg-white text-black rounded p-2 m-2" placeholder
              ="Enter your phone number"/>
            </label>
          </div>

          <button type='submit' 
          className="bg-white text-black rounded p-2 m-2 hover:bg-gray-200 transition duration-300 "
          >
            Submit
          </button>
        </div>
       
       

    </div>
  )
}

export default App
