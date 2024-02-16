"use-client";

import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Service & Repair",
    bg: "/images/service.svg",
  },
  {
    id: 2,
    title: "Installation & Modifications",
    bg: "/images/install.svg",
  },
  {
    id: 3,
    title: "Hire",
    bg: "/images/hire.svg",
  },
];

const brands = [
  {
    id: 1,
    bg: "/images/molift.png",
  },
  {
    id: 2,
    bg: "/images/etac.png",
  },
  {
    id: 3,
    bg: "/images/netti.png",
  },
  {
    id: 4,
    bg: "/images/star-logo.png",
  },
  {
    id: 5,
    bg: "/images/dietz.png",
  },
  {
    id: 6,
    bg: "/images/areacare.png",
  },
];

export default function KeyService() {
  return (
    <div className="bg-white pb-12 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-[#002B64]">
              Our Key Services
            </span>
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-center overflow-hidden bg-white max-w-[400px] h-[220px] rounded-lg"
            >
              <Image
              width={100}
              height={100}
                src={post.bg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover z-0"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h3 className="text-lg md:text-[24px] font-bold leading-10 text-white px-4 mx-auto text-center">
                  <a href={post.href} className="text-center">
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl text-center pt-20">
        <h2 className="text-center text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
          <span className="inline-flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-[#002B64]">
              Our Brand Portfolio
            </span>
            <a
              href="#"
              className="line text-sm md:text-[14px] font-light text-[#01438A] underline ml-2"
            >
              View all brands
            </a>
          </span>
        </h2>
        <div className="grid grid-cols-2 px-8 sm:grid-cols-3 md:flex justify-evenly py-10 gap-5 mx-auto">
          {brands.map((brand) => (
            <Image
              width={100}
              height={100}
              key={brand.id}
              src={brand.bg}
              alt="brand"
              className="h-6 md:h-8 w-auto mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
