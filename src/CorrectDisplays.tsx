import styles from "./Connections.module.css"

type CorrectDisplayProps = {
  selectedWords: string[]
  category: string
}

export function CorrectDisplay({
  selectedWords,
  category,
}: CorrectDisplayProps) {
  return (
    <div className={`${styles.correctDisplay}`}>
      <div>{category}</div>
      <div style={{ fontWeight: "normal", fontSize: "1.5rem" }}>
        {selectedWords[0] +
          ", " +
          selectedWords[1] +
          ", " +
          selectedWords[2] +
          ", " +
          selectedWords[3]}
      </div>
    </div>
  )
}
