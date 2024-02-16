"use-client";

import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Service & Repair",
    bg: "/images/novis-branded.svg",
    cat: "Novis Branded Catalogue",
  },
  {
    id: 2,
    title: "Installation & Modifications",
    bg: "/images/injury.svg",
    cat: "Pressure Injury Prevention Products Catalogue",
  },
  {
    id: 3,
    title: "Hire",
    bg: "/images/community-hire.svg",
    cat: "Community Hire catalogue",
  },
];

const catalogues = [
  {
    id: 1,
    cat: "Novis Branded Catalogue",
  },
  {
    id: 2,
    cat: "Pressure Injury Prevention Products Catalogue",
  },
  {
    id: 3,
    cat: "Community Hire catalogue",
  },
];

export default function Catalogues() {
  return (
    <div className="bg-[#F0F6FB] pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" max-w-2xl text-left">
          <h2 className="lg:text-left text-center mx-auto text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
            <span className="inline-flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-[#002B64]">
                Catalogues
              </span>
              <a
                href="#"
                className="line text-sm md:text-[14px] font-light text-[#01438A] underline ml-4"
              >
                View all Catalogues
              </a>
            </span>
          </h2>
        </div>
        <div className="mx-auto mt-10 flex md:flex-row flex-col max-w-2xl gap-8 lg:mx-0 lg:max-w-none h-full ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative mx-auto isolat flex flex-col justify-center overflow-hidden bg- max-w-[360px] h-[220px rounded-lg 
                shadow-m flex h-full"
            >
              <img
                src={post.bg}
                alt=""
                className="absolut inset-0 h-full w-full object-cover z-0"
              />
              {/* {catalogues.map((catalogue) => ( */}
              <div className="inset-0 flex items-center justify-cente z-10">
                <div className="flex justify-between w-full my-2">
                  <a
                    key={post.id}
                    href="#"
                    className="text-lg md:text-[18px] font-bold leading-6 text-[#01438A] max-w-[281px]"
                  >
                    {post.cat}
                    {/* {catalogue.cat} */}
                  </a>
                  <img
                    src="/images/blue-arrow-right.svg"
                    alt="left"
                    className=" w-ful"
                  />
                </div>
              </div>
                <p className="block text-[#006FDE] text-[15px]">August 2022</p>
              {/* ))} */}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
