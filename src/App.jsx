import React from "react";
import Banner from "./components/Banner";
import "./App.css";
import LodgeGrid from "./components/LodgeGrid";
import Main from './components/Main';


function App() {
  return (
    <div>
      <Main>
        <Banner />
        <LodgeGrid />
      </Main>
    </div>
  );
}

export default App;
