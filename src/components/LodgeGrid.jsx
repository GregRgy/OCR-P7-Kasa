import React, { useEffect, useState } from "react";
import "./LodgeGrid.scss";
import Lodge from "./LodgeCard.jsx";
import lodgesData from "../logements.json"; // Importez les données directement

function LodgeGrid() {
  const [lodges, setLodges] = useState([]);

  useEffect(() => {
    // Mettez à jour l'état 'lodges' avec les données importées depuis le fichier JSON
    setLodges(lodgesData);
  }, []); // Utilisez une dépendance vide pour simuler componentDidMount

  return (
    <div className="grid">
      {lodges.map((lodge) => (
        <Lodge title={lodge.title} imageUrl={lodge.cover} id={lodge.id} key={lodge.id} />
      ))}
    </div>
  );
}

export default LodgeGrid;