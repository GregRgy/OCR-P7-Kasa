import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './DescriptionPanel.scss'

function DescriptionPanel (props) {
    return(
    <div className="description__panel">
        <p className="description__header">
            <span>{props.title}</span>
            <FontAwesomeIcon icon={faChevronUp} className="chevron"/>
        </p>
        <p className="description__content">{props.content}</p>
      </div>
    )
}

export default DescriptionPanel