'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/hooks/use-toast"

export default function MobileAppSection() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just close the modal and show a success toast
    setIsOpen(false)
    toast({
      title: "Request Submitted",
      description: "Thank you for joining the waitlist!",
    })
  }

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
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#84349c] text-white font-semibold hover:bg-black transition duration-300">
                    Get the App
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Join the Waitlist</DialogTitle>
                    <DialogDescription>
                      Sign up to be notified when our app launches.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose</Label>
                      <Input id="purpose" placeholder="How do you plan to use our app?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="queries">Queries (if any)</Label>
                      <Textarea id="queries" placeholder="Any questions or comments?" />
                    </div>
                    <Button type="submit" className="w-full">Submit</Button>
                  </form>
                </DialogContent>
              </Dialog>
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