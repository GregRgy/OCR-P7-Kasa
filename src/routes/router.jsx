import React from 'react'
import HomePage from '../pages/HomePage'
import Footer from '../layout/Footer'
import Navbar from '../components/Navbar'
import Main from '../layout/Main'
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
    errorElement: <h1>404 not found</h1>,    
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/lodge",
        element: <h1>Nos appartements</h1>,
      },
      {
        path: "/about",
        element: <h1>À propos</h1>
      },
    ],
  },
]);
