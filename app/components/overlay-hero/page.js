import React from "react";

const OverlayHero = () => {
  return (
    <div className="relative bg-white">
      <div className=" bg-[#E8F0F8] h-fit py-1 md:py-0 md:h-[60px] w-full px-6 sm:px-20">
        {" "}
        <p className="experts-in-pressure h-full flex flex-col md:flex-row items-center justify-center md:gap-x-8 mx-auto text-[#00509E] font-semibold text-sm text-center tracking-[0] leading-[22.5px] md:whitespace-nowrap py-6 md:py-0">
          <span>
            Experts in pressure care, patient transfers and complex rehab
          </span>
          <img
            className="hidden md:flex"
            alt="Subtract"
            src="/images/subtract-vector.png"
          />
          Outstanding customer service
          <img
            className="hidden md:flex"
            alt="Subtract"
            src="/images/subtract-vector.png"
          />
          <span>Serving the healthcare industry since 2002</span>
        </p>
      </div>
      <div className="w-[70px] h-[17px] hidden md:flex">
        <img
          className="w-[70px] h-[17px] absolute bottom-0 left-16"
          alt="Subtract"
          src="/images/subtract.png"
        />
      </div>
    </div>
  );
};

export default OverlayHero;
