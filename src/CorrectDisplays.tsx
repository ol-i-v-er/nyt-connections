import styles from "./Connections.module.css"
import { useState, useEffect } from "react"

type CorrectDisplayProps = {
  category: string
  correctList: string[]
  difficulty: number
  correctCount: number
}

export function CorrectDisplay({
  category,
  correctList,
  difficulty,
  correctCount,
}: CorrectDisplayProps) {

  const correctDisplayArray = Array.from({ length: correctCount }, (_, index) => index)

  return (
    <div>{correctDisplayArray.map((_, index) => (
      <div key={index} 
          className={`${styles.correctDisplay} 
          ${difficulty === 1 ? styles.difficulty1 : ""} 
          ${difficulty === 2 ? styles.difficulty2 : ""} 
          ${difficulty === 3 ? styles.difficulty3 : ""} 
          ${difficulty === 4 ? styles.difficulty4 : ""}`}>
        <div>{category}</div>
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
      ))}
    </div>
  )
}