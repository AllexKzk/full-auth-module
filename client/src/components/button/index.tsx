import React = require("react")
import './index.css'

export default function Button({ label }: { label: string}) {
  return (
    <div className="btn">
      <button>
        { label }
      </button>
    </div>
  )
}