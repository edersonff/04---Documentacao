import React from 'react';
import { Link } from 'react-router-dom';
import './HalfPage.scss';

function HalfPage({children, color, height, margin} : { children: React.ReactNode, color?: string, height?: string, margin?: string }) {
  return (
    <div className='halfpage-container' style={{background: color, height, margin}}>
        {children}
    </div>
  );
}

export default HalfPage;
