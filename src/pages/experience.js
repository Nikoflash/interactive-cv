import React, {useEffect} from 'react'
import styles from './pages.module.scss'
import {TweenLite} from 'gsap/TweenMax'

export default () => {
  useEffect(() => {
    TweenLite.to('#page-experience', 1, {
      css: { opacity: 1 }
    })
  }, [])

  return (
    <div id="page-experience" className={styles.page}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Experience</h1>
      </div>

      <div className={styles.experience}>
        <div className={styles.header}>
          <b>Frontend Developer</b>
          <p>May 2018 - Now</p>
        </div>
        <p className={styles.title}>
          Billy ApS
        </p>

        <p>- Responsible for maintaining billy.dk - HTML, SCSS, Javascript</p>

        <p>- Train new imployees in the use of Git and validate content before it goes live.</p>

        <p>- Responsible for the technical implementation of SEO - lazy loading, image compression, AMP, structured data</p>

        <p>- Choosing the right technology and implementing bigger projects like <a href="https://www.billy.dk/send-faktura-gratis/" target="_blank" rel="noopener noreferrer">billy.dk/send-faktura-gratis</a></p>

        <div className={styles.header}>
          <b>Front-end internship</b>
          <p>August 2016 - November 2016</p>
        </div>
        <div className={styles.title}>
          MOFO ApS
        </div>

        <p>Created parts of a web app in React and Redux, worked with SVG animations and the design tool Framer.</p>

        <div className={styles.header}>
          <b>Multiple service oriented jobs.</b>
          <p>September 2010 - Jan 2014</p>
        </div>
        <div className={styles.title}>
          AS3 Companies
        </div>
      </div>
    </div>
  </div>
  )
}