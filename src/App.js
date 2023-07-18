import { useState } from "react"
import "./App.css"

function Square() {
  const [value, setValue] = useState(null)

  function Click() {
    setValue("X")
  }

  return (
    <button className="square" onClick={Click}>
      {value}
    </button>
  )
}

function Otro() {
  return (
    <button className="square">X</button>
  )
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Otro />
      </div>
    </>
  )
}

