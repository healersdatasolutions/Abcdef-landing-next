import React from 'react';

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  className, 
  id, 
  crosses, 
  crossesOffset, 
  customPaddings, 
  children 
}) => {
  return (
    <div 
      id={id} 
      className={`relative ${customPaddings || `py-4 lg:py-8 xl:py-12 ${crosses ? "lg:py-16 xl:py-20" : ""}`} ${className || ""}`}
    >
      {children}
      
      {crosses && (
        <>
          <div 
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-[#26242C] ${crossesOffset || ''} pointer-events-none lg:block xl:left-10 right-10`} 
          />
        </>
      )}
    </div>
  );
};

export default Section;