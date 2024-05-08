import styles from "./Connections.module.css"

type CorrectDisplayProps = {
  selectedWords: string[]
  category: string
  deselectAll: () => void
}

export function CorrectDisplay({
  selectedWords,
  category,
  deselectAll,
}: CorrectDisplayProps) {
  const selectedWordsCopy = selectedWords
  const categoryCopy = category
  deselectAll()
  return (
    <div className={`${styles.correctDisplay}`}>
      <div>{categoryCopy}</div>
      <div style={{ fontWeight: "normal", fontSize: "1.5rem" }}>
        {selectedWordsCopy[0] +
          ", " +
          selectedWordsCopy[1] +
          ", " +
          selectedWordsCopy[2] +
          ", " +
          selectedWordsCopy[3]}
      </div>
    </div>
  )
}
