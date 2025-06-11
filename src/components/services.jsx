import React from "react";

const Services = ({ servicesRef }) => {
  return (
    <div
      ref={servicesRef}
      className="bg-[#fbf7f5] text-black px-4 py-12 text-center lg:h-[400px] flex flex-col justify-center"
    >
        {/* Heading */}
        <h1 className="text-2xl lg:text-4xl font-bold text-green-800 mb-10">
            Our Services
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Edging */}
            <div className="shadow-lg border rounded p-5 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl lg:text-2xl font-bold text-[#446E67] mb-3">
                    Edging
                </h2>
                <p className="text-sm lg:text-base text-black font-normal">
                    Our edging services create clean lines and defined borders for your garden beds and walkways.
                </p>
            </div>

            {/* Lawn Mowing */}
            <div className="shadow-lg border rounded p-5 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl lg:text-2xl font-bold text-[#446E67] mb-3">
                    Lawn Mowing
                </h2>
                <p className="text-sm lg:text-base text-black font-normal">
                    We provide professional lawn mowing services to keep your yard looking pristine.
                </p>
            </div>

            {/* Bush Trimming */}
            <div className="shadow-lg border rounded p-5 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl lg:text-2xl font-bold text-[#446E67] mb-3">
                    Bush Trimming
                </h2>
                <p className="text-sm lg:text-base text-black font-normal">
                    We expertly trim bushes to enhance your garden’s aesthetics and health.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Services;