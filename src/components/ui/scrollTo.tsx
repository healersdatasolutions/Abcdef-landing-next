import React from 'react';

import { ReactNode } from 'react';

interface ScrollToProps {
  to: string;
  children: ReactNode;
}

const ScrollTo: React.FC<ScrollToProps> = ({ to, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(to);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div onClick={scrollToSection} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default ScrollTo;