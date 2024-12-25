import React from 'react'
import Image from 'next/image'
import NavigationMenuNew from '@/components/Navbar/Navbar'
import FeatureSection from './Graphics/FeatureSection'

interface Feature {
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  videoUrl: string;
}

const features: Feature[] = [
  {
    title: "Real-Time Appointment Booking",
    description: "Find and schedule appointments with top doctors instantly, with live availability updates.",
    imagePosition: "right",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Secure Medical Records Access",
    description: "View and share your medical history securely, ensuring privacy and convenience.",
    imagePosition: "left",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Emergency Services",
    description: "Access an emergency button to alert nearby hospitals and ambulances for critical situations.",
    imagePosition: "right",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Medication Reminders",
    description: "Stay on track with your prescriptions through automated notifications.",
    imagePosition: "left",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Real-Time Queue Management",
    description: "Monitor waiting times at hospitals and clinics to plan your visit efficiently.",
    imagePosition: "right",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Personalized Health Tips",
    description: "Receive AI-powered insights and recommendations based on your health data.",
    imagePosition: "left",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Telemedicine Integration",
    description: "Consult with doctors remotely through video or chat, ensuring healthcare is accessible even from home.",
    imagePosition: "right",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
]

export default function MobileApplicationPage(): JSX.Element {
  return (
    <div>
      <NavigationMenuNew />

      <main className="bg-black text-white min-h-screen">
        <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16">
          <div className="w-full md:w-1/2 order-1 md:order-1 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Healers Healthcare Mobile Application</h1>
            <p className="text-lg md:text-xl mb-8 md:mb-0">Experience healthcare at your fingertips with our innovative mobile app.</p>
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-center items-baseline">
            <div className=" w-3/4 max-w-x ">
              <Image 
                src="/phoneImg2.png" 
                alt="mobile app" 
                width={300} 
                height={600} 
                layout="responsive"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          {features.map((feature, index) => (
            <FeatureSection 
              key={index}
              title={feature.title}
              description={feature.description}
              imagePosition={feature.imagePosition}
              videoUrl={feature.videoUrl}
            />
          ))}
        </div>

        
      </main>
    </div>
  );
}

