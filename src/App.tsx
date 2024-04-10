import React, { useState } from "react"
import { HangmanApp } from "./HangmanApp"
import { WordleApp } from "./WordleApp"

function App() {
  const [showHangman, setShowHangman] = useState(false)
  const [showWordle, setShowWordle] = useState(false)

  const hangmanClick = () => {
    setShowHangman(true)
    setShowWordle(false)
  }
  const wordleClick = () => {
    setShowWordle(true)
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
      <button onClick={() => wordleClick()}></button>
      {showWordle && <WordleApp />}
      {showHangman && <HangmanApp />}
    </div>
  )
}

export default App
