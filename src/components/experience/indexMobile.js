import React, {useEffect} from 'react'
import styles from './experience.module.scss'
import {TweenMax, Power2} from "gsap/TweenMax"

export default ({handleTouch, pageY, scrollLength}) => {

  return (
    <div id="epre" className={styles.experience}>
      <Experience handleTouch={handleTouch} pageY={pageY} scrollLength={scrollLength} />
    </div>
  )
}

const Experience = ({handleTouch, pageY, scrollLength}) => {

  useEffect(() => {
    new TweenMax.set('#xp', { css: { opacity: 1 } });
    new TweenMax.set('#xp-e12, #xp-e22, #xp-e32, #xp-e42', { y: 74 });
    new TweenMax.set('#xp-e13, #xp-e23, #xp-e33, #xp-e43', { y: 37 });
    new TweenMax.set('#xp-x1, #xp-e11, #xp-e21,  #xp-e31, #xp-n1', { rotation: 90, transformOrigin: '0 100%' });
    new TweenMax.set('#xp-e41, #xp-x2', { rotation: -90, transformOrigin: '0 100%' });
    new TweenMax.set('#xp-p', { rotation: 53, y: '8', transformOrigin: '0 100%' });
    new TweenMax.set('#xp-r1', { rotation: -90, transformOrigin: '0 100%' });
    new TweenMax.set('#xp-n2', { rotation: -63, transformOrigin: '100% 100%' });
    new TweenMax.set('#xp-c', { rotation: -50, transformOrigin: '100% 100%' });
    new TweenMax.set('#xp-r2', { rotation: 53, transformOrigin: '0 100%' });
    new TweenMax.set('#xp-i', { rotation: 90, transformOrigin: '0 100%' });

    new TweenMax.to('#xp-e12, #xp-e22, #xp-e32, #xp-e42', 0.5, {
      y: 74-((74/scrollLength)*pageY),
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-e13, #xp-e23, #xp-e33, #xp-e43', 0.5, {
      y: 37-((37/scrollLength)*pageY),
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-x1', 0.5, {
      rotation: 90-((63/scrollLength)*pageY), 
      transformOrigin: '0 100%',
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-x2', 0.5, {
      rotation: -90+((63/scrollLength)*pageY), 
      transformOrigin: '0 100%',
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-e11, #xp-e21,  #xp-e31, #xp-n1', 0.5, {
      rotation: 90-((90/scrollLength)*pageY), 
      transformOrigin: '0 100%',
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-e41', 0.5, {
      rotation: -90+((90/scrollLength)*pageY), 
      transformOrigin: '0 100%',
      ease: Power2.easeOut,
    })
  
    new TweenMax.to('#xp-p', 0.5, {
      rotation: 53-((53/scrollLength)*pageY),
      y: '8', 
      transformOrigin: '0 100%',
      ease: Power2.easeOut
    })
    
    new TweenMax.to('#xp-r1', 0.5, {
      rotation: -90+((35/scrollLength)*pageY), 
      transformOrigin: '0 100%',
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-r2', 0.5, {
      rotation: 53-((53/scrollLength)*pageY), 
      transformOrigin: '0 100%',
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-i', 0.5, {
      rotation: 90-((90/scrollLength)*pageY), 
      transformOrigin: '0 100%',
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-n2', 0.5, {
      rotation: -63+((63/scrollLength)*pageY), 
      transformOrigin: '100% 100%',
      ease: Power2.easeOut
    })
  
    new TweenMax.to('#xp-c', 0.5, {
      rotation: -50+((50/scrollLength)*pageY), 
      transformOrigin: '100% 100%',
      ease: Power2.easeOut
    })
  }, [])

  return (
    <svg onTouchEnd={handleTouch} id="xp" className={styles.xp} viewBox="0 0 510 95" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
        <g  transform="translate(1.000000, 2.000000)" stroke="#000000" strokeWidth="3">
          <g id="E" transform="translate(0.000000, 9.000000)">
            <path d="M1,1 L41,1" id="xp-e12"></path>
            <path d="M1,41 L41,41" id="xp-e13"></path>
            <path d="M1,81 L41,81"></path>
            <path d="M1,1 L1,81" id="xp-e11"></path>
          </g>
          <g id="X" transform="translate(55.500000, 0.000000)">
            <path d="M0.5,90 L0.5,0" id="xp-x1"></path>
            <path d="M41.5,90 L41.5,0" id="xp-x2"></path>
          </g>
          <g id="P" id="xp-p" transform="translate(110.000000, 10.000000)">
            <path d="M0.485009346,35.2586419 L47.6019804,42.7413581" transform="translate(24.043495, 39.000000) scale(-1, 1) rotate(24.000000) translate(-24.043495, -39.000000) "></path>
            <path d="M0.441514487,9.25864191 L47.5584855,16.7413581" transform="translate(24.000000, 13.000000) rotate(24.000000) translate(-24.000000, -13.000000) "></path>
            <path d="M4,-4.54747351e-13 L4,80"></path>
          </g>
          <g id="E" transform="translate(165.000000, 9.000000)">
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
          <g id="I" transform="translate(277.000000, 9.000000)">
            <path id="xp-i" d="M1,0 L1,82"></path>
          </g>
          <g id="E" transform="translate(296.000000, 9.000000)">
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
          <g id="E" transform="translate(466.000000, 9.000000)">
            <path d="M1,1 L41,1" id="xp-e42"></path>
            <path d="M1,41 L41,41" id="xp-e43"></path>
            <path d="M1,81 L41,81"></path>
            <path d="M1,1 L1,81" id="xp-e41"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}