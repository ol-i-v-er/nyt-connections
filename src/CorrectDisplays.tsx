import styles from "./Connections.module.css"

type CorrectDisplayProps = {
  category: string
  deselectAll: () => void
  correctList: string[]
}

export function CorrectDisplay({
  category,
  deselectAll,
  correctList,
}: CorrectDisplayProps) {
  const categoryCopy = category
  //deselectAll()
  return (
    <div className={`${styles.correctDisplay}`}>
      <div>{categoryCopy}</div>
      <div style={{ fontWeight: "normal", fontSize: "1.5rem" }}>
        {correctList[0] +
          ", " +
          correctList[1] +
          ", " +
          correctList[2] +
          ", " +
          correctList[3]}
      </div>
    </div>
  )
}
