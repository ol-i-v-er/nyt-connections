import { useDisclosure } from "@mantine/hooks"
import { Modal, Button } from "@mantine/core"
import { useEffect, useState } from "react"
import styles from "./Connections.module.css"

type ConnectionsModalProps = {
  lose: boolean
  win: boolean
}

export function ConnectionsModal({ lose, win }: ConnectionsModalProps) {
  const [opened, handlers] = useDisclosure(false)
  const isInactive = !win && !lose
  let [timeoutBool, setTimeoutBool] = useState<boolean>(true)

  if (timeoutBool)
    setTimeout(() => {
      if (lose || win) {
        handlers.open()
        setTimeoutBool(false)
      }
    }, 700)

  return (
    <>
      <Modal
        opened={opened}
        onClose={handlers.close}
        title="Results"
        size="lg"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <div style={{ fontSize: "2rem" }}>
          {lose ? "YOU LOSE!!!!" : "YOU WIN!!!!"}
        </div>
      </Modal>

      <button
        className={`${styles.btnGeneral} ${isInactive ? styles.inactive : ""}`}
        disabled={isInactive}
        onClick={() => handlers.open()}
      >
        Results
      </button>
    </>
  )
}
