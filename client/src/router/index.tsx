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
import SignIn from "../pages/auth/components/SignIn";
import SignUp from "../pages/auth/components/SignUp";
import Settings from "../pages/auth/components/Settings";

export default function Router() {
  const { username } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => username ? null : redirect('/sign-in'),
    },
    {
      path: "/",
      element: <Auth />,
      loader: () => !username ? null : redirect('/'),
      children: [
        {
          path: 'sign-in',
          element: <SignIn />
        },
        {
          path: 'sign-up',
          element: <SignUp />
        },
        {
          path: 'settings',
          element: <Settings />
        },
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}