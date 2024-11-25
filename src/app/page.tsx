import BentoGridOne from "@/components/BentoGrids/BentoGrid1";
import BentoGridTwo from "@/components/BentoGrids/BentoGrid2";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/FAQ/FAQ";
import FeatureCardDeck from "@/components/Features/FeatureCardDeck";
// import FeaturePages from "@/components/Features/FeaturePages";
// import { Feature2 } from "@/components/Features/Features2";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Header/Hero";
// import Header from "@/components/Header/Header";
import HospitalCarousel from "@/components/HospitalCarousel/HospitalCarousel";
import MobileAppSection from "@/components/MobApplicationSection/MobileApplication";
import { NavigationMenuNew } from "@/components/Navbar/Navbar";

import TrustedBy2 from "@/components/TrustedBy/TrustedBy2";
import VideoComponent from "@/components/YTSection/Videos";
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>

        <NavigationMenuNew />
        {/* <Header /> */}
        <div className="relative z-20">

        <Hero />
        </div>
    <div className={`${sora.className} min-h-screen max-w-full mx-auto relative z-10  h-full bg-[url('/wavyBg.png')] bg-opacity-100 backdrop:blur-sm   text-white  overflow-hidden mt-96 md:mt-0 lg:mt-0`}>
     
      <div className="relative z-10 min-h-screen h-full bg-[url('/noiseBg.png')]  bg-opacity-100 backdrop:blur-sm bg-repeat">
        <TrustedBy2 />
        {/* <Feature2 /> */}
        <FeatureCardDeck />
        {/* <FeaturePages /> */}
        <BentoGridOne />
        <BentoGridTwo />
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