import React from 'react'
import "./LodgeHeader.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function LodgeHeader() {
  return (
    <div className="lodge__header">
        <div className="lodge__title">
          <h1>Crazy loft on Canal Saint Martin</h1>
          <h2>Paris, Ile de France</h2>
          <div className="lodge__tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="lodge__owner">
          <div className="lodge__owner__details">
            <h3>
                <span>Alexandre</span>
                <span>Dumas</span>
            </h3>
            <div className="lodge__owner__badge"></div>
          </div>
          <div className="lodge__owner__stars">
          <FontAwesomeIcon icon={faStar} className="on"/>
          <FontAwesomeIcon icon={faStar} className="on"/>
          <FontAwesomeIcon icon={faStar} className="on"/>
          <FontAwesomeIcon icon={faStar} className="off"/>
          <FontAwesomeIcon icon={faStar} className="off"/>
          </div>
        </div>
      </div>
  )
}

export default LodgeHeader