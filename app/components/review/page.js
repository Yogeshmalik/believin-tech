import { StarIcon } from "@heroicons/react/24/solid";

const timeline = [
  {
    name: "Founded company",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Secured $65m in funding",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Released beta",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
];

export default function Review() {
  return (
    <div className="bg-white pb-12">
      <h2 className="text-center text-lg py-12 md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-[#002B64]">
          Don’t just take our word for it
        </span>
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.name}>
              <div className="flex pb-4">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className="text-[#006FDE] h-5 w-5 flex flex-shrink-0"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-1 text-base leading-7 pb-4 text-gray-600">
                {/* {item.description} */}
                Great service! I had no idea where to start supplying my Mum
                with a wheelchair. Andrew was supportive and helpful. I unpacked
                the chair yesterday and it is perfect. Quick delivery and a
                great product.
              </p>
              <p className="flex text-[#75A5D6]">Jeanette O'Brien</p>
            </div>
          ))}
        </div>
      </div>
      <span className="h-1 mt-12 mb-5 flex w-full max-w-7xl border-b border-[#CBE5FF]" />
      <img
        src="/images/review.svg"
        alt=""
        className="flex mx-auto pt-4 px-6 md:px-1"
      />
    </div>
  );
}
