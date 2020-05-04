import React from 'react'
import styles from './cover.module.scss'

export default () => {
  return (
    <div className={styles.cover}>
      <div>
        <div>
          &lt;<span>div</span>&gt;
        </div>
        <div className={styles.indent}>
          <span>Nikolas Dalton</span>
        </div>
        <div>
          &lt;&#47;<span>dev</span>&gt;
        </div>
      </div>
    </div>
  )
}