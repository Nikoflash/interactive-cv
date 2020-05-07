import React, {useEffect, useContext} from 'react'
import styles from './pages.module.scss'
import {gsap} from 'gsap'
import themes from '../components/layout/themes.module.scss'
import {GlobalStateContext} from '../context/globalContextProvider'
import Header from '../components/layout/header'
import Back from '../components/layout/back'

export default ({heading = true, invert = false}) => {
  const theme = useContext(GlobalStateContext).theme

  useEffect(() => {
    gsap.to('#page-education', 0.5, {
      css: { opacity: 1 }
    })
  }, [])

  let themeClass
  if (invert) {
    themeClass = theme ? themes.themeDark : themes.themeLight
  } else {
    themeClass = theme ? themes.themeLight : themes.themeDark
  }

  return (
    <div className={`${styles.page} ${themeClass}`}>
      <Header />
      <div id="page-education" className={styles.container}>
        {heading &&
          <div className={styles.heading}>
            <h1>Education</h1>
          </div>
        }
  
        <div className={styles.education}>
        <div className={styles.header}>
          <b>KEA</b>
          <p className={styles.year}>2014 - 2018</p>
        </div>
        <p className={styles.title}>Computer Science</p>

        <div className={styles.header}>
          <b>KVUC</b>
          <p className={styles.year}>Januar 2014 - Juni 2014</p>
        </div>
        <p className={styles.title}>Math B</p>

        <div className={styles.header}>
          <b>MGK</b>
          <p className={styles.year}>2009 - 2012</p>
        </div>
        <p className={styles.title}>Singer, Guitarist, Song writer</p>
        
        <div className={styles.header}>
          <b>Rytmisk Center</b>
          <p className={styles.year}>Spring 2008</p>
        </div>
        <p className={styles.title}>Singer education</p>

        <div className={styles.header}>
          <b>Den Rytmiske Højskole</b>
          <p className={styles.year}>Efterår 2007</p>
        </div>
        <p className={styles.title}>Folk high school - Singer</p>

        <div className={styles.header}>
          <b>Nørre Gymnasium</b>
          <p className={styles.year}>2003 - 2006</p>
        </div>
          <p className={styles.title}>STX Linguistic</p>
        </div>
        <Back pageId="page-education"/>
      </div>
    </div>
  )
}