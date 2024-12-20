"use client"

import React, { useEffect, useRef, useState } from 'react'
import { NeonGradientCard } from '../ui/neon-gradient-card'

// Custom hook to detect mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

interface CardData {
  id: number
  title: string
  color: string
  description: string
  content: string
  image: string
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Health Records",
    color: "text-teal-400",
    description: "Manage The Records for the Patients",
    content: "The Smart Health Records System is a web-based application that allows patients to view their health records and doctors to manage their patients' records.",
    image: "/featurePage1.png?height=490&width=519"
  },
  {
    id: 2,
    title: "Appointments",
    color: "text-teal-800 dark:text-sky-400",
    description: "Handle Appointments for the Patients ",
    content: "Know about the appointments of the patients and manage them easily. Book Appointments, Check Availability, Past Records and much more.",
    image: "/featurePage2.png"
  },
  {
    id: 3,
    title: "Patient Details",
    color: "text-teal-800 dark:text-teal-400",
    description: "Get the details of the Patients",
    content: "Get the Patient's Medical History, Test Reports, Past Appointments, Prescriptions, Recovery and Much More.",
    image: "/featurePage3.png?height=490&width=519"
  },
  {
    id: 4,
    title: "Inventory",
    color: "text-teal-400",
    description: "Manage the Inventory of the Hospital",
    content: "Manage the Inventory of the Hospital, Check the availability of the Medicines, Equipments, and other necessary items.",
    image: "/featurePage4.png?height=490&width=519"
  },
]

export default function FeatureCardDeck() {
  // const [entered, setEntered] = useState(0)
  // const sectionRefs = useRef<(HTMLElement | null)[]>([])
  // const isMobile = useIsMobile()

  // useEffect(() => {
  //   if (isMobile) {
  //     setEntered(cardData.length) // Set all cards as entered for mobile
  //     return
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const index = Number(entry.target.getAttribute('data-index'))
  //           setEntered(index)
  //         }
  //       })
  //     },
  //     { rootMargin: '-30% 0px -70% 0px' }
  //   )

  //   sectionRefs.current.forEach((ref, index) => {
  //     if (ref) {
  //       ref.style.setProperty('--i', index.toString())
  //       observer.observe(ref)
  //     }
  //   })

  //   return () => observer.disconnect()
  // }, [isMobile])

  return (
    <div className='py-20 font-[Poppins] ' data-scroll-section>
      <p id="features" className="mt-16 mb-16 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
        The Features Out of the Blue
      </p>
      <div className="max-w-7xl h-full mx-5 sm:mx-auto relative">
        <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
          <div className="absolute -translate-y-[10%] -translate-x-[70%] size-[18.85rem] lg:size-[68.85rem]">
            <img className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
          </div>
        </div>
        <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
          <div className="absolute translate-y-[90%] -translate-x-[70%] size-[18.85rem] lg:size-[68.85rem]">
            <img className="w-full rotate-[100deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
          </div>
        </div>
        <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
          <div className="absolute translate-y-[60%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
            <img className="w-full rotate-[240deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
          </div>
        </div>
        <div className="relative z-0 space-y-14">
          {cardData.map((card, index) => (
            <section 
              key={card.id}
              // ref={(el) => { sectionRefs.current[index] = el }}
              data-index={index}
              // className="[--i:0] w-full"
              // style={{ '--e': entered } as React.CSSProperties}
              data-scroll data-scroll-speed="1" data-scroll-target="#features" 
              className="w-full"
            >
              <NeonGradientCard borderSize={2} className={`max-w-6xl mx-auto relative p-1 h-full object-contain bg-opacity-100 backdrop:blur-3xl overflow-hidden transition-transform duration-700 ease-in-out
                
                `}>
                <div className="md:grid grid-cols-3 py-10 justify-around items-center" style={{
                  boxSizing: 'content-box',
                }}>
                  <div className="col-span-1 shrink-0 px-6 py-0 sm:py-14 max-md:pb-0 md:pr-0">
                    <div className="md:max-w-md">
                      <div className={`font-[Poppins] text-xl ${card.color} mb-2 relative text-center sm:text-left justify-center items-end`}>
                        {card.title}
                        <svg className="absolute fill-current opacity-40 -z-10" xmlns="http://www.w3.org/2000/svg" width="88" height="4" viewBox="0 0 88 4" aria-hidden="true" preserveAspectRatio="none">
                          <path d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999" />
                        </svg>
                      </div>
                      <h1 className="hidden sm:block text-2xl font-bold text-[#242424] dark:text-slate-50 mb-4">{card.description}</h1>
                      <p className="text-white/70 text-xs text-center sm:text-left mb-6">{card.content}</p>
                      <a className="text-sm hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-slate-700 rounded-lg tracking-normal transition text-slate-300 hover:text-slate-50 group" href="#0">
                        Learn More <span className="text-[#6f6f6f] dark:text-slate-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                      </a>
                    </div>
                  </div>
                  <img className="mx-auto col-span-2 rounded-lg lg:mx-10 shadow-2xl " src={card.image} width="700" height="800" alt={`Illustration ${card.id}`} />
                </div>
                <div className="absolute left-12 bottom-0 h-14 flex items-center text-xs font-medium text-slate-800">0{card.id}</div>
              </NeonGradientCard>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}