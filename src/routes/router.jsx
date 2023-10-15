import React from 'react'
import HomePage from '../pages/HomePage'
import Footer from '../layout/Footer'
import Navbar from '../components/Navbar'
import Main from '../layout/Main'
import LodgePage from '../pages/LodgePage'
import About from '../pages/About'
import ErrorPageNotFound from '../pages/ErrorPageNotFound'

import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

const HeaderFooterLayout =  () => {
  return <>
  <Navbar/>
  <Main>
    <Outlet/>
  </Main>
  <Footer/>
</> 
}

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    errorElement: <ErrorPageNotFound/>,    
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/lodge/:lodgeId",
        element: <LodgePage/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ],
  },
]);
