/* eslint-disable @next/next/no-img-element */
"use client"

// import React, { useRef, useEffect } from "react"
// import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"

export default function BentoGrid2() {
  // const ref = useRef(null)
  // const isInView = useInView(ref, { amount: 0.8 })
  // const controls = useAnimation()
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"]
  // })

  // const createFloatingAnimation = () => ({
  //   x: Math.random() * 80 - 20,
  //   y: Math.random() * 80 - 20,
  //   rotate: Math.random() * 20 - 10,
  //   transition: {
  //     duration: Math.random() * 1 + 3,
  //     repeat: Infinity,
  //     repeatType: "reverse" as const,
  //     ease: "easeInOut"
  //   }
  // })

  // const floatingVariants = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  // const floatingVariants2 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  // const floatingVariants3 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  // const floatingVariants4 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
//   const floatingVariants5 = {
//     floating: createFloatingAnimation(),
//     aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
//   }
  // const floatingVariants6 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  // const floatingVariants7 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  // const floatingVariants8 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  // const floatingVariants9 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  // const floatingVariants10 = {
  //   floating: createFloatingAnimation(),
  //   aligned: { x: 0, y: 0, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  // }
  


  // useEffect(() => {
  //   if (isInView) {
  //     controls.start("aligned")
  //   } else {
  //     controls.start("floating")
  //   }
  // }, [isInView, controls])

  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div className="pt-20">
      <p id="aboutUs" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
          Your Healthcare Management Companion
        </p>

    <div className="relative m">
      <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[20%] -translate-x-[60%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[100deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[20%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[240deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>

    <div  id="bentotwo" className="relative w-[50vh] md:w-[100vh] mx-auto p-10" >
      <div className="grid grid-cols-12 gap-3 auto-rows-fr mb-[0.75rem]">
        <div className="col-span-3"   >
          <img src="/card1.png" alt="" className="w-full h-full object-cover hover:scale-95 transition duration-200" />
        </div>
        <div className="col-span-6"   >
          <img src="/card2.png" alt="" className="w-full h-full object-cover hover:scale-95 transition duration-200" />
        </div>
        <div className="doubleImg flex flex-col justify-between col-span-3 h-full">
          <div  >
            <img src="/card3.1.png" alt="" className="w-full  object-cover hover:scale-95 transition duration-200" />
          </div>
          <div   >
            <img src="/card3.2.png" alt="" className="w-full  object-cover hover:scale-95 transition duration-200" />
          </div>
        </div>
      </div>

      {/* <div
        className="absolute w-52 h-52 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        variants={floatingVariants5}
        
        
      > */}
        <img src="/circleBento.png" alt="" className="absolute w-28 h-28 md:w-52 md:h-52 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
        
      {/* </div> */}

      <div className="grid grid-cols-12 gap-3 mt-[0.75rem]  ">
        <div className="flex flex-col justify-between col-span-3">
          <div  >
            <img src="/card4.png" alt="" className="w-full  object-cover hover:scale-95 transition duration-200" />
          </div>
          <div >
            <img src="/card4.1.png" alt="" className="w-full  object-cover hover:scale-95 transition duration-200" />
          </div>
        </div>
        <div className="flex col-span-3"  >
          <img src="/card5.png" alt="" className="w-full h-full object-cover hover:scale-95 transition duration-200" />
        </div>
        <div className="col-span-3"  >
          <img src="/card6.png" alt="" className="w-full h-full object-cover hover:scale-95 transition duration-200" />
        </div>
        <div className="col-span-3"  >
          <img src="/card7.png" alt="" className="w-full h-full object-cover hover:scale-95 transition duration-200" />
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}