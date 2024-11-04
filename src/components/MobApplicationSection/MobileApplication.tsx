/* eslint-disable @next/next/no-img-element */
'use client'

// import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Label } from "@/components/ui/label"
// import { useToast } from "@/components/hooks/use-toast"
import Link from 'next/link'

export default function MobileAppSection() {
  // const [isOpen, setIsOpen] = useState(false)
  // const { toast } = useToast()

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   setIsOpen(false)
  //   toast({
  //     title: "Request Submitted",
  //     description: "Thank you for joining the waitlist!",
  //   })
  // }

  return (
    <div className="">
      <p
        id="app"
        className="mt-36 mb-10 text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        Download Our Mobile App
      </p>
      <div className="max-w-6xl h-full bg-[url('/gradient10.png')] object-contain bg-opacity-100 backdrop:blur-sm py-8 rounded-lg mx-5 sm:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:ml-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Healers Mobile Application
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Get the best experience on the go with our mobile app. Access all the features and services at your fingertips.
            </p>
            <div className="flex space-x-4 mb-8">
                  <Link href="https://play.google.com/store/apps/details?id=healers.data.solutions&hl=en" >
                  
                  <Button  className="bg-[#84349c] text-white font-semibold hover:bg-black transition duration-300">
                    Get the App
                  </Button>
                  </Link>
                
              <Button variant="outline" className="text-white font-semibold border-white hover:bg-white hover:text-black transition duration-300">
                More
              </Button>
            </div>
            <div className="flex space-x-8">
              <div>
                <p className="text-4xl font-bold text-white">4.8</p>
                <p className="text-sm text-gray-400">Rating on AppStore</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">700k+</p>
                <p className="text-sm text-gray-400">Active users</p>
              </div>
              <div className="size-40 -translate-y-10 sm:-translate-y-0 sm:translate-x-14 ">
                <img src="/qr2.png" alt="qrcode" />
                <p className="text-xs text-center mt-2">

                Scan to download
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex justify-center translate-y-8 lg:justify-end">
            <img src="/phoneImg2.png" alt="mobile app" className="w-3/4" />
          </div>
        </div>
      </div>
    </div>
  )
}