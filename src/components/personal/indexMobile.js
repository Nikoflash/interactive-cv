import React, {useEffect} from 'react'
import styles from './personal.module.scss'
import {TweenMax, Power3} from 'gsap/TweenMax';

export const onEnterPersonal = () => {
  personalPlay()
}

export const onLeavePersonal = () => {
  personalReverse()
}

export default () => {
  return (
    <div id="personal" className={`svg-element ${styles.personalContainer}`}>
      <svg id="pers-svg" className={`svg-personal ${styles.personal}`} viewBox="88 -3 990 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g id="ptl" transform="translate(88, 0)">
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
          <g id="ptr" transform="translate(330, 0)">
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
          <g id="pbr" transform="translate(330, 110)">
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
          <g id="pbl" transform="translate(88, 110)">
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
        </g>
      </svg>
    </div>
  )
}

function personalPlay() {
  TweenMax.to('#ptl, #ptr, #pbr, #pbl', 0.5, {
    x: 207,
    y: 66,
    ease: Power3.easeOut
  })

  // TweenMax.to('#pers-svg', 0.3, {
  //   attr:{ viewBox: '200 -3 780 220'},
  //   delay: 0.3
  // })
}

function personalReverse() {
  TweenMax.to('#ptl', 0.5, {
    x: 88,
    y: 0,
    ease: Power3.easeOut
  })
  TweenMax.to('#ptr', 0.5, {
    x: 330,
    y: 0,
    ease: Power3.easeOut
  })
  TweenMax.to('#pbl', 0.5, {
    x: 330,
    y: 110,
    ease: Power3.easeOut
  })
  TweenMax.to('#pbr', 0.5, {
    x: 88,
    y: 110,
    ease: Power3.easeOut
  })
}

const PersonalTopLeft = ({pos}) => {
  return (
    <g id="ptl" transform={`translate(${pos.ptlx}, ${pos.ptly})`}>
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

const PersonalTopRight = ({pos}) => {
  return (
    <g id="ptr" transform={`translate(${pos.ptrx}, ${pos.ptry})`}>
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

const PersonalBottomRight = ({pos}) => {
  return (
    <g id="pbr" transform={`translate(${pos.pbrx}, ${pos.pbry})`}>
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

const PersonalBottomLeft = ({pos}) => {
  return (
    <g id="pbl" transform={`translate(${pos.pblx}, ${pos.pbly})`}>
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
