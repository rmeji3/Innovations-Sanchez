import React from "react";
import logo from '../assets/logo.png'

const scrollToSection = (ref) => (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
};
function Navbar({ servicesRef, aboutRef, contactRef }) {
    return (
        <nav className="bar fixed top-0 w-full h-[82px] flex items-center bg-[#446E67] text-[#fbf7f5] px-7 justify-between font-montserrat z-100">
        <div className = "group flex items-center relative">
          <img src={logo} className="logo" alt= "TREE logo" />
        <div className="text-2xl font-bold ml-2 text-[#fbf7f5]">YOU GROW IT <br /> WE MOW IT </div>

        </div>
        <ul className="flex gap-6 text-lg ">
          <li><a href="#" onClick={scrollToSection(servicesRef)}>Services</a></li>
          <li><a href="#" onClick={scrollToSection(aboutRef)}>About us</a></li>
          <li><a href="#" onClick={scrollToSection(contactRef)}>Contact</a></li>
        </ul>
      </nav>
    );
}
export default Navbar;