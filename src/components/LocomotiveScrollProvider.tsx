'use client'

import React from 'react'
import { useLocomotiveScroll } from './hooks/useLocomotiveScroll'
import { useRef } from 'react'
interface LocomotiveScrollProviderProps {
  children: React.ReactNode
}

export const LocomotiveScrollProvider: React.FC<LocomotiveScrollProviderProps> = ({ children }) => {
  const scrollRef = useLocomotiveScroll()

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}

