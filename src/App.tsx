import React from "react"
import { HangmanApp } from "./HangmanApp"

function App() {
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
      <button
        onClick={() => {
          HangmanApp()
        }}
      >
        Hangman
      </button>
      <button
        onClick={() => {
          HangmanApp()
        }}
      >
        Wordle
      </button>
    </div>
  )
}

export default App
