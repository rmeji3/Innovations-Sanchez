import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ images }) {
  const settings = {
    dots: true,
    infinite: images.length > 1, // Only infinite if more than 1 image
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: images.length > 1, // Only autoplay if more than 1 image
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    accessibility: true,
    focusOnSelect: false,
    swipe: images.length > 1, // Only allow swipe if more than 1 image
    touchMove: images.length > 1, // Only allow touch move if more than 1 image
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="z-0">
        {images.map((image, index) => (
          <div key={index} className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full" tabIndex="-1">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover"
              tabIndex="-1"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
