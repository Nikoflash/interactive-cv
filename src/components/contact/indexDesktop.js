import React, { useEffect, useRef, useContext, useState } from 'react'
import styles from './contact.module.scss'
import {IconEmail, IconLinkedin, IconClose, IconStamp} from '../icons/index'
import {gsap, Back, Power4, Power0} from 'gsap'
import { GlobalStateContext, GlobalDispatchContext } from '../../context/globalContextProvider'
import emailjs from 'emailjs-com'


let openModal, createMail, sendMail, failMail, stampSpin = {}

export default () => {
  const [firstRender, setFirstRender] = useState(false)
  const modalState = useContext(GlobalStateContext).contactModal
  const modalDispatch = useContext(GlobalDispatchContext)
  const theme = useContext(GlobalStateContext).theme

  const contactRef = useRef(null)
  const contentRef = useRef(null)
  const letterRef = useRef(null)
  const stampRef = useRef(null)
  const errorRef = useRef(null)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(`Hi Nikolas Dalton,\n\n`)

  useEffect(() => {
    if (firstRender) {
      if (modalState) {
        openModal.timeScale(1).play()
      } else {
        openModal.timeScale(2).reverse()
      }
    }
  }, [modalState])
  
  useEffect(() => {
    setFirstRender(true)
    openModal = gsap.timeline({paused: true})
    createMail = gsap.timeline({paused: true})
    sendMail = gsap.timeline({paused: true})
    failMail = gsap.timeline({paused: true})
    stampSpin = gsap.timeline({paused: true, repeat: -1})

    openModal.to(contactRef.current, 0.1, {
       css: { width: '2px', display: 'block'}
    }).to(contactRef.current, 0.3, {
      css: { height: '416px' }
    }).to(contactRef.current, 1, {
      css: { width: '450px' },
      ease: Back.easeOut
    }).to(contentRef.current, 0.7, {
      css: { opacity: 1 },
      ease: Power4.easeIn,
      delay: -0.7
    })

    createMail.to(contentRef.current, 0.4, {
      css: { opacity: 0 }
    }).to(contactRef.current, 1, {
      css: { width: '200px', height: '130px' },
      ease: Power4.easeOut
    }).to(letterRef.current, 0.3, {
      css: { display: 'block', opacity: 1 },
      delay: -0.2, 
      onComplete: () => {
        stampSpin.play()
      }
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
      css: { height: '460px' },
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

  const closeModal = () => {
    modalDispatch({ type: 'TOGGLE_CONTACT_MODAL' })
  }

  const submitForm = (e) => {
    e.preventDefault()
    createMail.play()

    emailjs.send('gmail', 'template_xPjfRU9R', {email: email, message: message}, process.env.GATSBY_EMAILJS_USER_ID )
    .then(function() {
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
    <div ref={contactRef} className={`${styles.contact} ${theme ? styles.contactLight : styles.contactDark}`}>
      <div ref={letterRef} className={styles.letter}>
        <div className={styles.iconStamp}>
          <IconStamp stampRef={stampRef}/>
        </div>
        <p className={styles.letterName}>Nikolas Dalton</p>
      </div>
      <div ref={contentRef} className={styles.content}>
        <div onClick={closeModal} className={styles.iconClose}>
          <IconClose />
        </div>
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
  )
}
