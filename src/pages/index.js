import React, {useEffect, useState} from "react"
import styles from './index.module.scss'
import PersonalDesktop from '../components/personal/indexDesktop'
import PersonalMobile from '../components/personal/indexMobile'
import ProfileDesktop from '../components/profile/indexDesktop'
import ProfileMobile from '../components/profile/indexMobile'
import EducationDesktop from '../components/education/indexDesktop'
import EducationMobile from '../components/education/indexMobile'
import ExperienceDesktop from '../components/experience/indexDesktop'
import ExperienceMobile from '../components/experience/indexMobile'
import {TweenLite} from 'gsap/TweenMax'
import menuController from '../controllers/menuController'
import { Breakpoint, BreakpointProvider } from 'react-socks'

export default () => {
  const [scrollLength] = useState(600)
  const [mouseDownId, setMouseDownId] = useState('')

  useEffect(() => {    
    TweenLite.to('#menu', 1, { css: { opacity: 1} });
  }, [])


  const handleClick = (e) => {
    menuController(e.target.id, e.target.id)
  }

  const handleMouseDown = (e) => {
    setMouseDownId(e.target.id)
  }
  
  const handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var changedTouch = e.changedTouches[0];
    var elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY)
    menuController(mouseDownId, elem.id)
  }

  return (
    <BreakpointProvider>
      <div id="menu" className={styles.menu}>
        <Breakpoint className={styles.breakpoint} customQuery="(min-width: 577px)">
          <ProfileDesktop handleClick={handleClick} />
          <ExperienceDesktop handleClick={handleClick} />
          <EducationDesktop handleClick={handleClick} />
          <PersonalDesktop handleClick={handleClick} />
        </Breakpoint>
        <Breakpoint className={styles.breakpoint} customQuery="(max-width: 576px)">
          <ProfileMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
          <ExperienceMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
          <EducationMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
          <PersonalMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  )
}
