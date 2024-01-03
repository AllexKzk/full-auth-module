import React = require("react");
import './index.css';
import Input from "../../components/input";
import Button from "../../components/button";
import NavBar from "../../components/navbar";
import { ITab } from "../../components/navbar/Tab";
import { Outlet } from "react-router-dom";

export default function Auth() {
  const tabs: ITab[] = [
    {
      label: 'Sign in',
      to: '/sign-in'
    },
    {
      label: 'Sign up',
      to: '/sign-up'
    },
    {
      label: 'Settings',
      to: '/settings'
    }
  ]

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span>
          Simple Auth Page
        </span>
        <NavBar tabs={ tabs } />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}