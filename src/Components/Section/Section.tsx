import React from 'react';
import './Section.scss';

function Section({children, color, height} : { children: React.ReactNode, color?: string, height?: string }) {
  return (
    <div className='section-container' style={{backgroundColor: color, height}}>
        {children}
    </div>
  );
}

export default Section;
