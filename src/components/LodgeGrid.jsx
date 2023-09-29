import React, { useEffect, useState } from "react";
import "./LodgeGrid.scss";
import Lodge from "./Lodge.jsx";

function LodgeGrid() {
  const [lodges, setLodges] = useState([]);

  useEffect(fetchLodges, []);

  function fetchLodges() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setLodges(res))
      .catch(console.error);
  }

  return (
    <div className="grid">
      {lodges.map((lodge) => (
      <Lodge title={lodge.title} imageUrl = {lodge.cover}/>
      ))}
    </div>
  );
}

export default LodgeGrid;
