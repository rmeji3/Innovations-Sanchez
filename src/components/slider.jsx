import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="z-0">
        {images.map((image, index) => (
          <div key={index} className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
