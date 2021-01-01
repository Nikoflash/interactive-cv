import React, {useEffect, useContext} from 'react'
import styles from './pages.module.scss'
import {gsap} from 'gsap'
import themes from '../layouts/themes.module.scss'
import {GlobalStateContext} from '../context/globalContextProvider'
import Header from '../layouts/header'
import Back from '../components/back'
import ContactModal from '../components/contact/indexDesktop'

export default ({desktop = true, invert = false}) => {
  const theme = useContext(GlobalStateContext).theme

  useEffect(() => {
    gsap.to('#page-personal', 0.5, {
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
      <div id="page-personal" className={styles.container}>
        {desktop &&
          <div className={styles.heading}>
            <h1>Personal</h1>
          </div>
        }
  
        <p>
          I live in Odense with my wife, who works as a coach and our two daughters. I spend a lot of time playing music and singing in different settings and love to run bare foot in the woods.
        </p>
        <p>I also spend a lot of time imagining funny website interactions like this site, most of them stay in my head, some of them don't make it past Sketch, but I enjoy trying to figure out how to create them.</p>
        
        <Back pageId="page-personal"/>
      </div>
    </div>
  )
}