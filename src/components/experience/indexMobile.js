import React, {useEffect} from 'react'
import styles from './experience.module.scss'
import {TweenMax, Bounce, Power2, TimelineMax} from "gsap/TweenMax"

let t1, t2, t3, t4, t5, t6, t7, t8, t9, t10 = {}

export const onEnterExperience = () => {
  t1.reverse().timeScale(4)
  t2.reverse().timeScale(2.5)
  t3.reverse().timeScale(2.5)
  t4.reverse().timeScale(2.5)
  t5.reverse().timeScale(2.5)
  t6.reverse().timeScale(2.5)
  t7.reverse().timeScale(2.5)
  t8.reverse().timeScale(2.5)
  t9.reverse().timeScale(2.5)
  t10.reverse().timeScale(2.5)
}

export const onLeaveExperience = () => {
  t1.play().timeScale(1.3)
  t2.play().timeScale(1.3)
  t3.play().timeScale(1.3)
  t4.play().timeScale(1.3)
  t5.play().timeScale(1.3)
  t6.play().timeScale(1.3)
  t7.play().timeScale(1.3)
  t8.play().timeScale(1.3)
  t9.play().timeScale(1.3)
  t10.play().timeScale(1.3)
}

export default () => {

  useEffect(() => {
    t1 = new TimelineMax({paused: true})
    t2 = new TimelineMax({paused: true})
    t3 = new TimelineMax({paused: true})
    t4 = new TimelineMax({paused: true})
    t5 = new TimelineMax({paused: true})
    t6 = new TimelineMax({paused: true})
    t7 = new TimelineMax({paused: true})
    t8 = new TimelineMax({paused: true})
    t9 = new TimelineMax({paused: true})
    t10 = new TimelineMax({paused: true})
  }, [])
  
  useEffect(() => {
    TweenMax.set('#xp-x1', { rotation: 27, transformOrigin: '0 100%' });
    TweenMax.set('#xp-x2', { rotation: -27, transformOrigin: '0 100%' });
    TweenMax.set('#xp-r1', { rotation: -55, transformOrigin: '0 100%' });
    TweenMax.set('#xp', { css: { opacity: 1 } });

    t1.to('#xp-r2', 1, {
      rotation: 18, 
      y: '8',
      transformOrigin: '0 100%',
      ease: Power2.easeIn
    }).to('#xp-r2', 1, {
      rotation: 53, 
      y: '8',
      transformOrigin: '0 100%',
      ease: Power2.easeIn,
    }).to('#xp-i', 2.5, {
      rotation: 90,
      transformOrigin: '0 100%',
      ease: Bounce.easeOut,
      delay: -1
    })

    t2.to('#xp-e12, #xp-e22, #xp-e32, #xp-e42', 1.3, {
      y: 74,
      ease: Bounce.easeOut
    })

    t3.to('#xp-e13, #xp-e23, #xp-e33, #xp-e43', 1, {
      y: 37,
      ease: Bounce.easeOut
    })

    t4.to('#xp-x1, #xp-e11, #xp-e21,  #xp-e31, #xp-n1', 1.5, {
      rotation: 90, 
      transformOrigin: '0 100%',
      ease: Bounce.easeOut,
      delay: 0.1
    })

    t5.to('#xp-e41', 1.5, {
      rotation: -90, 
      transformOrigin: '0 100%',
      ease: Bounce.easeOut,
    })

    t6.to('#xp-x2', 1, {
      rotation: -90, 
      transformOrigin: '0 100%',
      ease: Bounce.easeOut,
    })

    t7.to('#xp-p', 1.4, {
      rotation: 53,
      y: '8', 
      transformOrigin: '0 100%',
      ease: Bounce.easeOut
    })
    
    t8.to('#xp-r1', 1, {
      rotation: -90, 
      transformOrigin: '0 100%',
      ease: Bounce.easeOut
    })

    t9.to('#xp-n2', 2, {
      rotation: -63, 
      transformOrigin: '100% 100%',
      ease: Bounce.easeOut,
      delay: 0.2
    })

    t10.to('#xp-c', 1.5, {
      rotation: -50, 
      transformOrigin: '100% 100%',
      ease: Bounce.easeOut,
      delay: 0.1
    })

    t1.progress(1, false);
    t2.progress(1, false);
    t3.progress(1, false);
    t4.progress(1, false);
    t5.progress(1, false);
    t6.progress(1, false);
    t7.progress(1, false);
    t8.progress(1, false);
    t9.progress(1, false);
    t10.progress(1, false);
  }, [])

  return (
    <div id="experience" className={`svg-element ${styles.experience}`}>
      <svg id="xp" className={styles.xp} viewBox="0 0 510 95" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd" strokeLinecap="round">
          <g transform="translate(1.000000, 2.000000)" strokeWidth="3">
            <g transform="translate(0.000000, 9.000000)">
              <path d="M1,1 L41,1" id="xp-e12"></path>
              <path d="M1,41 L41,41" id="xp-e13"></path>
              <path d="M1,81 L41,81"></path>
              <path d="M1,1 L1,81" id="xp-e11"></path>
            </g>
            <g transform="translate(55.500000, 0.000000)">
              <path d="M0.5,90 L0.5,0" id="xp-x1"></path>
              <path d="M41.5,90 L41.5,0" id="xp-x2"></path>
            </g>
            <g id="xp-p" transform="translate(110.000000, 10.000000)">
              <path d="M0.485009346,35.2586419 L47.6019804,42.7413581" transform="translate(24.043495, 39.000000) scale(-1, 1) rotate(24.000000) translate(-24.043495, -39.000000) "></path>
              <path d="M0.441514487,9.25864191 L47.5584855,16.7413581" transform="translate(24.000000, 13.000000) rotate(24.000000) translate(-24.000000, -13.000000) "></path>
              <path d="M4,-4.54747351e-13 L4,80"></path>
            </g>
            <g transform="translate(165.000000, 9.000000)">
              <path d="M1,1 L41,1" id="xp-e22"></path>
              <path d="M1,41 L41,41" id="xp-e23"></path>
              <path d="M1,81 L41,81"></path>
              <path d="M1,1 L1,81" id="xp-e21"></path>
            </g>
            <g id="xp-r2" transform="translate(217.908249, 9.500000)">
              <path d="M-0.42324003,35.7586419 L46.693731,43.2413581" transform="translate(23.135245, 39.500000) scale(-1, 1) rotate(24.000000) translate(-23.135245, -39.500000) "></path>
              <path d="M-0.466734889,9.75864191 L46.6502361,17.2413581" transform="translate(23.091751, 13.500000) rotate(24.000000) translate(-23.091751, -13.500000) "></path>
              <path d="M3.09175062,0.5 L3.09175062,80.5"></path>
            </g>
            <g transform="translate(217.908249, 9.500000)">
              <path id="xp-r1" d="M42.8401331,80.5 L42.8401331,33.5"></path>
            </g>
            <g transform="translate(277.000000, 9.000000)">
              <path id="xp-i" d="M1,0 L1,82"></path>
            </g>
            <g transform="translate(296.000000, 9.000000)">
              <path d="M1,1 L41,1" id="xp-e32"></path>
              <path d="M1,41 L41,41" id="xp-e33"></path>
              <path d="M1,81 L41,81"></path>
              <path d="M1,1 L1,81" id="xp-e31"></path>
            </g>
            <g id="xp-n1" transform="translate(355.500000, 10.000000)">
              <path d="M0.5,80 L0.5,0"></path>
            </g>
            <g id="xp-n2" transform="translate(355.500000, 10.000000)">
              <path d="M0.5,1.42108547e-14 L41.5,80"></path>
              <path d="M41.5,80 L41.5,0"></path>
            </g>
            <g id="xp-c" transform="translate(413.000000, 10.000000)">
              <path d="M34,80 L0,40"></path>
              <path d="M0,40 L33.5,0"></path>
            </g>
            <g transform="translate(466.000000, 9.000000)">
              <path d="M1,1 L41,1" id="xp-e42"></path>
              <path d="M1,41 L41,41" id="xp-e43"></path>
              <path d="M1,81 L41,81"></path>
              <path d="M1,1 L1,81" id="xp-e41"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
