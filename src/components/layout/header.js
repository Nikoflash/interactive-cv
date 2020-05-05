import React, {useContext} from 'react'
import {GlobalDispatchContext, GlobalStateContext} from '../../context/globalContextProvider'
import styles from './header.module.scss'
import { Link } from "gatsby"

export default () => {

  const theme = useContext(GlobalStateContext).theme
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_THEME'})
  }
  
  return (
    <div className={styles.header}>
      <div className={`${styles.logo} ${theme ? styles.logoLight : styles.logoDark}`}>
        <Link to="/">&lt;<span>div</span>&gt;&lt;&#47;<span>dev</span>&gt;</Link>
      </div>
      <div>
        <button 
          className={`${styles.notDesktop} ${theme ? styles.notLight : styles.notDark}`}
          onClick={handleClick}
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
    console.log('toggle')
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
