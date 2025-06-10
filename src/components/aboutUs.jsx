import React from "react";
import aboutPic from '../assets/pic1.png';

const AboutUs = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="bg-[#dbe9e6] text-black px-4 py-8">
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:pl-10 lg:h-[550px]">
        
        {/* Text */}
        <div className="w-full lg:h-[400px] lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:text-left">
            About Us
          </h2>
          <p className="text-base lg:text-[20px] lg:text-left text-black mb-4">
            At Sanchez Innovations Lawn Care, we specialize in keeping your outdoor spaces clean, crisp, and beautiful. 
            Our team is dedicated to providing top-notch lawn care services tailored to your needs. <br /><br />
            From expert lawn mowing and precise edging to professional bush trimming, we ensure every yard looks its best. 
            We proudly offer free estimates and reliable service you can count on.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={aboutPic} className="w-full max-w-[400px] object-contain" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;