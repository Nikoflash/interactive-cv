import React, {useEffect, useContext} from 'react'
import styles from './pages.module.scss'
import {TweenLite} from 'gsap'
import themes from '../components/layout/themes.module.scss'
import {GlobalStateContext} from '../context/globalContextProvider'
import Header from '../components/layout/header'

export default ({heading = true, invert = false}) => {
  const theme = useContext(GlobalStateContext).theme

  useEffect(() => {
    TweenLite.to('#page-personal', 0.5, {
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
      <div id="page-personal" className={styles.container}>
        {heading &&
          <div className={styles.heading}>
            <h1>Personal</h1>
          </div>
        }
  
        <p>
          I live in Elsinore with my wife, who works as a project manager and our daughter. I spend a lot of time playing music and singing in different settings and love to run bare foot in the woods.
        </p>
        <p>I also spend a lot of time imagining funny website interactions like this site, most of them stay in my head, some of them don't make it past Sketch, but I enjoy trying to figure out how to create them.</p>
      </div>
    </div>
  )
}