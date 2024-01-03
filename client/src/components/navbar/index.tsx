import React = require("react");
import Tab, { ITab } from "./Tab";

import './index.css'

export default function NavBar({ tabs }: { tabs: ITab[] }) {
  const [selectedTab, setTab] = React.useState(tabs?.[0] || undefined);

  return (
    <div className="navbar">
      {
        tabs.map(
          (tab: ITab, i: number) => <Tab key={i} data={ tab } />
        )
      }
    </div>
  )
}