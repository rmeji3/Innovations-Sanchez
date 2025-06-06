import pic2 from './assets/logo.png'
import pic from './assets/pic1.png'
import { useState, useRef } from 'react'
import email from './assets/email.svg'
import phone from './assets/phone.svg'
import SimpleSlider from './slider';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const images = [
    pic,
    'https://picsum.photos/seed/john/200/300',
    'https://picsum.photos/seed/joe/200/300'
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full font-montserrat">
      <nav className="bar fixed top-0 w-full h-[82px] flex items-center bg-[#446E67] text-white px-7 justify-between font-montserrat">
        <div>
          <img src={pic2} className="logo" alt="Vite logo" />
        </div>
        <ul className="flex gap-6 text-lg ">
          <li><a href="#" onClick={scrollToSection(homeRef)}>Services</a></li>
          <li><a href="#" onClick={scrollToSection(aboutRef)}>About us</a></li>
          <li><a href="#" onClick={scrollToSection(contactRef)}>Contact</a></li>
        </ul>
      </nav>

      {/* <div className="h-[100px]" /> Spacer for nav */}

      {/* Home Section */}
      <div ref={homeRef} className="h-[510px] bg-[#f5f5f5] text-black text-4xl font-bold text-center">
        <h1 className = "text item-center m-7 font-norm h-[190px] pt-22"> Our Services</h1>
        <div className ="grid grid-cols-1 sm:grid-cols-3 gap-6 m-2 ">
            <h2 className="text-center shadow-lg text-4xl font-bold text-[#446E67] border rounded m-3 pt-5" >
                 Lawn Mowing
                 <p className = "text-lg text-black mt-7 text-center ">
                  We provide professional lawn mowing services to keep your yard looking pristine. 
                 </p>
            </h2>

            <h2 className = "text-center shadow-lg text-4xl font-bold text-[#446E67] border rounded m-3 pt-5 h-52">
                Side Trimming
              <p className = "text-lg text-black mt-7 text-center">
                Our side trimming service ensures that your hedges and bushes are neatly maintained, enhancing the overall appearance of your landscape.
              </p>
            </h2>

            <h2 className = "text-center shadow-lg text-4xl font-bold text-[#446E67] border rounded m-3 pt-5 h-52">     
                Weed Control
              <p className = "text-lg text-black mt-7 text-center">
                We offer effective weed control solutions to keep your garden healthy and free from unwanted plants.
              </p>
            </h2>
        </div>

        <br></br>
        
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="bg-[#dbe9e6] text-black px-12 py-12 ">
        <div className="w-full flex flex-row items-center">
          {/* Text */}
          <div className="w-1/2 pr-8">
            <h2 className="text-left text-4xl font-mono mb-4 pb-10">About Us</h2>
            <p className="text-left text-lg font-mono">
              This is a simple React application demonstrating how to use the useRef hook to scroll to different sections of the page.
              <br /><br />
              We are passionate about building innovative web solutions. Our team specializes in modern JavaScript frameworks and user-friendly interfaces. With a focus on quality and creativity, we strive to deliver the best experience for our clients.
            </p>
          </div>
          {/* Image */}
          <div className="w-1/2 flex justify-center"> 
            <img src={pic} className="h-120 object-contain" alt="About Us" />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex mx-auto my-20 bg-white rounded shadow overflow-hidden">
        {/* Left: Carousel */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
          <div className="flex justify-between w-full">
            <SimpleSlider images={images} />
          </div>
        </div>
        {/* Right: Text */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Site</h2>
          <p className="text-lg">
            This is the right box. You can put any text here, such as a description of your business, a welcome message, or anything else you want visitors to see alongside your image carousel.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="h-[100px]" />
      <div className="h-[1000px]" /> {/* Optional filler space */}
      <div ref={contactRef} className="h-[250px] bg-[#446E67] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-2xl text-white font-bold">Contact us</div>
          <div className="flex items-center text-white mt-4">
            <img src={email} className="h-6 mr-2" alt="Email logo" />
            <a href="mailto:email@example.com">email@example.com</a>
          </div>
          <div className="flex items-center text-white mt-4">
            <img src={phone} className="h-7 mr-2" alt="Phone logo" />
            <a href="tel:1234567890">(123) 456-7890</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
