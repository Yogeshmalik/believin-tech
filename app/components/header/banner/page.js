"use-client";

const links = [
  { name: "Store Locator", icon: "/images/location.png" },
  { name: "Resources", icon: "" },
  { name: "1300 738 885", icon: "/images/phone.png" },
];

export default function Banner() {
  return (
    <div className="bg-[#013369] bg-opacity-35 md:h-[46px]">
      <div className="mx-auto min-w-full max-w-7xl px-6 py-2 sm:px-20 lg:px-">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg  pr-2">
              <img
                className="h-8 w-auto sm:h-5 "
                src="/images/ndis.png"
                alt=""
              />
            </span>
            <p className="ml-3 truncate font-medium text-[#CBE5F]">
              <span className="hidden md:inline text-[#CBE5F] text-sm bannerText">
                Registered Provider 405 001 9411
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full md:flex-row flex flex-col items-center flex-shrink-0  sm:order-2 sm:mt-0 sm:w-auto gap-x-8 gap-y-6">
            <div className="gri grid-cols- flex gap-x-8 gap-y-6 text-sm font-light leading-7  bannerText sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={"#"}>
                  <img
                    aria-hidden="true"
                    className="px-1 inline-flex items-center"
                    src={link.icon}
                  />{" "}
                  {link.name}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-sm bg-gray-200 px-2.5 py-1 text-sm text-[#002B64] shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            >
              <img
                className="h-8 w-auto sm:h-5 "
                src="/images/cart.png"
                alt=""
              />
              Online Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
