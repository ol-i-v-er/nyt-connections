import { useState, useEffect } from "react"
import { ConnectionsGrid } from "./ConnectionsGrid"
import { ConnectionsDots } from "./ConnectionsDots"
import styles from "./Connections.module.css"

type WordProps = {
  word: string
}

export function ConnectionsApp() {
  const [words, setWords] = useState<string[][]>([
    ["AA", "AB", "AC", "AD"],
    ["BA", "BB", "BC", "BD"],
    ["CA", "CB", "CC", "CD"],
    ["DA", "DB", "DC", "DD"],
  ])

  const wordsCopy = [
    ["AA", "AB", "AC", "AD"],
    ["BA", "BB", "BC", "BD"],
    ["CA", "CB", "CC", "CD"],
    ["DA", "DB", "DC", "DD"],
  ]

  const [selectedWords, setSelectedWords] = useState<string[]>([])
  let [selectedFull, setSelectedFull] = useState<boolean>(false)
  const isInactiveDS = selectedWords.length === 0
  const isInactiveS = selectedWords.length !== 4
  let [mistakesLeft, setMistakesLeft] = useState<number>(4)
  let lose = false

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
    if (selectedWords.length >= 4) {
      setSelectedFull(true)
    }
  }, [selectedWords, selectedFull])

  function shuffleGrid() {
    const wordsCopyShuf = words.map((subArray) => [...subArray])

    for (let i = wordsCopyShuf.length - 1; i > 0; i--) {
      for (let j = wordsCopyShuf[i].length - 1; j > 0; j--) {
        const i2 = Math.floor(Math.random() * (i + 1))
        const j2 = Math.floor(Math.random() * (j + 1))

        ;[wordsCopyShuf[i][j], wordsCopyShuf[i2][j2]] = [
          wordsCopyShuf[i2][j2],
          wordsCopyShuf[i][j],
        ]
      }
    }

    setWords(wordsCopyShuf)
  }

  function submitGuess() {
    console.log(selectedWords)
    const selectedWordsGuess = [...selectedWords]
    let match = false

    selectedWordsGuess.sort()
    for (let i = 0; i < words.length; i++) {
      wordsCopy[i].sort()
    }

    for (let i = 0; i < words.length; i++) {
      if (JSON.stringify(wordsCopy[i]) === JSON.stringify(selectedWordsGuess))
        match = true
    }

    if (match) {
      correct()
    } else {
      incorrect()
    }
  }

  function correct() {
    let temp:string[][] = []
    for (let i = 0; i < words.length; i++) {
      let filteredWords = words[i].filter(word => !selectedWords.includes(word));
      temp.push(filteredWords)
    }
    for (let i = temp.length; i >= 0; i--) {
      if(temp[i].length < 4 && i > 0) {
        temp.push(temp[i - 1].pop())
      }
    }

    setWords(temp)
    deselectAll()
  }

  function incorrect() {
    setMistakesLeft((mistakesLeft -= 1))
    deselectAll()
  }

  useEffect(() => {
    if (mistakesLeft === 0) {
      lose = true
    }
  }, [mistakesLeft])

  function deselectAll() {
    setSelectedWords([])
    setSelectedFull(false)
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <ConnectionsGrid
          selectedWords={selectedWords}
          selectedFull={selectedFull}
          handleButtonClick={handleButtonClick}
          words={words}
          shuffleGrid={shuffleGrid}
        />
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div style={{ fontSize: "1.5rem" }}>Mistakes Remaining:</div>
        <div style={{ marginTop: "5px" }}>
          <ConnectionsDots mistakesLeft={mistakesLeft} />
        </div>
      </div>
      <div style={{ width: "300px", marginTop: "10px", textAlign: "center" }}>
        <button
          onClick={() => shuffleGrid()}
          className={`${styles.btnGeneral}`}
        >
          Shuffle
        </button>
        <button
          className={`${styles.btnGeneral} ${
            isInactiveDS ? styles.inactive : ""
          } `}
          disabled={isInactiveDS}
          onClick={() => deselectAll()}
        >
          Deselect All
        </button>
        <button
          className={`${styles.btnGeneral} ${
            isInactiveS ? styles.inactive : ""
          }`}
          disabled={isInactiveS}
          onClick={() => submitGuess()}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
