import React from 'react'
import GlobalContextProvider from '../../context/globalContextProvider'
import LayoutHeader from './layoutHeader'
import styles from './layout.module.scss'

export default ({children}) => {

  return (
    <GlobalContextProvider>
    <div className={styles.layout}>
      <LayoutHeader />
      <div className={styles.layoutChildren}>
        {children}
      </div>
    </div>
    </GlobalContextProvider>
  )
}