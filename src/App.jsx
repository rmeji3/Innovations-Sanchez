import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (


   <>
      <nav className = "bar">
        <ul>
          <li><a href = " ">Home </a></li>
           <li><a href= "">  About us</a></li>
          <li><a href = "" > Contact</a></li>
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
  </>
  )
}

export default App
