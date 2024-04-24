import styles from "./Connections.module.css"
import { useState, useEffect } from "react"

const words = [
  ["word1", "word2", "word3", "word4"],
  ["word5", "word6", "word7", "word8"],
  ["word9", "word10", "word11", "word12"],
  ["word13", "word14", "word15", "word16"],
]

type WordProps = {
  word: string
}

export function shuffleGrid() {}
export function submitGuess() {}
export function deselectAll() {}

export function ConnectionsGrid() {
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  let [selectedFull, setSelectedFull] = useState<boolean>(false)

  function handleButtonClick({ word }: WordProps) {
    checkClick({ word: word })
  }

  function checkClick({ word }: WordProps) {
    if (selectedWords.includes(word)) {
      return removeSelectedWord({ word: word })
    } else if (selectedWords.length >= 4) {
      return setSelectedFull(true)
    }
    return addSelectedWord({ word: word })
  }

  function addSelectedWord({ word }: WordProps) {
    setSelectedWords((currentWords) => [...currentWords, word])
  }

  function removeSelectedWord({ word }: WordProps) {
    const index = selectedWords.indexOf(word)
    if (index > -1) {
      setSelectedWords(
        selectedWords.filter((currentWords) => currentWords !== word)
      )
      setSelectedFull(false)
    }
  }

  useEffect(() => {
    console.log(selectedWords)
    console.log(selectedFull)
    if (selectedWords.length >= 4) {
      setSelectedFull(true)
    }
  }, [selectedWords, selectedFull])

  return (
    <div>
      {words.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
            gap: "0.6rem",
          }}
        >
          {row.map((cell, colIndex) => {
            const isActive = selectedWords.includes(cell)
            const isInactive = !selectedWords.includes(cell) && selectedFull
            return (
              <button
                key={colIndex}
                onClick={() => handleButtonClick({ word: cell })}
                className={`${styles.btnGrid} 
                ${isActive ? styles.active : ""} 
                ${isInactive ? styles.inactive : ""}`}
              >
                {cell}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
