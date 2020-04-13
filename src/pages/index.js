import React, {useEffect, useState} from "react"
import styles from './index.module.scss'
import Menu from '../components/menu'
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

export default () => {
  let canHover = ''
  let windowHeight = ''
  
  if (typeof window !== `undefined`) {
    canHover = window.matchMedia('(hover: hover)').matches
    windowHeight = window.innerHeight
  }

  const [pageY, setPageY] = useState(0)
  const scrollLength = 500
  
  const handleScroll = () => {
    let wy = window.pageYOffset
    setPageY(wy)
  }

  useEffect(() => {    
    let menu = document.getElementById('menu')
    let epre = document.getElementById('epre')
    let ec = document.getElementById('ec')
    let pn = document.getElementById('pn')

    let menuHeight = menu.clientHeight
    let spaceY = (windowHeight - menuHeight + 82)
    let marginY = spaceY / 5
    TweenLite.set(menu, { css: { margin: `${marginY} 0` }})
    TweenLite.set(epre, { css: { marginTop: `${marginY}` }})
    TweenLite.set(ec, { css: { marginTop: `${marginY}` }})
    TweenLite.set(pn, { css: { marginTop: `${marginY}` }})
  }, [])

  useEffect(() => {
    let menuContainerOuter = document.getElementById('menu-container-outer')
    let menuContainerInner = document.getElementById('menu-container-inner')
    let menuContainerHeight = windowHeight + scrollLength
    TweenLite.set(menuContainerOuter, { css: { height: windowHeight} });
    TweenLite.set(menuContainerInner, { css: { height: menuContainerHeight} });
    window.addEventListener('scroll', handleScroll)
    TweenLite.to('#page-index', 1, { css: { opacity: 1} });
  })

  const handleClickMenuItem = (e) => {
    menuController(e.target)
  }

  if (canHover) {
    return (
      <div id="page-index" className={styles.index}>
        <Menu>
          <ProfileDesktop handleClick={handleClickMenuItem} />
          <ExperienceDesktop handleClick={handleClickMenuItem} />
          <EducationDesktop handleClick={handleClickMenuItem} />
          <PersonalDesktop handleClick={handleClickMenuItem} />
        </Menu>
      </div>
    )
  } else {
    return (
      <div id="page-index" className={styles.index}>
        <Menu>
          <ProfileMobile handleTouch={handleClickMenuItem} pageY={pageY} scrollLength={scrollLength} />
          <ExperienceMobile handleTouch={handleClickMenuItem} pageY={pageY} scrollLength={scrollLength} />
          <EducationMobile handleTouch={handleClickMenuItem} pageY={pageY} scrollLength={scrollLength} />
          <PersonalMobile handleTouch={handleClickMenuItem} pageY={pageY} scrollLength={scrollLength} />
        </Menu>
      </div>
    )
  }
}
