import React, {useRef, useEffect} from 'react'
import styles from './cover.module.scss'
import {gsap, Power2, Power1} from 'gsap'
import {TextPlugin} from '../../utils/TextPlugin'
gsap.registerPlugin(TextPlugin);

export default () => {

  const div = useRef(null)
  const name = useRef(null)
  const dev = useRef(null)
  const arrow = useRef(null)
  const t1 = gsap.timeline({paused: true})
  const t2 = gsap.timeline({paused: true, repeat: -1})
  
  useEffect(() => {

    t1
    .to(div.current, {duration: 0.5, text: "&lt;div&gt;", ease: "none"})
    .to(name.current, {duration: 1, text: "Nikolas Dalton", ease: "none"})
    .to(dev.current, {duration: 0.2, text: "&lt;&#47;div&gt;", ease: "none"})
    .to(dev.current, {duration: 0.5, text: "&lt;&#47;d", ease: "none", delay: 0.5})
    .to(dev.current, {duration: 0.5, text: "&lt;&#47;dev&gt;", ease: "none", onComplete: arrowOpacity})

    t2
    .to(arrow.current, {y: 20, duration: 1, ease: Power1.easeInOut} )
    .to(arrow.current, {y: 0, duration: 1, ease: Power1.easeInOut} )
    
    t1.play()
    t2.play()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const arrowOpacity = () => {
    gsap.to(arrow.current, 2, {
      css: { opacity: 1},
      ease: Power2.easeIn,
      delay: -0.5
    })
  }

  return (
    <div className={styles.cover}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <div ref={div} id="div">
            
          </div>
          <div ref={name} className={styles.indent}>
            
          </div>
          <div ref={dev} className={styles.dev}>
            
          </div>
        </div>
        <div className={styles.svg}>
          <svg ref={arrow} viewBox="0 0 67 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd" strokeLinecap="round">
              <g id="Group" transform="translate(2.000000, 2.000000)" strokeWidth="3">
                <polyline points="0 -1.13686838e-13 31.8990385 35 63 -1.13686838e-13"></polyline>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
