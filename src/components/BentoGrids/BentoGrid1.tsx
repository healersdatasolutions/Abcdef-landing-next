/* eslint-disable @next/next/no-img-element */
"use client";

import { FaHospitalAlt, FaMobileAlt, FaChartLine, FaGift, FaAnchor, FaDatabase } from "react-icons/fa";
import React from "react";
import { BentoGrid, BentoGridItem, BentoGridItem2 } from "@/components/ui/bento-grid";
import { motion} from "framer-motion";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconBoxAlignRightFilled, IconBrandInstagram } from "@tabler/icons-react";
// import DotPattern from "./magicui/dot-pattern";
import { InstagramEmbed } from 'react-social-media-embed';
import ClientTweetCard from "../ui/client-tweet-card";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
export function CardStackDemo() {
  
}



const SkeletonOne = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (

    
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      style={{
        background: "linear-gradient(-45deg, #0f243d, #040e3d, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
    >

      <motion.div className="h-full rounded-2xl  p-4   grid grid-cols-2 mx-auto gap-16  items-center justify-center">
        <img
          src="https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-24 w-24 col-span-1 "
        />
        <div className="col-span-1 flex flex-col items-start">

        <p className="text-xl  text-white">Dr. John</p>
        <p className="text-sm  text-white mt-1">Neurosurgeon</p>
        <p className="border border-white bg-purple-100 dark:bg-black text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Available
        </p>
        </div>
      </motion.div>
    </motion.div>
    
  );
};

const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div className="h-full w-full rounded-lg overflow-hidden">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/DBHd06gz6W-/" width={360} height={400} className="-translate-y-14" igVersion="353.1.0" />
</div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg">
        <ClientTweetCard id="1835722369819971792" className="shadow-2xl" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const features = [
    { title: "Patient Data Management", description: "Secure and organized record-keeping", icon: <FaDatabase className="" /> },
    { title: "Appointment Scheduling", description: "Streamlined OPD management", icon: <FaHospitalAlt className="" /> },
    { title: "Digital Solutions", description: "Customized landing pages and SEO", icon: <FaAnchor className="" /> },
    { title: "Promised Growth", description: "20-30% increase in operations", icon: <FaChartLine className="" /> },
  ]

  const cards = features.map((feature, index) => ({
    id: index,
    name: feature.title,
    designation: "",
    content: feature.description,
    image: feature.icon,
  }))

  return (
    

    <div className="w-full h-full flex items-center justify-center mb-40 lg:mb-0">
      <CardStack items={cards} offset={5} scaleFactor={0.03} />
    </div>
   
  )
}

const SkeletonFive = () => {
  const features = [
    { title: "Mobile Application", description: "User-friendly Android app",icon: <FaMobileAlt className="text-red-500" /> },
    { title: "Health Record Access", description: "Convenient digital records", icon: <FaChartLine className="text-purple-500" /> },
    { title: "Reward System", description: "Every 10th appointment free",icon: <FaGift className="text-pink-500" /> },
    { title: "NFTs & Crypto Tokens", description: "Redeemable for services", icon: <FaChartLine className="text-purple-500" /> },
  ]
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };

  return (
    <div className="relative w-full bg-transparent   h-[22rem] sm:h-[19.9rem] overflow-hidden">
      
        <div className="BlendatTop gradient top absolute inset-0 top-0 -translate-y-1 z-20 w-[100%] mx-auto h-1/6 bg-gradient-to-b from-[#021535] to-transparent pointer-events-none" ></div>
      <Marquee className="py-2" vertical pauseOnHover>
        
        {features.map((feature, index) => (
          <motion.div
          key={index}
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="flex flex-1 mx-3 h-full min-h-[4rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
          style={{
            background: "linear-gradient(-45deg, #0f243d, #040e3d, #23a6d5, #23d5ab)",
            backgroundSize: "400% 400%",
          }}
        >

          <div key={index} className="mb-1 m-3 p-4   rounded-lg flex justify-around items-center">
            <div className="size-10">
              <h1 className="text-4xl">

              {feature.icon}
              </h1>
            </div>
            <div>

            <h3 className="   ">{feature.title}</h3>
            <p className="text-sm  text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          </div>
        </motion.div>
        ))}
      </Marquee>
      <div className="BlendatBottom gradient bottom absolute inset-0 bottom-0 translate-y-36 z-20 w-[100%] mx-auto h-[60%] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

    </div>
  )
}
const SkeletonSix = () => {
 
  const variants2 = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };

  return (
    
    <div
      
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-5"
    >
      <motion.div
      initial="initial"
      animate="animate"
      variants={variants2}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-row rounded-full border border-gray-600 dark:border-white/[0.2] px-4 py-3 items-center justify-end space-x-2 w-[90%] ml-auto "
      style={{
        background: "linear-gradient(-45deg, #0f243d, #040e3d, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >

      
        <p className="text-sm text-white"><span className="text-white">You:</span> Does the patient have any past allergies?</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
    
    </motion.div>



    <motion.div
      initial="initial"
      animate="animate"
      variants={variants2}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-row rounded-full border border-gray-600 dark:border-white/[0.2] p-2 items-center space-x-2"
      style={{
        background: "linear-gradient(-45deg, #0f243d, #040e3d, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >

      
<img
          src="/gradient2.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-sm text-white"><span className="white">AI:</span> Yes, the patient has a history of asthma. </p>
    </motion.div>

    
      
    </div>
  );
};

export default function BentoGridThirdDemo() {
  const items = [
    {
      title: "Live Doctor's Availability",
      description: <span className="text-sm">Check real-time availability of specialists for consultations.</span>,
      header: <SkeletonOne />,
      className: "md:col-span-1 bg-[url('/blurgradient8.png')] bg-center bg-cover bg-no-repeat filter shadow-lg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ask The AI",
      description: <span className="text-sm">Ask AI to summarize the patient data for you.</span>,
      header: <SkeletonSix />,
      className: "md:col-span-1 bg-[url('/blurgradient8.png')] bg-center bg-cover bg-no-repeat",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Follow Us on Twitter",
      description: <span className="text-sm">Get the latest updates on our Twitter handle, @Healers_Healthcare</span>,
      header: <SkeletonThree />,
      className: "md:col-span-1 bg-[url('/blurgradient8.png')] bg-center  bg-cover bg-no-repeat",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "For Hospitals",
      description: <span className="text-sm">Comprehensive solutions for efficient hospital management and growth.</span>,
      header: <SkeletonFour />,
      className: "md:col-span-1 bg-[url('/blurgradient8.png')] bg-center bg-cover bg-no-repeat",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "For Patients",
      description: <span className="text-sm">User-friendly app with rewards and convenient health record access.</span>,
      header: <SkeletonFive />,
      className: "md:col-span-1 bg-[url('/blurgradient8.png')] bg-center bg-cover bg-no-repeat",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Follow Us on Instagram",
      description: <span className="text-sm">Stay updated with our latest posts and healthcare tips.</span>,
      header: <SkeletonTwo />,
      className: "md:col-span-1 bg-[url('/blurgradient8.png')] bg-center bg-cover bg-no-repeat",
      icon: <IconBrandInstagram className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <>
      <p className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white ">
        The More You Can Do With Healers
      </p> 
      <div className="relative">
      <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[10%] -translate-x-[20%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[30%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[230deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <BentoGrid className="max-w-6xl mx-5 sm:mx-auto mt-32 md:auto-rows-[20rem] font-[Poppins]">
        {items.map((item, i) => (
         // if the i = 5 it should use bento grid item 2
         
          
            i === 4 ? (
              <BentoGridItem2
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg] z-20", item.className)}
            icon={item.icon}
          />
            ) : (
              <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg] z-20", item.className)}
            icon={item.icon}
          />
            )
          
        ))}
      </BentoGrid>
      </div>
    </>
  );
}