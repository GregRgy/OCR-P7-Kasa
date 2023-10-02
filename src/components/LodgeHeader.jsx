import React from 'react'
import "./LodgeHeader.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function LodgeHeader({lodge}) {

  const {name} = lodge.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="lodge__header">
        <div className="lodge__title">
          <h1>{lodge.title}</h1>
          <h2>{lodge.location}</h2>
          <div className="lodge__tags">
            {lodge.tags.map((tag) => (<span key={tag}>{tag}</span>))}
          </div>
        </div>
        <div className="lodge__owner">
          <div className="lodge__owner__details">
            <h3>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </h3>
            <div className="lodge__owner__badge">
              <img src={lodge.host.picture} alt="" />
            </div>
          </div>
          <div className="lodge__owner__stars">

            {[1, 2, 3, 4, 5].map((num) =>
             <FontAwesomeIcon key={num} icon={faStar} className={lodge.rating >= num ? "on" : ""}/>
            )}
          </div>
        </div>
      </div>
  )
}

export default LodgeHeader