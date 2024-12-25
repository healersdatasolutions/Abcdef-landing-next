import React from 'react';
import { Users, Heart, Target, Building2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import NavigationMenuNew from '@/components/Navbar/Navbar';

function AboutUsPage() {
  return (
    <div className="bg-zinc-900 text-white">
      {/* <div className='fixed z-50 bg-transparent backdrop-blur-lg w-full'>

      <Image className=" " src="/HealersHealthcareOfficialLogo 1.png" width={150} height={50} alt="Healers Logo" />
      </div> */}
      <NavigationMenuNew />
          
      {/* Hero Section */}
      <div 
        className="min-h-[60vh] bg-black flex items-center justify-center"
        data-scroll
        data-scroll-speed="-0.2"
        data-scroll-direction="vertical"
        data-scroll-position="top"
        data-scroll-target="#hero"
      >
        <div id="hero" className="text-center p-8">
          {/* <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
          >
            Healers Healthcare
          </h1> */}
         <Image 

// className="text-5xl md:text-7xl font-bold mb-4"
data-scroll
data-scroll-speed="0.5"
data-scroll-direction="vertical"
          className="sticky -translate-y-28 -mb-5 self-center" src="/HealersHealthcareOfficialLogo 1.png" width={600} height={500} alt="Healers Logo" />
          
          <p 
            className="text-xl md:text-2xl opacity-90 translate-x-20"
            data-scroll
            data-scroll-speed="0.3"
            data-scroll-direction="vertical"
          >
            Committed to Excellence in Healthcare
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-12 px-4 md:px-8 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div 
              className="h-[300px] bg-gradient-to-tr from-zinc-700 to-zinc-800 rounded-lg"
              data-scroll
              data-scroll-speed="1"
            ></div>
            <div 
              data-scroll
              data-scroll-speed="0.5"
            >
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-zinc-300 leading-relaxed">
                At Healers Healthcare, we believe in providing exceptional care that puts our patients first. 
                With decades of combined experience, our team of dedicated healthcare professionals works 
                tirelessly to ensure the highest standards of medical care and patient comfort.
              </p>
              <a href="#" className="inline-flex items-center mt-4 text-white hover:underline">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div 
              data-scroll
              data-scroll-speed="0.5"
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-zinc-300 leading-relaxed">
                Founded in 1995, Healers Healthcare began with a simple mission: to revolutionize 
                patient care through compassion and innovation. What started as a small clinic has 
                grown into a comprehensive healthcare network, serving thousands of patients annually 
                while maintaining our commitment to personalized care.
              </p>
              <a href="#" className="inline-flex items-center mt-4 text-white hover:underline">
                Read full story <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div 
              className="h-[300px] bg-gradient-to-bl from-zinc-700 to-zinc-800 rounded-lg order-1 md:order-2"
              data-scroll
              data-scroll-speed="1"
            ></div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-4 md:px-8 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div 
              className="h-[300px] bg-gradient-to-tr from-zinc-700 to-zinc-800 rounded-lg"
              data-scroll
              data-scroll-speed="1"
            ></div>
            <div
              data-scroll
              data-scroll-speed="0.5"
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-zinc-300 leading-relaxed">
                Our mission is to deliver exceptional healthcare services that improve the quality of life 
                for our patients and communities. We strive to be at the forefront of medical innovation 
                while maintaining the human touch that healthcare demands.
              </p>
              <a href="#" className="inline-flex items-center mt-4 text-white hover:underline">
                Discover our impact <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-12 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div 
            className="grid md:grid-cols-4 gap-6"
            data-scroll
            data-scroll-speed="0.2"
          >
            <div className="text-center p-4" data-scroll data-scroll-speed="0.1">
              <Heart className="w-12 h-12 mx-auto mb-4 text-zinc-300" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-zinc-400">Treating every patient with kindness and empathy</p>
            </div>
            <div className="text-center p-4" data-scroll data-scroll-speed="0.2">
              <Target className="w-12 h-12 mx-auto mb-4 text-zinc-300" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-zinc-400">Striving for the highest standards in healthcare</p>
            </div>
            <div className="text-center p-4" data-scroll data-scroll-speed="0.3">
              <Users className="w-12 h-12 mx-auto mb-4 text-zinc-300" />
              <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
              <p className="text-zinc-400">Collaborating to achieve the best outcomes</p>
            </div>
            <div className="text-center p-4" data-scroll data-scroll-speed="0.4">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-zinc-300" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-zinc-400">Embracing new technologies and methods</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Meet the Team Section */}
      <section className="py-12 px-4 md:px-8 mb-20 bg-black">
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div 
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
            data-scroll
            data-scroll-speed="0.3"
          >
            {[
              { name: "Dr. Jane Smith", role: "Chief Medical Officer" },
              { name: "Dr. John Doe", role: "Head of Cardiology" },
              { name: "Dr. Emily Brown", role: "Lead Surgeon" },
              { name: "Sarah Johnson", role: "Head Nurse" },
              { name: "Michael Lee", role: "Director of Patient Care" },
              { name: "Dr. Lisa Wang", role: "Head of Pediatrics" },
              { name: "Robert Taylor", role: "Chief of Operations" },
              { name: "Dr. Amanda Garcia", role: "Head of Oncology" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="h-[200px] bg-gradient-to-tr from-zinc-700 to-zinc-800 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-zinc-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUsPage;

