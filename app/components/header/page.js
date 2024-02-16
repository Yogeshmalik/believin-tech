"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Banner from "./banner/page";

const navigation = [
  { name: "About Us", href: "#" },
  { name: "Our Brands", href: "#" },
  { name: "Products", href: "#" },
  { name: "Hire", href: "#" },
  { name: "Complex Rehab", href: "#" },
  { name: "Contracts", href: "#" },
  { name: "Education", href: "#" },
];

const Header = () => {
  return (
    <div className="relative md:overflow-hidden md:w-full z-40 bg- hero md:mx-aut0">
      <Banner />
      <div className="relative pb-16 pt-6 sm:pb-24 max-w-7xl mx-auto">
        {/* Nav Bar */}
        <Popover>
          <nav
            className="relative md:mx-auto min-w-full flex max-w-7xl md:items-center justify-between px-6 md:px-0"
            aria-label="Global"
          >
            <div className="flex flex-1 px-8 lg:px-0 md:w-full justify-between items-cente items-end">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span className="sr-only">Novis</span>
                  <img
                    className="h-8 w-auto lg:h-16"
                    src="/images/novis-logo.png"
                    alt=""
                  />
                </a>
                <div className="-mr- flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-3 lg:space-x-10 lg:ml-10 md:flex">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="md:font-medium text-sm lg:text-base text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="hidden md:flex items-center my-auto">
                  <a href="#">
                    <span className="sr-only">Novis</span>
                    <img
                      className="h-8 w-auto sm:h-5 "
                      src="/images/search-icon.png"
                      alt="search"
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolut inset-x-0 top-0 z-50 origin-top-right ml-auto fle w-fit transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg opacity-100 bg-blue-800 shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/images/novis-logo.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-blue-800 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div className="mx-auto lg:fle -z-10 absolute xl:static top-72 max-w-7xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-20 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 px-6 lg:px-28">
        <h1 className="max-w-[500px] w-full text-xl md:text-[26px] font-bold tracking-normal text-white lg:col-span-2 xl:col-auto font-[inter  pt-8 md:pt-24">
          Committed to the Australian Pressure Care Industry and Community
        </h1>
        <div className="mt-6 max-w-[500px] lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p className="text-sm md:text-[16px] leading- text-white">
            Since 2003, Novis® has been providing clinical healthcare products
            designed for hospitals, aged care facilities, rehabilitation
            providers and the home care community. With collaboration from our
            manufacturing and distribution partners, our products and services
            enhance the lives of thousands of people every day.
          </p>
          <div className="mt-7 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-sm bg-white px-3.5 py-2.5 text-sm font- text-[#01438A] shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
            >
              About Novis
            </a>
          </div>
        </div>
        <img
          src=""
          alt=""
          className="mt-10 opacity-0 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
      </div>
    </div>
  );
};

export default Header;
