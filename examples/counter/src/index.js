import React from "react"
import ReactDOM from "react-dom"

import { Button } from "./Button"
import { Title } from "./Title"

import "./styles.css"

const App = () => {
  return (
    <div className="App">
      <Title />
      <Button />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
