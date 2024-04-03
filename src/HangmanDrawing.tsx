import jake from "./images/jake.jpeg"

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100px",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  >
    <img src={jake} style={{ width: "50px" }} />
  </div>
)

const TORSO = (
  <div
    style={{
      width: "10px",
      height: "130px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: "0px",
    }}
  />
)

const ARMS = (
  <div>
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "-20px",
        rotate: "-30deg",
      }}
    />
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "20px",
        rotate: "30deg",
      }}
    />
  </div>
)

const LEGS = (
  <div>
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "black",
        position: "absolute",
        top: "230px",
        right: "-20px",
        rotate: "-30deg",
      }}
    />
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "black",
        position: "absolute",
        top: "230px",
        right: "20px",
        rotate: "30deg",
      }}
    />
  </div>
)

const BODY_PARTS = [HEAD, TORSO, ARMS, LEGS]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  )
}
