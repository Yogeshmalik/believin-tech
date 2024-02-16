"use-client";

import Image from "next/image";

export default function Featured() {
  return (
    <div className="overflow-hidden bg-[#F0F6FB] py-16 md:py- w-full">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 flex justify-between w-full">
        <div className="mx-auto md:flex justify-between grid max-w-2xl grid-cols-1 gap-x-12 gap-y-8 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="flex flex-wra items-start justify-en gap-6 sm:gap-8 lg:contents">
            <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-non">
              <Image
              width={100}
              height={100}
                src="/images/featured-img.png"
                alt=""
                className=" w-full md:w-[540px] md:h-[435px] max-w-3xl"
              />
            </div>
          </div>
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 my-auto">
            <p className="flex pb-4 text-[#75A5D6] font-medium text-[12px]">
              FEATURED PRODUCT
            </p>
            <h2 className="text-cente text-lg md:text-[28px] font-bold tracking-tight sm:text-xl max-w-[530px] w-full">
              <span className="inline-flex items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-[#002B64] leading-8 ">
                  Etac Prio: Design with care, customise to user&apos;s ability.
                </span>
              </span>
            </h2>
            <p className="mt-6 max-w-[460px] text-base text-[#252525]">
              The Etac Prio wheelchair provides a high level of customisation,
              adaptability and care for users. This tilt in space and reclining
              wheelchair allows for frequent repositioning and long term
              seating.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className=" bg-[#006FDE] px-5 py-2.5 text-sm font-
                 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex w-fit space-x-3">
            <Image
              width={100}
              height={100} src="/images/arrow-left.svg" alt="left" className=" w-full" />
            <Image
              width={100}
              height={100} src="/images/arrow-right.svg" alt="left" className=" w-full" />
          </div>
        </div>
      </div>
      <span className="h-1 mt-7 mb-5 px-10 max-w-7xl mx-auto flex w-full border-b border-[#BFD4E5]" />
    </div>
  );
}
