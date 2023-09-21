import React from "react";
import Banner from "../layout/Banner";
import "./HomePage.scss";
import LodgeGrid from "../components/LodgeGrid";


function HomePage() {
  return (
    <>
        <Banner />
        <LodgeGrid />
    </>
  );
}

export default HomePage;
