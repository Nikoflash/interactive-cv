import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import styles from './index.module.scss'
import PersonalDesktop from '../../components/personal/indexDesktop'
import ProfileDesktop from '../../components/profile/indexDesktop'
import EducationDesktop from '../../components/education/indexDesktop'
import ExperienceDesktop from '../../components/experience/indexDesktop'
import {gsap} from 'gsap'

export default () => {

  const menuRef = useRef(null)
  
  const navigateToNextPage = (pageName) => {
    gsap.to(menuRef.current, 0.5, { 
      css: { opacity: 0 },
      onComplete: () => {
        navigate(`/${pageName}/`)
      }
    })
  }

  const handleClick = (e) => {
    switch (e.target.id) {
      case 'profileButton':
        navigateToNextPage('profile')
      case 'experienceButton':
        navigateToNextPage('experience')
      case 'educationButton':
        navigateToNextPage('education')
      case 'personalButton':
        navigateToNextPage('personal')
      default:
        break;
    }
  }

  useEffect(() => {
    gsap.to(menuRef.current, 0.5, {
      css: { opacity: 1 }
    })
  }, [])

  return (
    <div ref={menuRef} className={styles.containerDesktop}>
      <ProfileDesktop handleClick={handleClick} />
      <ExperienceDesktop handleClick={handleClick} />
      <EducationDesktop handleClick={handleClick} />
      <PersonalDesktop handleClick={handleClick} />
    </div>
  )
}
