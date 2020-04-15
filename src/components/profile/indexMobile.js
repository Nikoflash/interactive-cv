import React, {useEffect, useState} from 'react'
import {TweenMax, Power2} from "gsap/TweenMax";
import styles from './profile.module.scss'
import LetterP, {pCoords, setLetterP} from './LetterP'
import LetterR, {rCoords, setLetterR} from './LetterR'
import LetterO, {oCoords, setLetterO} from './LetterO'
import LetterF, {fCoords, setLetterF} from './LetterF'
import LetterI from './LetterI'
import LetterL, {lCoords, setLetterL} from './LetterL'
import LetterE, {eCoords, setLetterE} from './LetterE'
import Slider from '../slider'

export default ({handleTouchStart, handleTouchEnd, scrollLength}) => { 

  const [pageY, setPageY] = useState(0)

  useEffect(() => {
    letterPGrow(pageY, scrollLength)
    letterRGrow(pageY, scrollLength)
    letterOGrow(pageY, scrollLength)
    letterFGrow(pageY, scrollLength)
    letterLGrow(pageY, scrollLength)
    letterEGrow(pageY, scrollLength)
  }, [pageY, scrollLength])

  return <div id="pf" className={styles.profileContainer}>
    <svg className="svg-profile" viewBox="0 0 533 132" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <LetterP transform="11,1" />
      <LetterR transform="103,1" />
      <LetterO transform="185,1" />
      <LetterF transform="267,1" />
      <LetterI transform="355,1" />
      <LetterL transform="403,1" />
      <LetterE transform="486,1" />
      <rect id="profileButton" className={styles.button} x="0" y="0" width="100%" height="100%" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} />
    </svg>
    <Slider setPageY={setPageY} scrollLength={scrollLength}/>
  </div>
}

function letterPGrow(y, l) {
  new TweenMax.to(pCoords, 0.7, {
    side1: ((44/l)*y)+15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 52-((10/l)*y), corner2X1: 0, corner2Y1: (10/l)*y, corner2X2: (-10/l)*y, corner2Y2: (10/l)*y, side3: (-24/l)*y, corner3X1: (-10/l)*y, corner3Y1: 0, corner3X2: (-10/l)*y, corner3Y2: (10/l)*y, side4: 58-((10/l)*y), corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: -15, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterP
  })
}

function letterRGrow(y, l) {
  new TweenMax.to(rCoords, 0.7, {
    side1: ((45/l)*y)+4, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 52-((10/l)*y), corner2X1: 0, corner2Y1: (10/l)*y, corner2X2: (-10/l)*y, corner2Y2: (10/l)*y, side3: (-10/l)*y, corner3X1: (-10/l)*y, corner3Y1: 0, corner3X2: (-6/l)*y, corner3Y2: (10/l)*y, side4X: (20/l)*y, side4Y: ((14/l)*y)+36, corner4X1: (3/l)*y, corner4Y1: (8/l)*y, corner4X2: (-8/l)*y, corner4Y2: (8/l)*y, corner5X1: (-8/l)*y, corner5Y1: 0, corner5X2: (-11/l)*y, corner5Y2: (-8/l)*y, side5X: (-10/l)*y, side5Y: (-24/l)*y, corner6X1: (-2/l)*y, corner6Y1: (-5/l)*y, corner6X2: (-5/l)*y, corner6Y2: (-5/l)*y, corner7X1: (-5/l)*y, corner7Y1: 0, corner7X2: (-5/l)*y, corner7Y2: (5/l)*y, side6: 22, corner8X1: 0, corner8Y1: 10, corner8X2: -10, corner8Y2: 10, side7: -4, corner9X1: -10, corner9Y1: 0, corner9X2: -10, corner9Y2: -10, side8: -110, corner10X1: 0, corner10Y1: -10, corner10X2: 10, corner10Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterR
  })
}

function letterOGrow(y, l) {
  new TweenMax.to(oCoords, 0.7, {
    side1: ((34/l)*y)+15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 110, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, side3: ((-34/l)*y)-15, corner3X1: -10, corner3Y1: 0, corner3X2: -10, corner3Y2: -10, side4: -110, corner4X1: 0, corner4Y1: -10, corner4X2: 10, corner4Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterO
  })
}

function letterFGrow(y, l) {
  new TweenMax.to(fCoords, 0.7, {
    side1: ((40/l)*y)+15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 28-((10/l)*y), corner2X1: 0, corner2Y1: (10/l)*y, corner2X2: (-10/l)*y, corner2Y2: (10/l)*y, corner3X1: (-10/l)*y, corner3Y1: 0, corner3X2: (-10/l)*y, corner3Y2: (10/l)*y, side3: 24-((20/l)*y), corner4X1: 0, corner4Y1: (10/l)*y, corner4X2: (-10/l)*y, corner4Y2: (10/l)*y, corner5X1: (-10/l)*y, corner5Y1: 0, corner5X2: (-10/l)*y, corner5Y2: (10/l)*y, side4: 58-((10/l)*y), corner6X1: 0, corner6Y1: 10, corner6X2: -10, corner6Y2: 10, side5: -15, corner7X1: -10, corner7Y1: 0, corner7X2: -10, corner7Y2: -10, side6: -110, corner8X1: 0, corner8Y1: -10, corner8X2: 10, corner8Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterF
  })
}

function letterLGrow(y, l) {
  new TweenMax.to(lCoords, 0.7, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 78, corner2X1: 0, corner2Y1: 10, corner2X2: (10/l)*y, corner2Y2: 15-((5/l)*y), side3: (15/l)*y, corner3X1: (10/l)*y, corner3Y1: 10-((10/l)*y), corner3X2: (10/l)*y, corner3Y2: 10, side4: ((5/l)*y)+7, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: ((-35/l)*y)-15, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterL
  })
}

function letterEGrow(y, l) {
  new TweenMax.to(eCoords, 0.7, {
    side1: ((21/l)*y)+15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 15-((8/l)*y), corner2X1: 0, corner2Y1: (10/l)*y, corner2X2: (-10/l)*y, corner2Y2: ((2/l)*y)+8, side3: (-4/l)*y, corner3X1: (-5/l)*y, corner3Y1: 0, corner3X2: (-5/l)*y, corner3Y2: ((2/l)*y)+3, side4: (1/l)*y, corner4X1: 0, corner4Y1: (5/l)*y, corner4X2: (5/l)*y, corner4Y2: ((2/l)*y)+3, corner5X1: (5/l)*y, corner5Y1: 0, corner5X2: (5/l)*y, corner5Y2: ((2/l)*y)+3, side5: 46-((2/l)*y), corner6X1: 0, corner6Y1: (5/l)*y, corner6X2: (-5/l)*y, corner6Y2: ((2/l)*y)+3, corner7X1: (-5/l)*y, corner7Y1: 0, corner7X2: (-5/l)*y, corner7Y2: ((2/l)*y)+3, side6: (1/l)*y, corner8X1: 0, corner8Y1: (5/l)*y, corner8X2: (5/l)*y, corner8Y2: ((2/l)*y)+3, side7: (4/l)*y, corner9X1: (10/l)*y, corner9Y1: 0, corner9X2: (10/l)*y, corner9Y2: ((2/l)*y)+8, side8: 15-((8/l)*y), corner10X1: 0, corner10Y1: 10, corner10X2: -10, corner10Y2: 10, side9: ((-21/l)*y)-15, corner11X1: -10, corner11Y1: 0, corner11X2: -10, corner11Y2: -10, side10: -110, corner12X1: 0, corner12Y1: -10, corner12X2: 10, corner12Y2: -10,
    ease: Power2.easeOut,
    onUpdate: setLetterE
  })
}
