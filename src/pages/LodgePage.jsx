import React from "react";
import "./LodgePage.scss";
import DescriptionPanel from "../components/DescriptionPanel";
import LodgeHeader from "../components/LodgeHeader";
import ImageBanner from "../components/ImageBanner";

function LodgePage() {
  return (
    <div className="lodge-page">
      <ImageBanner />
      <LodgeHeader />
      <div className="lodge__description__area">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  );
}

export default LodgePage;
