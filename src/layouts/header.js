import React, {useContext} from 'react'
import {GlobalDispatchContext, GlobalStateContext} from '../context/globalContextProvider'
import styles from './header.module.scss'
import { navigate } from "gatsby"

export default () => {

  const theme = useContext(GlobalStateContext).theme
  const modalOpen = useContext(GlobalStateContext).contactModal
  const emailSent = useContext(GlobalStateContext).emailSent
  const dispatch = useContext(GlobalDispatchContext)

  const handleNotClick = () => {
    dispatch({ type: 'TOGGLE_THEME'})
  }

  const handleContactClick = () => {
    if (!emailSent) {
      dispatch({ type: 'TOGGLE_CONTACT_MODAL' })
    }
  }

  const handleClickLogo = () => {
    if (!modalOpen) {
      navigate('/')
    }
  }
  
  return (
    <div className={styles.header}>
      <div onClick={handleClickLogo} className={`${styles.logo} ${theme ? styles.logoLight : styles.logoDark}`}>
        &lt;<span>div</span>&gt;&lt;&#47;<span>dev</span>&gt;
      </div>
      <div className={styles.buttons}>
      <button 
          className={`${styles.notDesktop} ${theme ? styles.notLight : styles.notDark}`}
          onClick={handleContactClick}
        >
          CONTACT
        </button>  
        <button 
          className={`${styles.notDesktop} ${theme ? styles.notLight : styles.notDark}`}
          onClick={handleNotClick}
        >
          NOT
        </button>  
      </div>   
    </div>
  )
}

export const Not = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_THEME'})
  }

  return (
  <button 
    className={`${styles.not}`}
    onClick={handleClick}
  >
    NOT
  </button>  
  )
}
