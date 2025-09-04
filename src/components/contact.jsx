import React from "react";
import { FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useGetSocialsQuery } from '../store/socialsApi.js';

const Contact = ({ contactRef }) => {
  const { data, isLoading, isError } = useGetSocialsQuery();

  // Fallbacks if API fails or is loading
  const email = data?.email || 'innovationssanchez@gmail.com';
  const phone = data?.phone || '7086827604';
  const facebook = data?.facebook || 'https://www.facebook.com';

  return (
    <div ref={contactRef} className="bg-[#446E67] flex flex-col items-center justify-center gap-4 px-4 py-6">
      {/* Top Row */}
      <div className="w-full max-w-[950px] flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="text-base lg:text-xl text-[#fbf7f5] font-bold text-center lg:text-left">
          YOU GROW IT
          <br />
          WE MOW IT
        </div>
        {/* Icons */}
        <div className="flex gap-3">
          <a href={`mailto:${email}`} className="text-white">
            <FaEnvelope className="h-5 w-5" />
          </a>
          <a href={`tel:${phone}`} className="text-white">
            <FaPhone className="h-5 w-5" />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-white">
            <FaFacebook className="h-5 w-5" />
          </a>
        </div>
      </div>
      {/* Divider Line */}
      <hr className="w-full max-w-[950px] border-t border-[#dbe9e6]" />
      {/* Footer */}
      <div className="w-full max-w-[950px] text-center lg:text-right text-[#fbf7f5] text-xs">
        <p>© 2025 Leal Enterprises. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
