import React from "react";
import emailIcon from './assets/email.svg';
import phoneIcon from './assets/phone.svg';

const Contact = ({contactRef}) => {
    return (
        <div ref={contactRef} className="h-[170px] bg-[#446E67] flex items-center justify-center">
            <div className="max-w-4xl px-4">
                <div className="text-2xl text-[#fbf7f5] font-bold">Contact us</div>
                <div className="flex items-center text-[#fbf7f5] mt-4">
                    <img src={emailIcon} className="h-6 mr-2" alt="Email logo" />
                    <a href="mailto:email@example.com">email@example.com</a>
                </div>
                <div className="flex items-center text-[#fbf7f5] mt-4">
                    <img src={phoneIcon} className="h-7 mr-2" alt="Phone logo" />
                    <a href="tel:1234567890">(123) 456-7890</a>
                </div>
            </div>
        </div>
    )
}
export default Contact;