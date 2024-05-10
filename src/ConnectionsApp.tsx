import { useState, useEffect } from "react"
import { ConnectionsGrid } from "./ConnectionsGrid"
import { ConnectionsDots } from "./ConnectionsDots"
import { CorrectDisplay } from "./CorrectDisplays"
import styles from "./Connections.module.css"

type WordProps = {
  word: string
}

export function ConnectionsApp() {
  const [words, setWords] = useState<string[]>([
    "AA",
    "AB",
    "AC",
    "AD",
    "BA",
    "BB",
    "BC",
    "BD",
    "CA",
    "CB",
    "CC",
    "CD",
    "DA",
    "DB",
    "DC",
    "DD",
  ])

  const wordsKey = [
    { words: ["AA", "AB", "AC", "AD"], category: "A" },
    { words: ["BA", "BB", "BC", "BD"], category: "B" },
    { words: ["CA", "CB", "CC", "CD"], category: "C" },
    { words: ["DA", "DB", "DC", "DD"], category: "D" },
  ]

  const [selectedWords, setSelectedWords] = useState<string[]>([])
  let [selectedFull, setSelectedFull] = useState<boolean>(false)
  const isInactiveDS = selectedWords.length === 0
  const isInactiveS = selectedWords.length !== 4
  let [mistakesLeft, setMistakesLeft] = useState<number>(4)
  let lose = false
  let [correctDisplayBool, setCorrectDisplayBool] = useState<boolean>(false)
  let [category, setCategory] = useState<string>("")
  let [correctList, setCorrectList] = useState<string[]>([])

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
    const wordsCopyShuf = JSON.parse(JSON.stringify(words))

    for (let i = wordsCopyShuf.length - 1; i > 0; i--) {
      const i2 = Math.floor(Math.random() * (i + 1))

      ;[wordsCopyShuf[i], wordsCopyShuf[i2]] = [
        wordsCopyShuf[i2],
        wordsCopyShuf[i],
      ]
    }

    setWords(wordsCopyShuf)
  }

  function submitGuess() {
    console.log(selectedWords)
    const selectedWordsGuess = [...selectedWords]
    let match = false

    selectedWordsGuess.sort()
    for (let i = 0; i < wordsKey.length; i++) {
      wordsKey[i].words.sort()
    }

    for (let i = 0; i < wordsKey.length; i++) {
      if (
        JSON.stringify(wordsKey[i].words) === JSON.stringify(selectedWordsGuess)
      ) {
        match = true
        setCategory(wordsKey[i].category)
        setCorrectList(wordsKey[i].words)
      }
    }

    if (match) {
      correct()
    } else {
      incorrect()
    }
  }

  function correct() {
    setWords(words.filter((word) => !selectedWords.includes(word)))
    setCorrectDisplayBool(true)
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
        {correctDisplayBool && (
          <CorrectDisplay
            category={category}
            deselectAll={deselectAll}
            correctList={correctList}
          />
        )}
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
