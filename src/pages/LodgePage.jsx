import { useEffect, useState } from 'react';
import "./LodgePage.scss";
import DescriptionPanel from "../components/DescriptionPanel";
import LodgeHeader from "../components/LodgeHeader";
import ImageBanner from "../components/ImageBanner";
import { useLocation } from "react-router-dom";

function LodgePage() {
  const location = useLocation();
  const [lodge, setLodge] = useState(null);
  console.log("location", location);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchLodgeData, []);

  function fetchLodgeData() {
    fetch("logements.json")
    .then((res) => res.json())
    .then((lodges) => {
      const lodge = lodges.find(lodge => lodge.id === location.state.lodgeId);
      setLodge(lodge)
    })
    .catch(console.log.error);
  }
if(lodge == null) return <div>Loading...</div>;

  return (
    <div className="lodge-page">
      <ImageBanner imageUrl={lodge.cover}/>
      <LodgeHeader lodge={lodge}/>
      <div className="lodge__description__area">
        <DescriptionPanel title="Description" content={lodge.description} />
        <DescriptionPanel title="Equipements" content={lodge.equipments.map((eq) => (
          <li>{eq}</li>
        ))} />
      </div>
    </div>
  );
}

export default LodgePage;
