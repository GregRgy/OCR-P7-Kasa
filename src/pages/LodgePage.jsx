import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LodgePage.scss';
import DescriptionPanel from '../components/DescriptionPanel';
import LodgeHeader from '../components/LodgeHeader';
import ImageBanner from '../components/ImageBanner';
import lodges from '../logements.json';

function LodgePage() {
  const { lodgeId } = useParams();
  const [lodge, setLodge] = useState(null);
  const navigate = useNavigate(); // fonction de navigation

  useEffect(() => {
    const foundLodge = lodges.find((l) => l.id === lodgeId);
    if (foundLodge) {
      setLodge(foundLodge);
    } else {
      navigate('/error'); // Redirige vers la page d'erreur si l'ID n'est pas valide
    }
  }, [lodgeId, navigate]);

  if (lodge === null) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="lodge-page">
      <ImageBanner pictures={lodge.pictures} />
      <LodgeHeader lodge={lodge} />
      <div className="lodge__description__area">
        <DescriptionPanel title="Description" content={lodge.description} />
        <DescriptionPanel
          title="Equipements"
          content={lodge.equipments.map((eq, i) => (
            <div key={i} className="equipments">
              {eq}
            </div>
          ))}
        />
      </div>
    </div>
  );
}

export default LodgePage;
