import React from 'react'
import App from '../App'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <>
      <Navbar/>
      <App/>
      <Footer/>
    </>
    ),
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: "/lodge",
    element: (
    <>
    <Navbar/>
    <h1>Nos appartements</h1>
    <Footer/>
    </>
    ),
  },
  {
    path: "/about",
    element: (
    <>
    <Navbar/>
    <h1>À propos</h1>
    <Footer/>
    </>
    ),
  },
]);
