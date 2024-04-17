import styles from "./Connections.module.css"

const words = [
  "word1",
  "word2",
  "word3",
  "word4",
  "word5",
  "word6",
  "word7",
  "word8",
  "word9",
  "word10",
  "word11",
  "word12",
  "word13",
  "word14",
  "word15",
  "word16",
]

export function ConnectionsGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
        gap: "0.4rem",
      }}
    >
      {words.map(key => {
        return (
          <button
            onClick={() => console.log(key)}
            className={`${styles.btnGrid}`}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
