import React, { useState } from "react"
import { HangmanApp } from "./HangmanApp"
import { ConnectionsApp } from "./ConnectionsApp"
import styles from "./Connections.module.css"

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
      <div style={{width: "500px", marginTop: "10px", textAlign: "center"}}>
        <button className={`${styles.btnGeneral}`} onClick={() => hangmanClick()}>Hangman</button>
        <button className={`${styles.btnGeneral}`} onClick={() => ConnectionsClick()}>Connections</button>
      </div>
      {showConnections && <ConnectionsApp />}
      {showHangman && <HangmanApp />}
    </div>
  )
}

export default App
