import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import "./App.css";
import LodgeGrid from "./components/LodgeGrid";
import Main from './components/Main';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <LodgeGrid />
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
