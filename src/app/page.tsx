import { ContactUs } from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/FAQ/FAQ";
import FeaturePages from "@/components/Features/FeaturePages";
import { Feature2 } from "@/components/Features/Features2";
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
    <div className={`${sora.className} min-h-screen w-full bg-gradient-to-b from-[#000000] max-w-full via-[#041727] to-[#01080f]   text-white  overflow-hidden `}>
      {/* <div className="absolute inset-0 min-h-screen h-full bg-[url('/noiseBg.png')]  bg-repeat opacity-100 pointer-events-none" /> */}
      <div className="relative z-10 min-h-screen h-full bg-[url('/noiseBg.png')]  bg-opacity-100 backdrop:blur-sm bg-repeat">
        <NavigationMenuNew />
        {/* <Header /> */}
        <Hero />
        <TrustedBy2 />
        <Feature2 />
        <FeaturePages />
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
  );
}