import React from "react";
import { FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = ({contactRef}) => {
    return (
        <div ref={contactRef} className="h-[170px] bg-[#446E67] flex flex-col items-center justify-center gap-4">
            <div className="w-[950px]">
                <div className="flex justify-between">
                    <div className="text-xl text-[#fbf7f5] font-bold">Innovations Sanchez</div>
                    <div className="flex gap-2">
                        <a href="mailto:email@example.com" className="mr-2 text-white">
                            <FaEnvelope className="h-5 w-5" />
                        </a>

                        <a href="tel:1234567890" className="mr-2 text-white">
                            <FaPhone className="h-5 w-5" />
                        </a>

                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2 text-white">
                            <FaFacebook className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
            <hr style={{ width: '950px', borderTop: '1px solid #dbe9e6' }} />
            <div className="flex justify-end text-[#fbf7f5] text-sm mt-2 w-[950px]">
                <p>© 2025 Leal Enterprises. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Contact;