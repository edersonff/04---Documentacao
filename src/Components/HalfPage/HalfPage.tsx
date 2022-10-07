import React from 'react';
import { Link } from 'react-router-dom';
import './HalfPage.scss';

function HalfPage({children, color, height, margin, paddingTop = '4em'} : { children: React.ReactNode, color?: string, height?: string, margin?: string, paddingTop?: string }) {
  return (
    <div className='halfpage-container' style={{background: color, height, margin, paddingTop}}>
        {children}
    </div>
  );
}

export default HalfPage;
