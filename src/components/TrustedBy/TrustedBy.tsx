"use client"

// import Image from 'next/image'
import { useEffect, useRef } from 'react'

const logos = [
  { name: 'Logoipsum', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" fill="none" viewBox="0 0 100 32"><path fill="#fff" d="M10.2 6.4C11.7 6.4 13 5.2 13 3.7s-1.3-2.7-2.8-2.7S7.4 2.2 7.4 3.7s1.3 2.7 2.8 2.7zM2.8 23.2c1.5 0 2.8-1.2 2.8-2.7s-1.3-2.7-2.8-2.7S0 19 0 20.5s1.3 2.7 2.8 2.7zm12.1-6.7c1.5 0 2.8-1.2 2.8-2.7s-1.3-2.7-2.8-2.7-2.8 1.2-2.8 2.7 1.3 2.7 2.8 2.7zm12.1 6.7c1.5 0 2.8-1.2 2.8-2.7s-1.3-2.7-2.8-2.7-2.8 1.2-2.8 2.7 1.3 2.7 2.8 2.7zm12.1-6.7c1.5 0 2.8-1.2 2.8-2.7s-1.3-2.7-2.8-2.7-2.8 1.2-2.8 2.7 1.3 2.7 2.8 2.7z"/></svg>' },
  { name: 'Offmax', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" fill="none" viewBox="0 0 100 32"><path fill="#fff" d="M14.6 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/><path fill="#fff" d="M24.5 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/></svg>' },
  { name: 'Offmax', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" fill="none" viewBox="0 0 100 32"><path fill="#fff" d="M14.6 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/><path fill="#fff" d="M24.5 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/></svg>' },
  { name: 'Offmax', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" fill="none" viewBox="0 0 100 32"><path fill="#fff" d="M14.6 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/><path fill="#fff" d="M24.5 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/></svg>' },
  { name: 'Offmax', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="32" fill="none" viewBox="0 0 100 32"><path fill="#fff" d="M14.6 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/><path fill="#fff" d="M24.5 21.5c-.5.3-1.1.4-1.7.4-.9 0-1.7-.3-2.3-.8-.6-.5-1-1.2-1.2-2h7.4v-.7c0-1.5-.4-2.7-1.3-3.6-.9-.9-2-1.4-3.4-1.4-1.5 0-2.7.5-3.7 1.5s-1.5 2.3-1.5 3.9c0 1.6.5 2.9 1.5 3.9s2.3 1.5 3.9 1.5c1.1 0 2.1-.2 2.9-.7.8-.5 1.4-1.1 1.8-2l-2.4-1zm-5.2-4.4c.1-.7.4-1.2.8-1.6.4-.4 1-.6 1.6-.6.6 0 1.1.2 1.5.6.4.4.6.9.7 1.6h-4.6z"/></svg>' },

  // Add more logos here...
]

export default function TrustedBy() {
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll1 = scrollRef1.current
    const scroll2 = scrollRef2.current

    if (scroll1 && scroll2) {
      const scrollAnimation1 = scroll1.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${scroll1.scrollWidth / 2}px)` }
        ],
        {
          duration: 30000,
          iterations: Infinity
        }
      )

      const scrollAnimation2 = scroll2.animate(
        [
          { transform: `translateX(-${scroll2.scrollWidth / 2}px)` },
          { transform: 'translateX(0)' }
        ],
        {
          duration: 30000,
          iterations: Infinity
        }
      )

      return () => {
        scrollAnimation1.cancel()
        scrollAnimation2.cancel()
      }
    }
  }, [])

  return (
    <section className="bg-black text-white py-16 relative">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-bold mb-4 md:mb-0">Trusted by 200+ companies around the world</h2>
          <p className="max-w-md text-gray-400">
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus
            purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus
            nunc, porta enim orci urna, sit. Lectus ac.
          </p>
        </div>
        <div className="overflow-hidden">
          <div ref={scrollRef1} className="flex space-x-8 mb-8">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 bg-zinc-800 rounded-lg p-4 w-40 h-16 flex items-center justify-center">
                <div dangerouslySetInnerHTML={{ __html: logo.svg }} />
              </div>
            ))}
          </div>
          <div ref={scrollRef2} className="flex space-x-8">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 bg-zinc-800 rounded-lg p-4 w-40 h-16 flex items-center justify-center">
                <div dangerouslySetInnerHTML={{ __html: logo.svg }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}