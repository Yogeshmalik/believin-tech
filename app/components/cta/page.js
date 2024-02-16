"use-client";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-[#F0F6FB] ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex md:flex-row flex-col  border-t py-16 w-full border-[#BFD4E5]">
        <Image
          width={1000}
          height={1000}
          src="/images/cta-img.png"
          alt=""
          className="flex md:pb-0 pb-8 w-fit"
        />
        <div className="mx-auto flex flex-grow max-w-2xl gap-x-8 gap-y-16 ">
          <div className="">
            <h2 className="text-center text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-[#002B64]">
                Nationally supported by our trusted network
              </span>
            </h2>
            <p className="mt-4 pl-1/2 text-[15px] leading-8 text-[#01438A]">
              Find your nearest retail location
            </p>
            <div className="mt-6 flex md:flex-row flex-col space-y-4 md:space-y-0 flex-grow justify-between max-w-2xl gap-x-4 ">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w- max-w-2xl flex rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-[#D1E4F5] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 w-full"
                placeholder="Enter postcode or suburb here"
              />
              <div className=" flex w-full">
                <select
                  id="range"
                  name="range"
                  className="mt- block min-w-full rounded-md border-0 py-2 pl-3 pr-10 text-sm text-gray-900 ring-1 ring-inset ring-[#D1E4F5] focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 h-full"
                  defaultValue="Within 10km"
                >
                  <option>Within 20km</option>
                  <option>Within 10km</option>
                  <option>Within 30km</option>
                </select>
              </div>

              <button
                type="submit"
                className="flex-none bg-[#006FDE] px-3.5 md:px-7 py-2 text-sm font- text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
