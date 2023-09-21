import React from 'react'
import './Lodge.scss'
import {Link} from "react-router-dom";

function Lodge() {
  return (
    <div className='lodge'>
        <Link to="/lodge">
        <div className='lodge_subtitle'>Titre de la location</div>
        </Link>
    </div>
  )
}

export default Lodge