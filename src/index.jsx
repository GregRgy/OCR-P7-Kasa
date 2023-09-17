import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: "/lodge",
    element: <h1>Nos appartements</h1>,
  },
  {
    path: "/about",
    element: <h1>À propos</h1>,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);