'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ShineBorder from '../ui/shine-border'

const features = [
  {
    title: "Health Records",
    description: "Securely store and access patient health records, ensuring comprehensive care and easy information retrieval.",
    gradient: "from-blue-500 to-cyan-500",
    bgImage: '/feature1.png',
  },
  {
    title: "Appointments",
    description: "Efficiently manage and schedule patient appointments, reducing wait times and improving overall clinic flow.",
    gradient: "from-purple-500 to-pink-500",
    bgImage: '/feature2.png',
  },
  {
    title: "Patient Details",
    description: "Keep track of crucial patient information, including medical history, allergies, and current treatments.",
    gradient: "from-yellow-500 to-red-500",
    bgImage: '/feature3.png',
  },
  {
    title: "Inventory",
    description: "Monitor and manage medical supplies and equipment, ensuring your facility is always well-stocked and prepared.",
    gradient: "from-green-500 to-emerald-500",
    bgImage: '/feature4.png',
  },
]

export default function FeaturePages() {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
                                <div className="absolute  translate-x-[0%] size-[18.85rem] lg:size-[68.85rem] animate-blob2 ">
                                    <Image className="w-full  opacity-100" src="/gradient2.png" width={942} height={942} alt="" />
                                </div>
                            </div>
                            <div className="absolute   opacity-60 mix-blend-color-dodge pointer-events-none">
                                <div className="absolute translate-y-[2%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem] ">
                                    <Image className="w-full  opacity-100" src="/gradient.png" width={942} height={942} alt="" />
                                </div>
                            </div>

    <section className="py-12 mx-auto sm:mx-32">
      <div className="container mx-auto px-4">
        <h2 className="mt-36 mb-10  text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">What we have for you</h2>
        
        
        <div className="flex flex-col py-10 max-w-6xl mx-auto bg-[#000000] rounded-lg gap-8">
          <div className=" sm:w-full px-10 flex  gap-8  " style={{
            boxSizing: 'border-box',
          }}>
            {features.map((feature, index) => (
              <button
                key={feature.title}
                className={`block w-full text-center text-sm md:text-[1rem]  p-0 md:p-4 rounded-lg mb-2 transition-colors ${
                  currentFeature === index ? 'bg-black border border-white shadow-lg' : 'hover:bg-black/50'
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>
          
          <div className="w-full relative h-[65vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-lg overflow-hidden"
              >
                {/* <div className={`w-full h-full bg-gradient-to-br ${features[currentFeature].gradient}`}></div> */}
                <div className=" flex flex-col md:flex-row w-full h-full items-center justify-center p-8">
                  <div className=" p-6 rounded-lg max-w-md  ">
                    <h3 className="text-2xl text-white font-bold mb-2">{features[currentFeature].title}</h3>
                    <p className="text-white">{features[currentFeature].description}</p>
                  </div>
                  <ShineBorder
                className="relative p-1 flex w-full h-full flex-col overflow-hidden rounded-xl bg-background shadow-xl"
                color={["#ffff", "#015874","#015874"]}
              >

                <div className={`w-full h-full  rounded-lg`} style={{ backgroundImage: `url(${features[currentFeature].bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </ShineBorder>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  
    </div>
  )
}