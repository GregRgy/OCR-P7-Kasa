import React from 'react';
import "./Banner.scss"; 

function Banner() {
  return (
    <div className='banner-container'>
      <div className='banner-background'></div>
      <div className='banner-content'>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;