"use-client";

export default function Webinar() {
  return (
    <div className="relative mx-auto w-full isolate overflow-hidden bg max-w-7xl">
      <div className="w-[70px] h-[17px] hidden md:flex">
        <img
          className="w-[70px] h-[17px] absolute top-0 left-16"
          alt="Subtract"
          src="/images/subtract.png"
        />
      </div>
      <div className=" max-w-2x max-w-7x px-6 lg:px-8 flex md:flex-row flex-col  border- pt-16 w-full">
        <h2 className="text-left text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
          <span className="inline-flex items-center text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBE5FF] via-blue-300 to-[#75A5D6]">
              Upcoming Webinar
            </span>
            <a
              href="#"
              className="line text-sm md:text-[14px] font-light text-[#CBE5FF] underline ml-4"
            >
              View Past Webinars
            </a>
          </span>
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex md:flex-row flex-col  border- py-10 w-full ">
        <img
          src="/images/webinar.png"
          alt=""
          className="flex max-w-[360px] md:pb-0 pb-8"
        />
        <div className=" mx-auto flex flex-col max-w-2xl w-full lg:pb- my-auto">
          <p className="flex pb-4 text-left items-start text-[#fff] font-medium text-[12px]">
            12 Aug 2022 5:00 PM
          </p>
          <h2 className="text-cente text-lg md:text-[28px] font-bold tracking-tight sm:text-xl max-w-[530px] w-full">
            <span className="inline-flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBE5FF] via-blue-300 to-[#75A5D6] leading-8 ">
                Pressure Injury Prevention
              </span>
            </span>
          </h2>
          <p className="mt-6 max-w-[728px] text-sm font-light text-[#fff]">
            Pressure injuries typically appear in the form of a sore, or ulcer,
            on areas of the skin that are regularly exposed to pressure. We are
            determined to provide 24/7 vigilant care to patients and physicians,
            from specialized mattresses to air cell cushions. We help you
            develop a better understanding of pressure injury prevention.
          </p>
          <div className="mt-10 flex">
            <a
              href="#"
              className=" bg-[#fff] px-5 py-2.5 text-sm font-
                 text-[#01438A] shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
            >
              Register to attend
            </a>
          </div>
        </div>
      </div>
      <span className="h-1 mt-7 mb-5 flex w-full border-b border-[#006FDE]" />
    </div>
  );
}
