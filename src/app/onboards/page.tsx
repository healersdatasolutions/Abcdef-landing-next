'use client'

import React, { useState } from 'react';
import { ArrowRight, Grid, List, Phone, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import NavigationMenuNew from '@/components/Navbar/Navbar';
import SearchAndFilter from './FillterSearch/SearchAndFilter';

const hospitals = [
  {
    id: 1,
    name: 'Divyaroshni Multi-Speciality Hospital',
    description: 'Multi-specialty hospital with 24x7 emergency and trauma service. Critical care with ICU, ventilator and dialysis. Specialized operation theaters for all kind of open and laparoscopic surgeries.',
    image: 'https://www.joonsquare.com/usermanage/image/business/divya-roshni-health-care-prayagraj-3797/divya-roshni-health-care-prayagraj-divya01.jpg',
    contact: '+91-8081127175',
    website: 'na',
    address: '13C/2C Colvin Road Civil lines, Prayagraj Allahabad Allahabad Uttar Pradesh-211001',
    city: 'Allahabad',
    doctors: [
      {
        name: 'Dr. Saurabh-Pandey',
        image: 'https://i.postimg.cc/QMMRVqSv/Dr-Saurabh-Pandey.jpg',
        specialty: 'Pulmonologist'
      },
      {
        name: 'Dr. Yasharth Sharma',
        image: 'https://i.postimg.cc/XNKQSCk5/Dr-Yasharth-Sharma.jpg',
        specialty: 'Plastic Surgeon'
      },
      {
        name: 'Dr. S.K yadav',
        image: 'https://i.postimg.cc/x1XvCJMt/Dr-SK-yadav.jpg',
        specialty: 'General Surgeon'
      }
    ]
  },
  {
    id: 2,
    name: 'Jeevan Jyoti Hospital',
    description: 'Specializing in pediatric care and womens health, Sunrise Medical Center has been serving the community for over 50 years with cutting-edge treatments and personalized patient care.Specializing in pediatric care and womens health, Sunrise Medical Center has been serving the community for over 50 years with cutting-edge treatments and personalized patient care.Specializing in pediatric care and womens health, Sunrise Medical Center has been serving the community for over 50 years with cutting-edge treatments and personalized patient care.Specializing in pediatric care and womens health, Sunrise Medical Center has been serving the community for over 50 years with cutting-edge treatments and personalized patient care.',
    image: 'https://theconsumersfeedback.com/uploads/listing/1714916287.jpg',
    contact: '+91-532-2417248',
    website: 'https://jeevanjyotihospital.com/',
    address: '4162 Bai Ka Bagh, Lowther Road,Pincode - 211003, Prayagraj (Allahabad) UTTAR PRADESH, INDIA',
    city: 'Prayagraj',
    doctors: [
      {
        name: 'Dr. y',
        image: '/doctor3.jpg',
        specialty: 'Pediatrics'
      }
    ]
  },
  {
    id: 3,
    name: 'Valley View Hospital',
    description: 'A rural healthcare leader, Valley View Hospital brings advanced medical technologies and specialists to underserved communities, ensuring everyone has access to quality healthcare. rural healthcare leader, Valley View Hospital brings advanced medical technologies and specialists to underserved communities, ensuring everyone has access to quality healthcare. rural healthcare leader, Valley View Hospital brings advanced medical technologies and specialists to underserved communities, ensuring everyone has access to quality healthcare. rural healthcare leader, Valley View Hospital brings advanced medical technologies and specialists to underserved communities, ensuring everyone has access to quality healthcare.',
    image: 'https://content.jdmagicbox.com/comp/allahabad/c9/0532px532.x532.140519195315.y8c9/catalogue/vatsalya-hospital-civil-lines-allahabad-hospitals-b8r7jo2wy1.jpg',
    contact: '+91 9598050257',
    website: 'https://www.vatsalyahospital.co.in/',
    address: '6, 8, Lal Bahadur Shastri Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001',
    city: 'Prayagraj',
    doctors: [
      {
        name: 'Dr. X',
        image: '/doctor4.jpg',
        specialty: 'Family Medicine'
      }
    ]
  },

  
  // Add more hospitals as needed
];

function HospitalOnboardsPage() {
  const [viewMode, setViewMode] = useState('detailed');
  const [selectedHospital, setSelectedHospital] = useState<typeof hospitals[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const cities = Array.from(new Set(hospitals.map((hospital) => hospital.city)));

  const toggleViewMode = (mode: React.SetStateAction<string>) => {
    setViewMode(mode);
    setSelectedHospital(null);
  };

  const openHospitalDetails = (hospital: { id: number; name: string; description: string; image: string; contact: string; website: string; 
    address: string;
    city: string;
    doctors: { name: string; image: string; specialty: string; }[];
   }) => {
    setSelectedHospital(hospital);
  };

  const closeHospitalDetails = () => {
    setSelectedHospital(null);
  };

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCity === '' || hospital.city === selectedCity)
  );

  const metrics = {
    totalHospitals: hospitals.length,
    patientsServed: '1M+',
    specialtiesCovered: 50,
    yearsOfExperience: 25
  };

  return (
    <div>
      {/* <div className='fixed mb-20 z-50 bg-transparent backdrop-blur-lg w-full'>
      
            <Image className=" " src="/HealersHealthcareOfficialLogo 1.png" width={150} height={50} alt="Healers Logo" />
            </div> */}
            <NavigationMenuNew />

    <div className="bg-black text-white min-h-screen p-8">
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl mt-20 font-bold mb-8 text-center">Our Hospital Partners</h1>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="bg-zinc-900 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-sm text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
            </div>
          ))}
        </div>
        
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cities={cities}
        />

        <div className="flex justify-end mb-4">
          <button
            onClick={() => toggleViewMode('detailed')}
            className={`mr-2 p-2 rounded ${viewMode === 'detailed' ? 'bg-zinc-700' : 'bg-zinc-800'}`}
            aria-label="Detailed View"
          >
            <List size={24} />
          </button>
          <button
            onClick={() => toggleViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zinc-700' : 'bg-zinc-800'}`}
            aria-label="Grid View"
          >
            <Grid size={24} />
          </button>
        </div>

        {viewMode === 'detailed' ? (
          <div className="space-y-12">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    {/* <img className="h-48 w-full object-cover md:w-48" src={hospital.image} alt={hospital.name} /> */}
                    <img className="h-64 w-full object-cover md:h-full md:w-full" src={hospital.image} alt={hospital.name} />
                  </div>
                  <div className="p-8 md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-2">{hospital.name}</h2>
                    <p className="text-zinc-300 mb-4 line-clamp-2">{hospital.description}</p>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <a href={hospital.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
                        Learn more <ExternalLink size={16} className="ml-1" />
                      </a>
                      <a href={`tel:${hospital.contact}`} className="inline-flex items-center text-green-400 hover:underline">
                        <Phone size={16} className="mr-1" /> {hospital.contact}
                      </a>
                      <a href={hospital.address} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-yellow-400 hover:underline">
                      {hospital.address} <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Doctors</h3>
                      <div className="flex flex-wrap gap-4">
                        {hospital.doctors.map((doctor, index) => (
                          <div key={index} className="text-center">
                            <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
                            <p className="font-semibold">{doctor.name}</p>
                            <p className="text-sm text-zinc-400">{doctor.specialty}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
                {/* <img className="h-48 w-full object-cover" src={hospital.image} alt={hospital.name} /> */}
                <img className="h-64 w-full object-cover" src={hospital.image} alt={hospital.name} />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{hospital.name}</h2>
                  <p className="text-zinc-300 mb-4 line-clamp-2">{hospital.description}</p>
                  <button
                    onClick={() => openHospitalDetails(hospital)}
                    className="text-blue-400 hover:underline inline-flex items-center"
                  >
                    View details <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Popup for hospital details */}
        {selectedHospital && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold">{selectedHospital.name}</h2>
                  <button onClick={closeHospitalDetails} className="text-zinc-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                <img className="w-full h-64 object-cover rounded-lg mb-4" src={selectedHospital.image} alt={selectedHospital.name} />
                <p className="text-zinc-300 mb-4">{selectedHospital.description}</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <a href={selectedHospital.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
                    Learn more <ExternalLink size={16} className="ml-1" />
                  </a>
                  <a href={`tel:${selectedHospital.contact}`} className="inline-flex items-center text-green-400 hover:underline">
                    <Phone size={16} className="mr-1" /> {selectedHospital.contact}
                  </a>
                  <a href={selectedHospital.address} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-yellow-400 hover:underline">
                  {selectedHospital.address} <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Doctors</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedHospital.doctors.map((doctor, index) => (
                      <div key={index} className="text-center">
                        <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
                        <p className="font-semibold">{doctor.name}</p>
                        <p className="text-sm text-zinc-400">{doctor.specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default HospitalOnboardsPage;

