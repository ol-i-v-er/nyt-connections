import { boolean } from "yargs"
import styles from "./Keyboard.module.css"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
]

const KEYS2 = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  " ",
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, minmax(75px, 1fr))",
        gridTemplateRows: "repeat(5)",
        gap: "0.2rem",
      }}>
      {['q','w','e','r','t','y','u','i','o','p'].map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(9, minmax(75px, 1fr))",
        gridTemplateRows: "repeat(5)",
        gap: "0.2rem",
        marginTop: "0.2rem"
      }}>
      {['a','s','d','f','g','h','j','k','l'].map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btnSpace} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, minmax(69px, 1fr))",
        gridTemplateRows: "repeat(5)",
        gap: "0.2rem",
        marginTop: "0.2rem"
      }}>
      {['z','x','c','v','b','n','m'].map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btnSpace} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(75px, 1fr))",
        gridTemplateRows: "70px",
        gap: "0.2rem",
        marginTop: "0.2rem"
      }}>
      {[' '].map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btnSpace} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
      </div>
    </div>
  )
}
