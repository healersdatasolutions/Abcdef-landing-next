/* eslint-disable @next/next/no-img-element */
'use client'

import { ScrollParallax } from "react-just-parallax"
import HyperText from "../ui/hyper-text"
import NumberTicker from "../ui/number-ticker"
import { AbstractIcon } from "./AbstractImg"
import { motion } from 'framer-motion';
import Link from "next/link"


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
                                                <p className=" text-gray-500 dark:text-white">{` `}Joins
                                                </p>
                                                <Link href="https://t.me/+bwPp_RHsOuw2ZTU1">
                                                <div className="hover:scale-110 transition-all duration-300">
                                                    
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{
    mixBlendMode: 'normal'
}}><g transform="scale(4,4)"><path d="M32,10c-12.15,0 -22,9.85 -22,22c0,12.15 9.85,22 22,22c12.15,0 22,-9.85 22,-22c0,-12.15 -9.85,-22 -22,-22zM32,14c9.941,0 18,8.059 18,18c0,9.941 -8.059,18 -18,18c-9.941,0 -18,-8.059 -18,-18c0,-9.941 8.059,-18 18,-18zM41.04102,23.33789c-0.50794,-0.05859 -1.14612,0.08064 -1.85937,0.33789c-1.303,0.47 -17.95792,7.54217 -18.91992,7.95117c-0.911,0.388 -1.77439,0.81088 -1.77539,1.42188c0,0.43 0.25498,0.67283 0.95898,0.92383c0.732,0.262 2.57797,0.82009 3.66797,1.12109c1.05,0.289 2.24406,0.03709 2.91406,-0.37891c0.709,-0.441 8.90128,-5.92234 9.48828,-6.40234c0.587,-0.48 1.05617,0.13619 0.57617,0.61719c-0.48,0.481 -6.1037,5.93541 -6.8457,6.69141c-0.9,0.918 -0.26025,1.869 0.34375,2.25c0.689,0.435 5.64948,3.76092 6.39648,4.29492c0.747,0.534 1.50327,0.77539 2.19727,0.77539c0.694,0 1.0593,-0.91461 1.4043,-1.97461c0.405,-1.241 2.30216,-13.61473 2.53516,-16.05273c0.071,-0.739 -0.16214,-1.23022 -0.61914,-1.44922c-0.13825,-0.06625 -0.29358,-0.10742 -0.46289,-0.12695z"></path></g></g>
</svg>
                                                </div>
                                                </Link>
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