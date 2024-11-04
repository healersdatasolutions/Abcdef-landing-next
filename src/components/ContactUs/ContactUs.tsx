"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function ContactUs() {
  return (
    <>
    <h2
          id="contactUs"
          className="mt-36 mb-10 z-10  text-center text-3xl sm:text-5xl font-medium tracking-tighter text-white"
        >
          That&apos;s Healers For You
        </h2>
    <div className="relative rounded-md my-14 md:my-14 md:py-14 w-80 sm:max-w-6xl mx-auto   sm:w-full flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full">
        <BackgroundGradientAnimation 
          gradientBackgroundStart="rgb(108, 0, 162)" 
          gradientBackgroundEnd="rgb(0, 17, 82)"
          firstColor="18, 113, 255"
          secondColor="221, 74, 255"
          thirdColor="100, 220, 255"
          fourthColor="200, 50, 50"
          fifthColor="50, 100, 180"
          pointerColor="140, 100, 255"
          size="100%"
          blendingValue="hard-light"
          interactive={true}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-20">
        <div className="absolute opacity-70 mix-blend-color-dodge pointer-events-none top-0 right-0">
          <div className="absolute -translate-y-[20%] translate-x-[20%] size-[18.85rem] lg:size-[48.85rem] animate-blob2">
            <Image className="w-full opacity-100 rotate-[66deg]" src="/gradient.png" width={942} height={942} alt="" />
          </div>
        </div>

        

        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className={cn("md:text-4xl text-xl text-white text-center")}>
            To know More Join Us
          </h1>
          <p className="text-center mt-2 mb-4 text-neutral-300 max-w-md">
            Get on early access to the latest updates.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 items-center max-w-md w-full">   
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                </svg>
              </div>
              <input 
                type="email" 
                id="email" 
                className="bg-gray-50 border-2 border-[#33afd1] text-zinc-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <Button className="w-full sm:w-auto px-5 bg-transparent border text-white border-white hover:bg-white hover:text-[#0A0F29] transition duration-500 rounded-full hover:-translate-y-2">
              Join Us
            </Button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}