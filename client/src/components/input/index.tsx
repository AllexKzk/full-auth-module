import React = require("react")
import './index.css'

export default function Input({ label, type }: { label: string, type?: string }) {
  return (
    <div className="input">
      <label>
        { label }:
      </label>
      <input type={ type || 'text' } />
    </div>
  )
}