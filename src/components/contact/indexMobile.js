import React, { useEffect, useRef, useContext, useState } from 'react'
import styles from './contact.module.scss'
import {IconEmail, IconLinkedin, IconClose, IconStamp} from '../icons/index'
import {gsap, Power4, Power0} from 'gsap'
import { GlobalStateContext } from '../../context/globalContextProvider'
import emailjs from 'emailjs-com'

let createMail, sendMail, failMail, stampSpin = {}

export default () => {
  const theme = useContext(GlobalStateContext).theme
  const contactRef = useRef(null)
  const contentRef = useRef(null)
  const letterRef = useRef(null)
  const stampRef = useRef(null)
  const errorRef = useRef(null)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(`Hi Nikolas Dalton,\n\n`)
  const [startSpin, setStartSpin] = useState(true)
  
  useEffect(() => {
    createMail = gsap.timeline({paused: true})
    sendMail = gsap.timeline({paused: true})
    failMail = gsap.timeline({paused: true})
    stampSpin = gsap.timeline({paused: true, repeat: -1})

    createMail.to(contentRef.current, 0.4, {
      css: { opacity: 0 }
    }).to(contactRef.current, 1, {
      css: { width: '200px', height: '130px' },
      ease: Power4.easeOut
    }).to(letterRef.current, 0.3, {
      css: { display: 'block', opacity: 1 },
      delay: -0.2
    })
    
    sendMail.to(stampRef.current, 0.1, {
      rotation: '0_short',
      transformOrigin: '50% 50%'
    }).to(contactRef.current, 1, {
      x: `${window.innerWidth + 200}`,
      ease: Power4.easeIn
    }).set(contactRef.current, {
      css: { display: 'none' }
    })

    failMail.to(contactRef.current, 0.5, {
      css: { height: '500px' },
      ease: Power0.easeInOut
    }).to(errorRef.current, 1, {
      css: { display: 'flex', opacity: 1 },
      ease: Power0.easeIn
    })

    stampSpin.to(stampRef.current, 1, {
      rotate: 360,
      transformOrigin: '50% 50%',
      ease: Power0.easeNone
    })
  }, [])

  const submitForm = (e) => {
    e.preventDefault()
    createMail.play().then(() => {
      if (startSpin) {
        stampSpin.play()
      }
    })

    emailjs.send('gmail', 'template_xPjfRU9R', {email: email, message: message}, process.env.GATSBY_EMAILJS_USER_ID )
    .then(function() {
      setStartSpin(false)
      stampSpin.kill()
      sendMail.play()
    }, function(error) {
      stampSpin.kill()
      
      createMail.reverse().then(() => {
        failMail.play()
      })
      console.log(error)
    })
  }

  return (
    <div className={styles.contactContainer}>
      <div ref={contactRef} className={`${styles.contact} ${theme ? styles.contactLight : styles.contactDark}`}>
        <div ref={letterRef} className={styles.letter}>
          <div className={styles.iconStamp}>
            <IconStamp stampRef={stampRef}/>
          </div>
          <p className={styles.letterName}>Nikolas Dalton</p>
        </div>
        <div ref={contentRef} className={styles.content}>
          <form className={styles.form} onSubmit={submitForm}>
            <div className={styles.email}>
              <div className={styles.label}>Your email</div>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
    
            <div className={styles.message}>
              <div className={styles.label}>Your message</div>
              <textarea 
                name="" 
                cols="30" 
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}>
              </textarea>
  
              <div className={styles.sendSocial}>
                <button
                  className={styles.send}
                >
                  SEND
                </button>
                <div className={styles.social}>
                  <div className={styles.icon}>
                    <a target="_blank" href="mailto:nikoflash@gmail.com">
                      <IconEmail />
                    </a>
                  </div>
                  <div className={styles.icon}>
                    <a target="_blank" href="https://www.linkedin.com/in/nikolas-dalton-193a26119/">
                      <IconLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div ref={errorRef} className={styles.errorMessage}>
            Error: please try agin later!
          </div>
        </div>
      </div>
    </div>
  )
}
