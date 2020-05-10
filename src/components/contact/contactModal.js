import React, { useEffect, useRef, useContext, useState } from 'react'
import styles from './contact.module.scss'
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

const IconEmail = () => {
  return (
    <svg viewBox="0 0 40 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fillRule="nonzero">
        <g transform="translate(-313.000000, -2635.000000)" >
          <g transform="translate(313.000000, 2630.000000)">
            <g transform="translate(0.000000, 5.000000)">
              <path d="M0.83337232,2.4340625 C6.31251462,7.08335937 15.9267057,15.2628906 18.7524366,17.8132812 C19.1317739,18.1575 19.5386355,18.3325 19.9610136,18.3325 C20.3825341,18.3325 20.788694,18.1591406 21.1671735,17.8165625 C23.9953216,15.2636719 33.6095127,7.08335938 39.0887329,2.4340625 C39.4298635,2.14515625 39.4818713,1.63734375 39.205692,1.28414063 C38.5672515,0.46796875 37.6153606,0 36.5951657,0 L3.3268616,0 C2.30674464,0 1.35477583,0.46796875 0.716413255,1.28421875 C0.440233918,1.63734375 0.492241715,2.14515625 0.83337232,2.4340625 Z" id="Path"/>
              <path d="M39.4396101,4.95359375 C39.1447953,4.81609375 38.7979727,4.8640625 38.5526706,5.0740625 C34.9642885,8.12171875 30.2364133,12.1484375 26.6707992,15.2213281 C26.4831969,15.3825 26.3776218,15.6192969 26.3816764,15.8675 C26.385731,16.1149219 26.5002729,16.3484375 26.6935673,16.5030469 C30.0066277,19.1617188 34.9992982,22.8189844 38.6046784,25.4182813 C38.74846,25.5224219 38.9189864,25.5753125 39.0903704,25.5753125 C39.2203509,25.5753125 39.3502534,25.5452344 39.4697076,25.4833594 C39.7475244,25.3409375 39.9221053,25.0544531 39.9221053,24.7419531 L39.9221053,5.70960938 C39.9220273,5.38492187 39.7335673,5.08953125 39.4396101,4.95359375 Z" id="Path"/>
              <path d="M1.3174269,25.4182812 C4.92366472,22.8189844 9.91719298,19.1617969 13.2293957,16.5030469 C13.4226901,16.3484375 13.537232,16.1148437 13.5412865,15.8675 C13.5453411,15.6192969 13.4397661,15.3825 13.2521637,15.2213281 C9.68647173,12.1484375 4.95773879,8.12171875 1.3694347,5.0740625 C1.12249513,4.8640625 0.774892788,4.81773437 0.482495127,4.95359375 C0.188460039,5.08953125 0,5.38492187 0,5.70960937 L0,24.7420312 C0,25.0545312 0.174658869,25.3410156 0.452397661,25.4834375 C0.571773879,25.5453125 0.701754386,25.5753906 0.831734893,25.5753906 C1.00311891,25.5753906 1.17364522,25.5225 1.3174269,25.4182812 Z" id="Path"/>
              <path d="M38.9026901,27.6855469 C35.4207407,25.1896094 29.0066277,20.5363281 25.1778558,17.4226562 C24.8659649,17.1679687 24.414347,17.1760937 24.1073684,17.4414062 C23.3561014,18.098125 22.7274074,18.6515625 22.2814815,19.0535156 C20.9120468,20.2921094 19.011462,20.2921094 17.6388304,19.051875 C17.1945419,18.6507031 16.5659259,18.095625 15.8145809,17.4413281 C15.5100195,17.174375 15.0576218,17.16625 14.7448733,17.4225781 C10.9290448,20.525625 4.50768031,25.1846094 1.02003899,27.6854687 C0.82588694,27.8254687 0.700818713,28.0410937 0.676491228,28.2795312 C0.65294347,28.5179687 0.731695906,28.7547656 0.89497076,28.9305469 C1.52452242,29.6101562 2.41146199,30 3.3268616,30 L36.5952437,30 C37.5106433,30 38.3967251,29.6101562 39.0278363,28.930625 C39.1902534,28.755625 39.2698635,28.5188281 39.2463158,28.2803906 C39.2219103,28.0420312 39.0968421,27.8255469 38.9026901,27.6855469 Z" id="Path"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

const IconLinkedin = () => {
  return (
    <svg viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fillRule="nonzero">
        <g transform="translate(-648.000000, -2630.000000)" >
          <g transform="translate(313.000000, 2630.000000)">
            <g transform="translate(335.000000, 0.000000)">
              <path d="M20,0 C8.95599367,0 0,8.95599367 0,20 C0,31.0440063 8.95599367,40 20,40 C31.0440063,40 40,31.0440063 40,20 C40,8.95599367 31.0440063,0 20,0 Z M14.1882324,30.234375 L9.3173218,30.234375 L9.3173218,15.5801391 L14.1882324,15.5801391 L14.1882324,30.234375 Z M11.7529297,13.5791016 L11.7211914,13.5791016 C10.0866699,13.5791016 9.02954102,12.4539184 9.02954102,11.0476684 C9.02954102,9.60968016 10.1190186,8.515625 11.7852783,8.515625 C13.4515381,8.515625 14.4769287,9.60968016 14.508667,11.0476684 C14.508667,12.4539184 13.4515381,13.5791016 11.7529297,13.5791016 Z M31.751709,30.234375 L26.8814087,30.234375 L26.8814087,22.3947144 C26.8814087,20.4244995 26.1761475,19.0808105 24.4137573,19.0808105 C23.0682373,19.0808105 22.2668457,19.9871827 21.9146728,20.8621216 C21.7858887,21.175232 21.7544555,21.612854 21.7544555,22.0507812 L21.7544555,30.234375 L16.8838501,30.234375 C16.8838501,30.234375 16.9476319,16.9549561 16.8838501,15.5801391 L21.7544555,15.5801391 L21.7544555,17.6550293 C22.4017334,16.6564941 23.5598755,15.2362061 26.144104,15.2362061 C29.3487548,15.2362061 31.751709,17.3306274 31.751709,21.831665 L31.751709,30.234375 Z" id="Shape"/>
            </g>
          </g>
        </g>
      </g>
    </svg>

  )
}

const IconClose = () => {
  return (
    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M1,1 L19,19"/>
      <path d="M19,1 L1,19"/>
    </svg>
  )
}

const IconStamp = ({stampRef}) => {
  return (
    <svg ref={stampRef} viewBox="0 0 77 91" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M43,90 L34,90 C34,86.6666667 32.6666667,85 30,85 C27.3333333,85 26,86.6666667 26,90 L19,90 C18.3333333,86.6666667 16.6666667,85 14,85 C11.3333333,85 9.66666667,86.6666667 9,90 L1,90 L1,83 C4.33333333,83 6,81.6666667 6,79 C6,76.3333333 4.33333333,75 1,75 L1,66 C4.33333333,66 6,64.6666667 6,62 C6,59.3333333 4.33333333,58 1,58 L1,50 C4.33333333,50 6,48.5 6,45.5 C6,42.5 4.33333333,41 1,41 L1,33 C4.33333333,33 6,31.6666667 6,29 C6,26.3333333 4.33333333,25 1,25 L1,17 C4.33333333,17 6,15.6666667 6,13 C6,10.3333333 4.33333333,9 1,9 L1,1 L10,1 C10,4.33333333 11.3333333,6 14,6 C16.6666667,6 18,4.33333333 18,1 L26,1 C26,4.33333333 27.3333333,6 30,6 C32.6666667,6 34,4.33333333 34,1 L43,1 C43,4.33333333 44.3333333,6 47,6 C49.6666667,6 51,4.33333333 51,1 L59,1 C59,4.33333333 60.3333333,6 63,6 C65.6666667,6 67,4.33333333 67,1 L76,1 L76,9 C72.6666667,9 71,10.3333333 71,13 C71,15.6666667 72.6666667,17 76,17 L76,25 C72.6666667,25 71,26.3333333 71,29 C71,31.6666667 72.6666667,33 76,33 L76,41 C72.6666667,41 71,42.5 71,45.5 C71,48.5 72.6666667,50 76,50 L76,58 C72.6666667,58 71,59.3333333 71,62 C71,64.6666667 72.6666667,66 76,66 L76,75 C72.6666667,75 71,76.3333333 71,79 C71,81.6666667 72.6666667,83 76,83 L76,90 L68,90 C67.3333333,86.6666667 65.6666667,85 63,85 C60.3333333,85 58.6666667,86.6666667 58,90 L51,90 C51,86.6666667 49.6666667,85 47,85 C44.3333333,85 43,86.6666667 43,90 Z"></path>
    </svg>
  )
}