
import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myElementRef  = useRef(null)
  const scrollToElement = (e) => {
     e.preventDefault();
    myElementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className = "relative w-full">
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

      <div className="bg-[#446E67] max-w-962">
        <div className="text-white text-3xl font-bold p-4">
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
  
  )
}

export default App
