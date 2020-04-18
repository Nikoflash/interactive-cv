import React, {useEffect} from 'react'
import styles from './pages.module.scss'
import {TweenLite} from 'gsap/TweenMax'

export default () => {

  useEffect(() => {
    TweenLite.to('#page-personal', 0.5, {
      css: { opacity: 1 }
    })
  }, [])

  return (
    <div id="page-personal" className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Personal</h1>
        </div>
  
        <p>
          I live in Elsinore with my wife, who works as a project manager and our daughter. I spend a lot of time playing music and singing in different settings and love to run bare foot in the woods.
        </p>
        <p>I also spend a lot of time imagining funny website interactions like this site, most of them stay in my head, some of them don't make it past Sketch, but I enjoy trying to figure out how to create them.</p>
      </div>
    </div>
  )
}