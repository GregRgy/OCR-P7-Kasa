import React, { useEffect, useState } from 'react';
import "./LodgePage.scss";
import DescriptionPanel from "../components/DescriptionPanel";
import LodgeHeader from "../components/LodgeHeader";
import ImageBanner from "../components/ImageBanner";
import { useParams } from "react-router-dom";
import lodges from "../logements.json";

function LodgePage() {
  const { lodgeId } = useParams();
  const [lodge, setLodge] = useState(null);

  useEffect(() => {
    const foundLodge = lodges.find((l) => l.id === lodgeId);
    if (foundLodge) {
      setLodge(foundLodge);
    }
  }, [lodgeId]); // useEffect s'exécute lorsque lodgeId change

  if (lodge === null) return <div>Loading...</div>;

  return (
    <div className="lodge-page">
      <ImageBanner pictures={lodge.pictures} />
      <LodgeHeader lodge={lodge} />
      <div className="lodge__description__area">
        <DescriptionPanel title="Description" content={lodge.description} />
        <DescriptionPanel title="Equipements" content={lodge.equipments.map((eq, i) => (
          <li key={i} className="equipments">{eq}</li>
        ))} />
      </div>
    </div>
  );
}

export default LodgePage;
