import React from "react";
import aboutPic from './assets/pic1.png'

const AboutUs = ({ aboutRef }) => {
   return (
    <div ref={aboutRef} className="bg-[#dbe9e6] text-black px-12 py-13"> 
        <div className="w-full flex flex-row items-center">
        {/* Text */}
        <div className="w-1/2 pr-8">
            <h2 className="text-left text-4xl font-bold mb-4 pb-10">About Us</h2>
            <p className="text-left text-lg">
            This is a simple React application demonstrating how to use the useRef hook to scroll to different sections of the page.
            <br /><br />
            We are passionate about building innovative web solutions. Our team specializes in modern JavaScript frameworks and user-friendly interfaces. With a focus on quality and creativity, we strive to deliver the best experience for our clients.
            </p>
        </div>
        {/* Image */}
        <div className="w-1/2 flex justify-center"> 
            <img src={aboutPic} className="h-120 object-contain" alt="About Us" />
        </div>
        </div>
    </div>
   )
}
export default AboutUs;
