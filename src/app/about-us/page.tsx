import React from 'react';
import { Users, Heart, Target, Building2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import NavigationMenuNew from '@/components/Navbar/Navbar';

function AboutUsPage() {
  return (
    <div className="bg-black text-white">
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
      <section className="py-12 px-4 md:px-8 bg-[#090909]"
      data-scroll
              data-scroll-speed="0.5"
     
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div 
              className="h-[300px] bg-gradient-to-tr from-zinc-700 to-zinc-800 rounded-lg"
              data-scroll
              data-scroll-speed="0.1"
            ></div>
            <div 
              
            >
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-zinc-300 leading-relaxed text-justify">
              At Healers Healthcare, we are on a mission to transform the healthcare experience for 
patients and providers alike. Our platform combines cutting-edge technology with a patient
centric approach to ensure seamless access to quality healthcare services. By leveraging 
blockchain for security and decentralization, we aim to provide a transparent, efficient, and 
secure environment for managing health data, appointments, and more. 
</p>
<br/>
<p className='text-zinc-300 leading-relaxed text-justify'>
  
With a commitment to innovation and inclusivity, Healers Healthcare bridges the gap 
between patients, doctors, and hospitals, ensuring healthcare is accessible, efficient, and 
future-ready. 
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
              <p className="text-zinc-300 leading-relaxed text-justify">
              The journey of Healers Healthcare began with a simple yet profound realization: 
overcrowding and inefficiencies in hospitals often result in patients lacking adequate care at 
the right time. Long waiting times, fragmented patient records, and operational bottlenecks 
were clear challenges.
  </p> 
  <br/>
<p className='text-zinc-300 leading-relaxed text-justify'>
Inspired to address these issues, our founders envisioned a platform that could seamlessly 
connect all stakeholders in the healthcare ecosystem. We decided to solve this problem one 
hospital at a time, focusing on streamlining operations, improving access, and enabling better 
patient outcomes. 
</p>
<br/>
<p className='text-zinc-300 leading-relaxed text-justify'>
  
Through years of research, collaboration with industry experts, and a passion for innovation, 
Healers Healthcare was born. Our journey has been one of perseverance, learning, and 
growth, fueled by the belief that technology can empower individuals and improve lives. 
Today, we stand as a testament to what is possible when purpose meets innovation. 
              </p>
              <a href="#" className="inline-flex items-center mt-4 text-white hover:underline">
                Read full story <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div 
              className="h-[300px] bg-gradient-to-bl from-zinc-700 to-zinc-800 rounded-lg order-1 md:order-2"
              data-scroll
              data-scroll-speed="0.7"
            ></div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-4 md:px-8 bg-[#090909]"
      data-scroll
      data-scroll-speed="0.5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div 
              className="h-[300px] bg-gradient-to-tr from-zinc-700 to-zinc-800 rounded-lg"
              data-scroll
              data-scroll-speed="0.2"
            ></div>
            <div
              
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-zinc-300 leading-relaxed text-justify">
              Our mission is to digitize healthcare for a better tomorrow. We strive to: 
</p>
<br/>
<p className='text-zinc-300 leading-relaxed text-justify'>

• Connect healthcare providers with patients seamlessly in real-time, bridging the gap 
in accessibility. 
• Empower patients with secure and easy access to their health data. 
• Streamline healthcare operations for hospitals and clinics. 
• Foster a transparent, decentralized system using blockchain technology. 
• Make quality healthcare services accessible to everyone, everywhere. 
By putting patients at the center of our efforts, we aim to create a healthcare system that is 
not just reactive but proactive, predictive, and personalized.
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

