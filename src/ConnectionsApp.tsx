import { ConnectionsGrid } from "./ConnectionsGrid"
import styles from "./Connections.module.css"

export function ConnectionsApp() {
  return (
    <div style={{maxWidth: "800px", display: "flex", flexDirection: "column", alignItems: "center"}}>
      WHAT THE SIGMA
      <div>
        <ConnectionsGrid />
      </div>
      <div style={{display: "flex", marginTop: "10px"}}>
        <div style={{ fontSize: "1.5rem" }}>
              Mistakes Remaining: 
        </div>
        <div style={{marginTop: "5px"}}>
          <Dots />
        </div> 
      </div>
      <div style={{width: "300px", marginTop: "10px", textAlign: "center"}}>
        <button className={`${styles.btnGeneral}`}>Shuffle</button>
        <button className={`${styles.btnGeneral}`}>Deselect All</button>
        <button className={`${styles.btnGeneral}`}>Submit</button>
      </div>
    </div>
  )
}

const numOfDots = 4
const divsArray = Array.from({ length: numOfDots }, (_, index) => index);

function Dots() {
  return(
    <div>
      {divsArray.map((_, index) => (
        <div key={index}
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "#737373",
            borderRadius: "50%",
            display: "inline-block",
            marginLeft: "10px"
          }}
        ></div>
      ))}
    </div>
  )
}
