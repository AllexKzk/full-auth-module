import React = require("react")
import { Link, useLocation } from "react-router-dom"

export interface ITab {
  label: string
  to: string
}

export default function Tab({ data }: { data: ITab }) {
  const location = useLocation()
  return (
    <div className={`tab ${ location.pathname === data.to ? 'active' : '' }`}>
      <Link to={data.to}>
        { data.label }
      </Link>
    </div>
  )
}