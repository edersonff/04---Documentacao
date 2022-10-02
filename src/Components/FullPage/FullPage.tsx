import React from 'react';
import { Link } from 'react-router-dom';
import './FullPage.scss';

function FullPage({children, height} : { children: React.ReactNode, height?: string }) {
  return (
    <div className='fullpage-container' style={{height}}>
        {children}
    </div>
  );
}

export default FullPage;
