'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export const useLocomotiveScroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const locomotiveScroll = new LocomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true,
      // Add other options as needed
    })
    
      

    return () => {
      locomotiveScroll.destroy()
      
    }
  }, [])

  return scrollRef
}

