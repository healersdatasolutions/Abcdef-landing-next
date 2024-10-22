/* eslint-disable @next/next/no-img-element */

// 'use client';

import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { AbstractIcon } from "./AbstractImg";
import { BackgroundLines } from "@/components/ui/background-lines";
import WordRotate from "@/components/ui/word-rotate";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { BackgroundParallaxImg, MedicalRoom, StatsCard } from "./StatsCard";
import { Button } from "../ui/button";
import Section from "./Section";




const Hero = () => {
    
    const words = `The Best Doctor is the one who treats the patient not the disease`;

    return (
        <Section className="" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <BackgroundLines className="">
                <div className="h-[60rem] lg:h-screen md:h-[60rem] w-full rounded-md flex md:items-center md:justify-center bg-transparent dark:bg-black/[0.80] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                    <div className="absolute ">
                        <BackgroundParallaxImg/>
                    </div>

                    <div className="subContainer" >
                        <div className=" hidden sm:block absolute top-[30.25rem] -right-[20.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                                <Image className="w-full" src="/gradient.png" width={942} height={942} alt="" />
                            </div>
                        </div>
                        <div className="absolute top-[40.25rem] left-[20.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                                <Image className="w-full" src="/gradient.png" width={942} height={942} alt="" />
                            </div>
                        </div>

                        

                        <div className="container " >
                            <div className="subcontainer w-full relative text-center z-0 top-20 sm:top-40  max-w-full mb-[3.875rem] md:mb-20 lg:mb-[18.25rem] lg:mt-[1.25rem]">
                                <div className="HeroTitleAndSubTitle  w-full grid grid-cols-1 lg:grid-cols-2  ">
                                    <div className="subSubContainer flex flex-col  md:-mt-48 lg:-mt-0 lg:self-center justify-start sm:justify-center items-center lg:items-start  h-[20rem] pt-[10rem] sm:pt-[0]  ">
                                        <div className="HeroTitle flex flex-col ">
                                        <WordRotate
  className="text-2xl md:text-4xl xl:text-5xl font-semibold text-black dark:text-[#c4c3c3] text-wrap text-center lg:text-left lg:pr-10 "
  sentences={[
    "Simplifying Appointments, Revolutionizing Healthcare",
    "Bridging the Gap Between Patients and Hospitals",
    "Where Technology Meets Compassionate Care"
  ]}
/>
                                        </div>

                                        <div className="subtext w-[75%] text-center lg:text-left" >
                                            <TextGenerateEffect words={words} className="text-center lg:text-left"/>
                                        </div>
                                    </div>

                                    <div>
                                        



                                            
                                                <MedicalRoom />
                                                







                                    </div>
                                </div>
                                

                                
                            <StatsCard />




                            </div>
                        </div>
                        <div className="bottomButtonsSticky fixed inset-0 top-auto  w-full z-50 flex justify-around mb-10">
                        <TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
    <button className="z-20 relative inline-flex h-12  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="text-black inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#fff] px-3 py-1 text- font-medium backdrop-blur-3xl ">
                                        Download Our Mobile App
                                    </span>
                                </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Get the best experience on the go with our mobile app</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
        <Link href="https://gyoj3-uaaaa-aaaap-qkfra-cai.icp0.io/login">
    <Button variant="outline" className="z-20 relative inline-flex h-12  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                        <span className="text-[#c4c3c3] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#000000] px-3 py-1 text- font-medium backdrop-blur-3xl ">
                                            Login as a Hospital
                                        </span>
                                    </Button>
                                    </Link>
    </TooltipTrigger>
    <TooltipContent>
      <p>Manage your hospital data with our Electronic Health Record System</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
                        </div>
                    </div>
                </div>
            </BackgroundLines>
        </Section>
    );
};

export default Hero;