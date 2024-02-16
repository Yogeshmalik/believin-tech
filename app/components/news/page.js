"use-client";

import Image from "next/image";

const posts = [
  {
    id: 1,
    bg: "/images/news-1.png",
    cat: "Our new Kingsgrove Showroom Opening",
    desc: "Service & Repair",
  },
  {
    id: 2,
    bg: "/images/news-2.png",
    cat: "New Configura Advance Chair Training Coming Soon",
    desc: "Installation & Modifications",
  },
  {
    id: 3,
    bg: "/images/news-3.png",
    cat: "New Novis catalogue is out now",
    desc: "Hire",
  },
];

export default function News() {
  return (
    <div className="bg-] pb">
      <div className="mx-auto max-w-7xl pb-12 px-6 lg:px-8">
        <div className=" max-w-2xl text-left">
          <h2 className="text-left text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
            <span className="inline-flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBE5FF] via-blue-300 to-[#75A5D6]">
                Latest News
              </span>
              <a
                href="#"
                className="line text-sm md:text-[14px] font-light text-[#CBE5FF] underline ml-4"
              >
                View all News & Releases
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
              <div className="inset-0 flex items-center justify-cente z-10">
                <div className="flex flex-col pt-10 space-y-4 justify-between w-full my-2">
                  <a
                    key={post.id}
                    href="#"
                    className="text-lg md:text-[18px] font-bold leading-6 text-[#fff] max-w-[281px]"
                  >
                    {post.cat}
                  </a>
                  <p className="text-[15px] text-white max-w-[354px] font-light  ">
                    Since 2003, Novis® has been providing clinical healthcare
                    products designed for hospitals, aged care facilities,
                    rehabilitation providers and ...
                  </p>
                  <a
                    href="#"
                    className="line text-sm md:text-[14px] font-light text-[#CBE5FF] underline ml-"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg- news-cta">
        <div className="mx-auto max-w-7xl px-6 py- lg:px-8">
          <div className=" px-6 py-6 md:px-12 md:py-12 lg:px-16 lg:py- xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-left text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
                <span className="inline-flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBE5FF] via-blue-300 to-[#75A5D6]">
                    Stay Up To Date
                  </span>
                </span>
              </h2>
              <p className="mt-3 max-w-3xl block text-sm md:text-[14px] font-light text-[#CBE5FF]">
                Never miss an update or announcement by subscribing here to
                Novis news
              </p>
            </div>
            <div className="my-8 sm:w-full sm:max-w-md xl:ml-8 xl:mt-0">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-3 py-2 
                  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  placeholder="Your email here"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center border border-transparent bg-[#006FDE] px-7 py-2 text-sm font- text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
