import React from 'react'
import './Footer.css'
import logoW from '../assets/logoW.png';

function Footer() {
  return (
    <div className='footer'>
          <div className="footer-logo">
            <img src={logoW} alt="logo" width={100}/>
          </div>
          <div className="footer-text">
            © 2020 Kasa. All rights reserved
          </div>
    </div>
  )
}

export default Footer