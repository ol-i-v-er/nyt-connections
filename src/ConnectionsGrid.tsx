import styles from "./Connections.module.css"

type WordProps = {
  word: string
}

type ConnectionsGridProps = {
  selectedWords: string[]
  selectedFull: boolean
  handleButtonClick: ({ word }: WordProps) => void
  words: string[]
  lose: boolean
}

export function ConnectionsGrid({
  selectedWords,
  selectedFull,
  handleButtonClick,
  words,
  lose,
}: ConnectionsGridProps) {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
          gap: "0.6rem",
        }}
      >
        {words.map((cell, index) => {
          const isActive = selectedWords.includes(cell)
          const isInactive =
            (!selectedWords.includes(cell) && selectedFull) || lose
          return (
            <button
              key={index}
              onClick={() => handleButtonClick({ word: cell })}
              className={`${styles.btnGrid} 
                ${isActive ? styles.active : ""} 
                ${isInactive ? styles.inactive : ""}`}
              disabled={lose}
            >
              {cell}
            </button>
          )
        })}
      </div>
    </div>
  )
}
