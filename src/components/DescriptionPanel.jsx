import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./DescriptionPanel.scss";

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false); 
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass =
    (isContentVisible ? "visible" : "hidden") + " description__content";
  const dropdownClass = isContentVisible ? '' : 'collapsed'; // Ajout de la classe "collapsed" pour le dropdown

  return (
    <div className={`description__panel ${dropdownClass}`} onClick={showContent}>
      <div className="description__header">
        <span>{props.title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron ${isContentVisible ? "rotate" : ""}`}
          onClick={showContent}
        />
      </div>
      <div className={`dropdown-content ${contentClass}`}>{props.content}</div> 
    </div>
  );
}

export default DescriptionPanel;
