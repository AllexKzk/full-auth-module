import React = require("react");

import './index.css'

export default function Switch() {
  const [active, setActive] = React.useState<boolean>(false)

  return (
    <div className={`switch ${ active ? 'switched' : '' }`} onClick={() => setActive(!active)}>
      <div className="dot" />
    </div>
  )
}