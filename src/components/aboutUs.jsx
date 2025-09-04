import React from "react";
import aboutPic from "../assets/pic1.png";
import { useGetAboutQuery } from "../store/aboutApi";

const AboutUs = ({ aboutRef }) => {
  const { data, isLoading, isError } = useGetAboutQuery();

  return (
    <div ref={aboutRef} className="bg-[#dbe9e6] text-black px-4 py-8">
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:pl-10 lg:h-[550px]">
        <div className="w-full lg:h-[400px] lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:text-left">
            {isLoading ? "Loading…" : (data?.title || "About Us")}
          </h2>
          <p className="text-base lg:text-[20px] lg:text-left text-black mb-4">
            {isError
              ? "Failed to load About content."
              : (data?.description ||
                 "At Sanchez Innovations Lawn Care, we specialize in keeping your outdoor spaces clean, crisp, and beautiful. Our team is dedicated to providing top-notch lawn care services tailored to your needs.")}
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={data?.imageUrl || aboutPic}
            className="w-full max-w-[400px] object-contain"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
