import React, {useEffect} from 'react'
import styles from './pages.module.scss'
import {TweenLite} from 'gsap/TweenMax'

export default () => {

  useEffect(() => {
    TweenLite.to('#page-profile', 0.5, {
      css: { opacity: 1 }
    })
  }, [])

  return (
    <div id="page-profile" className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Profile</h1>
        </div>
  
        <div className={styles.body}>
          <p>I am an imaginative and detail oriented front-end developer with an understanding of both back-end and design, and I enjoy working from that position. I’m visually oriented and like to be an active part of the creative process, while maintaining a reflective and analytic approach to my work. I have the ability to focus in depth on a specific task, but I also like being part of a team and the synergy that comes from working with others.</p>
    
          <p>Most of all I am committed to quality and finding the best solution. I’m driven by the curiosity to find new solutions and find great satisfaction in learning something new.</p>

          <p>This site is in its first version and will serve as a testament to my creativity.</p>
        </div>
      </div>
    </div>
  )
}