import React from "react";
import SimpleSlider from "./slider";
import pic from '../assets/pic1.png';

const images = [
  pic,
  'https://picsum.photos/seed/john/200/300',
  'https://picsum.photos/seed/joe/200/300'
];

const Carousel = ({ homeRef }) => {
  return (
    <div
      ref={homeRef}
      className="flex flex-col lg:flex-row mt-[82px] bg-[#dbe9e6] rounded shadow overflow-hidden"
    >
      {/* Left: Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-xl lg:text-4xl font-bold mb-4">
          Keeping Your Lawn Picture Perfect
        </h2>
        <p className="text-base lg:text-lg">
          From mowing to edging to weed control, our expert team brings out the best in your yard — every season, every visit.
        </p>
      </div>

      {/* Right: Carousel */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#fbf7f5]">
        <SimpleSlider images={images} />
      </div>
    </div>
  );
};

export default Carousel;
