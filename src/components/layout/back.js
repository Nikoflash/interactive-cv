import React, {useContext} from 'react'
import styles from './back.module.scss'
import {GlobalStateContext} from '../../context/globalContextProvider' 
import {navigate} from 'gatsby'
import {gsap} from 'gsap'

export default ({pageId}) => {
  const theme = useContext(GlobalStateContext).theme

  const handleBackClick = () => {
    gsap.to(`#${pageId}`, 0.5, {
      css: { opacity: 0 },
      onComplete: () => {
        navigate('/')
      }
    })
  }

  return (
      <div onClick={handleBackClick} className={`${styles.back} ${theme ? styles.backLight : styles.backDark}`}>
        <svg viewBox="0 0 84 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(2.000000, 1.000000)" stroke-width="1" fill="none">
            <polygon points="81 0 81 38 17 38 -5.68434189e-14 19 17 0"></polygon>
            <text>
              <tspan x="24.372" y="25">BACK</tspan>
            </text>
          </g>
        </svg>
      </div>
  )
}