import React from 'react'
import Mob from './Graphics/MOBILE'
import FeatureSection from './Graphics/FeatureSection'
import Image from 'next/image'
import NavigationMenuNew from '@/components/Navbar/Navbar';

interface Feature {
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
}

const features: Feature[] = [
  {
    title: "Real-time Appointment Booking",
    description: "Book appointments with your healthcare provider instantly, anytime and anywhere. Our intuitive interface makes scheduling easy and convenient.",
    imagePosition: "right"
  },
  {
    title: "Secure Medical Records Access",
    description: "Access your medical records securely from your mobile device. View test results, prescriptions, and doctor's notes with just a few taps.",
    imagePosition: "left"
  },
  {
    title: "Telemedicine Consultations",
    description: "Connect with healthcare professionals through video calls for remote consultations. Get expert medical advice from the comfort of your home.",
    imagePosition: "right"
  },
  {
    title: "Medication Reminders",
    description: "Never miss a dose with our intelligent medication reminder system. Set custom alerts and track your medication schedule effortlessly.",
    imagePosition: "left"
  }
]

export default function MobileApplicationPage(): JSX.Element {
  return (
    <div>
      {/* <div className='fixed z-50 bg-transparent backdrop-blur-lg w-full'>
      
            <Image className=" " src="/HealersHealthcareOfficialLogo 1.png" width={150} height={50} alt="Healers Logo" />
            </div> */}
            <NavigationMenuNew />

    <main className="bg-black text-white min-h-screen">
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16">
        <div className="w-full md:w-1/2 order-1 md:order-1 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Healers Healthcare Mobile Application</h1>
          <p className="text-lg md:text-xl mb-8 md:mb-0">Experience healthcare at your fingertips with our innovative mobile app.</p>
        </div>
        <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-center items-baseline">
          <div className="hidden  w-full h-full">
            <Mob />
          </div>
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
          />
        ))}
      </div>
    </main>
    </div>
  );
}

