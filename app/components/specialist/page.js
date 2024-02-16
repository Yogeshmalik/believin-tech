"use-client";
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const transferFeatures = [
  {
    id: 1,
    name: "Complex",
  },
  {
    id: 2,
    name: "Hospital",
  },
  {
    id: 3,
    name: "In Home Care",
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: "Reminder emails",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: EnvelopeIcon,
  },
];

export default function Specialists() {
  return (
    <div className="overflow-hidden bg-white py-16  min-w-full relative">
      <div className="relativ mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="min-w-full">
          <img
            className="absolute right-0 border-4 hidden lg:block"
            src="/images/feedback.svg"
            alt="doctor with old lady"
          />
        </div>

        <div className="relative">
          <h2 className="text-center text-lg md:text-[24px] font-bold leading-8 tracking-tight sm:text-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-black">
              We Are Specialists In
            </span>
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="font-bold tracking-tight text-[#01438A] text-lg md:text-[22px]">
              Aged Care
            </h3>
            <p className="mt-3 text-base md:text-[14px] text-[#252525]">
              Novis has been providing Aged Care equipment for the best clinical
              outcomes since 2003. We work with architects, builders, aged care
              facilities, and project managers to find the best solutions.
            </p>
            <span className="h-1 mt-7 mb-5 flex w-full border-b border-[#006FDE]" />

            <div className="mt- space-y-8">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <p className=" text-base md:text-[22px] font-medium leading-6 text-[#75A5D6]">
                      {item.name}
                    </p>
                  </dt>
                </div>
              ))}
            </div>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto md:w-[662px] -[390px] "
              //   width={662}
              //   height={390}
              src="/images/special-oldlady.svg"
              alt="doctor with old lady"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
