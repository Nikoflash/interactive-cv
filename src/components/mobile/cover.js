import React, {useRef, useEffect} from 'react'
import styles from './cover.module.scss'
import {gsap} from 'gsap'
import {TextPlugin} from '../../utils/TextPlugin'
gsap.registerPlugin(TextPlugin);

export default () => {

  const div = useRef(null)
  const name = useRef(null)
  const dev = useRef(null)
  const t1 = gsap.timeline({paused: true})
  
  useEffect(() => {

    t1
    .to(div.current, {duration: 0.5, text: "&lt;div&gt;", ease: "none"})
    .to(name.current, {duration: 1, text: "Nikolas Dalton", ease: "none"})
    .to(dev.current, {duration: 0.2, text: "&lt;&#47;div&gt;", ease: "none"})
    .to(dev.current, {duration: 0.5, text: "&lt;&#47;d", ease: "none", delay: 0.5})
    .to(dev.current, {duration: 0.5, text: "&lt;&#47;dev&gt;", ease: "none"})
    
    t1.play()
  }, [])

  return (
    <div className={styles.cover}>
      <div className={styles.textBox}>
        <div ref={div} id="div">
          
        </div>
        <div ref={name} className={styles.indent}>
          
        </div>
        <div ref={dev} className={styles.dev}>
          
        </div>
      </div>
    </div>
  )
}