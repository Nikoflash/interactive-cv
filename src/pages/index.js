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
import Slider from '../components/slider'

export default () => {
  let canHover = true
  let windowWidth = ''
  let windowHeight = ''
  const [scrollLength] = useState(600)
  const [mouseDownId, setMouseDownId] = useState('')
  
  if (typeof window !== `undefined`) {
    canHover = window.matchMedia('(hover: hover)').matches
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
  }

  useEffect(() => {    
    let menu = document.getElementById('menu')
    let epre = document.getElementById('epre')
    let ec = document.getElementById('ec')
    let pn = document.getElementById('pn')

    let menuHeight = menu.clientHeight
    let spaceY = 0
    if (windowWidth < 800 ) { spaceY = (windowHeight - menuHeight) }
    else { spaceY = (windowHeight - menuHeight + 82) }
    let marginY = spaceY / 5
    TweenLite.set(menu, { css: { margin: `${marginY} 0` }})
    TweenLite.set(epre, { css: { marginTop: `${marginY}` }})
    TweenLite.set(ec, { css: { marginTop: `${marginY}` }})
    TweenLite.set(pn, { css: { marginTop: `${marginY}` }})
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

  if (canHover) {
    return (
      <div className={styles.menuContainer}>
        <div id="menu" className={styles.menu}>
          <ProfileDesktop handleClick={handleClick} />
          <ExperienceDesktop handleClick={handleClick} />
          <EducationDesktop handleClick={handleClick} />
          <PersonalDesktop handleClick={handleClick} />
        </div>
      </div>
    )
  } else if (!canHover) {
    return (
      <div id="menu" className={styles.index}>
        <ProfileMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
        <ExperienceMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
        <EducationMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
        <PersonalMobile handleTouchStart={handleMouseDown} handleTouchEnd={handleMouseUp} scrollLength={scrollLength} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}
