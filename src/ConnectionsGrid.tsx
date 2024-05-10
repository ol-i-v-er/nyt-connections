import styles from "./Connections.module.css"

type WordProps = {
  word: string
}

type ConnectionsGridProps = {
  selectedWords: string[]
  selectedFull: boolean
  handleButtonClick: ({ word }: WordProps) => void
  words: string[]
  shuffleGrid: () => void
}

export function ConnectionsGrid({
  selectedWords,
  selectedFull,
  handleButtonClick,
  words,
  shuffleGrid,
}: ConnectionsGridProps) {
  //shuffleGrid()
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
          const isActive = selectedWords.includes(cell);
          const isInactive = !selectedWords.includes(cell) && selectedFull;
          return (
            <button
              key={index}
              onClick={() => handleButtonClick({ word: cell })}
              className={`${styles.btnGrid} 
                ${isActive ? styles.active : ""} 
                ${isInactive ? styles.inactive : ""}`}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </div>
  );
  
}
