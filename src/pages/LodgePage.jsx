import React from "react";
import "./LodgePage.scss";
import LodgeDescription from "../components/LodgeDescription";
import LodgeBanner from "../components/LodgeBanner";
import LodgeHeader from "../components/LodgeHeader";



function LodgePage() {
  return (
    <div className="lodge-page">
    <LodgeBanner/>
      <LodgeHeader/>
      <div className="lodge__description__area">
      <LodgeDescription/>
      <LodgeDescription/>
      </div>
      
    </div>
  );
}

export default LodgePage;
