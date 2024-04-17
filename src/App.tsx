import React, { useState } from "react"
import { HangmanApp } from "./HangmanApp"
import { ConnectionsApp } from "./ConnectionsApp"

function App() {
  const [showHangman, setShowHangman] = useState(false)
  const [showConnections, setShowConnections] = useState(false)

  const hangmanClick = () => {
    setShowHangman(true)
    setShowConnections(false)
  }
  const ConnectionsClick = () => {
    setShowConnections(true)
    setShowHangman(false)
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <button onClick={() => hangmanClick()}>Hangman</button>
      <button onClick={() => ConnectionsClick()}>GPASOKJA</button>
      {showConnections && <ConnectionsApp />}
      {showHangman && <HangmanApp />}
    </div>
  )
}

export default App
