import React from "react";
import aboutPic from '../assets/pic1.png'

const AboutUs = ({ aboutRef }) => {
   return (
    <div ref={aboutRef} className="bg-[#dbe9e6] text-black px-12 py-13"> 
        <div className="w-full flex flex-row items-center">
        {/* Text */}
        <div className="w-1/2 pr-8">
            <h2 className="text-left text-4xl font-bold mb-4 pb-10">About Us</h2>
            <p className="text-left text-[20px] mb-4 text-black ">
            At Sanchez Innovations Lawn care, we specialize in keeping your outdoor spaces clean, crisp, and beautiful. 
            Our team is dedicated to providing top-notch lawn care services tailored to your needs.
            From expert lawn mowing and precise edging to professional bush trimming, we ensure every yard looks its best. We proudly offer free estimates and reliable service you can count on.
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
