import React, {useContext, useEffect} from 'react'
import Cover from './cover'
import ProfileHeader, {onEnterProfile, onLeaveProfile} from '../profile/indexMobile'
import ExperienceHeader, {onEnterExperience, onLeaveExperience} from '../experience/indexMobile'
import EducationHeader, {onEnterEducation, onLeaveEducation} from '../education/indexMobile'
import PersonalHeader, {onEnterPersonal, onLeavePersonal} from '../personal/indexMobile'
import ProfileBody from '../../pages/profile'
import ExperienceBody from '../../pages/experience'
import EducationBody from '../../pages/education'
import PersonalBody from '../../pages/personal'
import styles from './index.module.scss'
import themes from '../layout/themes.module.scss'
import {GlobalStateContext} from '../../context/globalContextProvider'
import {Not} from '../layout/header'


export default () => {
  const theme = useContext(GlobalStateContext).theme

  const configEnter = {
    rootMargin: '-400px 0px',
    threshold: 0.01
  }
  
  const configLeave = {
    rootMargin: '-450px 0px',
    threshold: 0.01
  }

  let observerEnter
  let observerLeave

  useEffect(() => {
    let svgElements = document.querySelectorAll('.svg-element')

    observerEnter = new IntersectionObserver(onChangeEnter, configEnter)
    svgElements.forEach(svg => observerEnter.observe(svg))
  }, [])


  const onChangeEnter = (changes, observer) => {
    changes.forEach(change => {
      if (change.intersectionRatio > 0) {
        switch (change.target.id) {
          case 'profile':
            onEnterProfile()
            break
          case 'experience':
            onEnterExperience()    
            break
          case 'education':
            onEnterEducation()
            break
          case 'personal':
            onEnterPersonal()
          default:
            break;
        }
        observer.unobserve(change.target)
      }
    })
  }

  return (
    <div className={styles.sectionContainer}>
      <div className={`${styles.sectionCover} ${theme ? themes.themeDark : themes.themeLight}`}>
        <Cover />
        <Not />
      </div>
      <div className={`${styles.section} ${theme ? themes.themeLightProfile : themes.themeDarkProfile}`}>
        <div className={styles.sectionHeader}>
          <ProfileHeader />
        </div>
        <ProfileBody heading={false} />
      </div>
      <div className={`${styles.section} ${theme ? themes.themeDarkExperience : themes.themeLightExperience}`}>
        <div className={styles.sectionHeader}>
          <ExperienceHeader />
        </div>
        <ExperienceBody heading={false} invert={true} />
      </div>
      <div className={`${styles.section} ${theme ? themes.themeLightEducation : themes.themeDarkEducation}`}>
        <div className={styles.sectionHeader}>
          <EducationHeader />
        </div>
        <EducationBody heading={false} />
      </div>
      <div className={`${styles.section} ${theme ? themes.themeDarkPersonal : themes.themeLightPersonal}`}>
        <div className={styles.sectionHeader}>
          <PersonalHeader />
        </div>
        <PersonalBody heading={false} invert={true} />
      </div>
     
    </div>
  )
}