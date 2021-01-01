import React, {useEffect, useContext} from 'react'
import styles from './pages.module.scss'
import {gsap} from 'gsap'
import themes from '../layouts/themes.module.scss'
import {GlobalStateContext} from '../context/globalContextProvider'
import Header from '../layouts/header'
import Back from '../components/back'
import ContactModal from '../components/contact/indexDesktop'

export default ({desktop = true, invert= false}) => {
  const theme = useContext(GlobalStateContext).theme

  useEffect(() => {
    gsap.to('#page-experience', 0.5, {
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
      {desktop &&
        <ContactModal />
      }
      <div id="page-experience" className={styles.container}>
        {desktop &&
          <div className={styles.heading}>
            <h1>Experience</h1>
          </div>
        }

        <div className={styles.experience}>
          <div className={styles.header}>
            <b>Frontend Consultant</b>
            <p>July 2020 - Now</p>
          </div>
          <div className={styles.title}>
            Pentia A/S
          </div>

          <div className={styles.header}>
            <b>Frontend Developer</b>
            <p>May 2018 - June 2020</p>
          </div>
          <p className={styles.title}>
            Billy ApS
          </p>

          <div className={styles.header}>
            <b>Front-end internship</b>
            <p>Aug. 2016 - Nov. 2016</p>
          </div>
          <div className={styles.title}>
            MOFO ApS
          </div>

          <p>Created parts of a web app in React and Redux, worked with SVG animations and the design tool Framer.</p>

          <div className={styles.header}>
            <b>Multiple service oriented jobs.</b>
            <p>Sept. 2010 - Jan. 2014</p>
          </div>
          <div className={styles.title}>
            AS3 Companies
          </div>
        </div>
        <Back pageId="page-experience"/>
      </div>
    </div>
  )
}