// 'use client'

import { Card, CardContent } from "@/components/ui/card"
// import { PlayCircle, Info } from "lucide-react"
import Image from 'next/image'
import { videos } from './videoData'
// import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

interface Video {
  id: string;
  title: string;
  description: string;
}

const VideoCard = ({ video }: { video: Video; index: number }) => {
  

 
  return (
    
    <div
    className="mb-12" 
    >

      <Card className="  bg-[url('/blurgradient8.png')]  bg-opacity-100  backdrop:blur-sm bg-center bg-cover overflow-hidden bg-transparent shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* <BackgroundGradientAnimation className=""> */}
        <CardContent className="p-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 h-auto md:h-[400px]">
            <div className="p-10 flex justify-center flex-col gap-5 ">
              <h2 className="text-3xl font-bold mb-4 text-primary flex items-center">
                {/* <PlayCircle className="mr-3 text-black" size={32} /> */}
                <span className="font-sans font-normal text-3xl text-white ">{video.title}</span>
              </h2>
           
               {/* <Info className="mr-3 mt-1 flex-shrink-0 text-black" size={24} /> */}
                <h2 className="text-white/70 text-base text-justify  font-sans">{video.description}</h2>
            
            </div>
            <div className="aspect-video self-center relative overflow-hidden lg:-translate-x-10 rounded-lg ">
              {/* {!isVideoLoaded && (
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              )} */}
             
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              
            </div>
          </div>
        </CardContent>
    {/* </BackgroundGradientAnimation> */}
      </Card>
    </div>
  )
}

export default function VideoComponent() {
  return (
    <div className='relative'>
      <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[10%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <Image className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>

    <section className="py-16 lg:py-20 px-4 bg-transparent" id='ytLinks'>
      <div className="max-w-6xl mx-auto">
        <h2 className="mt-36 mb-10 z-10  whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">Latest From Our Creators and Partners</h2>
        <div className="space-y-12 ">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
    <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[70%] translate-x-[0%] size-[18.85rem] lg:size-[68.85rem]">
          <Image className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
    
    </div>
  )
}