import React = require("react");
import { useContext } from 'react'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { AuthContext } from "./auth/AuthContext";
import Auth from "../pages/auth";
import Home from "../pages/home";

export default function Router() {
  const {username } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => username ? null : redirect('/auth'),
    },
    {
      path: "/auth",
      element: <Auth />,
      loader: () => !username ? null : redirect('/'),
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}