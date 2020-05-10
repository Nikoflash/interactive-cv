import React, {useEffect, useContext} from 'react'
import styles from './pages.module.scss'
import {gsap} from 'gsap'
import themes from '../components/layout/themes.module.scss'
import {GlobalStateContext} from '../context/globalContextProvider'
import Header from '../components/layout/header'
import Back from '../components/layout/back'
import ContactModal from '../components/contact/indexDesktop'

export default ({desktop = true, invert = false}) => {
  const theme = useContext(GlobalStateContext).theme

  useEffect(() => {
    gsap.to('#page-profile', 0.5, {
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
      <div id="page-profile" className={styles.container}>
        {desktop &&
          <div className={styles.heading}>
            <h1>Profile</h1>
          </div>
        }
        
        <div className={styles.body}>
          <p>My name is Nikolas Dalton. I am an imaginative and detail oriented front-end developer with an understanding of both back-end and design, and I enjoy working from that position. I’m visually oriented and like to be an active part of the creative process, while maintaining a reflective and analytic approach to my work. I have the ability to focus in depth on a specific task, but I also like being part of a team and the synergy that comes from working with others.</p>
    
          <p>Most of all I am committed to quality and finding the best solution. I’m driven by the curiosity to find new solutions and find great satisfaction in learning something new.</p>

          <p>This site is in its first version and will serve as a testament to my creativity.</p>
        </div>

        <Back pageId="page-profile"/>
      </div>
    </div>
  )
}