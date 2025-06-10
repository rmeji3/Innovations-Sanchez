import React from "react";

const Services = ({servicesRef}) => {
    {/* service Section */}
    return (
        <div ref={servicesRef} className="h-[510px] bg-[#fbf7f5] text-black text-4xl font-bold text-center">
        <h1 className = "text item-center m-7 font-norm h-[190px] pt-27 text-green-800"> Our Services</h1>
        <div className ="grid grid-cols-1 sm:grid-cols-3 gap-6 m-3 ">
            <h2 className="text-center shadow-lg text-4xl font-bold text-[#446E67] border rounded m-3 pt-5 h-52 hover:shadow-2xl transition-shadow duration-300">
                Lawn Mowing
                <p className = "text-lg text-black mt-7 text-center font-normal m-4"> 
                We provide professional lawn mowing services to keep your yard looking pristine. 
                </p>
            </h2>

            <h2 className = "text-center shadow-lg text-4xl font-bold text-[#446E67] border rounded m-3 pt-5 h-52 hover:shadow-2xl transition-shadow duration-300">
                Side Trimming
            <p className = "text-lg text-black mt-7 text-center font-normal m-4">
                Our side trimming keeps hedges and bushes neat, boosting your landscape’s look.
            </p>
            </h2>

            <h2 className = "text-center shadow-lg text-4xl font-bold text-[#446E67] border rounded m-3 pt-5 h-52 hover:shadow-2xl transition-shadow duration-300">     
                Weed Control
            <p className = "text-lg text-black mt-7 text-center font-normal m-4">
                We offer effective weed control solutions to keep your garden healthy and free from unwanted plants.
            </p>
            </h2>
        </div>

        <br></br>
        
    </div>
  )
}

export default Services;