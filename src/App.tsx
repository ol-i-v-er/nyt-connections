import React, { useState } from "react"
import { HangmanApp } from "./HangmanApp"
import { ConnectionsApp } from "./ConnectionsApp"
import { MantineProvider } from "@mantine/core"
import styles from "./Connections.module.css"
import "@mantine/core/styles.css"

function App() {
  const [showHangman, setShowHangman] = useState(false)
  const [showConnections, setShowConnections] = useState(false)

  function hangmanClick() {
    setShowHangman(true)
    setShowConnections(false)
  }
  function ConnectionsClick() {
    setShowConnections(true)
    setShowHangman(false)
  }

  return (
    <MantineProvider>
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
        <div style={{ width: "500px", marginTop: "10px", textAlign: "center" }}>
          <button
            className={`${styles.btnGeneral}`}
            onClick={() => hangmanClick()}
          >
            Hangman
          </button>
          <button
            className={`${styles.btnGeneral}`}
            onClick={() => ConnectionsClick()}
          >
            Connections
          </button>
        </div>
        {showConnections && <ConnectionsApp />}
        {showHangman && <HangmanApp />}
      </div>
    </MantineProvider>
  )
}

export default App
