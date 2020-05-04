import React, {useContext} from "react"
import styles from './index.module.scss'
import PersonalDesktop from '../components/personal/indexDesktop'
import ProfileDesktop from '../components/profile/indexDesktop'
import EducationDesktop from '../components/education/indexDesktop'
import ExperienceDesktop from '../components/experience/indexDesktop'
import menuController from '../controllers/menuController'
import { Breakpoint, BreakpointProvider } from 'react-socks'
import MobileIndex from '../components/mobile/index'
import themes from '../components/layout/themes.module.scss'
import {GlobalStateContext} from '../context/globalContextProvider'
import {Not} from '../components/layout/layoutHeader'

export default () => {
  const theme = useContext(GlobalStateContext).theme

  const handleClick = (e) => {
    menuController(e.target.id, e.target.id)
  }

  return (
    <BreakpointProvider>
      <Breakpoint className={`${styles.breakpoint} ${theme ? themes.themeDesktopLight : themes.themeDesktopDark}`} large up>
        <ProfileDesktop handleClick={handleClick} />
        <ExperienceDesktop handleClick={handleClick} />
        <EducationDesktop handleClick={handleClick} />
        <PersonalDesktop handleClick={handleClick} />
      </Breakpoint>
      <Breakpoint className={styles.breakpoint} medium down>
        <MobileIndex />
      </Breakpoint>
    </BreakpointProvider>
  )
}
