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
  return (
    <div className="description__panel">
      <p className="description__header">
        <span>{props.title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron ${isContentVisible ? "rotate" : ""}`}
          onClick={showContent}
        />
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}

export default DescriptionPanel;
