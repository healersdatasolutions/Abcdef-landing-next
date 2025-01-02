import { Suspense } from 'react'
import BentoGridOne from "@/components/BentoGrids/BentoGrid1";
import BentoGridTwo from "@/components/BentoGrids/BentoGrid2";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/FAQ/FAQ";
import FeatureCardDeck from "@/components/Features/FeatureCardDeck";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Header/Hero";
import HospitalCarousel from "@/components/HospitalCarousel/HospitalCarousel";
import MobileAppSection from "@/components/MobApplicationSection/MobileApplication";
import { NavigationMenuNew } from "@/components/Navbar/Navbar";
import TrustedBy2 from "@/components/TrustedBy/TrustedBy2";
import VideoComponent from "@/components/YTSection/Videos";
import { Sora } from 'next/font/google';
import Image from 'next/image';
import Loading from "./loading";
import Nft from '@/components/NftCard/Nft';
const sora = Sora({ subsets: ['latin'] });

function PreloadImages() {
  return (
    <>
      <Image src="/wavyBg.png" alt="Wavy Background" width={1} height={1} priority />
      <Image src="/noiseBg.png" alt="Noise Background" width={1} height={1} priority />
    </>
  )
}

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <PreloadImages />
      </Suspense>
      <NavigationMenuNew />
      <div className="relative z-20" data-scroll-section>
        <Hero />
      </div>
      <div className={`${sora.className} min-h-screen max-w-full mx-auto relative z-10 h-full md:bg-[url('/wavyBg.png')] bg-opacity-100 backdrop:blur-sm text-white overflow-hidden mt-96 md:mt-0 lg:mt-0`} data-scroll-section>
        <div data-scroll-section className="relative z-10 min-h-screen h-full md:bg-[url('/noiseBg.png')] bg-opacity-100 backdrop:blur-sm bg-repeat">
          <TrustedBy2 />
          <FeatureCardDeck />
          <BentoGridOne />
          <BentoGridTwo />
          <Nft />
          <VideoComponent />
          <HospitalCarousel />
          <MobileAppSection />
          <FAQ />
          <ContactUs />
          <Footer />
        </div>
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

