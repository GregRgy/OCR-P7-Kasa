import React from "react";
import "./ImageBanner.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);
  
  const getClassName = (i) => {
    if(i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if(newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

const arePicturesAvailable = () => {
  return pictures && pictures.length > 0;
}

  const getCarouselOrDefaultImage = () => {
    if(!arePicturesAvailable()) {
      return <img src="aboutImage.jpg" alt="" className="show"></img>;
    } 
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  }
  

  return (
    <div className="image__banner">
      <div className="image__container">
        {getCarouselOrDefaultImage()}
      </div>
      {arePicturesAvailable() && (
      <>
        <FontAwesomeIcon className="btn-previous" icon={faChevronDown} onClick={moveToPrevious} />
        <FontAwesomeIcon className="btn-next" icon={faChevronDown} onClick={moveToNext} />
      </>
      )}
    </div>
  );
}

export default ImageBanner;

