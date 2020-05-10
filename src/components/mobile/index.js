import React, {useContext, useEffect} from 'react'
import Cover from './cover'
import ProfileHeader, {onEnterProfile} from '../profile/indexMobile'
import ExperienceHeader, {onEnterExperience} from '../experience/indexMobile'
import EducationHeader, {onEnterEducation} from '../education/indexMobile'
import PersonalHeader, {onEnterPersonal} from '../personal/indexMobile'
import ProfileBody from '../../pages/profile'
import ExperienceBody from '../../pages/experience'
import EducationBody from '../../pages/education'
import PersonalBody from '../../pages/personal'
import styles from './index.module.scss'
import themes from '../layout/themes.module.scss'
import {GlobalStateContext} from '../../context/globalContextProvider'
import {Not} from '../layout/header'
import ContactModal from '../contact/indexMobile'


export default () => {
  const theme = useContext(GlobalStateContext).theme

  const configEnter = {
    rootMargin: '-400px 0px',
    threshold: 0.01
  }

  
  useEffect(() => {
    let observerEnter
    let svgElements = document.querySelectorAll('.svg-element')

    observerEnter = new IntersectionObserver(onChangeEnter, configEnter)
    svgElements.forEach(svg => observerEnter.observe(svg))
     // eslint-disable-next-line react-hooks/exhaustive-deps
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
            break
          default:
            break
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