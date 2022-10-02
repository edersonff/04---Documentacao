import React from 'react';
import './Banner.scss';

function Banner({children, color} : { children: React.ReactNode, color?: string}) {
  return (
    <div className='banner-container' style={{backgroundColor: color}}>
        {children}
    </div>
  );
}

export default Banner;
