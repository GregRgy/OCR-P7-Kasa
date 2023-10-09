import React, { useEffect, useState } from "react";
import "./LodgeGrid.scss";
import Lodge from "./LodgeCard.jsx";

function LodgeGrid() {
  const [lodges, setLodges] = useState([]);

  useEffect(fetchLodges, []); // useEffect, déclenchement du code lorsque le composant est chargé

  function fetchLodges() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setLodges(res))
      .catch(console.error);
  }

  return (
    <div className="grid">
      {lodges.map((lodge) => (
      <Lodge title={lodge.title} imageUrl = {lodge.cover} id={lodge.id} key={lodge.id}/>
      ))}
    </div>
  );
}

export default LodgeGrid;
