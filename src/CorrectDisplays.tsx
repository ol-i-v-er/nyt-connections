import styles from "./Connections.module.css"
import { CorrectDisplayProps } from "./ConnectionsApp"

type CorrectDisplayPropsArray = {
  array: CorrectDisplayProps[]
}

export function CorrectDisplay({ array }: CorrectDisplayPropsArray) {
  const items = array
    .filter((display: CorrectDisplayProps) => {
      return display.difficulty !== 0
    })
    .map((display: CorrectDisplayProps, index: number) => (
      <div
        key={index}
        className={`${styles.correctDisplay} 
        ${array[index].difficulty === 1 ? styles.difficulty1 : ""} 
        ${array[index].difficulty === 2 ? styles.difficulty2 : ""} 
        ${array[index].difficulty === 3 ? styles.difficulty3 : ""} 
        ${array[index].difficulty === 4 ? styles.difficulty4 : ""}`}
      >
        <div>{array[index].category}</div>
        <div style={{ fontWeight: "normal", fontSize: "1.5rem" }}>
          {array[index].correctList[0] +
            ", " +
            array[index].correctList[1] +
            ", " +
            array[index].correctList[2] +
            ", " +
            array[index].correctList[3]}
        </div>
      </div>
    ))
  return <div>{items}</div>
}
