import { useEffect } from "react"

type DotsProps = {
  mistakesLeft: number
}

export function ConnectionsDots({ mistakesLeft }: DotsProps) {
  const dotsArray = Array.from({ length: mistakesLeft }, (_, index) => index)

  useEffect(() => {}, [mistakesLeft])

  return (
    <div>
      {dotsArray.map((_, index) => (
        <div
          key={index}
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "#737373",
            borderRadius: "50%",
            display: "inline-block",
            marginLeft: "10px",
          }}
        ></div>
      ))}
    </div>
  )
}
