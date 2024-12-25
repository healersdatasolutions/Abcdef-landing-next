import React from 'react'

interface FeatureSectionProps {
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
}

export default function FeatureSection({ title, description, imagePosition }: FeatureSectionProps): JSX.Element {
  return (
    <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-24`}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
      <div className={`w-full md:w-1/2 ${imagePosition === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg aspect-[9/16] w-full max-w-[300px] mx-auto"></div>
      </div>
    </div>
  )
}

