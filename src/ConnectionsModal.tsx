import { useDisclosure } from "@mantine/hooks"
import { Modal, Button } from "@mantine/core"
import { useEffect } from "react"
import styles from "./Connections.module.css"

type ConnectionsModalProps = {
  lose: boolean
  win: boolean
}

export function ConnectionsModal({ lose, win }: ConnectionsModalProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const isInactive = !win && !lose

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Results"
        size="lg"
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
        onClick={open}
      >
        Results
      </button>
    </>
  )
}
