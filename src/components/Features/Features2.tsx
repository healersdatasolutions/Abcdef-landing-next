import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";
import { FaHospitalAlt, FaMobileAlt, FaSearch, FaChartLine, FaClipboardList, FaGift } from "react-icons/fa";

export function Feature2() {
  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto px-8 md:px-0" id="Features1">
        <p className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
          The Features Out of the Blue
        </p>
        <div className="blob1 absolute opacity-70 mix-blend-color-dodge pointer-events-none">
          <div className="absolute -translate-y-[20%] size-[18.85rem] lg:size-[68.85rem] animate-blob">
            <Image className="w-full opacity-100" src="/gradient2.png" width={942} height={942} alt="" />
          </div>
        </div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    icon: <FaHospitalAlt className="text-blue-500" />,
    title: "Patient Data Management",
    description: "Efficiently manage patient data with our secure and organized record-keeping platform.",
  },
  {
    icon: <FaClipboardList className="text-green-500" />,
    title: "Appointment Scheduling",
    description: "Streamline OPD appointments for enhanced operational efficiency.",
  },
  {
    icon: <FaSearch className="text-yellow-500" />,
    title: "Digital Solutions",
    description: "Customized digital solutions including landing page development and SEO for hospitals.",
  },
  {
    icon: <FaChartLine className="text-purple-500" />,
    title: "Promised Growth",
    description: "Expect 20-30% growth in operations and patient engagement with our solutions.",
  },
  {
    icon: <FaMobileAlt className="text-red-500" />,
    title: "Mobile Application",
    description: "User-friendly Android app for booking appointments with preferred doctors at nearby hospitals.",
  },
  {
    icon: <FaGift className="text-pink-500" />,
    title: "Rewards & NFTs",
    description: "Earn NFTs and crypto tokens redeemable for various medical services and purchases.",
  },
];