import React, {useContext, useEffect} from "react"
import styles from './index.module.scss'
import themes from '../components/layout/themes.module.scss'
import PersonalDesktop from '../components/personal/indexDesktop'
import ProfileDesktop from '../components/profile/indexDesktop'
import EducationDesktop from '../components/education/indexDesktop'
import ExperienceDesktop from '../components/experience/indexDesktop'
import menuController from '../controllers/menuController'
import { Breakpoint, BreakpointProvider } from 'react-socks'
import MobileIndex from '../components/mobile/index'
import {GlobalStateContext} from '../context/globalContextProvider'
import Header from '../components/layout/header'
import {gsap} from 'gsap'

export default () => {
  const theme = useContext(GlobalStateContext).theme

  const handleClick = (e) => {
    menuController(e.target.id, e.target.id)
  }

  useEffect(() => {
    gsap.to('#pf, #epre, #ec, #pn', 0.5, {
      css: { opacity: 1 }
    })
  }, [])

  return (
    <BreakpointProvider>
      <Breakpoint className={`${styles.breakpoint} ${theme ? themes.themeDesktopLight : themes.themeDesktopDark}`} customQuery="(min-width: 992px)">
        <Header />
        <ProfileDesktop handleClick={handleClick} />
        <ExperienceDesktop handleClick={handleClick} />
        <EducationDesktop handleClick={handleClick} />
        <PersonalDesktop handleClick={handleClick} />
      </Breakpoint>
      <Breakpoint className={styles.breakpoint} customQuery="(max-width: 991px)">
        <MobileIndex />
      </Breakpoint>
    </BreakpointProvider>
  )
}
