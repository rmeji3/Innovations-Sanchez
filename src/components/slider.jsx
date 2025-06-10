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
    autoplaySpeed: 3000, // 3 seconds
    arrows: false, 
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="w-full z-0">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} className="w-full h-120 object-cover" />
        </div>
      ))}
    </Slider>
  );
}
