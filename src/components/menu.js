import React from "react"
import styles from "./menu.module.scss"

export default ({ children }) => {

  return (
    <div id="menu-container-outer" className={styles.menuContainerOuter}>
      <div id="menu-container-inner" className={`menu-container ${styles.menuContainerInner}`}>
        <div id="menu" className={styles.menu}>{children}</div>
      </div>
    </div>
  )
}
