import React from "react";
import SimpleSlider from "./slider";
import pic from '../assets/pic1.png';

const images = [
    pic,
    'https://picsum.photos/seed/john/200/300',
    'https://picsum.photos/seed/joe/200/300'
  ];

const Carousel = ({homeRef}) => {
    return (
        <div ref={homeRef} className="flex my-20 bg-[#dbe9e6] rounded shadow overflow-hidden">

        {/* Right: Text */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Site</h2>
          <p className="text-lg">
            This is the right box. You can put any text here, such as a description of your business, a welcome message, or anything else you want visitors to see alongside your image carousel.
          </p>
        </div>
                {/* Left: Carousel */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-[#fbf7f5]">
          <div className="flex justify-between w-full">
            <SimpleSlider images={images} />
          </div>
        </div>
      </div>
    );
}
export default Carousel;