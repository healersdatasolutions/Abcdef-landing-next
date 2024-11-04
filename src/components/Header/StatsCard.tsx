/* eslint-disable @next/next/no-img-element */
'use client'

import { ScrollParallax } from "react-just-parallax"
import HyperText from "../ui/hyper-text"
import NumberTicker from "../ui/number-ticker"
import { AbstractIcon } from "./AbstractImg"
import { motion } from 'framer-motion';


export const StatsCard = () => {
    return (
        <ScrollParallax >
                                    <div className="hidden sm:flex w-full z-40    justify-center  lg:justify-end mt-28 sm:-mt-10  ">
                                        <div className="flex flex-col px-5 py-1 gap-2 bg-transparent backdrop-blur border border-white/10 rounded-2xl xl:flex transition hover:scale-105 ">
                                            <HyperText
                                                className="text-xl font-bold text-gray-500 dark:text-white -mb-3"
                                                text="Join Our Community"
                                            />
                                            <div className="flex gap-2 ">
                                                <NumberTicker value={10000} />
                                                <p className=" text-gray-500 dark:text-white">{` `}Joins</p>
                                            </div>
                                            <HyperText
                                                className="text-xl font-bold  text-gray-500 dark:text-white -mb-3"
                                                text="Our Branch"
                                            />
                                            <div className="flex gap-2">
                                                <NumberTicker value={100} />
                                                <p className=" text-gray-500 dark:text-white">{` `}Connections</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollParallax>
    )
}


export const BackgroundParallaxImg = () => {
    return (
        <ScrollParallax>
                            <div className="grid grid-cols-1 -translate-x-80 WhyNot ">
                                <AbstractIcon  />
                            </div>
                        </ScrollParallax>
    )
}

export const MedicalRoom = () => {
    return (
        <motion.div 
                                            className="pointer-events-none w-full h-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
                                            animate={{
                                                y: [0, -20, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <img 
                                                src="/dark-room.png"  
                                                alt="HealersLogoHero"
                                                className="CompanyLogo -translate-x-15 -translate-y-16 object-cover xl:flex w-full h-full hover:scale-110 transition duration-300"
                                                width={942}
                                                height={942}
                                                style={{ width: '170%', height: '170%' }}
                                            />
                                        </motion.div>
    )
}