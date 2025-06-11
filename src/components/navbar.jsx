import React from "react";
import logo from '../assets/logo.png';

const scrollToSection = (ref, offset = 82) => (e) => {
  e.preventDefault();
  const topPos = ref.current.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: topPos, behavior: 'smooth' });
};

function Navbar({ servicesRef, aboutRef, contactRef, homeRef }) {
  return (
    <nav className="fixed top-0 w-full h-[82px] flex items-center bg-[#446E67] text-[#fbf7f5] px-4 lg:px-7 justify-between font-montserrat z-[100]">
      <a
        className="group flex items-center relative"
        href="#"
        onClick={scrollToSection(homeRef)}
      >
        <img src={logo} className="h-8 w-8 lg:h-10 lg:w-10" alt="TREE logo" />
      </a>
      
      <ul className="hidden lg:flex gap-6 text-base list-none p-0 m-0">
        <li className="p-0 m-0"><a href="#" className="p-0 m-0" onClick={scrollToSection(servicesRef)}>Services</a></li>
        <li className="p-0 m-0"><a href="#" className="p-0 m-0" onClick={scrollToSection(aboutRef)}>About us</a></li>
        <li className="p-0 m-0"><a href="#" className="p-0 m-0" onClick={scrollToSection(contactRef)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;