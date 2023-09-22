import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './LodgeDescription.scss'

function LodgeDescription () {
    return(
    <div className="lodge__description">
        <p className="description__header">
            <span>Description</span>
            <FontAwesomeIcon icon={faChevronUp} className="chevron"/>
        </p>
        <p className="description__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
          accusantium illo voluptate quas temporibus officiis rem aliquid
          laborum, corrupti ducimus tenetur, error voluptatibus numquam
          molestias laudantium! Eum, fuga! Deleniti doloremque, ducimus tenetur
          perspiciatis harum qui enim autem facilis reiciendis quae, minima
          numquam culpa sed. Blanditiis laudantium nulla libero minus?
        </p>
      </div>
    )
}

export default LodgeDescription