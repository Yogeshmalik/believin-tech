'use-client'

const FooterSection = () => {
  return (
    <div className="bg-white w-full">
         <div className="xl:grid xl:grid-cols-4 mx-auto xl:gap-8 py-5 md:py-10 w-full bg-white px-6 lg:px-8 items-start ">
          <div className="md:mt-16 space-y-8 max-w-7xl xl:mt-0 bg-white">
            <img src="/images/map.svg" alt="map" />
          </div>
          <div className="mt-16 space-y-2 xl:mt-0">
            <div className="flex space-x-2">
              <img src="/images/location.svg" alt="" />
              <h3 className="text-sm md:text-[15px] font-bold leading-6 text-[#006FDE]">
                NSW
              </h3>
            </div>
            <ul role="list" className="mt-6 space-y-2">
              <li>
                <p className="text-[13px] leading-6 text-gray-600 hover:text-gray-900">
                  12/12 Mars Rd, Lane Cove West NSW 2066
                </p>
              </li>
              <li>
                <p className="text-[13px] leading-6 text-gray-600 hover:text-gray-900">
                  B3/15 Forrester St, Kingsgrove NSW 2208
                </p>
              </li>
              <li>
                <p className="text-[13px] leading-6 text-gray-600 hover:text-gray-900">
                  3D/6 Boundary Rd, Northmead NSW 2152
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-16 space-y-2 xl:mt-0">
            <div className="flex space-x-2 ">
              <img src="/images/location.svg" alt="" />
              <h3 className="text-sm md:text-[15px] font-bold leading-6 text-[#006FDE]">
                QLD
              </h3>
            </div>
            <ul role="list" className="mt-6 space-y-2">
              <li>
                <p className="text-[13px] leading-6 text-gray-600 hover:text-gray-900">
                  3/59 Eastern Rd, Browns Plains QLD 4118
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-16 space-y-2 xl:mt-0">
            <div className="flex space-x-2">
              <img src="/images/location.svg" alt="" />
              <h3 className="text-sm md:text-[15px] font-bold leading-6 text-[#006FDE]">
                VIC
              </h3>
            </div>
            <ul role="list" className="mt-6 space-y-2">
              <li>
                <p className="text-[13px] leading-6 text-gray-600 hover:text-gray-900">
                  2/59 Eastern Rd, Browns Plains VIC 3211
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className="flex mx-auto text-[#4B4B4B] max-w-7xl px-6 py-10 w-full text-[13px] items-center my-auto h-full bg-[#E8F0F8] ">
          Whilst every effort is made to provide information that is accurate,
          occasionally, one or more items on our website may be incorrectly
          priced. Where a product is listed at an incorrect price due to
          typographical, photographic, or technical error or error in pricing
          information, Novis reserves the right to refuse, cancel or amend any
          product(s) listed at the incorrect price. All prices shown are retail
          prices. To see trade prices, please log into your existing partner
          membership. All prices shown in Australia Dollars.
        </p>
        <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Logo</span>
              <img src="/images/novis-logo-black.svg" alt="" className="flex" />
            </a>
          </div>
          <div className="mt-8 flex md:order-1 md:mt-0 space-x-6">
            <p className="text-center text-[13px] font-bold leading-5 text-[#01438A]">
              &copy; 2022 All Rights Reserved
            </p>
            <p className="text-center text-xs leading-5 text-[#01438A]">
              Privacy Policy
            </p>
            <p className="text-center text-xs leading-5 text-[#01438A]">
              Warranty
            </p>
            <p className="text-center text-xs leading-5 text-[#01438A]">
              Cookie Policy
            </p>
          </div>
        </div>
    </div>
  )
}

export default FooterSection