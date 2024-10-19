"use client"

import { motion } from 'framer-motion'
import Image from "next/image"
import { cn } from "@/lib/utils"
import Iphone15Pro from "@/components/ui/iphone-15-pro"
import DotPattern from "@/components/ui/dot-pattern"
import SparklesText from "@/components/ui/sparkles-text"

export default function MobileAppSection() {
  return (
    <div className='max-w-7xl mx-auto relative' >
      <div className="absolute opacity-70 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[20%] -translate-x-[20%]  size-[18.85rem] lg:size-[48.85rem] animate-blob2">
          <Image className="w-full opacity-100 rotate-[66deg]" src="/gradient2.png" width={942} height={942} alt="" />
        </div>
      </div>
      <p
        id="app"
        className="mt-36 mb-10  text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white "
      >
        Download Our Mobile App
      </p>
      <section className=" flex justify-center items-center mb-26  sm:mx-10 md:mx-10">
        <div className="max-w-6xl relative flex h-auto min-h-[500px] w-[1400px] flex-col items-center justify-center overflow-hidden rounded-lg bg-[#cccccb] dark:bg-black md:shadow-xl p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 w-full">
            <div className="flex flex-col justify-center items-center ">
              <SparklesText text="Healers Mobile App" className="z-[12] text-center mt-10 md:mt-2 font-sans" />
              <p className="z-12 whitespace-pre-wrap text-center lg:text-left text-xl font-medium tracking-tighter text-black dark:text-white/60 mt-4">
                Get the best experience on the go
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
                <button className="z-20 p-2 bg-black border text-white rounded-lg hover:bg-zinc-900 transition duration-300 text-xs flex items-center justify-center">
                  Download
                  <Image src="/appleLogo.png" width={24} height={24} className="ml-2" alt="Apple Logo" />
                </button>
                <button className="z-20 p-2 bg-black border text-white rounded-lg hover:bg-zinc-900 transition duration-300 text-xs flex items-center justify-center">
                  Download
                  <Image src="/androidLogo.png" width={28} height={28} className="ml-2" alt="Android Logo" />
                </button>
              </div>
            </div>

            <div className="relative flex justify-center items-center mt-10 lg:mt-0">
              <motion.div
                className="z-[13]"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Iphone15Pro
                  className="size-[300px] md:size-[390px] lg:size-[390px] xl:size-[390px] 2xl:size-[390px]"
                  src="/mobileAppImg.jpg"
                />
              </motion.div>
              <motion.div
                className="absolute z-[12] -left-10 top-10 opacity-90 hidden lg:block"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <Iphone15Pro
                  className="size-[300px] md:size-[390px] lg:-translate-x-10 xl:-translate-x-0 lg:size-[390px] xl:size-[390px] 2xl:size-[390px] rotate-[340deg]"
                  src="/mobileAppImg.jpg"
                />
              </motion.div>
              
            </div>
            <div className="absolute z-[11] opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[20%] -translate-x-[20%]  size-[18.85rem] lg:size-[48.85rem] animate-blob2">
          <Image className="w-full opacity-100 rotate-[66deg]" src="/gradient2.png" width={942} height={942} alt="" />
        </div>
      </div>
          </div>

          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              "absolute inset-0 opacity-50"
            )}
          />
        </div>
      </section>
    </div>
  )
}