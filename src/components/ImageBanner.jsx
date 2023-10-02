import React from "react";
import "./ImageBanner.scss";

function ImageBanner(props) {
  const { imageUrl } = props;

  return (
    <div className="image__banner">
      <img src={imageUrl || "/aboutImage.jpg"} alt="" />
    </div>
  );
}

export default ImageBanner;
