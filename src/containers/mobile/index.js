import React, {useContext, useEffect} from 'react'
import Cover from './cover'
import ProfileHeader, {onEnterProfile} from '../../components/profile/indexMobile'
import ExperienceHeader, {onEnterExperience} from '../../components/experience/indexMobile'
import EducationHeader, {onEnterEducation} from '../../components/education/indexMobile'
import PersonalHeader, {onEnterPersonal} from '../../components/personal/indexMobile'
import ProfileBody from '../../pages/profile'
import ExperienceBody from '../../pages/experience'
import EducationBody from '../../pages/education'
import PersonalBody from '../../pages/personal'
import styles from './index.module.scss'
import themes from '../../layouts/themes.module.scss'
import {GlobalStateContext} from '../../context/globalContextProvider'
import {Not} from '../../layouts/header'
import ContactModal from '../../components/contact/indexMobile'


export default () => {
  const theme = useContext(GlobalStateContext).theme

  const configEnter = {
    rootMargin: '-100px 0px',
    threshold: 1.0
  }

  useEffect(() => {
    let observerEnter
    let svgElements = document.querySelectorAll('.svg-element')

    observerEnter = new IntersectionObserver(onChangeEnter, configEnter)
    svgElements.forEach(svg => observerEnter.observe(svg))
  }, [])


  const onChangeEnter = (changes, observer) => {
    changes.forEach(change => {
      if (change.intersectionRatio > 0) {
        if (change.target.id === 'profile') {
          console.log('profiles')
          onEnterProfile()
        }
        
        if (change.target.id === 'experience') {
          onEnterExperience()
        }

        if (change.target.id === 'education') {
          onEnterEducation()
        }

        if (change.target.id === 'personal') {
          onEnterPersonal()
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
        <ProfileBody desktop={false} />
      </div>
      <div className={`${styles.section} ${theme ? themes.themeDarkExperience : themes.themeLightExperience}`}>
        <div className={styles.sectionHeader}>
          <ExperienceHeader />
        </div>
        <ExperienceBody desktop={false} invert={true} />
      </div>
      <div className={`${styles.section} ${theme ? themes.themeLightEducation : themes.themeDarkEducation}`}>
        <div className={styles.sectionHeader}>
          <EducationHeader />
        </div>
        <EducationBody desktop={false} />
      </div>
      <div className={`${styles.section} ${theme ? themes.themeDarkPersonal : themes.themeLightPersonal}`}>
        <div className={styles.sectionHeader}>
          <PersonalHeader />
        </div>
        <PersonalBody desktop={false} invert={true} />
      </div>
      <div className={`${styles.sectionContact} ${theme ? themes.themeLightPersonal : themes.themeDarkPersonal}`}>
        <ContactModal />
      </div>
    </div>
  )
}