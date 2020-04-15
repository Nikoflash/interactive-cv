import React, {useRef} from 'react'
import styles from "./personal.module.scss"
import {TimelineMax, Power1, Power3} from "gsap/TweenMax";

export default ({handleClick}) => {

  const ptlRef = useRef(null)
  const ptrRef = useRef(null)
  const pbrRef = useRef(null)
  const pblRef = useRef(null)

  const ptlAnimRef = useRef(null);
  const ptrAnimRef = useRef(null);
  const pbrAnimRef = useRef(null);
  const pblAnimRef = useRef(null);

  const ptlAnimRef2 = useRef(null);
  const ptrAnimRef2 = useRef(null);
  const pbrAnimRef2 = useRef(null);
  const pblAnimRef2 = useRef(null);

  const pos = {
    ptlx: 0,
    ptly: 0,
    ptrx: 418,
    ptry: 0,
    pbrx: 418,
    pbry: 110,
    pblx: 0,
    pbly: 110
  }
  
  const mouseEnter = () => {        
    ptlAnimRef.current = new TimelineMax().to(ptlRef.current, 0.5, {x: 220, y: 66, ease: Power3.easeOut})
    ptrAnimRef.current = new TimelineMax().to(ptrRef.current, 0.5, {x: 220, y: 66, ease: Power3.easeOut})
    pbrAnimRef.current = new TimelineMax().to(pbrRef.current, 0.5, {x: 220, y: 66, ease: Power3.easeOut})
    pblAnimRef.current = new TimelineMax().to(pblRef.current, 0.5, {x: 220, y: 66, ease: Power3.easeOut})
  }

  const mouseLeave = () => {    
    ptlAnimRef2.current = new TimelineMax().to(ptlRef.current, 0.5, {x: 0, y: 0, ease: Power1.easeOut})
    ptrAnimRef2.current = new TimelineMax().to(ptrRef.current, 0.5, {x: 418, y: 0, ease: Power1.easeOut})
    pbrAnimRef2.current = new TimelineMax().to(pbrRef.current, 0.5, {x: 418, y: 110, ease: Power1.easeOut})
    pblAnimRef2.current = new TimelineMax().to(pblRef.current, 0.5, {x: 0, y: 110, ease: Power1.easeOut})
  }

  return (
    <div id="pn" className={styles.personalContainer}>
      <svg className={`svg-personal ${styles.personal}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} viewBox="0 0 1164 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <PersonalTopLeft ptlRef={ptlRef} pos={pos} />
          <PersonalTopRight ptrRef={ptrRef} pos={pos} />
          <PersonalBottomRight pbrRef={pbrRef} pos={pos} />
          <PersonalBottomLeft pblRef={pblRef} pos={pos} />
          <rect id="personalButton" className={styles.button} x="0" y="0" width="100%" height="100%" onClick={handleClick} />
        </g>
      </svg>
    </div>
  )
}

const PersonalTopLeft = ({ptlRef,pos}) => {
  return (
    <g ref={ptlRef} id="personal-top-left" transform={`translate(${pos.ptlx}, ${pos.ptly})`}>
      <rect x="22" y="44" width="20" height="20" rx="4"></rect>
      <rect x="0" y="88" width="20" height="20" rx="4"></rect>
      <rect x="0" y="44" width="20" height="20" rx="4"></rect>
      <rect x="88" y="66" width="20" height="20" rx="4"></rect>
      <rect x="132" y="0" width="20" height="20" rx="4"></rect>
      <rect x="198" y="0" width="20" height="20" rx="4"></rect>
      <rect x="242" y="22" width="20" height="20" rx="4"></rect>
      <rect x="176" y="66" width="20" height="20" rx="4"></rect>
      <rect x="330" y="0" width="20" height="20" rx="4"></rect>
      <rect x="418" y="0" width="20" height="20" rx="4"></rect>
      <rect x="440" y="66" width="20" height="20" rx="4"></rect>
      <rect x="484" y="66" width="20" height="20" rx="4"></rect>
      <rect x="528" y="44" width="20" height="20" rx="4"></rect>
      <rect x="550" y="22" width="20" height="20" rx="4"></rect>
      <rect x="660" y="0" width="20" height="20" rx="4"></rect>
      <rect x="638" y="44" width="20" height="20" rx="4"></rect>
      <rect x="594" y="66" width="20" height="20" rx="4"></rect>
      <rect x="748" y="88" width="20" height="20" rx="4"></rect>
      <rect x="308" y="44" width="20" height="20" rx="4"></rect>
      <rect x="308" y="88" width="20" height="20" rx="4"></rect>
    </g>
  )
}

const PersonalTopRight = ({ptrRef, pos}) => {
  return (
    <g ref={ptrRef} id="personal-top-right" transform={`translate(${pos.ptrx}, ${pos.ptry})`}>
      <rect x="44" y="44" width="20" height="20" rx="4"></rect>
      <rect x="0" y="0" width="20" height="20" rx="4"></rect>
      <rect x="88" y="22" width="20" height="20" rx="4"></rect>
      <rect x="220" y="0" width="20" height="20" rx="4"></rect>
      <rect x="308" y="0" width="20" height="20" rx="4"></rect>
      <rect x="330" y="44" width="20" height="20" rx="4"></rect>
      <rect x="374" y="66" width="20" height="20" rx="4"></rect>
      <rect x="396" y="0" width="20" height="20" rx="4"></rect>
      <rect x="440" y="22" width="20" height="20" rx="4"></rect>
      <rect x="176" y="88" width="20" height="20" rx="4"></rect>
      <rect x="484" y="44" width="20" height="20" rx="4"></rect>
      <rect x="484" y="22" width="20" height="20" rx="4"></rect>
      <rect x="638" y="0" width="20" height="20" rx="4"></rect>
      <rect x="594" y="88" width="20" height="20" rx="4"></rect>
      <rect x="660" y="88" width="20" height="20" rx="4"></rect>
      <rect x="660" y="66" width="20" height="20" rx="4"></rect>
      <rect x="506" y="22" width="20" height="20" rx="4"></rect>
      <rect x="704" y="22" width="20" height="20" rx="4"></rect>
      <rect x="704" y="88" width="20" height="20" rx="4"></rect>
      <rect x="176" y="44" width="20" height="20" rx="4"></rect>
      <rect x="110" y="88" width="20" height="20" rx="4"></rect>
    </g>
  )
}

const PersonalBottomRight = ({pbrRef, pos}) => {
  return (
    <g ref={pbrRef} id="personal-bottom-right" transform={`translate(${pos.pbrx}, ${pos.pbry})`}>
      <rect x="0" y="66" width="20" height="20" rx="4"></rect>
      <rect x="22" y="0" width="20" height="20" rx="4"></rect>
      <rect x="110" y="44" width="20" height="20" rx="4"></rect>
      <rect x="176" y="22" width="20" height="20" rx="4"></rect>
      <rect x="198" y="44" width="20" height="20" rx="4"></rect>
      <rect x="242" y="88" width="20" height="20" rx="4"></rect>
      <rect x="132" y="88" width="20" height="20" rx="4"></rect>
      <rect x="286" y="22" width="20" height="20" rx="4"></rect>
      <rect x="374" y="44" width="20" height="20" rx="4"></rect>
      <rect x="418" y="88" width="20" height="20" rx="4"></rect>
      <rect x="484" y="88" width="20" height="20" rx="4"></rect>
      <rect x="550" y="0" width="20" height="20" rx="4"></rect>
      <rect x="594" y="44" width="20" height="20" rx="4"></rect>
      <rect x="660" y="22" width="20" height="20" rx="4"></rect>
      <rect x="616" y="0" width="20" height="20" rx="4"></rect>
      <rect x="704" y="66" width="20" height="20" rx="4"></rect>
      <rect x="726" y="88" width="20" height="20" rx="4"></rect>
      <rect x="550" y="66" width="20" height="20" rx="4"></rect>
      <rect x="330" y="66" width="20" height="20" rx="4"></rect>
    </g>
  )
}

const PersonalBottomLeft = ({pblRef, pos}) => {
  return (
    <g ref={pblRef} id="personal-bottom-left" transform={`translate(${pos.pblx}, ${pos.pbly})`}>
      <rect x="44" y="22" width="20" height="20" rx="4"></rect>
      <rect x="110" y="0" width="20" height="20" rx="4"></rect>
      <rect x="220" y="44" width="20" height="20" rx="4"></rect>
      <rect x="176" y="0" width="20" height="20" rx="4"></rect>
      <rect x="220" y="66" width="20" height="20" rx="4"></rect>
      <rect x="286" y="44" width="20" height="20" rx="4"></rect>
      <rect x="286" y="88" width="20" height="20" rx="4"></rect>
      <rect x="396" y="88" width="20" height="20" rx="4"></rect>
      <rect x="484" y="0" width="20" height="20" rx="4"></rect>
      <rect x="550" y="44" width="20" height="20" rx="4"></rect>
      <rect x="550" y="88" width="20" height="20" rx="4"></rect>
      <rect x="616" y="44" width="20" height="20" rx="4"></rect>
      <rect x="660" y="44" width="20" height="20" rx="4"></rect>
      <rect x="704" y="44" width="20" height="20" rx="4"></rect>
      <rect x="704" y="0" width="20" height="20" rx="4"></rect>
      <rect x="594" y="22" width="20" height="20" rx="4"></rect>
      <rect x="440" y="44" width="20" height="20" rx="4"></rect>
      <rect x="374" y="22" width="20" height="20" rx="4"></rect>
      <rect x="88" y="44" width="20" height="20" rx="4"></rect>
      <rect x="0" y="22" width="20" height="20" rx="4"></rect>
    </g>
  )
}